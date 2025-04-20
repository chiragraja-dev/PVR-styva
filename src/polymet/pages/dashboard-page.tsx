import { useState, useEffect, useMemo } from "react";

import MovieList from "@/polymet/components/movie-list";
import DashboardHeader from "@/polymet/components/dashboard-header";
// import { FilterOptions } from "@/polymet/components/movie-filters";  
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { fetchMovies } from "@/services/movieService";
import { MovieDetails } from "@/types/MovieDetails";
import { useFilterStore } from "@/store/useFilterStore";

export default function DashboardPage() {
  const [movies, setMovies] = useState<MovieDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { filters } = useFilterStore();

  // Initial load of movies - only upcoming movies
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies("Hindi");
        setMovies(Object.values(data));
      } catch (error) {
        console.error("Failed to load movies", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMovies();
  }, []);

  // Listen for filter changes from the sidebar
  // useEffect(() => {
  //   const handleFilterChange = (event: Event) => {
  //     const customEvent = event as CustomEvent<FilterOptions>;
  //     applyFilters(customEvent.detail);
  //   };

  //   window.addEventListener(
  //     "filterChange",
  //     handleFilterChange as EventListener
  //   );

  //   return () => {
  //     window.removeEventListener(
  //       "filterChange",
  //       handleFilterChange as EventListener
  //     );
  //   };
  // }, []);

  const filteredMovies = useMemo(() => {
    if (!filters) return movies;

    let result = [...movies];

    // Search (title or director)
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (movie) =>
          movie.FilmCommonName.toLowerCase().includes(searchLower) ||
          movie.Director?.toLowerCase().includes(searchLower)
        // optionally: || movie.cast.some((actor) => actor.toLowerCase().includes(searchLower))
      );
    }

    // Category
    if (filters.category?.length) {
      result = result.filter((movie) =>
        filters.category.includes(movie.classification_s6b3)
      );
    }

    // Score range
    if (filters.scoreRange?.length === 2) {
      result = result.filter(
        (movie) =>
          movie.Total_Score_s6b3 >= filters.scoreRange[0] &&
          movie.Total_Score_s6b3 <= filters.scoreRange[1]
      );
    }

    // // Genre
    // if (filters.genres?.length) {
    //   result = result.filter((movie) =>
    //     movie.filmGenre?.some((genre) => filters.genres.includes(genre))
    //   );
    // }

    // Language
    if (filters.language?.length) {
      result = result.filter((movie) =>
        filters.language.includes(movie.FilmLang)
      );
    }

    // Sorting
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case "score-desc":
          result.sort((a, b) => b.Total_Score_s6b3 - a.Total_Score_s6b3);
          break;
        case "score-asc":
          result.sort((a, b) => a.Total_Score_s6b3 - b.Total_Score_s6b3);
          break;
        case "date-asc":
          result.sort(
            (a, b) =>
              new Date(a.FilmRelDate).getTime() -
              new Date(b.FilmRelDate).getTime()
          );
          break;
        case "date-desc":
          result.sort(
            (a, b) =>
              new Date(b.FilmRelDate).getTime() -
              new Date(a.FilmRelDate).getTime()
          );
          break;
        case "title-asc":
          result.sort((a, b) =>
            a.FilmCommonName.localeCompare(b.FilmCommonName)
          );
          break;
        case "title-desc":
          result.sort((a, b) =>
            b.FilmCommonName.localeCompare(a.FilmCommonName)
          );
          break;
      }
    }

    return result;
  }, [filters, movies]);

  // const applyFilters = (filters: FilterOptions) => {
  //   setIsLoading(true);

  //   setFilters(filters);
  //   setIsLoading(false);
  // };

  return (
    <div
      className="space-y-6"
      data-pol-id="ew03fa"
      data-pol-file-name="dashboard-page"
      data-pol-file-type="page"
    >
      <DashboardHeader
        title="Upcoming Movies"
        subtitle="Manage and analyze upcoming movie releases for dynamic pricing"
        data-pol-id="7euocu"
        data-pol-file-name="dashboard-page"
        data-pol-file-type="page"
      >
        <Button
          className="flex items-center gap-2"
          data-pol-id="rjf1wo"
          data-pol-file-name="dashboard-page"
          data-pol-file-type="page"
        >
          <PlusIcon
            className="h-4 w-4"
            data-pol-id="pqxe60"
            data-pol-file-name="dashboard-page"
            data-pol-file-type="page"
          />
          Add Movie
        </Button>
      </DashboardHeader>

      <MovieList
        movies={filteredMovies}
        isLoading={isLoading}
        data-pol-id="onsy3l"
        data-pol-file-name="dashboard-page"
        data-pol-file-type="page"
      />
    </div>
  );
}
