import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import MovieListView from "@/polymet/components/movie-list-view";
import DashboardHeader from "@/polymet/components/dashboard-header";
import { HistoricMovieDetails } from "@/types/HistoricMovieDetails";
import { fetchHistoricMovies } from "@/services/movieService";
import { useFilterStore } from "@/store/useFilterStore";
import { normalizeMovieData } from "@/lib/normalizeMovieData";
import { Loader2 } from "lucide-react";

export default function PastPredictionsPage() {
  const [allMovies, setAllMovies] = useState<HistoricMovieDetails[]>([]);
  const { filters } = useFilterStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const ITEMS_PER_PAGE = 12;
  // const PRE_RENDER_COUNT = 4;

  useEffect(() => {
    const loadPastMovies = async () => {
      try {
        setIsLoading(true);
        const language = filters.language[0] || "Hindi";
        const data = await fetchHistoricMovies(language);
        const normalizedMovies = normalizeMovieData<HistoricMovieDetails>(
          Object.values(data),
          true
        );
        const pastMovies = normalizedMovies.filter((movie) => {
          const movieDate = new Date(movie.FilmRelDate);
          return !isNaN(movieDate.getTime()) && movieDate <= new Date();
        });
        setAllMovies(pastMovies);
      } catch {
        setAllMovies([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadPastMovies();
  }, [filters.language]);

  useEffect(() => {
    setIsLoading(!isLoading);
    
  }, [filters.language]);
  

  const filteredMovies = useMemo(() => {
    let filtered = [...allMovies];

    if (filters?.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (movie) =>
          movie.FilmCommonName.toLowerCase().includes(searchLower) ||
          (movie.Director && movie.Director.toLowerCase().includes(searchLower))
      );
    }

    if (filters?.category?.length) {
      filtered = filtered.filter((movie) =>
        filters.category.some(
          (cat) => cat.toLowerCase() === movie.classification_s6b3.toLowerCase()
        )
      );
    }

    if (
      filters?.scoreRange?.length === 2 &&
      filters.scoreRange[0] != null &&
      filters.scoreRange[1] != null
    ) {
      const [minScore, maxScore] = filters.scoreRange.map(Number);
      filtered = filtered.filter((movie) => {
        const score = Number(movie.Total_Score_s6b3);
        return score >= minScore && score <= maxScore;
      });
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
            new Date(a.FilmRelDate).getTime() - new Date(b.FilmRelDate).getTime()
        );
        break;
      case "date-desc":
        filtered.sort(
          (a, b) =>
            new Date(b.FilmRelDate).getTime() - new Date(a.FilmRelDate).getTime()
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
  }, [allMovies, filters]);

  const displayedMovies = filteredMovies.slice(0, currentPage * ITEMS_PER_PAGE);
  const hasMore = displayedMovies.length < filteredMovies.length;

  const loadMoreMovies = useCallback(() => {
    if (hasMore) setCurrentPage((prev) => prev + 1);
  }, [hasMore]);

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
    [hasMore, isLoading, loadMoreMovies]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Past Movies"
        subtitle="Review and analyze previously predicted movie performances"
      />

            {isLoading && (  
        <div className="flex justify-center py-6">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
      )}
      <MovieListView
        movies={displayedMovies}
        isLoading={isLoading}
        lastItemRef={lastMovieElementRef}
        source="past"
      />
    </div>
  );
}
