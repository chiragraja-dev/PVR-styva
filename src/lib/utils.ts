import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CategoryType } from "@/polymet/components/category-badge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const categoryDisplayMap: Record<CategoryType, string> = {
  regular: "Regular",
  blockbuster: "Blockbuster",
  mega_blockbuster: "Mega Blockbuster",
  popular: "Popular",
  "Below Average": "Below Average",
};

export const getCategoryDisplayLabel = (category: CategoryType): string => {
  return categoryDisplayMap[category] || category;
};

export const getCategoryValue = (displayLabel: string): CategoryType => {
  const entry = Object.entries(categoryDisplayMap).find(
    ([, label]) => label.toLowerCase() === displayLabel.toLowerCase()
  );
  return (entry ? entry[0] : displayLabel) as CategoryType;
};
