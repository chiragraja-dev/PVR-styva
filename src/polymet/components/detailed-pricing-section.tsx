import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, InfoIcon } from "lucide-react";
import { format, isWeekend } from "date-fns";
import { cn } from "@/lib/utils";

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

interface DetailedPricingSectionProps {
  movieId: string;
}

export default function DetailedPricingSection({
  movieId,
}: DetailedPricingSectionProps) {
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

  return (
    <div
      className="space-y-6"
      data-pol-id="rq9x35"
      data-pol-file-name="detailed-pricing-section"
      data-pol-file-type="component"
    >
      <Tabs
        defaultValue="detailed"
        className="w-full"
        data-pol-id="inc83h"
        data-pol-file-name="detailed-pricing-section"
        data-pol-file-type="component"
      >
        <TabsList
          className="grid grid-cols-2"
          data-pol-id="64a82t"
          data-pol-file-name="detailed-pricing-section"
          data-pol-file-type="component"
        >
          <TabsTrigger
            value="basic"
            data-pol-id="cck7f7"
            data-pol-file-name="detailed-pricing-section"
            data-pol-file-type="component"
          >
            Basic Pricing
          </TabsTrigger>
          <TabsTrigger
            value="detailed"
            data-pol-id="klgllm"
            data-pol-file-name="detailed-pricing-section"
            data-pol-file-type="component"
          >
            Detailed Pricing
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="basic"
          className="space-y-6 pt-4"
          data-pol-id="5boydm"
          data-pol-file-name="detailed-pricing-section"
          data-pol-file-type="component"
        >
          <Card
            data-pol-id="vvfiaq"
            data-pol-file-name="detailed-pricing-section"
            data-pol-file-type="component"
          >
            <CardContent
              className="pt-6"
              data-pol-id="rv16rg"
              data-pol-file-name="detailed-pricing-section"
              data-pol-file-type="component"
            >
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                data-pol-id="nt2pis"
                data-pol-file-name="detailed-pricing-section"
                data-pol-file-type="component"
              >
                <PriceItem
                  label="Premium"
                  price={599}
                  data-pol-id="yf9zt4"
                  data-pol-file-name="detailed-pricing-section"
                  data-pol-file-type="component"
                />
                <PriceItem
                  label="Standard"
                  price={399}
                  data-pol-id="zjg1bs"
                  data-pol-file-name="detailed-pricing-section"
                  data-pol-file-type="component"
                />
                <PriceItem
                  label="Budget"
                  price={249}
                  data-pol-id="i1u06p"
                  data-pol-file-name="detailed-pricing-section"
                  data-pol-file-type="component"
                />
              </div>
            </CardContent>
          </Card>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-pol-id="cbidbp"
            data-pol-file-name="detailed-pricing-section"
            data-pol-file-type="component"
          >
            <div
              className="bg-secondary/50 p-6 rounded-lg"
              data-pol-id="4z7ejh"
              data-pol-file-name="detailed-pricing-section"
              data-pol-file-type="component"
            >
              <h3
                className="text-lg font-semibold mb-4"
                data-pol-id="xveujw"
                data-pol-file-name="detailed-pricing-section"
                data-pol-file-type="component"
              >
                Pricing Rationale
              </h3>
              <ul
                className="space-y-3 text-sm"
                data-pol-id="qngxkk"
                data-pol-file-name="detailed-pricing-section"
                data-pol-file-type="component"
              >
                <li
                  data-pol-id="ywbur5"
                  data-pol-file-name="detailed-pricing-section"
                  data-pol-file-type="component"
                >
                  • Based on Mega Blockbuster category classification
                </li>
                <li
                  data-pol-id="0o3y3c"
                  data-pol-file-name="detailed-pricing-section"
                  data-pol-file-type="component"
                >
                  • Adjusted for Holiday weekend release
                </li>
                <li
                  data-pol-id="i21nor"
                  data-pol-file-name="detailed-pricing-section"
                  data-pol-file-type="component"
                >
                  • Considers 2 competing releases
                </li>
                <li
                  data-pol-id="jbdwh5"
                  data-pol-file-name="detailed-pricing-section"
                  data-pol-file-type="component"
                >
                  • Accounts for production budget of $220M
                </li>
                <li
                  data-pol-id="qsgwc3"
                  data-pol-file-name="detailed-pricing-section"
                  data-pol-file-type="component"
                >
                  • Reflects pre-release booking rate of 85%
                </li>
              </ul>
            </div>

            <div
              className="bg-secondary/50 p-6 rounded-lg"
              data-pol-id="hse9xy"
              data-pol-file-name="detailed-pricing-section"
              data-pol-file-type="component"
            >
              <h3
                className="text-lg font-semibold mb-4"
                data-pol-id="2ypz5x"
                data-pol-file-name="detailed-pricing-section"
                data-pol-file-type="component"
              >
                Optimization Suggestions
              </h3>
              <ul
                className="space-y-3 text-sm"
                data-pol-id="u3r1ap"
                data-pol-file-name="detailed-pricing-section"
                data-pol-file-type="component"
              >
                <li
                  data-pol-id="c6zf6l"
                  data-pol-file-name="detailed-pricing-section"
                  data-pol-file-type="component"
                >
                  • Consider premium pricing for early shows
                </li>
                <li
                  data-pol-id="h8t3pk"
                  data-pol-file-name="detailed-pricing-section"
                  data-pol-file-type="component"
                >
                  • Implement dynamic pricing for high-demand showtimes
                </li>
                <li
                  data-pol-id="1i5wlp"
                  data-pol-file-name="detailed-pricing-section"
                  data-pol-file-type="component"
                >
                  • Leverage strong social media buzz for exclusive screenings
                </li>
                <li
                  data-pol-id="gscv7n"
                  data-pol-file-name="detailed-pricing-section"
                  data-pol-file-type="component"
                >
                  • Adjust pricing strategy based on initial weekend performance
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="detailed"
          className="space-y-6 pt-4"
          data-pol-id="7t06m0"
          data-pol-file-name="detailed-pricing-section"
          data-pol-file-type="component"
        >
          <div
            className="bg-secondary/50 p-4 rounded-lg flex items-center gap-2 text-sm"
            data-pol-id="v3soyn"
            data-pol-file-name="detailed-pricing-section"
            data-pol-file-type="component"
          >
            <InfoIcon
              className="h-4 w-4 text-primary"
              data-pol-id="wtyeat"
              data-pol-file-name="detailed-pricing-section"
              data-pol-file-type="component"
            />
            <div
              data-pol-id="a5ks2l"
              data-pol-file-name="detailed-pricing-section"
              data-pol-file-type="component"
            >
              <span
                className="font-medium"
                data-pol-id="uwxypt"
                data-pol-file-name="detailed-pricing-section"
                data-pol-file-type="component"
              >
                Today is{" "}
              </span>
              <span
                className="font-medium"
                data-pol-id="v0skb6"
                data-pol-file-name="detailed-pricing-section"
                data-pol-file-type="component"
              >
                {format(currentDate, "EEEE, MMMM d, yyyy")}
              </span>
              <span
                className="ml-2 text-muted-foreground"
                data-pol-id="3d6jy4"
                data-pol-file-name="detailed-pricing-section"
                data-pol-file-type="component"
              >
                ({isWeekendDay ? "Weekend rates apply" : "Regular rates apply"})
              </span>
            </div>
            <div
              className="ml-auto flex items-center gap-1"
              data-pol-id="vrm0vs"
              data-pol-file-name="detailed-pricing-section"
              data-pol-file-type="component"
            >
              <CalendarIcon
                className="h-4 w-4"
                data-pol-id="shzxs0"
                data-pol-file-name="detailed-pricing-section"
                data-pol-file-type="component"
              />
              {format(currentDate, "dd/MM/yyyy")}
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-pol-id="kp3ra8"
            data-pol-file-name="detailed-pricing-section"
            data-pol-file-type="component"
          >
            <Card
              data-pol-id="dvboit"
              data-pol-file-name="detailed-pricing-section"
              data-pol-file-type="component"
            >
              <CardContent
                className="pt-6 space-y-6"
                data-pol-id="5pcyjt"
                data-pol-file-name="detailed-pricing-section"
                data-pol-file-type="component"
              >
                <CinemaLocationSelector
                  locations={CINEMA_LOCATIONS}
                  selectedLocation={selectedLocation}
                  onLocationChange={setSelectedLocation}
                  data-pol-id="zqz1cg"
                  data-pol-file-name="detailed-pricing-section"
                  data-pol-file-type="component"
                />

                {screens.length > 0 && (
                  <CinemaScreenSelector
                    screens={screens}
                    selectedScreen={selectedScreen}
                    onScreenChange={setSelectedScreen}
                    data-pol-id="ozd941"
                    data-pol-file-name="detailed-pricing-section"
                    data-pol-file-type="component"
                  />
                )}

                {showTimings.length > 0 && (
                  <ShowTimingsSelector
                    showTimings={showTimings}
                    selectedTiming={selectedTiming}
                    onTimingChange={setSelectedTiming}
                    data-pol-id="rtwblz"
                    data-pol-file-name="detailed-pricing-section"
                    data-pol-file-type="component"
                  />
                )}
              </CardContent>
            </Card>

            <Card
              className="bg-muted/30"
              data-pol-id="1d3ph1"
              data-pol-file-name="detailed-pricing-section"
              data-pol-file-type="component"
            >
              <CardContent
                className="pt-6"
                data-pol-id="gewion"
                data-pol-file-name="detailed-pricing-section"
                data-pol-file-type="component"
              >
                {!selectedLocation && (
                  <EmptyState
                    message="Select a cinema location to view available screens"
                    data-pol-id="q87zjv"
                    data-pol-file-name="detailed-pricing-section"
                    data-pol-file-type="component"
                  />
                )}

                {selectedLocation && !selectedScreen && (
                  <EmptyState
                    message="Select a screen to view available show timings"
                    data-pol-id="k9m9dl"
                    data-pol-file-name="detailed-pricing-section"
                    data-pol-file-type="component"
                  />
                )}

                {selectedScreen && showTimings.length === 0 && (
                  <EmptyState
                    message="No show timings available for this screen"
                    data-pol-id="k9lat6"
                    data-pol-file-name="detailed-pricing-section"
                    data-pol-file-type="component"
                  />
                )}

                {selectedScreen &&
                  showTimings.length > 0 &&
                  !selectedTiming && (
                    <EmptyState
                      message="Select a show timing to view seat pricing"
                      data-pol-id="xb3hc7"
                      data-pol-file-name="detailed-pricing-section"
                      data-pol-file-type="component"
                    />
                  )}

                {selectedTiming && seatPricing.length === 0 && (
                  <EmptyState
                    message="No pricing information available for this show"
                    data-pol-id="rx955j"
                    data-pol-file-name="detailed-pricing-section"
                    data-pol-file-type="component"
                  />
                )}

                {selectedTiming && seatPricing.length > 0 && (
                  <div
                    className="text-center space-y-2"
                    data-pol-id="a91k49"
                    data-pol-file-name="detailed-pricing-section"
                    data-pol-file-type="component"
                  >
                    <h3
                      className="font-medium"
                      data-pol-id="fno1wl"
                      data-pol-file-name="detailed-pricing-section"
                      data-pol-file-type="component"
                    >
                      Selected Show
                    </h3>
                    <p
                      className="text-sm text-muted-foreground"
                      data-pol-id="tgwwrd"
                      data-pol-file-name="detailed-pricing-section"
                      data-pol-file-type="component"
                    >
                      {
                        CINEMA_LOCATIONS.find(
                          (loc) => loc.id === selectedLocation,
                        )?.name
                      }
                      {" • "}
                      {screens.find((scr) => scr.id === selectedScreen)?.name}
                      {" • "}
                      {
                        showTimings.find((tim) => tim.id === selectedTiming)
                          ?.time
                      }
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {selectedTiming && seatPricing.length > 0 && (
            <SeatPricingDetails
              pricingDetails={seatPricing}
              isWeekend={isWeekendDay}
              data-pol-id="7ulfzg"
              data-pol-file-name="detailed-pricing-section"
              data-pol-file-type="component"
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function PriceItem({ label, price }: { label: string; price: number }) {
  return (
    <div
      className="flex flex-col items-center p-4 bg-secondary rounded-lg"
      data-pol-id="o7az2h"
      data-pol-file-name="detailed-pricing-section"
      data-pol-file-type="component"
    >
      <span
        className="text-sm text-muted-foreground mb-1"
        data-pol-id="kqeg8q"
        data-pol-file-name="detailed-pricing-section"
        data-pol-file-type="component"
      >
        {label}
      </span>
      <div
        className="flex items-center"
        data-pol-id="ed4nkl"
        data-pol-file-name="detailed-pricing-section"
        data-pol-file-type="component"
      >
        <span
          className="text-2xl font-bold"
          data-pol-id="mf81to"
          data-pol-file-name="detailed-pricing-section"
          data-pol-file-type="component"
        >
          ₹ {price}
        </span>
      </div>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center h-[200px] text-center p-4"
      data-pol-id="xgml1y"
      data-pol-file-name="detailed-pricing-section"
      data-pol-file-type="component"
    >
      <p
        className="text-muted-foreground"
        data-pol-id="tjks6p"
        data-pol-file-name="detailed-pricing-section"
        data-pol-file-type="component"
      >
        {message}
      </p>
    </div>
  );
}
