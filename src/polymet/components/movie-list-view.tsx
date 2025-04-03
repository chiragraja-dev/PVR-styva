import React from "react";
import { Link } from "react-router-dom";
import { format, formatDistanceToNow, parseISO } from "date-fns";
import { Movie } from "@/polymet/data/movies-data";
import { cn } from "@/lib/utils";
import MovieScoreBadge from "@/polymet/components/movie-score-badge";
import { CalendarIcon } from "lucide-react";

interface MovieListViewProps {
  movies: Movie[];
  className?: string;
  isLoading?: boolean;
}

export default function MovieListView({
  movies,
  className,
  isLoading = false,
}: MovieListViewProps) {
  if (isLoading) {
    return (
      <div
        className={cn("space-y-2", className)}
        data-pol-id="dsjhzn"
        data-pol-file-name="movie-list-view"
        data-pol-file-type="component"
      >
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-muted rounded-lg h-[72px]"
              data-pol-id={`kbzh2d_${index}`}
              data-pol-file-name="movie-list-view"
              data-pol-file-type="component"
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
          className,
        )}
        data-pol-id="x4fpu6"
        data-pol-file-name="movie-list-view"
        data-pol-file-type="component"
      >
        <h3
          className="text-xl font-semibold mb-2"
          data-pol-id="svree2"
          data-pol-file-name="movie-list-view"
          data-pol-file-type="component"
        >
          No movies found
        </h3>
        <p
          className="text-muted-foreground"
          data-pol-id="nzd5pr"
          data-pol-file-name="movie-list-view"
          data-pol-file-type="component"
        >
          Try adjusting your filters or search criteria
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn("space-y-2", className)}
      data-pol-id="rr0jtd"
      data-pol-file-name="movie-list-view"
      data-pol-file-type="component"
    >
      {movies.map((movie, index) => {
        // Parse the debut date
        const parsedDate = parseISO(movie.debutDate);
        const formattedDate = format(parsedDate, "MMM d, yyyy");
        const timeUntilRelease = formatDistanceToNow(parsedDate, {
          addSuffix: true,
        });
        const isUpcoming = parsedDate > new Date();

        return (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="block"
            data-pol-id={`qdksl9_${index}`}
            data-pol-file-name="movie-list-view"
            data-pol-file-type="component"
          >
            <div
              className="flex items-center gap-4 p-3 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
              data-pol-id={`pnxpi0_${index}`}
              data-pol-file-name="movie-list-view"
              data-pol-file-type="component"
            >
              {/* Movie thumbnail */}
              <div
                className="relative h-16 w-12 flex-shrink-0"
                data-pol-id={`luh44p_${index}`}
                data-pol-file-name="movie-list-view"
                data-pol-file-type="component"
              >
                <img
                  src={movie.posterUrl}
                  alt={`${movie.title} poster`}
                  className="h-full w-full object-cover rounded"
                  data-pol-id={`mtqsh8_${index}`}
                  data-pol-file-name="movie-list-view"
                  data-pol-file-type="component"
                />
              </div>

              {/* Movie details */}
              <div
                className="flex-grow min-w-0"
                data-pol-id={`td20pm_${index}`}
                data-pol-file-name="movie-list-view"
                data-pol-file-type="component"
              >
                <div
                  className="flex justify-between items-start"
                  data-pol-id={`vd855o_${index}`}
                  data-pol-file-name="movie-list-view"
                  data-pol-file-type="component"
                >
                  <h3
                    className="font-medium text-base truncate pr-2"
                    data-pol-id={`6t4xz2_${index}`}
                    data-pol-file-name="movie-list-view"
                    data-pol-file-type="component"
                  >
                    {movie.title}
                  </h3>
                  <MovieScoreBadge
                    score={movie.score}
                    size="sm"
                    data-pol-id={`4qid01_${index}`}
                    data-pol-file-name="movie-list-view"
                    data-pol-file-type="component"
                  />
                </div>

                <div
                  className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1"
                  data-pol-id={`oid8xj_${index}`}
                  data-pol-file-name="movie-list-view"
                  data-pol-file-type="component"
                >
                  {/* Release date */}
                  <div
                    className="flex items-center"
                    data-pol-id={`5n69il_${index}`}
                    data-pol-file-name="movie-list-view"
                    data-pol-file-type="component"
                  >
                    <CalendarIcon
                      className="h-3.5 w-3.5 mr-1"
                      data-pol-id={`l2q42d_${index}`}
                      data-pol-file-name="movie-list-view"
                      data-pol-file-type="component"
                    />
                    <span
                      data-pol-id={`sslviz_${index}`}
                      data-pol-file-name="movie-list-view"
                      data-pol-file-type="component"
                    >
                      {formattedDate}
                    </span>
                    {isUpcoming && (
                      <span
                        className="ml-1 text-xs"
                        data-pol-id={`g4qu4j_${index}`}
                        data-pol-file-name="movie-list-view"
                        data-pol-file-type="component"
                      >
                        ({timeUntilRelease})
                      </span>
                    )}
                  </div>

                  {/* Genres */}
                  {movie.genre && movie.genre.length > 0 && (
                    <div
                      className="flex items-center gap-1"
                      data-pol-id={`yz792d_${index}`}
                      data-pol-file-name="movie-list-view"
                      data-pol-file-type="component"
                    >
                      <span
                        className="hidden sm:inline"
                        data-pol-id={`0atcm7_${index}`}
                        data-pol-file-name="movie-list-view"
                        data-pol-file-type="component"
                      >
                        {movie.genre.slice(0, 2).join(", ")}
                        {movie.genre.length > 2 && "..."}
                      </span>
                    </div>
                  )}

                  {/* Language */}
                  <div
                    className="hidden sm:block"
                    data-pol-id={`7ti2zk_${index}`}
                    data-pol-file-name="movie-list-view"
                    data-pol-file-type="component"
                  >
                    {movie.language}
                  </div>

                  {/* Category */}
                  <div
                    className="hidden md:block"
                    data-pol-id={`hrem3h_${index}`}
                    data-pol-file-name="movie-list-view"
                    data-pol-file-type="component"
                  >
                    <span
                      className={cn(
                        "px-1.5 py-0.5 rounded text-xs",
                        movie.category === "Mega Blockbuster" &&
                          "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
                        movie.category === "Blockbuster" &&
                          "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
                        movie.category === "Hit" &&
                          "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
                        movie.category === "Average" &&
                          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
                        movie.category === "Below Average" &&
                          "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
                      )}
                      data-pol-id={`lq8pl9_${index}`}
                      data-pol-file-name="movie-list-view"
                      data-pol-file-type="component"
                    >
                      {movie.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
