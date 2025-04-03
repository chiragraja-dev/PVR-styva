import React from "react";
import { cn } from "@/lib/utils";

interface MovieScoreBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function MovieScoreBadge({
  score,
  size = "md",
  className,
}: MovieScoreBadgeProps) {
  // Determine color based on score
  const getScoreColor = () => {
    if (score >= 90)
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    if (score >= 75)
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300";
    if (score >= 60)
      return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
    if (score >= 40)
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
    return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
  };

  // Determine size classes
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-8 h-8 text-xs";
      case "lg":
        return "w-16 h-16 text-xl font-bold";
      case "md":
      default:
        return "w-12 h-12 text-sm font-medium";
    }
  };

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center font-semibold",
        getScoreColor(),
        getSizeClasses(),
        className,
      )}
      data-pol-id="9cydfx"
      data-pol-file-name="movie-score-badge"
      data-pol-file-type="component"
    >
      {score}
    </div>
  );
}
