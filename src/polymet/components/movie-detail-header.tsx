import React from "react";
import { CalendarIcon, Globe2Icon } from "lucide-react";
import { format, parseISO } from "date-fns";
import { cn } from "@/lib/utils";
import MovieScoreBadge from "@/polymet/components/movie-score-badge";
import CategoryBadge from "@/polymet/components/category-badge";
import { Button } from "@/components/ui/button";

interface MovieDetailHeaderProps {
  title: string;
  posterUrl: string;
  language: string;
  debutDate: string;
  score: number;
  category:
    | "Mega Blockbuster"
    | "Blockbuster"
    | "Hit"
    | "Average"
    | "Below Average";
  genre: string[];
  director: string;
  runtime: number;
  className?: string;
}

export default function MovieDetailHeader({
  title,
  posterUrl,
  language,
  debutDate,
  score,
  category,
  genre,
  director,
  runtime,
  className,
}: MovieDetailHeaderProps) {
  // Parse the debut date
  const parsedDate = parseISO(debutDate);
  const formattedDate = format(parsedDate, "MMMM d, yyyy");

  // Format runtime to hours and minutes
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const formattedRuntime = `${hours}h ${minutes}m`;

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-6 md:gap-8 items-start",
        className,
      )}
      data-pol-id="r81vzb"
      data-pol-file-name="movie-detail-header"
      data-pol-file-type="component"
    >
      {/* Movie Poster */}
      <div
        className="relative w-full max-w-[300px] mx-auto md:mx-0"
        data-pol-id="bqebqn"
        data-pol-file-name="movie-detail-header"
        data-pol-file-type="component"
      >
        <div
          className="aspect-[2/3] rounded-lg overflow-hidden shadow-lg"
          data-pol-id="5jrkcf"
          data-pol-file-name="movie-detail-header"
          data-pol-file-type="component"
        >
          <img
            src={posterUrl}
            alt={`${title} poster`}
            className="w-full h-full object-cover"
            data-pol-id="mvzh0d"
            data-pol-file-name="movie-detail-header"
            data-pol-file-type="component"
          />
        </div>
        <div
          className="absolute top-4 right-4"
          data-pol-id="10287q"
          data-pol-file-name="movie-detail-header"
          data-pol-file-type="component"
        >
          <MovieScoreBadge
            score={score}
            size="lg"
            data-pol-id="5p201n"
            data-pol-file-name="movie-detail-header"
            data-pol-file-type="component"
          />
        </div>
      </div>

      {/* Movie Info */}
      <div
        className="flex-1 space-y-4"
        data-pol-id="39xhtr"
        data-pol-file-name="movie-detail-header"
        data-pol-file-type="component"
      >
        <div
          data-pol-id="lwdewx"
          data-pol-file-name="movie-detail-header"
          data-pol-file-type="component"
        >
          <h1
            className="text-3xl md:text-4xl font-bold"
            data-pol-id="hmkkk5"
            data-pol-file-name="movie-detail-header"
            data-pol-file-type="component"
          >
            {title}
          </h1>
          <div
            className="flex flex-wrap gap-2 mt-2"
            data-pol-id="17tpna"
            data-pol-file-name="movie-detail-header"
            data-pol-file-type="component"
          >
            {genre.map((g, index) => (
              <span
                key={g}
                className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                data-pol-id={`l8qr82_${index}`}
                data-pol-file-name="movie-detail-header"
                data-pol-file-type="component"
              >
                {g}
              </span>
            ))}
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"
          data-pol-id="cylx0a"
          data-pol-file-name="movie-detail-header"
          data-pol-file-type="component"
        >
          <div
            className="flex items-center gap-2"
            data-pol-id="qujjbc"
            data-pol-file-name="movie-detail-header"
            data-pol-file-type="component"
          >
            <CalendarIcon
              className="h-4 w-4 text-muted-foreground"
              data-pol-id="sative"
              data-pol-file-name="movie-detail-header"
              data-pol-file-type="component"
            />
            <span
              data-pol-id="2rctb5"
              data-pol-file-name="movie-detail-header"
              data-pol-file-type="component"
            >
              Release Date: {formattedDate}
            </span>
          </div>
          <div
            className="flex items-center gap-2"
            data-pol-id="tp2p3r"
            data-pol-file-name="movie-detail-header"
            data-pol-file-type="component"
          >
            <Globe2Icon
              className="h-4 w-4 text-muted-foreground"
              data-pol-id="ij1j35"
              data-pol-file-name="movie-detail-header"
              data-pol-file-type="component"
            />
            <span
              data-pol-id="k4ywvt"
              data-pol-file-name="movie-detail-header"
              data-pol-file-type="component"
            >
              Language: {language}
            </span>
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"
          data-pol-id="492zs3"
          data-pol-file-name="movie-detail-header"
          data-pol-file-type="component"
        >
          <div
            data-pol-id="mlds6l"
            data-pol-file-name="movie-detail-header"
            data-pol-file-type="component"
          >
            <span
              className="text-muted-foreground"
              data-pol-id="k4v2zq"
              data-pol-file-name="movie-detail-header"
              data-pol-file-type="component"
            >
              Director:
            </span>{" "}
            <span
              className="font-medium"
              data-pol-id="rtfv7t"
              data-pol-file-name="movie-detail-header"
              data-pol-file-type="component"
            >
              {director}
            </span>
          </div>
          <div
            data-pol-id="n4eyjv"
            data-pol-file-name="movie-detail-header"
            data-pol-file-type="component"
          >
            <span
              className="text-muted-foreground"
              data-pol-id="azmgbx"
              data-pol-file-name="movie-detail-header"
              data-pol-file-type="component"
            >
              Runtime:
            </span>{" "}
            <span
              className="font-medium"
              data-pol-id="0yq1qo"
              data-pol-file-name="movie-detail-header"
              data-pol-file-type="component"
            >
              {formattedRuntime}
            </span>
          </div>
        </div>

        <div
          className="pt-2"
          data-pol-id="3oryqx"
          data-pol-file-name="movie-detail-header"
          data-pol-file-type="component"
        >
          <CategoryBadge
            category={category}
            className="text-sm"
            data-pol-id="733bwu"
            data-pol-file-name="movie-detail-header"
            data-pol-file-type="component"
          />
        </div>

        <div
          className="flex flex-wrap gap-3 pt-4"
          data-pol-id="p7wcf7"
          data-pol-file-name="movie-detail-header"
          data-pol-file-type="component"
        >
          <Button
            data-pol-id="rbc17x"
            data-pol-file-name="movie-detail-header"
            data-pol-file-type="component"
          >
            Edit Movie
          </Button>
          <Button
            variant="outline"
            data-pol-id="fvtvnt"
            data-pol-file-name="movie-detail-header"
            data-pol-file-type="component"
          >
            View Analytics
          </Button>
          <Button
            variant="outline"
            data-pol-id="6beawz"
            data-pol-file-name="movie-detail-header"
            data-pol-file-type="component"
          >
            Adjust Pricing
          </Button>
        </div>
      </div>
    </div>
  );
}
