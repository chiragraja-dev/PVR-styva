// stores/useFilterStore.ts
import { create } from "zustand";
import { FilterOptions } from "@/polymet/components/movie-filters";

interface FilterState {
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
  resetFilters: () => void;
}

const defaultFilters: FilterOptions = {
  search: "",
  category: [],
  scoreRange: [0, 100],
  releaseTimeframe: "all",
  sortBy: "date-desc",
  language: [],
};

export const useFilterStore = create<FilterState>((set) => ({
  filters: defaultFilters,
  setFilters: (filters) => {
    set({ filters });
    window.dispatchEvent(new CustomEvent("filterChange", { detail: filters }));
  },
  resetFilters: () => {
    set({ filters: defaultFilters });
    window.dispatchEvent(new CustomEvent("filterChange", { detail: defaultFilters }));
  },
}));
