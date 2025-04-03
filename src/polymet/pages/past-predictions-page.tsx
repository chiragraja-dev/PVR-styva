import React, { useState, useEffect } from "react";
import { MOVIES_DATA, Movie } from "@/polymet/data/movies-data";
import MovieListView from "@/polymet/components/movie-list-view";
import DashboardHeader from "@/polymet/components/dashboard-header";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FilterOptions } from "@/polymet/components/movie-filters";

export default function PastPredictionsPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  // Initial load of movies - only past movies
  useEffect(() => {
    setTimeout(() => {
      const today = new Date();
      const pastMovies = MOVIES_DATA.filter((movie) => {
        const movieDate = new Date(movie.debutDate);
        return movieDate <= today;
      }).sort(
        (a, b) =>
          new Date(b.debutDate).getTime() - new Date(a.debutDate).getTime(),
      );
      setMovies(pastMovies);
      setIsLoading(false);
    }, 500);
  }, []);

  // Listen for filter changes from the sidebar
  useEffect(() => {
    const handleFilterChange = (event: Event) => {
      const customEvent = event as CustomEvent<FilterOptions>;
      applyFilters(customEvent.detail);
    };

    window.addEventListener(
      "filterChange",
      handleFilterChange as EventListener,
    );

    return () => {
      window.removeEventListener(
        "filterChange",
        handleFilterChange as EventListener,
      );
    };
  }, []);

  const applyFilters = (filters: FilterOptions) => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      let filteredMovies = [...MOVIES_DATA];

      // Always filter for past movies on this page
      const today = new Date();
      filteredMovies = filteredMovies.filter((movie) => {
        const movieDate = new Date(movie.debutDate);
        return movieDate <= today;
      });

      // Apply search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        filteredMovies = filteredMovies.filter(
          (movie) =>
            movie.title.toLowerCase().includes(searchLower) ||
            movie.director.toLowerCase().includes(searchLower) ||
            movie.cast.some((actor) =>
              actor.toLowerCase().includes(searchLower),
            ),
        );
      }

      // Apply category filter
      if (filters.category.length > 0) {
        filteredMovies = filteredMovies.filter((movie) =>
          filters.category.includes(movie.category),
        );
      }

      // Apply score range filter
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.score >= filters.scoreRange[0] &&
          movie.score <= filters.scoreRange[1],
      );

      // Apply genre filter
      if (filters.genres.length > 0) {
        filteredMovies = filteredMovies.filter((movie) =>
          movie.genre.some((genre) => filters.genres.includes(genre)),
        );
      }

      // Apply language filter
      if (filters.language && filters.language.length > 0) {
        filteredMovies = filteredMovies.filter((movie) =>
          filters.language.includes(movie.language),
        );
      }

      // Apply sorting
      switch (filters.sortBy) {
        case "score-desc":
          filteredMovies.sort((a, b) => b.score - a.score);
          break;
        case "score-asc":
          filteredMovies.sort((a, b) => a.score - b.score);
          break;
        case "date-asc":
          filteredMovies.sort(
            (a, b) =>
              new Date(a.debutDate).getTime() - new Date(b.debutDate).getTime(),
          );
          break;
        case "date-desc":
          filteredMovies.sort(
            (a, b) =>
              new Date(b.debutDate).getTime() - new Date(a.debutDate).getTime(),
          );
          break;
        case "title-asc":
          filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "title-desc":
          filteredMovies.sort((a, b) => b.title.localeCompare(a.title));
          break;
      }

      // Apply tab filter
      if (activeTab !== "all") {
        switch (activeTab) {
          case "blockbusters":
            filteredMovies = filteredMovies.filter(
              (movie) =>
                movie.category === "Mega Blockbuster" ||
                movie.category === "Blockbuster",
            );
            break;
          case "hits":
            filteredMovies = filteredMovies.filter(
              (movie) => movie.category === "Hit",
            );
            break;
          case "average-below":
            filteredMovies = filteredMovies.filter(
              (movie) =>
                movie.category === "Average" ||
                movie.category === "Below Average",
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
      let filteredMovies = MOVIES_DATA.filter((movie) => {
        const movieDate = new Date(movie.debutDate);
        return movieDate <= today;
      });

      if (value !== "all") {
        switch (value) {
          case "blockbusters":
            filteredMovies = filteredMovies.filter(
              (movie) =>
                movie.category === "Mega Blockbuster" ||
                movie.category === "Blockbuster",
            );
            break;
          case "hits":
            filteredMovies = filteredMovies.filter(
              (movie) => movie.category === "Hit",
            );
            break;
          case "average-below":
            filteredMovies = filteredMovies.filter(
              (movie) =>
                movie.category === "Average" ||
                movie.category === "Below Average",
            );
            break;
        }
      }

      setMovies(filteredMovies);
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
            value="blockbusters"
            data-pol-id="3slexa"
            data-pol-file-name="past-predictions-page"
            data-pol-file-type="page"
          >
            Blockbusters
          </TabsTrigger>
          <TabsTrigger
            value="hits"
            data-pol-id="uu7bfu"
            data-pol-file-name="past-predictions-page"
            data-pol-file-type="page"
          >
            Hits
          </TabsTrigger>
          <TabsTrigger
            value="average-below"
            data-pol-id="d43ztj"
            data-pol-file-name="past-predictions-page"
            data-pol-file-type="page"
          >
            Average & Below
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <MovieListView
        movies={movies}
        isLoading={isLoading}
        data-pol-id="crqw74"
        data-pol-file-name="past-predictions-page"
        data-pol-file-type="page"
      />
    </div>
  );
}
