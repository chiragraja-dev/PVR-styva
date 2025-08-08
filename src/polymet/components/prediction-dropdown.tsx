import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { postPredictionCategory } from "@/services/movieService";
import CategoryBadge, {
  CategoryType,
  postValueToBadgeValue,
} from "./category-badge";

interface PredictionDropdownProps {
  FilmCommonName: string;
}

const PredictionDropdown: React.FC<PredictionDropdownProps> = ({
  FilmCommonName,
}) => {
  const PVR_PREDICT_OPTIONS = [
    { value: "Regular", label: "Regular" },
    { value: "Popular", label: "Popular" },
    { value: "Blockbuster", label: "Blockbuster" },
    { value: "MegaBlockbuster", label: "Mega Blockbuster" },
  ];

  const handleChange = async (value: string) => {
    try {
      await postPredictionCategory(FilmCommonName, value);
    } catch {
      console.log("Failed to post category");
    }
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="">
        <SelectValue placeholder="Select Prediction" />
      </SelectTrigger>
      <SelectContent>
        {PVR_PREDICT_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            <CategoryBadge category={postValueToBadgeValue[option.value]} />
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PredictionDropdown;
