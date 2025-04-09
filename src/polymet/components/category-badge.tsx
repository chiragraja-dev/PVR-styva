import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
export type CategoryType =
  | "regular"
  | "blockbuster"
  | "mega_blockbuster"
  | "popular"
  | "Below Average";

interface CategoryBadgeProps {
  category: CategoryType;
  className?: string;
}

export default function CategoryBadge({
  category,
  className,
}: CategoryBadgeProps) {
  // Determine color based on category
  const getCategoryColor = () => {
    switch (category) {
      case "mega_blockbuster":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-900";
      case "blockbuster":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900";
      case "popular":
        return "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-900";
      case "regular":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-900";
      case "Below Average":
        return "bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-900";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-800";
    }
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        "font-medium border-none text-md capitalize",
        getCategoryColor(),
        className
      )}
      data-pol-id="q0pp2l"
      data-pol-file-name="category-badge"
      data-pol-file-type="component"
    >
      {category}
    </Badge>
  );
}
