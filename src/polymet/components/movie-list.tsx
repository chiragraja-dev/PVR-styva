import React from "react";
import MovieCard from "@/polymet/components/movie-card";

import { cn } from "@/lib/utils";
import { MovieDetails } from "@/types/MovieDetails";

interface MovieListProps {
  movies: MovieDetails[];
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
      {Object.values(movies).map((movie, index) => (
        <MovieCard
          key={movie.FilmId}
          id={movie.FilmCommonName}
          title={movie.FilmCommonName}
          posterUrl={movie.posterUrl}
          debutDate={movie.FilmRelDate}
          category={movie.classification_s6b3}
          score={movie.Total_Score_s6b3}
          genre={movie.FilmGenre}
          data-pol-id={`unbxux_${index}`}
          data-pol-file-name="movie-list"
          data-pol-file-type="component"
        />
      ))}
    </div>
  );
}
