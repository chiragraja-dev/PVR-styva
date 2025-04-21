import { useState, useEffect, useRef, useCallback } from "react";

import MovieListView from "@/polymet/components/movie-list-view";
import DashboardHeader from "@/polymet/components/dashboard-header";
// import { FilterOptions } from "@/polymet/components/movie-filters";

import { HistoricMovieDetails } from "@/types/HistoricMovieDetails";
import { fetchHistoricMovies } from "@/services/movieService";
import { useFilterStore } from "@/store/useFilterStore";
import { normalizeMovieData } from "@/lib/normalizeMovieData";

export default function PastPredictionsPage() {
  const [allMovies, setAllMovies] = useState<HistoricMovieDetails[]>([]);
  const { filters } = useFilterStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const ITEMS_PER_PAGE = 12;

  useEffect(() => {
    const loadPastMovies = async () => {
      try {
        const language = filters.language[0] || "Hindi";
        const data = await fetchHistoricMovies(language);
        const normalizedMovies = normalizeMovieData(
          Object.values(data)
        ) as HistoricMovieDetails[];
        const pastMovies = normalizedMovies.filter((movie) => {
          const movieDate = new Date(movie.FilmRelDate);
          return movieDate <= new Date();
        });
        setAllMovies(pastMovies);
      } catch (error) {
        console.error("Failed to load movies", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPastMovies();
  }, [filters.language]);

  const getFilteredMovies = (): HistoricMovieDetails[] => {
    let filtered = [...allMovies];

    if (filters?.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (movie) =>
          movie.FilmCommonName.toLowerCase().includes(searchLower) ||
          movie.Director?.toLowerCase().includes(searchLower)
      );
    }

    if (filters?.category?.length) {
      filtered = filtered.filter((movie) =>
        filters.category.includes(movie.classification_s6b3)
      );
    }

    if (
      filters?.scoreRange?.length === 2 &&
      filters.scoreRange[0] != null &&
      filters.scoreRange[1] != null
    ) {
      filtered = filtered.filter(
        (movie) =>
          movie.Total_Score_s6b3 >= filters.scoreRange[0] &&
          movie.Total_Score_s6b3 <= filters.scoreRange[1]
      );
    }

    switch (filters?.sortBy) {
      case "score-desc":
        filtered.sort((a, b) => b.Total_Score_s6b3 - a.Total_Score_s6b3);
        break;
      case "score-asc":
        filtered.sort((a, b) => a.Total_Score_s6b3 - b.Total_Score_s6b3);
        break;
      case "date-asc":
        filtered.sort(
          (a, b) =>
            new Date(a.FilmRelDate).getTime() -
            new Date(b.FilmRelDate).getTime()
        );
        break;
      case "date-desc":
        filtered.sort(
          (a, b) =>
            new Date(b.FilmRelDate).getTime() -
            new Date(a.FilmRelDate).getTime()
        );
        break;
      case "title-asc":
        filtered.sort((a, b) =>
          a.FilmCommonName.localeCompare(b.FilmCommonName)
        );
        break;
      case "title-desc":
        filtered.sort((a, b) =>
          b.FilmCommonName.localeCompare(a.FilmCommonName)
        );
        break;
    }

    return filtered;
  };

  const filteredMovies = getFilteredMovies();
  const displayedMovies = filteredMovies.slice(0, currentPage * ITEMS_PER_PAGE);
  const hasMore = displayedMovies.length < filteredMovies.length;

  const loadMoreMovies = () => {
    if (hasMore) setCurrentPage((prev) => prev + 1);
  };

  const observer = useRef<IntersectionObserver | null>(null);
  const lastMovieElementRef = useCallback(
    (node: HTMLAnchorElement | null) => {
      if (!hasMore || isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMoreMovies();
        }
      });

      if (node) observer.current.observe(node);
    },
    [hasMore, isLoading, displayedMovies]
  );

  useEffect(() => {
    setCurrentPage(1); // Reset pagination when filters change
  }, [filters]);

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Past Movies"
        subtitle="Review and analyze previously predicted movie performances"
      />

      <MovieListView
        movies={displayedMovies}
        isLoading={isLoading}
        lastItemRef={lastMovieElementRef}
        source={"past"}
      />
    </div>
  );
}
