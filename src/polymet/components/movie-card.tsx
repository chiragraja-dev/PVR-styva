import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { formatDistanceToNow, format, parseISO } from "date-fns";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

import MovieScoreBadge from "@/polymet/components/movie-score-badge";
import CategoryBadge from "@/polymet/components/category-badge";

import { CategoryType } from "@/polymet/components/category-badge";

interface MovieCardProps {
  id: string;
  title: string;
  posterUrl: string;
  debutDate: string;
  category: CategoryType;
  score: number;
  genre?: string;
  className?: string;
}

export default function MovieCard({
  id,
  title,
  // posterUrl,
  debutDate,
  category,
  score,
  // genre,
  className,
}: MovieCardProps) {
  // Parse the debut date
  const parsedDate = parseISO(debutDate);
  const formattedDate = format(parsedDate, "MMM d, yyyy");
  const timeUntilRelease = formatDistanceToNow(parsedDate, { addSuffix: true });
  const isUpcoming = parsedDate > new Date();

  return (
    <Link
      to={`/movie/${id}?language=Hindi&region=Mumbai&mode=default`}
      data-pol-id="l43v0a"
      data-pol-file-name="movie-card"
      data-pol-file-type="component"
    >
      <Card
        className={cn(
          "overflow-hidden transition-all duration-300 hover:shadow-md dark:hover:shadow-primary/5 group h-full",
          className
        )}
        data-pol-id="cgtjmv"
        data-pol-file-name="movie-card"
        data-pol-file-type="component"
      >
        <div
          className="relative aspect-[3/2] overflow-hidden"
          data-pol-id="39ewzx"
          data-pol-file-name="movie-card"
          data-pol-file-type="component"
        >
          <img
            src={
              "https://posters.movieposterdb.com/25_02/2025/3566834/l_a-minecraft-movie-movie-poster_0be81db1.jpg"
            }
            // src={posterUrl}
            alt={`${title} poster`}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            data-pol-id="38zgo3"
            data-pol-file-name="movie-card"
            data-pol-file-type="component"
          />
        </div>

        <CardContent
          className="py-4"
          data-pol-id="hi1t25"
          data-pol-file-name="movie-card"
          data-pol-file-type="component"
        >
          <div
            className="flex flex-col"
            data-pol-id="rr28oz"
            data-pol-file-name="movie-card"
            data-pol-file-type="component"
          >
            <div
              className="flex flex-col space-y-2"
              data-pol-id="3bcjk2"
              data-pol-file-name="movie-card"
              data-pol-file-type="component"
            >
              <h3
                className="font-semibold text-lg line-clamp-1"
                data-pol-id="bg2qq3"
                data-pol-file-name="movie-card"
                data-pol-file-type="component"
              >
                {title}
              </h3>

              <div className="flex items-center space-x-2">
                <MovieScoreBadge
                  score={score}
                  size="md"
                  className=""
                  data-pol-id="4tlcfa"
                  data-pol-file-name="movie-card"
                  data-pol-file-type="component"
                />
                <CategoryBadge
                  category={category}
                  data-pol-id="8bfli2"
                  data-pol-file-name="movie-card"
                  data-pol-file-type="component"
                />
              </div>
            </div>

            {/* {genre && genre.length > 0 && (
              <div
                className="flex flex-wrap gap-1"
                data-pol-id="uaku9b"
                data-pol-file-name="movie-card"
                data-pol-file-type="component"
              >
                {genre.slice(0, 2).map((g, index) => (
                  <span
                    key={g}
                    className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full"
                    data-pol-id={`1f5xbi_${index}`}
                    data-pol-file-name="movie-card"
                    data-pol-file-type="component"
                  >
                    {g}
                  </span>
                ))}
                {genre.length > 2 && (
                  <span
                    className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full"
                    data-pol-id="p189u9"
                    data-pol-file-name="movie-card"
                    data-pol-file-type="component"
                  >
                    +{genre.length - 2}
                  </span>
                )}
              </div>
            )} */}
          </div>
        </CardContent>

        <CardFooter
          className="pt-0 pb-4 flex justify-between items-center"
          data-pol-id="ev292v"
          data-pol-file-name="movie-card"
          data-pol-file-type="component"
        >
          <div
            className="flex items-center text-sm text-muted-foreground"
            data-pol-id="tws7q5"
            data-pol-file-name="movie-card"
            data-pol-file-type="component"
          >
            <CalendarIcon
              className="h-4 w-4 mr-1"
              data-pol-id="oshc8n"
              data-pol-file-name="movie-card"
              data-pol-file-type="component"
            />
            <span
              className="mr-1"
              data-pol-id="1alzm9"
              data-pol-file-name="movie-card"
              data-pol-file-type="component"
            >
              Release date:
            </span>
            <span
              data-pol-id="h9nsga"
              data-pol-file-name="movie-card"
              data-pol-file-type="component"
            >
              {formattedDate}
            </span>
          </div>
          {isUpcoming && (
            <span
              className="text-xs text-muted-foreground"
              data-pol-id="r047lc"
              data-pol-file-name="movie-card"
              data-pol-file-type="component"
            >
              {timeUntilRelease}
            </span>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
