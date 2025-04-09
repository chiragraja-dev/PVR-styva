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
    if (score > 90)
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 backdrop-filter backdrop-blur-md bg-opacity-20";
    if (score > 75)
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 backdrop-filter backdrop-blur-md bg-opacity-20";
    if (score > 60)
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 backdrop-filter backdrop-blur-md bg-opacity-20";
    if (score > 40)
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 backdrop-filter backdrop-blur-md bg-opacity-20";
    return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 backdrop-filter backdrop-blur-md bg-opacity-20";
  };

  // Determine size classes
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "text-xs";
      case "lg":
        return "text-xl font-bold";
      case "md":
        return "text-lg font-bold";
      default:
        return "text-sm font-medium";
    }
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center font-semibold rounded-bl-xl rounded-tr-xl",
        getScoreColor(),
        getSizeClasses(),
        className
      )}
      data-pol-id="9cydfx"
      data-pol-file-name="movie-score-badge"
      data-pol-file-type="component"
    >
      {score}
    </div>
  );
}
