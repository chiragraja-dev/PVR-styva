import { cn } from "@/lib/utils";
import { MonitorIcon } from "lucide-react";

export interface CinemaScreen {
  id: string;
  name: string;
  type: "Standard" | "Premium" | "IMAX" | "4DX";
  capacity: number;
}

interface CinemaScreenSelectorProps {
  screens: CinemaScreen[];
  selectedScreen: string | null;
  onScreenChange: (screenId: string) => void;
}

export default function CinemaScreenSelector({
  screens,
  selectedScreen,
  onScreenChange,
}: CinemaScreenSelectorProps) {
  return (
    <div
      className="space-y-2"
      data-pol-id="hodk22"
      data-pol-file-name="cinema-screen-selector"
      data-pol-file-type="component"
    >
      <label
        className="text-sm font-medium flex items-center gap-1.5"
        data-pol-id="i3cws6"
        data-pol-file-name="cinema-screen-selector"
        data-pol-file-type="component"
      >
        <MonitorIcon
          className="h-4 w-4 text-muted-foreground"
          data-pol-id="e895am"
          data-pol-file-name="cinema-screen-selector"
          data-pol-file-type="component"
        />
        Select Screen
      </label>
      <div
        className="flex flex-wrap gap-2"
        data-pol-id="quewwm"
        data-pol-file-name="cinema-screen-selector"
        data-pol-file-type="component"
      >
        {screens.map((screen, index) => (
          <button
            key={screen.id}
            onClick={() => onScreenChange(screen.id)}
            className={cn(
              "px-4 py-2 rounded-md text-sm transition-colors",
              "border border-input hover:bg-accent hover:text-accent-foreground",
              selectedScreen === screen.id
                ? "bg-primary text-primary-foreground border-primary hover:bg-primary hover:text-primary-foreground"
                : "bg-background",
            )}
            data-pol-id={`l6j7nw_${index}`}
            data-pol-file-name="cinema-screen-selector"
            data-pol-file-type="component"
          >
            <div
              className="font-medium"
              data-pol-id={`xwy6i8_${index}`}
              data-pol-file-name="cinema-screen-selector"
              data-pol-file-type="component"
            >
              {screen.name}
            </div>
            <div
              className="text-xs opacity-80"
              data-pol-id={`vdki9n_${index}`}
              data-pol-file-name="cinema-screen-selector"
              data-pol-file-type="component"
            >
              {screen.type} • {screen.capacity} seats
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
