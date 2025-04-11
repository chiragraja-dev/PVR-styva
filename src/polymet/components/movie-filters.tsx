import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  // CheckIcon,
  FilterIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type FilterOptions = {
  search: string;
  category: string[];
  scoreRange: [number, number];
  // genres: string[];
  releaseTimeframe: string;
  sortBy: string;
  language: string[];
};

interface MovieFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
  // availableGenres: string[];
  availableLanguages?: string[];
  className?: string;
  compact?: boolean;
}

const CATEGORIES = [
  "regular",
  "blockbuster",
  "mega_blockbuster",
  "popular",
  "Below Average",
];

const TIMEFRAMES = [
  { value: "all", label: "All Time" },
  { value: "past", label: "Released" },
  { value: "upcoming", label: "Upcoming" },
  { value: "next30", label: "Next 30 Days" },
  { value: "next90", label: "Next 90 Days" },
];

const SORT_OPTIONS = [
  { value: "score-desc", label: "Highest Score" },
  { value: "score-asc", label: "Lowest Score" },
  { value: "date-asc", label: "Earliest Release" },
  { value: "date-desc", label: "Latest Release" },
  { value: "title-asc", label: "Title (A-Z)" },
  { value: "title-desc", label: "Title (Z-A)" },
];

export default function MovieFilters({
  onFilterChange,
  // availableGenres,
  availableLanguages = [],
  className,
  compact = false,
}: MovieFiltersProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    search: "",
    category: [],
    scoreRange: [0, 100],
    // genres: [],
    releaseTimeframe: "all",
    sortBy: "date-desc",
    language: [],
  });

  const [activeFilterCount, setActiveFilterCount] = useState(0);

  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);

    // Count active filters
    let count = 0;
    if (updatedFilters.search) count++;
    if (updatedFilters.category.length > 0) count++;
    if (updatedFilters.scoreRange[0] > 0 || updatedFilters.scoreRange[1] < 100)
      count++;
    // if (updatedFilters.genres.length > 0) count++;
    if (updatedFilters.releaseTimeframe !== "all") count++;
    if (updatedFilters.language.length > 0) count++;
    setActiveFilterCount(count);
  };

  const resetFilters = () => {
    const defaultFilters : FilterOptions  = {
      search: "",
      category: [],
      scoreRange: [0, 100],
      // genres: [],
      releaseTimeframe: "all",
      sortBy: "date-desc",
      language: [],
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
    setActiveFilterCount(0);
  };

  const toggleCategory = (category: string) => {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter((c) => c !== category)
      : [...filters.category, category];

    handleFilterChange({ category: newCategories });
  };

  // const toggleGenre = (genre: string) => {
  //   const newGenres = filters.genres.includes(genre)
  //     ? filters.genres.filter((g) => g !== genre)
  //     : [...filters.genres, genre];

  //   handleFilterChange({ genres: newGenres });
  // };

  const toggleLanguage = (language: string) => {
    const newLanguages = filters.language.includes(language)
      ? filters.language.filter((l) => l !== language)
      : [...filters.language, language];

    handleFilterChange({ language: newLanguages });
  };

  if (compact) {
    return (
      <div
        className={cn("flex flex-col space-y-4", className)}
        data-pol-id="jef0px"
        data-pol-file-name="movie-filters"
        data-pol-file-type="component"
      >
        {/* Search Input */}
        <div
          className="relative"
          data-pol-id="kx3orb"
          data-pol-file-name="movie-filters"
          data-pol-file-type="component"
        >
          <SearchIcon
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
            data-pol-id="jz6wdl"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          />
          <Input
            placeholder="Search movies..."
            value={filters.search}
            onChange={(e) => handleFilterChange({ search: e.target.value })}
            className="pl-9"
            data-pol-id="insm3s"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          />
        </div>

        {/* Sort Dropdown */}
        <div
          className="space-y-2"
          data-pol-id="l75og8"
          data-pol-file-name="movie-filters"
          data-pol-file-type="component"
        >
          <Label
            className="text-xs"
            data-pol-id="unsbsj"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          >
            Sort by
          </Label>
          <Select
            value={filters.sortBy}
            onValueChange={(value) => handleFilterChange({ sortBy: value })}
            data-pol-id="13ed8z"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          >
            <SelectTrigger
              className="w-full"
              data-pol-id="yegxxu"
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              <SelectValue
                placeholder="Sort by"
                data-pol-id="xhawnc"
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              />
            </SelectTrigger>
            <SelectContent
              data-pol-id="qgoq3k"
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              {SORT_OPTIONS.map((option, index) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  data-pol-id={`noojzg_${index}`}
                  data-pol-file-name="movie-filters"
                  data-pol-file-type="component"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Categories */}
        <div
          className="space-y-2"
          data-pol-id="nqy18t"
          data-pol-file-name="movie-filters"
          data-pol-file-type="component"
        >
          <Label
            className="text-xs"
            data-pol-id="wtpzje"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          >
            Categories
          </Label>
          <div
            className="flex flex-wrap gap-2"
            data-pol-id="sw1jyy"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          >
            {CATEGORIES.map((category, index) => (
              <Button
                key={category}
                variant={
                  filters.category.includes(category) ? "default" : "outline"
                }
                size="sm"
                onClick={() => toggleCategory(category)}
                className="h-7 text-xs"
                data-pol-id={`9e2hg1_${index}`}
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Score Range */}
        <div
          className="space-y-2"
          data-pol-id="u5a9v2"
          data-pol-file-name="movie-filters"
          data-pol-file-type="component"
        >
          <div
            className="flex justify-between items-center"
            data-pol-id="g3u8qy"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          >
            <Label
              className="text-xs"
              data-pol-id="v67za0"
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              Score Range
            </Label>
            <span
              className="text-xs text-muted-foreground"
              data-pol-id="tz89fo"
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              {filters.scoreRange[0]} - {filters.scoreRange[1]}
            </span>
          </div>
          <Slider
            defaultValue={[0, 100]}
            value={filters.scoreRange}
            min={0}
            max={100}
            step={5}
            onValueChange={(value) =>
              handleFilterChange({ scoreRange: value as [number, number] })
            }
            data-pol-id="9cqrhg"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          />
        </div>

        {/* Genres */}
        {/* <div
          className="space-y-2"
          data-pol-id="7xhhfu"
          data-pol-file-name="movie-filters"
          data-pol-file-type="component"
        >
          <Label
            className="text-xs"
            data-pol-id="1axa2x"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          >
            Genres
          </Label>
          <div
            className="flex flex-wrap gap-2 max-h-[120px] overflow-y-auto"
            data-pol-id="9lcppc"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          >
            {availableGenres.map((genre, index) => (
              <Button
                key={genre}
                variant={filters.genres.includes(genre) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleGenre(genre)}
                className="h-7 text-xs"
                data-pol-id={`weihnr_${index}`}
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              >
                {genre}
              </Button>
            ))}
          </div>
        </div> */}

        {/* Languages */}
        {availableLanguages.length > 0 && (
          <div
            className="space-y-2"
            data-pol-id="os7ikx"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          >
            <Label
              className="text-xs"
              data-pol-id="47iy5d"
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              Languages
            </Label>
            <div
              className="flex flex-wrap gap-2 max-h-[120px] overflow-y-auto"
              data-pol-id="yrpk4p"
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              {availableLanguages.map((language, index) => (
                <Button
                  key={language}
                  variant={
                    filters.language.includes(language) ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => toggleLanguage(language)}
                  className="h-7 text-xs"
                  data-pol-id={`u967it_${index}`}
                  data-pol-file-name="movie-filters"
                  data-pol-file-type="component"
                >
                  {language}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Release Timeframe */}
        <div
          className="space-y-2"
          data-pol-id="5kb8eo"
          data-pol-file-name="movie-filters"
          data-pol-file-type="component"
        >
          <Label
            className="text-xs"
            data-pol-id="8ai0on"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          >
            Release Timeframe
          </Label>
          <Select
            value={filters.releaseTimeframe}
            onValueChange={(value) =>
              handleFilterChange({ releaseTimeframe: value })
            }
            data-pol-id="afd057"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          >
            <SelectTrigger
              data-pol-id="b288ju"
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              <SelectValue
                placeholder="Select timeframe"
                data-pol-id="f46mqj"
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              />
            </SelectTrigger>
            <SelectContent
              data-pol-id="yp3zfb"
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              {TIMEFRAMES.map((option, index) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  data-pol-id={`d8fhd4_${index}`}
                  data-pol-file-name="movie-filters"
                  data-pol-file-type="component"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {activeFilterCount > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={resetFilters}
            className="w-full mt-2"
            data-pol-id="qwvtgo"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          >
            Clear all filters
          </Button>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn("flex flex-col space-y-4", className)}
      data-pol-id="l67a85"
      data-pol-file-name="movie-filters"
      data-pol-file-type="component"
    >
      <div
        className="flex flex-col sm:flex-row gap-3"
        data-pol-id="2f550u"
        data-pol-file-name="movie-filters"
        data-pol-file-type="component"
      >
        {/* Search Input */}
        <div
          className="relative flex-grow"
          data-pol-id="8dd8v5"
          data-pol-file-name="movie-filters"
          data-pol-file-type="component"
        >
          <SearchIcon
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
            data-pol-id="eyxwmx"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          />
          <Input
            placeholder="Search movies..."
            value={filters.search}
            onChange={(e) => handleFilterChange({ search: e.target.value })}
            className="pl-9"
            data-pol-id="dnzu79"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          />
        </div>

        {/* Sort Dropdown */}
        <Select
          value={filters.sortBy}
          onValueChange={(value) => handleFilterChange({ sortBy: value })}
          data-pol-id="85t33t"
          data-pol-file-name="movie-filters"
          data-pol-file-type="component"
        >
          <SelectTrigger
            className="w-full sm:w-[180px]"
            data-pol-id="e0x8pd"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          >
            <SelectValue
              placeholder="Sort by"
              data-pol-id="sx1nub"
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            />
          </SelectTrigger>
          <SelectContent
            data-pol-id="gzrl04"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          >
            {SORT_OPTIONS.map((option, index) => (
              <SelectItem
                key={option.value}
                value={option.value}
                data-pol-id={`6va0yi_${index}`}
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Filters Popover */}
        <Popover
          data-pol-id="hk480w"
          data-pol-file-name="movie-filters"
          data-pol-file-type="component"
        >
          <PopoverTrigger
            asChild
            data-pol-id="fw6j0r"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          >
            <Button
              variant="outline"
              className="flex items-center gap-2"
              data-pol-id="wxv9ec"
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              <FilterIcon
                className="h-4 w-4"
                data-pol-id="3uydtc"
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              />
              <span
                data-pol-id="ljn7nw"
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              >
                Filters
              </span>
              {activeFilterCount > 0 && (
                <Badge
                  variant="secondary"
                  className="ml-1 h-5 w-5 p-0 flex items-center justify-center rounded-full"
                  data-pol-id="2rfogm"
                  data-pol-file-name="movie-filters"
                  data-pol-file-type="component"
                >
                  {activeFilterCount}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-[340px] p-4"
            data-pol-id="bucakh"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          >
            <div
              className="flex justify-between items-center mb-4"
              data-pol-id="2q1eir"
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              <h3
                className="font-medium"
                data-pol-id="3pyyza"
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              >
                Filter Movies
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={resetFilters}
                className="h-8 px-2"
                data-pol-id="yt00qu"
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              >
                Reset
              </Button>
            </div>

            {/* Categories */}
            <div
              className="mb-4"
              data-pol-id="eom5zw"
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              <Label
                className="text-sm font-medium mb-2 block"
                data-pol-id="9jjzr8"
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              >
                Categories
              </Label>
              <div
                className="flex flex-wrap gap-2"
                data-pol-id="y67ym9"
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              >
                {CATEGORIES.map((category, index) => (
                  <Button
                    key={category}
                    variant={
                      filters.category.includes(category)
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => toggleCategory(category)}
                    className="h-8"
                    data-pol-id={`z15w4w_${index}`}
                    data-pol-file-name="movie-filters"
                    data-pol-file-type="component"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Score Range */}
            <div
              className="mb-4"
              data-pol-id="0e1uqv"
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              <div
                className="flex justify-between items-center mb-2"
                data-pol-id="2foi5c"
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              >
                <Label
                  className="text-sm font-medium"
                  data-pol-id="3yters"
                  data-pol-file-name="movie-filters"
                  data-pol-file-type="component"
                >
                  Score Range
                </Label>
                <span
                  className="text-sm text-muted-foreground"
                  data-pol-id="awte1h"
                  data-pol-file-name="movie-filters"
                  data-pol-file-type="component"
                >
                  {filters.scoreRange[0]} - {filters.scoreRange[1]}
                </span>
              </div>
              <Slider
                defaultValue={[0, 100]}
                value={filters.scoreRange}
                min={0}
                max={100}
                step={5}
                onValueChange={(value) =>
                  handleFilterChange({ scoreRange: value as [number, number] })
                }
                className="my-4"
                data-pol-id="h4jhui"
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              />
            </div>

            {/* Genres */}
            {/* <div
              className="mb-4"
              data-pol-id="v1nihj"
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              <Label
                className="text-sm font-medium mb-2 block"
                data-pol-id="a0vk2w"
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              >
                Genres
              </Label>
              <div
                className="flex flex-wrap gap-2 max-h-[120px] overflow-y-auto"
                data-pol-id="kxatj6"
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              >
                {availableGenres.map((genre, index) => (
                  <Button
                    key={genre}
                    variant={
                      filters.genres.includes(genre) ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => toggleGenre(genre)}
                    className="h-8"
                    data-pol-id={`px67bu_${index}`}
                    data-pol-file-name="movie-filters"
                    data-pol-file-type="component"
                  >
                    {genre}
                  </Button>
                ))}
              </div>
            </div> */}

            {/* Languages */}
            {availableLanguages.length > 0 && (
              <div
                className="mb-4"
                data-pol-id="jsq9xx"
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              >
                <Label
                  className="text-sm font-medium mb-2 block"
                  data-pol-id="14edaj"
                  data-pol-file-name="movie-filters"
                  data-pol-file-type="component"
                >
                  Languages
                </Label>
                <div
                  className="flex flex-wrap gap-2 max-h-[120px] overflow-y-auto"
                  data-pol-id="9te7q8"
                  data-pol-file-name="movie-filters"
                  data-pol-file-type="component"
                >
                  {availableLanguages.map((language, index) => (
                    <Button
                      key={language}
                      variant={
                        filters.language.includes(language)
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() => toggleLanguage(language)}
                      className="h-8"
                      data-pol-id={`ma8k0x_${index}`}
                      data-pol-file-name="movie-filters"
                      data-pol-file-type="component"
                    >
                      {language}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Release Timeframe */}
            <div
              data-pol-id="be8h5s"
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              <Label
                className="text-sm font-medium mb-2 block"
                data-pol-id="p1kyys"
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              >
                Release Timeframe
              </Label>
              <Select
                value={filters.releaseTimeframe}
                onValueChange={(value) =>
                  handleFilterChange({ releaseTimeframe: value })
                }
                data-pol-id="wsjx98"
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              >
                <SelectTrigger
                  data-pol-id="4vbm63"
                  data-pol-file-name="movie-filters"
                  data-pol-file-type="component"
                >
                  <SelectValue
                    placeholder="Select timeframe"
                    data-pol-id="9dh3ej"
                    data-pol-file-name="movie-filters"
                    data-pol-file-type="component"
                  />
                </SelectTrigger>
                <SelectContent
                  data-pol-id="qzavyd"
                  data-pol-file-name="movie-filters"
                  data-pol-file-type="component"
                >
                  {TIMEFRAMES.map((option, index) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      data-pol-id={`crbnqk_${index}`}
                      data-pol-file-name="movie-filters"
                      data-pol-file-type="component"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Active Filters */}
      {activeFilterCount > 0 && (
        <div
          className="flex flex-wrap gap-2 items-center"
          data-pol-id="ajhzv2"
          data-pol-file-name="movie-filters"
          data-pol-file-type="component"
        >
          <span
            className="text-sm text-muted-foreground"
            data-pol-id="kec6i5"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          >
            Active filters:
          </span>

          {filters.category.map((category, index) => (
            <Badge
              key={category}
              variant="secondary"
              className="flex items-center gap-1"
              data-pol-id={`p1ht81_${index}`}
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              {category}
              <XIcon
                className="h-3 w-3 cursor-pointer"
                onClick={() => toggleCategory(category)}
                data-pol-id={`9056hk_${index}`}
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              />
            </Badge>
          ))}

          {/* {filters.genres.map((genre, index) => (
            <Badge
              key={genre}
              variant="secondary"
              className="flex items-center gap-1"
              data-pol-id={`1rsjna_${index}`}
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              {genre}
              <XIcon
                className="h-3 w-3 cursor-pointer"
                onClick={() => toggleGenre(genre)}
                data-pol-id={`r9xzug_${index}`}
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              />
            </Badge>
          ))} */}

          {filters.language.map((language, index) => (
            <Badge
              key={language}
              variant="secondary"
              className="flex items-center gap-1"
              data-pol-id={`e1oybl_${index}`}
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              {language}
              <XIcon
                className="h-3 w-3 cursor-pointer"
                onClick={() => toggleLanguage(language)}
                data-pol-id={`egp5o9_${index}`}
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              />
            </Badge>
          ))}

          {(filters.scoreRange[0] > 0 || filters.scoreRange[1] < 100) && (
            <Badge
              variant="secondary"
              className="flex items-center gap-1"
              data-pol-id="pfv1oi"
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              Score: {filters.scoreRange[0]}-{filters.scoreRange[1]}
              <XIcon
                className="h-3 w-3 cursor-pointer"
                onClick={() => handleFilterChange({ scoreRange: [0, 100] })}
                data-pol-id="rjhzx1"
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              />
            </Badge>
          )}

          {filters.releaseTimeframe !== "all" && (
            <Badge
              variant="secondary"
              className="flex items-center gap-1"
              data-pol-id="emhal1"
              data-pol-file-name="movie-filters"
              data-pol-file-type="component"
            >
              {
                TIMEFRAMES.find((t) => t.value === filters.releaseTimeframe)
                  ?.label
              }
              <XIcon
                className="h-3 w-3 cursor-pointer"
                onClick={() => handleFilterChange({ releaseTimeframe: "all" })}
                data-pol-id="89q3pt"
                data-pol-file-name="movie-filters"
                data-pol-file-type="component"
              />
            </Badge>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            className="h-7 px-2 text-xs"
            data-pol-id="ffpzjw"
            data-pol-file-name="movie-filters"
            data-pol-file-type="component"
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
}
