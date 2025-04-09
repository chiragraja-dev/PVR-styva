import React, { useState, useEffect, useRef, useCallback } from "react";

import MovieListView from "@/polymet/components/movie-list-view";
import DashboardHeader from "@/polymet/components/dashboard-header";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FilterOptions } from "@/polymet/components/movie-filters";

import { HistoricMovieDetails } from "@/types/HistoricMovieDetails";
import { fetchHistoricMovies } from "@/services/movieService";

export default function PastPredictionsPage() {
  const [allMovies, setAllMovies] = useState<HistoricMovieDetails[]>([]);

  const [movies, setMovies] = useState<HistoricMovieDetails[]>([]);
  const [visibleMovies, setVisibleMovies] = useState<HistoricMovieDetails[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [activeTab, setActiveTab] = useState("all");

  const ITEMS_PER_PAGE = 12;

  // Initial load of movies - only past movies
  useEffect(() => {
    const loadPastMovies = async () => {
      try {
        const data = await fetchHistoricMovies("Hindi");
        const fullMovies = Object.values(data).filter((movie) => {
          const movieDate = new Date(movie.FilmRelDate);
          return movieDate <= new Date();
        });
        setAllMovies(fullMovies);
        setMovies(fullMovies);
        setVisibleMovies(fullMovies.slice(0, ITEMS_PER_PAGE));

        setHasMore(fullMovies.length > ITEMS_PER_PAGE);
      } catch (error) {
        console.error("Failed to load movies", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPastMovies();
  }, []);

  const loadMoreMovies = () => {
    setIsFetchingMore(true);
    setTimeout(() => {
      const next = movies.slice(
        visibleMovies.length,
        visibleMovies.length + ITEMS_PER_PAGE
      );
      setVisibleMovies((prev) => [...prev, ...next]);

      if (visibleMovies.length + next.length >= movies.length) {
        setHasMore(false);
      }
      setIsFetchingMore(false);
    }, 300);
  };

  const observer = useRef<IntersectionObserver | null>(null);
  const lastMovieElementRef = useCallback(
    (node: HTMLAnchorElement | null) => {
      if (isFetchingMore || isLoading || !hasMore) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMoreMovies();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetchingMore, isLoading, hasMore, visibleMovies]
  );

  // Listen for filter changes from the sidebar
  useEffect(() => {
    const handleFilterChange = (event: Event) => {
      const customEvent = event as CustomEvent<FilterOptions>;
      applyFilters(customEvent.detail);
    };

    window.addEventListener(
      "filterChange",
      handleFilterChange as EventListener
    );

    return () => {
      window.removeEventListener(
        "filterChange",
        handleFilterChange as EventListener
      );
    };
  }, []);

  useEffect(() => {
    setVisibleMovies(movies.slice(0, ITEMS_PER_PAGE));
    setHasMore(movies.length > ITEMS_PER_PAGE);
  }, [movies]);

  const applyFilters = (filters: FilterOptions) => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      let filteredMovies = [...allMovies];

      // Always filter for past movies on this page
      const today = new Date();
      filteredMovies = filteredMovies.filter((movie) => {
        const movieDate = new Date(movie.FilmRelDate);
        return movieDate <= today;
      });

      // Apply search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        filteredMovies = filteredMovies.filter(
          (movie) =>
            movie.FilmCommonName.toLowerCase().includes(searchLower) ||
            movie.Director?.toLowerCase().includes(searchLower)
          // ||
          // movie.cast.some((actor) =>
          //   actor.toLowerCase().includes(searchLower)
          // )
        );
      }

      // Apply category filter
      if (filters.category.length > 0) {
        filteredMovies = filteredMovies.filter((movie) =>
          filters.category.includes(movie.classification_s6b3)
        );
      }

      // Apply score range filter
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.Total_Score_s6b3 >= filters.scoreRange[0] &&
          movie.Total_Score_s6b3 <= filters.scoreRange[1]
      );

      // Apply genre filter
      if (filters.genres.length > 0) {
        filteredMovies = filteredMovies.filter((movie) =>
          movie.filmGenre.some((genre) => filters.genres.includes(genre))
        );
      }

      // Apply language filter
      if (filters.language && filters.language.length > 0) {
        filteredMovies = filteredMovies.filter((movie) =>
          filters.language.includes(movie.FilmLang)
        );
      }

      // Apply sorting
      switch (filters.sortBy) {
        case "score-desc":
          filteredMovies.sort(
            (a, b) => b.Total_Score_s6b3 - a.Total_Score_s6b3
          );
          break;
        case "score-asc":
          filteredMovies.sort(
            (a, b) => a.Total_Score_s6b3 - b.Total_Score_s6b3
          );
          break;
        case "date-asc":
          filteredMovies.sort(
            (a, b) =>
              new Date(a.FilmRelDate).getTime() -
              new Date(b.FilmRelDate).getTime()
          );
          break;
        case "date-desc":
          filteredMovies.sort(
            (a, b) =>
              new Date(b.FilmRelDate).getTime() -
              new Date(a.FilmRelDate).getTime()
          );
          break;
        case "title-asc":
          filteredMovies.sort((a, b) =>
            a.FilmCommonName.localeCompare(b.FilmCommonName)
          );
          break;
        case "title-desc":
          filteredMovies.sort((a, b) =>
            b.FilmCommonName.localeCompare(a.FilmCommonName)
          );
          break;
      }

      // Apply tab filter
      if (activeTab !== "all") {
        switch (activeTab) {
          case "blockbuster":
            filteredMovies = filteredMovies.filter(
              (movie) =>
                movie.classification_s6b3 === "mega_blockbuster" ||
                movie.classification_s6b3 === "blockbuster"
            );
            break;
          case "popular":
            filteredMovies = filteredMovies.filter(
              (movie) => movie.classification_s6b3 === "popular"
            );
            break;
          case "regular":
            filteredMovies = filteredMovies.filter(
              (movie) =>
                movie.classification_s6b3 === "regular" ||
                movie.classification_s6b3 === "Below Average"
            );
            break;
        }
      }

      setMovies(filteredMovies);
      setIsLoading(false);
    }, 300);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setIsLoading(true);

    setTimeout(() => {
      const today = new Date();
      let filteredMovies = allMovies.filter((movie) => {
        const movieDate = new Date(movie.FilmRelDate);
        return movieDate <= today;
      });

      if (value !== "all") {
        switch (value) {
          case "blockbuster":
            filteredMovies = filteredMovies.filter(
              (movie) =>
                movie.classification_s6b3 === "mega_blockbuster" ||
                movie.classification_s6b3 === "blockbuster"
            );
            break;
          case "popular":
            filteredMovies = filteredMovies.filter(
              (movie) => movie.classification_s6b3 === "popular"
            );
            break;
          case "regular":
            filteredMovies = filteredMovies.filter(
              (movie) =>
                movie.classification_s6b3 === "regular" ||
                movie.classification_s6b3 === "Below Average"
            );
            break;
        }
      }

      setMovies(filteredMovies);
      setVisibleMovies(filteredMovies.slice(0, ITEMS_PER_PAGE));
      setHasMore(filteredMovies.length > ITEMS_PER_PAGE);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div
      className="space-y-6"
      data-pol-id="puddyz"
      data-pol-file-name="past-predictions-page"
      data-pol-file-type="page"
    >
      <DashboardHeader
        title="Past Movies"
        subtitle="Review and analyze previously predicted movie performances"
        data-pol-id="oy0het"
        data-pol-file-name="past-predictions-page"
        data-pol-file-type="page"
      />

      <Tabs
        defaultValue="all"
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
        data-pol-id="5xcnp3"
        data-pol-file-name="past-predictions-page"
        data-pol-file-type="page"
      >
        <TabsList
          className="grid grid-cols-4 w-full max-w-md"
          data-pol-id="jcgluo"
          data-pol-file-name="past-predictions-page"
          data-pol-file-type="page"
        >
          <TabsTrigger
            value="all"
            data-pol-id="v9icac"
            data-pol-file-name="past-predictions-page"
            data-pol-file-type="page"
          >
            All Past Movies
          </TabsTrigger>
          <TabsTrigger
            value="blockbuster"
            data-pol-id="3slexa"
            data-pol-file-name="past-predictions-page"
            data-pol-file-type="page"
          >
            Blockbuster
          </TabsTrigger>
          <TabsTrigger
            value="popular"
            data-pol-id="uu7bfu"
            data-pol-file-name="past-predictions-page"
            data-pol-file-type="page"
          >
            Popular
          </TabsTrigger>
          <TabsTrigger
            value="regular"
            data-pol-id="d43ztj"
            data-pol-file-name="past-predictions-page"
            data-pol-file-type="page"
          >
            Regular
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <MovieListView
        movies={visibleMovies}
        isLoading={isLoading}
        lastItemRef={lastMovieElementRef}
        data-pol-id="crqw74"
        data-pol-file-name="past-predictions-page"
        data-pol-file-type="page"
      />
    </div>
  );
}
