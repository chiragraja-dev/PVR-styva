import React from "react";
import MovieCard from "@/polymet/components/movie-card";
import { Movie } from "@/polymet/data/movies-data";
import { cn } from "@/lib/utils";

interface MovieListProps {
  movies: Movie[];
  className?: string;
  isLoading?: boolean;
}

export default function MovieList({
  movies,
  className,
  isLoading = false,
}: MovieListProps) {
  if (isLoading) {
    return (
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
          className,
        )}
        data-pol-id="u1t16g"
        data-pol-file-name="movie-list"
        data-pol-file-type="component"
      >
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-muted rounded-lg h-[400px]"
              data-pol-id={`2jjxdu_${index}`}
              data-pol-file-name="movie-list"
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
        data-pol-id="g92wus"
        data-pol-file-name="movie-list"
        data-pol-file-type="component"
      >
        <h3
          className="text-xl font-semibold mb-2"
          data-pol-id="vdp8gm"
          data-pol-file-name="movie-list"
          data-pol-file-type="component"
        >
          No movies found
        </h3>
        <p
          className="text-muted-foreground"
          data-pol-id="cgq4wm"
          data-pol-file-name="movie-list"
          data-pol-file-type="component"
        >
          Try adjusting your filters or search criteria
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
        className,
      )}
      data-pol-id="xzz1lx"
      data-pol-file-name="movie-list"
      data-pol-file-type="component"
    >
      {movies.map((movie, index) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterUrl={movie.posterUrl}
          debutDate={movie.debutDate}
          category={movie.category}
          score={movie.score}
          genre={movie.genre}
          data-pol-id={`unbxux_${index}`}
          data-pol-file-name="movie-list"
          data-pol-file-type="component"
        />
      ))}
    </div>
  );
}
