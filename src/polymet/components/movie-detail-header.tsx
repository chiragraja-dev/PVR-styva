// import { CalendarIcon, Globe2Icon } from "lucide-react";
// import { format, parseISO } from "date-fns";
import { cn } from "@/lib/utils";
import MovieScoreBadge from "@/polymet/components/movie-score-badge";
import CategoryBadge from "@/polymet/components/category-badge";
// import { Button } from "@/components/ui/button";

import { CategoryType } from "@/polymet/components/category-badge";
import Default from "@/assets/default.jpg";

import {
  AlertTriangle,
  Landmark,
  UserCheck,
  Book,
  Gavel,
  ShieldAlert,
  Flag,
  HelpCircle,
  ActivitySquare,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MovieDetailHeaderProps {
  movie: {
    FilmCommonName: string;
    Total_Score_s6b3: number;
    classification_s6b3: CategoryType;
    filmGenre: string;
    isControversial: string;
    controversialReason: string;
    isHistoric: string;
    historicTopic: string;
    hasStereotypes: string;
    stereotypesReason: string;
    isReligious: string;
    religiousTopic: string;
    isPolitical: string;
    politicalTopic: string;
    isSensitive: string;
    sensitiveReason: string;
    isPatriotic: string;
    patrioticTopic: string;
    revenue_label: CategoryType;
  };
  movieMeta: {
    FilmStars: string;
    ProductionHouse: string | null;
    FilmRunTime: number;
    FilmPosterUrl: string | null;
  };
  className?: string;
  children?: React.ReactNode;
}

export default function MovieDetailHeader({
  movie,
  movieMeta,
  className,
  children,
}: MovieDetailHeaderProps) {
  const flags = [
    {
      label: "Controversial",
      value: movie.isControversial,
      reason: movie.controversialReason,
      icon: AlertTriangle,
      color: "text-red-500",
    },
    {
      label: "Historic",
      value: movie.isHistoric,
      reason: movie.historicTopic,
      icon: Landmark,
      color: "text-yellow-500",
    },
    {
      label: "Stereotypes",
      value: movie.hasStereotypes,
      reason: movie.stereotypesReason,
      icon: UserCheck,
      color: "text-blue-500",
    },
    {
      label: "Religious",
      value: movie.isReligious,
      reason: movie.religiousTopic,
      icon: Book,
      color: "text-purple-500",
    },
    {
      label: "Actual",
      value: (
        <CategoryBadge
          category={movie.revenue_label}
          className="text-sm"
          data-pol-id="733bwu"
          data-pol-file-name="movie-detail-header"
          data-pol-file-type="component"
        />
      ),
      reason: "The actual classification of the movie",
      icon: ActivitySquare,
      color: "text-amber-500",
    },
    {
      label: "Political",
      value: movie.isPolitical,
      reason: movie.politicalTopic,
      icon: Gavel,
      color: "text-green-500",
    },
    {
      label: "Sensitive",
      value: movie.isSensitive,
      reason: movie.sensitiveReason,
      icon: ShieldAlert,
      color: "text-orange-500",
    },
    {
      label: "Patriotic",
      value: movie.isPatriotic,
      reason: movie.patrioticTopic,
      icon: Flag,
      color: "text-indigo-500",
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-6 md:gap-8 items-start",
        className
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
          className="aspect-square rounded-lg overflow-hidden shadow-lg"
          data-pol-id="5jrkcf"
          data-pol-file-name="movie-detail-header"
          data-pol-file-type="component"
        >
          <img
            src={movieMeta.FilmPosterUrl || Default}
            alt={`${movie.FilmCommonName} poster`}
            className="w-full h-full object-cover"
            data-pol-id="mvzh0d"
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
          <div className="flex gap-x-6">
            <h1
              className="text-3xl md:text-4xl font-bold"
              data-pol-id="hmkkk5"
              data-pol-file-name="movie-detail-header"
              data-pol-file-type="component"
            >
              {movie.FilmCommonName}
            </h1>

            <div
              className="flex gap-x-2 items-center"
              data-pol-id="3oryqx"
              data-pol-file-name="movie-detail-header"
              data-pol-file-type="component"
            >
              <div
                className=""
                data-pol-id="10287q"
                data-pol-file-name="movie-detail-header"
                data-pol-file-type="component"
              >
                <MovieScoreBadge
                  score={movie.Total_Score_s6b3}
                  size="lg"
                  data-pol-id="5p201n"
                  data-pol-file-name="movie-detail-header"
                  data-pol-file-type="component"
                />
              </div>
              <CategoryBadge
                category={movie.classification_s6b3}
                className="text-sm"
                data-pol-id="733bwu"
                data-pol-file-name="movie-detail-header"
                data-pol-file-type="component"
              />
            </div>
            <div className="flex gap-2">{children}</div>
          </div>

          <div
            className="flex flex-wrap gap-2 mt-2"
            data-pol-id="17tpna"
            data-pol-file-name="movie-detail-header"
            data-pol-file-type="component"
          >
            Genre : {movie.filmGenre}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {flags.map((flag, index) => {
            const Icon = flag.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <Icon
                  className={`h-8 w-8 ${flag.color || "text-muted-foreground"}`}
                />
                <span className="font-medium text-muted-foreground text-base">
                  {flag.label}:
                </span>
                <span className="text-foreground font-semibold text-base">
                  {flag.value}
                </span>
                {flag.reason && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-5 w-5 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-muted text-gray-600 rounded px-3 py-2 max-w-xs text-base shadow-md">
                        {flag.reason}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl pt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Film Stars</span>
              <span className="text-base font-medium text-gray-800">
                {movieMeta.FilmStars || "N/A"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Production House</span>
              <span className="text-base font-medium text-gray-800">
                {movieMeta.ProductionHouse || "N/A"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Film Runtime</span>
              <span className="text-base font-medium text-gray-800">
                {movieMeta.FilmRunTime || "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
