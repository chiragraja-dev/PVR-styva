import { Link } from "react-router-dom";
import { cn, getCategoryDisplayLabel } from "@/lib/utils";
import MovieScoreBadge from "@/polymet/components/movie-score-badge";
import { HistoricMovieDetails } from "@/types/HistoricMovieDetails";
import Default from "@/assets/default.jpg";
import { useFilterStore } from "@/store/useFilterStore";
import { CategoryType } from "./category-badge";
import { Loader2 } from "lucide-react";
import { FixedSizeList as List } from "react-window";

interface MovieListViewProps {
  movies: HistoricMovieDetails[];
  className?: string;
  isLoading?: boolean;
  isFetchingMore?: boolean;
  source: string;
  lastItemRef?: (node: HTMLAnchorElement | null) => void;
}

export default function MovieListView({
  movies,
  className,
  isLoading = false,
  isFetchingMore = false,
  source,
  lastItemRef,
}: MovieListViewProps) {
  const { filters } = useFilterStore();

  // Skeleton loader
  if (isLoading) {
    return (
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 space-y-2",
          className
        )}
      >
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-muted rounded-lg h-[72px]"
            />
          ))}
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center py-12 text-center",
          className
        )}
      >
        <h3 className="text-xl font-semibold mb-2">No movies found</h3>
        <p className="text-muted-foreground">
          Try adjusting your filters or search criteria
        </p>
      </div>
    );
  }

const MovieCard = ({
  movie,
  isLast,
}: {
  movie: HistoricMovieDetails;
  isLast: boolean;
}) => (
  <Link
    to={`/movie/${movie.FilmCommonName}?language=${filters.language[0]}&mode=historic`}
    key={movie.FilmId}
    className="block mb-4" // spacing between vertical cards
    ref={isLast ? lastItemRef : undefined}
  >
    <div className="flex items-center gap-4 p-3 rounded-lg border bg-card hover:bg-accent/5 transition-colors overflow-hidden">
      <div className="relative h-28 w-20 flex-shrink-0 rounded overflow-hidden">
        <img
          src={movie.FilmPosterUrl || Default}
          alt={`${movie.FilmCommonName} poster`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-grow min-w-0">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-base truncate pr-2">
            {movie.FilmCommonName}
          </h3>
          <div className="flex items-center space-x-3">
            <MovieScoreBadge score={movie.Total_Score_s6b3} size="md" />
            <div className="hidden md:block">
              <span
                className={cn(
                  "px-1.5 py-0.5 rounded text-sm",
                  movie.classification_s6b3 === "mega_blockbuster" &&
                    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
                  movie.classification_s6b3 === "blockbuster" &&
                    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
                  movie.classification_s6b3 === "popular" &&
                    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
                  movie.classification_s6b3 === "regular" &&
                    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
                  movie.classification_s6b3 === "Below Average" &&
                    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                )}
              >
                {getCategoryDisplayLabel(
                  movie.classification_s6b3 as CategoryType
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
          <div className="hidden sm:block">
            {source === "dashboard"
              ? movie.FilmLang
              : movie.original_language_name}
          </div>
        </div>
      </div>
    </div>
  </Link>
);

  const rowHeight = 120 ; // px per row
  const itemsPerRow = 3;
  const rowCount = Math.ceil(movies.length / itemsPerRow);

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const startIndex = index * itemsPerRow;
    const rowItems = movies.slice(startIndex, startIndex + itemsPerRow);

    return (
      <div style={style} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
        {rowItems.map((movie, idx) => (
          <MovieCard
            key={idx}
            movie={movie}
            isLast={startIndex + idx === movies.length - 1}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <List
        height={window.innerHeight - 200}
        itemCount={rowCount}
        itemSize={rowHeight}
        width="100%"
      >
        {Row}
      </List>
      {isFetchingMore && (
        <div className="flex justify-center py-6">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
      )}
    </>
  );
}
