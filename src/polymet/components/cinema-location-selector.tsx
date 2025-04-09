import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPinIcon } from "lucide-react";

export interface CinemaLocation {
  id: string;
  name: string;
  area: string;
  city: string;
}

interface CinemaLocationSelectorProps {
  locations: CinemaLocation[];
  selectedLocation: string | null;
  onLocationChange: (locationId: string) => void;
}

export default function CinemaLocationSelector({
  locations,
  selectedLocation,
  onLocationChange,
}: CinemaLocationSelectorProps) {
  return (
    <div
      className="space-y-2"
      data-pol-id="t3thpm"
      data-pol-file-name="cinema-location-selector"
      data-pol-file-type="component"
    >
      <label
        className="text-sm font-medium flex items-center gap-1.5"
        data-pol-id="asb0ev"
        data-pol-file-name="cinema-location-selector"
        data-pol-file-type="component"
      >
        <MapPinIcon
          className="h-4 w-4 text-muted-foreground"
          data-pol-id="eay4ht"
          data-pol-file-name="cinema-location-selector"
          data-pol-file-type="component"
        />
        Select Cinema Location
      </label>
      <Select
        value={selectedLocation || ""}
        onValueChange={onLocationChange}
        data-pol-id="2u8nw9"
        data-pol-file-name="cinema-location-selector"
        data-pol-file-type="component"
      >
        <SelectTrigger
          className="w-full"
          data-pol-id="imh0fv"
          data-pol-file-name="cinema-location-selector"
          data-pol-file-type="component"
        >
          <SelectValue
            placeholder="Select a cinema location"
            data-pol-id="m8kltw"
            data-pol-file-name="cinema-location-selector"
            data-pol-file-type="component"
          />
        </SelectTrigger>
        <SelectContent
          data-pol-id="joe9lh"
          data-pol-file-name="cinema-location-selector"
          data-pol-file-type="component"
        >
          <SelectGroup
            data-pol-id="fb0q4w"
            data-pol-file-name="cinema-location-selector"
            data-pol-file-type="component"
          >
            <SelectLabel
              data-pol-id="m72xxp"
              data-pol-file-name="cinema-location-selector"
              data-pol-file-type="component"
            >
              Available Locations
            </SelectLabel>
            {locations.map((location, index) => (
              <SelectItem
                key={location.id}
                value={location.id}
                data-pol-id={`b6ssqd_${index}`}
                data-pol-file-name="cinema-location-selector"
                data-pol-file-type="component"
              >
                <span
                  className="font-medium"
                  data-pol-id={`u76grj_${index}`}
                  data-pol-file-name="cinema-location-selector"
                  data-pol-file-type="component"
                >
                  {location.name}
                </span>
                <span
                  className="text-muted-foreground ml-2"
                  data-pol-id={`mqmqgl_${index}`}
                  data-pol-file-name="cinema-location-selector"
                  data-pol-file-type="component"
                >
                  {location.area}, {location.city}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
