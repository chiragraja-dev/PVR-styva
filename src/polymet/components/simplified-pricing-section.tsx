import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, InfoIcon } from "lucide-react";
import { format, isWeekend } from "date-fns";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import CinemaLocationSelector, {
  CinemaLocation,
} from "@/polymet/components/cinema-location-selector";
import CinemaScreenSelector, {
  CinemaScreen,
} from "@/polymet/components/cinema-screen-selector";
import ShowTimingsSelector, {
  ShowTiming,
} from "@/polymet/components/show-timings-selector";
import SeatPricingDetails, {
  SeatPricing,
} from "@/polymet/components/seat-pricing-details";

import {
  CINEMA_LOCATIONS,
  getCinemaByLocationId,
  getShowTimingsByCinemaAndScreenId,
  getSeatPricingByCinemaScreenAndTimingId,
} from "@/polymet/data/cinema-data";

interface SimplifiedPricingSectionProps {
  movieId: string;
  className?: string;
}

export default function SimplifiedPricingSection({
  movieId,
  className,
}: SimplifiedPricingSectionProps) {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedCinemaId, setSelectedCinemaId] = useState<string | null>(null);
  const [selectedScreen, setSelectedScreen] = useState<string | null>(null);
  const [selectedTiming, setSelectedTiming] = useState<string | null>(null);
  const [screens, setScreens] = useState<CinemaScreen[]>([]);
  const [showTimings, setShowTimings] = useState<ShowTiming[]>([]);
  const [seatPricing, setSeatPricing] = useState<SeatPricing[]>([]);
  const [currentDate] = useState<Date>(new Date());
  const isWeekendDay = isWeekend(currentDate);

  // When location changes, update cinema and reset selections
  useEffect(() => {
    if (selectedLocation) {
      const cinema = getCinemaByLocationId(selectedLocation);
      if (cinema) {
        setSelectedCinemaId(cinema.id);
        setScreens(cinema.screens);
        setSelectedScreen(null);
        setSelectedTiming(null);
        setShowTimings([]);
        setSeatPricing([]);
      }
    }
  }, [selectedLocation]);

  // When screen changes, update show timings
  useEffect(() => {
    if (selectedCinemaId && selectedScreen) {
      const timings = getShowTimingsByCinemaAndScreenId(
        selectedCinemaId,
        selectedScreen,
      );
      setShowTimings(timings);
      setSelectedTiming(null);
      setSeatPricing([]);
    }
  }, [selectedCinemaId, selectedScreen]);

  // When timing changes, update seat pricing
  useEffect(() => {
    if (selectedCinemaId && selectedScreen && selectedTiming) {
      const pricing = getSeatPricingByCinemaScreenAndTimingId(
        selectedCinemaId,
        selectedScreen,
        selectedTiming,
      );
      setSeatPricing(pricing);
    }
  }, [selectedCinemaId, selectedScreen, selectedTiming]);

  const handleReset = () => {
    setSelectedLocation(null);
    setSelectedCinemaId(null);
    setSelectedScreen(null);
    setSelectedTiming(null);
    setScreens([]);
    setShowTimings([]);
    setSeatPricing([]);
  };

  return (
    <div
      className={cn("space-y-6", className)}
      data-pol-id="0upbv5"
      data-pol-file-name="simplified-pricing-section"
      data-pol-file-type="component"
    >
      <Card
        className="overflow-hidden"
        data-pol-id="88mmjj"
        data-pol-file-name="simplified-pricing-section"
        data-pol-file-type="component"
      >
        <CardHeader
          className="bg-muted/50"
          data-pol-id="9dr6lr"
          data-pol-file-name="simplified-pricing-section"
          data-pol-file-type="component"
        >
          <div
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
            data-pol-id="3v5qov"
            data-pol-file-name="simplified-pricing-section"
            data-pol-file-type="component"
          >
            <CardTitle
              className="text-xl"
              data-pol-id="qag384"
              data-pol-file-name="simplified-pricing-section"
              data-pol-file-type="component"
            >
              Ticket Pricing Configuration
            </CardTitle>
            <div
              className="flex items-center gap-2 text-sm"
              data-pol-id="hscel1"
              data-pol-file-name="simplified-pricing-section"
              data-pol-file-type="component"
            >
              <CalendarIcon
                className="h-4 w-4 text-muted-foreground"
                data-pol-id="ddh6ws"
                data-pol-file-name="simplified-pricing-section"
                data-pol-file-type="component"
              />
              <span
                data-pol-id="zupatx"
                data-pol-file-name="simplified-pricing-section"
                data-pol-file-type="component"
              >
                {format(currentDate, "EEEE, MMMM d, yyyy")}
              </span>
              <Badge
                variant={isWeekendDay ? "default" : "outline"}
                data-pol-id="v372ux"
                data-pol-file-name="simplified-pricing-section"
                data-pol-file-type="component"
              >
                {isWeekendDay ? "Weekend Rates" : "Regular Rates"}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent
          className="p-6"
          data-pol-id="hu0q4q"
          data-pol-file-name="simplified-pricing-section"
          data-pol-file-type="component"
        >
          <div
            className="space-y-6"
            data-pol-id="ceboeg"
            data-pol-file-name="simplified-pricing-section"
            data-pol-file-type="component"
          >
            {/* Step 1: Select Location */}
            <div
              className="space-y-4"
              data-pol-id="0zvth8"
              data-pol-file-name="simplified-pricing-section"
              data-pol-file-type="component"
            >
              <h3
                className="text-lg font-medium flex items-center gap-2"
                data-pol-id="6znm50"
                data-pol-file-name="simplified-pricing-section"
                data-pol-file-type="component"
              >
                <span
                  className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm"
                  data-pol-id="ku4gej"
                  data-pol-file-name="simplified-pricing-section"
                  data-pol-file-type="component"
                >
                  1
                </span>
                Select Cinema Location
              </h3>
              <CinemaLocationSelector
                locations={CINEMA_LOCATIONS}
                selectedLocation={selectedLocation}
                onLocationChange={setSelectedLocation}
                data-pol-id="xcz05h"
                data-pol-file-name="simplified-pricing-section"
                data-pol-file-type="component"
              />
            </div>

            {/* Step 2: Select Screen */}
            {screens.length > 0 && (
              <>
                <Separator
                  data-pol-id="ligvu8"
                  data-pol-file-name="simplified-pricing-section"
                  data-pol-file-type="component"
                />
                <div
                  className="space-y-4"
                  data-pol-id="scu9xt"
                  data-pol-file-name="simplified-pricing-section"
                  data-pol-file-type="component"
                >
                  <h3
                    className="text-lg font-medium flex items-center gap-2"
                    data-pol-id="7i3naj"
                    data-pol-file-name="simplified-pricing-section"
                    data-pol-file-type="component"
                  >
                    <span
                      className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm"
                      data-pol-id="4bues2"
                      data-pol-file-name="simplified-pricing-section"
                      data-pol-file-type="component"
                    >
                      2
                    </span>
                    Select Screen
                  </h3>
                  <CinemaScreenSelector
                    screens={screens}
                    selectedScreen={selectedScreen}
                    onScreenChange={setSelectedScreen}
                    data-pol-id="pl7bvf"
                    data-pol-file-name="simplified-pricing-section"
                    data-pol-file-type="component"
                  />
                </div>
              </>
            )}

            {/* Step 3: Select Show Timing */}
            {showTimings.length > 0 && (
              <>
                <Separator
                  data-pol-id="vnj4cc"
                  data-pol-file-name="simplified-pricing-section"
                  data-pol-file-type="component"
                />
                <div
                  className="space-y-4"
                  data-pol-id="jj81am"
                  data-pol-file-name="simplified-pricing-section"
                  data-pol-file-type="component"
                >
                  <h3
                    className="text-lg font-medium flex items-center gap-2"
                    data-pol-id="54woqw"
                    data-pol-file-name="simplified-pricing-section"
                    data-pol-file-type="component"
                  >
                    <span
                      className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm"
                      data-pol-id="mpo9tv"
                      data-pol-file-name="simplified-pricing-section"
                      data-pol-file-type="component"
                    >
                      3
                    </span>
                    Select Show Timing
                  </h3>
                  <ShowTimingsSelector
                    showTimings={showTimings}
                    selectedTiming={selectedTiming}
                    onTimingChange={setSelectedTiming}
                    data-pol-id="k8elqm"
                    data-pol-file-name="simplified-pricing-section"
                    data-pol-file-type="component"
                  />
                </div>
              </>
            )}

            {/* Reset button */}
            {selectedLocation && (
              <div
                className="flex justify-end"
                data-pol-id="zzxt9w"
                data-pol-file-name="simplified-pricing-section"
                data-pol-file-type="component"
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  data-pol-id="udy1s6"
                  data-pol-file-name="simplified-pricing-section"
                  data-pol-file-type="component"
                >
                  Reset Selections
                </Button>
              </div>
            )}

            {/* Empty state */}
            {!selectedLocation && (
              <div
                className="flex flex-col items-center justify-center py-8 text-center"
                data-pol-id="8sam5n"
                data-pol-file-name="simplified-pricing-section"
                data-pol-file-type="component"
              >
                <InfoIcon
                  className="h-12 w-12 text-muted-foreground mb-4"
                  data-pol-id="m3r22h"
                  data-pol-file-name="simplified-pricing-section"
                  data-pol-file-type="component"
                />
                <h3
                  className="text-lg font-medium mb-2"
                  data-pol-id="2ygl5q"
                  data-pol-file-name="simplified-pricing-section"
                  data-pol-file-type="component"
                >
                  Configure Ticket Pricing
                </h3>
                <p
                  className="text-muted-foreground max-w-md"
                  data-pol-id="l9floh"
                  data-pol-file-name="simplified-pricing-section"
                  data-pol-file-type="component"
                >
                  Select a cinema location to begin setting up ticket prices for
                  different screens, show timings, and seat types.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Step 4: View and Edit Seat Pricing */}
      {selectedTiming && seatPricing.length > 0 && (
        <div
          className="space-y-4"
          data-pol-id="0browj"
          data-pol-file-name="simplified-pricing-section"
          data-pol-file-type="component"
        >
          <div
            className="flex items-center justify-between"
            data-pol-id="otrf9l"
            data-pol-file-name="simplified-pricing-section"
            data-pol-file-type="component"
          >
            <h3
              className="text-lg font-medium flex items-center gap-2"
              data-pol-id="1ydvmt"
              data-pol-file-name="simplified-pricing-section"
              data-pol-file-type="component"
            >
              <span
                className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm"
                data-pol-id="rl32pr"
                data-pol-file-name="simplified-pricing-section"
                data-pol-file-type="component"
              >
                4
              </span>
              Seat Pricing Details
            </h3>
            <div
              className="text-sm text-muted-foreground"
              data-pol-id="vps90d"
              data-pol-file-name="simplified-pricing-section"
              data-pol-file-type="component"
            >
              {
                CINEMA_LOCATIONS.find((loc) => loc.id === selectedLocation)
                  ?.name
              }
              {" • "}
              {screens.find((scr) => scr.id === selectedScreen)?.name}
              {" • "}
              {showTimings.find((tim) => tim.id === selectedTiming)?.time}
            </div>
          </div>
          <SeatPricingDetails
            pricingDetails={seatPricing}
            isWeekend={isWeekendDay}
            data-pol-id="stv3nn"
            data-pol-file-name="simplified-pricing-section"
            data-pol-file-type="component"
          />
        </div>
      )}
    </div>
  );
}
