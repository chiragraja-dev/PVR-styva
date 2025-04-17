import { useState, useEffect, useRef, useCallback } from "react";

import MovieListView from "@/polymet/components/movie-list-view";
import DashboardHeader from "@/polymet/components/dashboard-header";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FilterOptions } from "@/polymet/components/movie-filters";

import { HistoricMovieDetails } from "@/types/HistoricMovieDetails";
import { fetchHistoricMovies } from "@/services/movieService";

export default function PastPredictionsPage() {
  const [allMovies, setAllMovies] = useState<HistoricMovieDetails[]>([]);
  const [movies, setMovies] = useState<HistoricMovieDetails[]>([]);
  const [visibleMovies, setVisibleMovies] = useState<HistoricMovieDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [filters, setFilters] = useState<FilterOptions | null>(null);

  const ITEMS_PER_PAGE = 12;

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
      const next = movies.slice(visibleMovies.length, visibleMovies.length + ITEMS_PER_PAGE);
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

  useEffect(() => {
    const handleFilterChange = (event: Event) => {
      const customEvent = event as CustomEvent<FilterOptions>;
      applyFilters(customEvent.detail);
    };

    window.addEventListener("filterChange", handleFilterChange as EventListener);
    return () => window.removeEventListener("filterChange", handleFilterChange as EventListener);
  }, []);

  useEffect(() => {
    setVisibleMovies(movies.slice(0, ITEMS_PER_PAGE));
    setHasMore(movies.length > ITEMS_PER_PAGE);
  }, [movies]);

  const applyFilters = (newFilters: FilterOptions, tabValue: string = activeTab) => {
    setIsLoading(true);
    setFilters(newFilters);

    setTimeout(() => {
      let filteredMovies = [...allMovies];

      if (newFilters.search) {
        const searchLower = newFilters.search.toLowerCase();
        filteredMovies = filteredMovies.filter(
          (movie) =>
            movie.FilmCommonName.toLowerCase().includes(searchLower) ||
            movie.Director?.toLowerCase().includes(searchLower)
        );
      }

      if (newFilters.category?.length > 0) {
        filteredMovies = filteredMovies.filter((movie) =>
          newFilters.category.includes(movie.classification_s6b3)
        );
      }

      if (
        newFilters.scoreRange?.length === 2 &&
        newFilters.scoreRange[0] != null &&
        newFilters.scoreRange[1] != null
      ) {
        filteredMovies = filteredMovies.filter(
          (movie) =>
            movie.Total_Score_s6b3 >= newFilters.scoreRange[0] &&
            movie.Total_Score_s6b3 <= newFilters.scoreRange[1]
        );
      }

      if (newFilters.language?.length > 0) {
        filteredMovies = filteredMovies.filter((movie) =>
          newFilters.language.some(
            (lang) => lang.toLowerCase() === movie.FilmLang?.toLowerCase()
          )
        );
      }

      switch (newFilters.sortBy) {
        case "score-desc":
          filteredMovies.sort((a, b) => b.Total_Score_s6b3 - a.Total_Score_s6b3);
          break;
        case "score-asc":
          filteredMovies.sort((a, b) => a.Total_Score_s6b3 - b.Total_Score_s6b3);
          break;
        case "date-asc":
          filteredMovies.sort(
            (a, b) => new Date(a.FilmRelDate).getTime() - new Date(b.FilmRelDate).getTime()
          );
          break;
        case "date-desc":
          filteredMovies.sort(
            (a, b) => new Date(b.FilmRelDate).getTime() - new Date(a.FilmRelDate).getTime()
          );
          break;
        case "title-asc":
          filteredMovies.sort((a, b) => a.FilmCommonName.localeCompare(b.FilmCommonName));
          break;
        case "title-desc":
          filteredMovies.sort((a, b) => b.FilmCommonName.localeCompare(a.FilmCommonName));
          break;
      }

      // ✅ Apply tab filter
      filteredMovies = applyTabFilter(filteredMovies, tabValue);

      setMovies(filteredMovies);
      setVisibleMovies(filteredMovies.slice(0, ITEMS_PER_PAGE));
      setHasMore(filteredMovies.length > ITEMS_PER_PAGE);
      setIsLoading(false);
    }, 300);
  };

  const applyTabFilter = (movies: HistoricMovieDetails[], tab: string) => {
    if (tab === "all") return movies;

    switch (tab) {
      case "mega_blockbuster":
        return movies.filter((m) => m.classification_s6b3 === "mega_blockbuster");
      case "blockbuster":
        return movies.filter((m) => m.classification_s6b3 === "blockbuster");
      case "popular":
        return movies.filter((m) => m.classification_s6b3 === "popular");
      case "regular":
        return movies.filter(
          (m) => m.classification_s6b3 === "regular" || m.classification_s6b3 === "Below Average"
        );
      default:
        return movies;
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setIsLoading(true);

    if (filters) {
      applyFilters(filters, value);
    } else {
      const filtered = applyTabFilter(allMovies, value);
      setMovies(filtered);
      setVisibleMovies(filtered.slice(0, ITEMS_PER_PAGE));
      setHasMore(filtered.length > ITEMS_PER_PAGE);
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Past Movies"
        subtitle="Review and analyze previously predicted movie performances"
      />

      <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="all">All Past Movies</TabsTrigger>
          <TabsTrigger value="mega_blockbuster">Mega Blockbuster</TabsTrigger>
          <TabsTrigger value="blockbuster">Blockbuster</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="regular">Regular</TabsTrigger>
        </TabsList>
      </Tabs>

      <MovieListView
        movies={visibleMovies}
        isLoading={isLoading}
        lastItemRef={lastMovieElementRef}
      />
    </div>
  );
}
