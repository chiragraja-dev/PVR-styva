import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ClockIcon } from "lucide-react";

export interface ShowTiming {
  id: string;
  time: string;
  timeCategory: "Morning" | "Afternoon" | "Evening" | "Night" | "Late Night";
  format: "2D" | "3D" | "IMAX" | "4DX";
  availability: "Available" | "Fast Filling" | "Almost Full" | "Sold Out";
}

interface ShowTimingsSelectorProps {
  showTimings: ShowTiming[];
  selectedTiming: string | null;
  onTimingChange: (timingId: string) => void;
}

export default function ShowTimingsSelector({
  showTimings,
  selectedTiming,
  onTimingChange,
}: ShowTimingsSelectorProps) {
  // Group timings by category
  const groupedTimings = showTimings.reduce<Record<string, ShowTiming[]>>(
    (acc, timing) => {
      if (!acc[timing.timeCategory]) {
        acc[timing.timeCategory] = [];
      }
      acc[timing.timeCategory].push(timing);
      return acc;
    },
    {},
  );

  // Order of time categories
  const categoryOrder = [
    "Morning",
    "Afternoon",
    "Evening",
    "Night",
    "Late Night",
  ];

  // Sort the categories
  const sortedCategories = Object.keys(groupedTimings).sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b),
  );

  const getAvailabilityColor = (availability: ShowTiming["availability"]) => {
    switch (availability) {
      case "Available":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Fast Filling":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Almost Full":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
      case "Sold Out":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "";
    }
  };

  const getFormatColor = (format: ShowTiming["format"]) => {
    switch (format) {
      case "2D":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "3D":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      case "IMAX":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400";
      case "4DX":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400";
      default:
        return "";
    }
  };

  return (
    <div
      className="space-y-4"
      data-pol-id="oa2d3l"
      data-pol-file-name="show-timings-selector"
      data-pol-file-type="component"
    >
      <label
        className="text-sm font-medium flex items-center gap-1.5"
        data-pol-id="edg8cc"
        data-pol-file-name="show-timings-selector"
        data-pol-file-type="component"
      >
        <ClockIcon
          className="h-4 w-4 text-muted-foreground"
          data-pol-id="r3r4w7"
          data-pol-file-name="show-timings-selector"
          data-pol-file-type="component"
        />
        Show Timings
      </label>

      {sortedCategories.map((category, index) => (
        <div
          key={category}
          className="space-y-2"
          data-pol-id={`d6mxsb_${index}`}
          data-pol-file-name="show-timings-selector"
          data-pol-file-type="component"
        >
          <h3
            className="text-sm font-medium text-muted-foreground"
            data-pol-id={`kzb72d_${index}`}
            data-pol-file-name="show-timings-selector"
            data-pol-file-type="component"
          >
            {category}
          </h3>
          <div
            className="flex flex-wrap gap-2"
            data-pol-id={`kv4cen_${index}`}
            data-pol-file-name="show-timings-selector"
            data-pol-file-type="component"
          >
            {groupedTimings[category].map((timing, index) => (
              <button
                key={timing.id}
                onClick={() => onTimingChange(timing.id)}
                disabled={timing.availability === "Sold Out"}
                className={cn(
                  "px-3 py-2 rounded-md text-sm transition-colors relative",
                  "border border-input hover:bg-accent hover:text-accent-foreground",
                  selectedTiming === timing.id
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary hover:text-primary-foreground"
                    : "bg-background",
                  timing.availability === "Sold Out" &&
                    "opacity-50 cursor-not-allowed",
                )}
                data-pol-id={`xoyxf3_${index}`}
                data-pol-file-name="show-timings-selector"
                data-pol-file-type="component"
              >
                <div
                  className="font-medium"
                  data-pol-id={`hv8cfm_${index}`}
                  data-pol-file-name="show-timings-selector"
                  data-pol-file-type="component"
                >
                  {timing.time}
                </div>
                <div
                  className="flex gap-1 mt-1"
                  data-pol-id={`tfokma_${index}`}
                  data-pol-file-name="show-timings-selector"
                  data-pol-file-type="component"
                >
                  <Badge
                    variant="secondary"
                    className={cn(
                      "text-xs px-1 py-0",
                      getFormatColor(timing.format),
                    )}
                    data-pol-id={`aao4ee_${index}`}
                    data-pol-file-name="show-timings-selector"
                    data-pol-file-type="component"
                  >
                    {timing.format}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className={cn(
                      "text-xs px-1 py-0",
                      getAvailabilityColor(timing.availability),
                    )}
                    data-pol-id={`w5eq45_${index}`}
                    data-pol-file-name="show-timings-selector"
                    data-pol-file-type="component"
                  >
                    {timing.availability}
                  </Badge>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
