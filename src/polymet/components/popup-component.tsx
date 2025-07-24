import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { OptionPopover } from "./popover-select";
import {
    downloadPricingModal,
    fetchCinemas,
    fetchPricing,
    fetchScreens,
    fetchTimeSlots,
} from "@/services/movieService";
import { convertPricingToCSV } from "@/lib/csvUtils";

interface PopupComponentProps {
    onClose: () => void;
    movieName: string;
    language: string;
    isHistoric: boolean;
}

interface Cinema {
    PropertyId: number;
    PropertyName: string;
}

interface Screen {
    ScreenId: number;
    ScreenType: string;
}

interface TimeSlot {
    TimeSlot: string;
    TimeSlotRange: string;
}

interface PricingData {
    SeatType: string;
    FilmFormat: string;
    TicketPrice: number;
}

// Updated CardComponent to match API response structure
interface CardComponentProps {
    seatType: string;
    filmFormat: string;
    ticketPrice: number;
}

const CardComponent: React.FC<CardComponentProps> = ({
    seatType,
    filmFormat,
    ticketPrice,
}) => {
    return (
        <Card className="border rounded-md shadow-sm cursor-pointer hover:shadow-md hover:bg-gray-50">
            <CardContent className="p-4 grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                    <p className="text-muted-foreground">Seat Type</p>
                    <p className="font-medium">{seatType}</p>
                </div>
                <div className="space-y-1">
                    <p className="text-muted-foreground">Format</p>
                    <p className="font-medium">{filmFormat}</p>
                </div>
                <div className="space-y-1">
                    <p className="text-muted-foreground">Ticket price</p>
                    <p className="font-semibold text-amber-700 bg-amber-100 inline-block px-2 py-0.5 rounded-md">
                        ₹ {ticketPrice}
                    </p>
                </div>
                <div className="space-y-1">
                    <p className="text-muted-foreground">Weekend</p>
                    <p className="font-medium">-</p>
                </div>
            </CardContent>
        </Card>
    );
};

export const PopupComponent = ({
    onClose,
    movieName,
    language,
    isHistoric,
}: PopupComponentProps) => {
    console.log("object", movieName);
    const [selectedCinema, setSelectedCinema] = useState<Cinema | null>(null);
    const [selectedScreen, setSelectedScreen] = useState<Screen | null>(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(
        null
    );

    // State for API data
    const [cinemas, setCinemas] = useState<Cinema[]>([]);
    const [screens, setScreens] = useState<Screen[]>([]);
    const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
    const [pricingData, setPricingData] = useState<PricingData[]>([]);

    // Loading states
    const [loadingCinemas, setLoadingCinemas] = useState(false);
    const [loadingScreens, setLoadingScreens] = useState(false);
    const [loadingTimeSlots, setLoadingTimeSlots] = useState(false);
    const [loadingPricing, setLoadingPricing] = useState(false);

    // Load cinemas on component mount
    useEffect(() => {
        loadCinemas();
    }, []);

    const loadCinemas = async () => {
        setLoadingCinemas(true);
        try {
            console.log(import.meta.env.VITE_API_CODE);
            const cinemasData = await fetchCinemas();
            setCinemas(cinemasData);
        } catch (error) {
            console.error("Error fetching cinemas:", error);
        } finally {
            setLoadingCinemas(false);
        }
    };

    const handleCinemaSelect = async (cinema: Cinema) => {
        setSelectedCinema(cinema);
        setSelectedScreen(null);
        setSelectedTimeSlot(null);
        setScreens([]);
        setTimeSlots([]);
        setPricingData([]);

        setLoadingScreens(true);
        try {
            const screensData = await fetchScreens(cinema.PropertyId);
            setScreens(screensData);
        } catch (error) {
            console.error("Error fetching screens:", error);
        } finally {
            setLoadingScreens(false);
        }
    };

    const handleScreenSelect = async (screen: Screen) => {
        setSelectedScreen(screen);
        setSelectedTimeSlot(null);
        setTimeSlots([]);
        setPricingData([]);

        if (!selectedCinema) return;

        setLoadingTimeSlots(true);
        try {
            const timeSlotsData = await fetchTimeSlots({
                propertyId: selectedCinema.PropertyId,
                screenId: screen.ScreenId,
                // You might want to adjust this
                language,
                movieName,
                isHistoric,
            });
            setTimeSlots(timeSlotsData);
        } catch (error) {
            console.error("Error fetching time slots:", error);
        } finally {
            setLoadingTimeSlots(false);
        }
    };

    const handleTimeSlotSelect = async (timeSlot: TimeSlot) => {
        setSelectedTimeSlot(timeSlot);
        setPricingData([]);

        if (!selectedCinema || !selectedScreen) return;

        setLoadingPricing(true);
        try {
            const pricingDataResponse = await fetchPricing({
                propertyId: selectedCinema.PropertyId,
                screenId: selectedScreen.ScreenId,
                timeSlot: timeSlot.TimeSlot,
                language,
                movieName,
                isHistoric,
            });
            setPricingData(pricingDataResponse);
        } catch (error) {
            console.error("Error fetching pricing:", error);
        } finally {
            setLoadingPricing(false);
        }
    };

    const handleDownloadPricingModal = async () => {
        try {
            const moviePrice = await downloadPricingModal({
                movie: movieName,
                language,
                isHistoric,
            });

            const csv = convertPricingToCSV(Object.values(moviePrice));

            // Create download
            const blob = new Blob([csv], { type: "text/csv" });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `pricing_data.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="max-w-4xl w-full mx-4 lg:max-h-[100vh] xl:max-h-auto overflow-hidden rounded-md">
                {/* Header */}
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <CardTitle className="text-xl font-semibold">
                        Suggested Ticket Pricing for {movieName}
                    </CardTitle>
                    <div className="flex items-center gap-4 justify-end flex-1">
                        <Button
                            variant="default"
                            size="icon"
                            onClick={handleDownloadPricingModal}
                            className="h-8 border w-1/3"
                        >
                            Download Pricing
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onClose}
                            className="h-8 w-8"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </CardHeader>

                <CardContent className="p-0">
                    {/* Filters */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-6">
                        <OptionPopover
                            label="Select Cinema"
                            selected={selectedCinema?.PropertyName || ""}
                            setSelected={(value) => {
                                const cinema = cinemas.find((c) => c.PropertyName === value);
                                if (cinema) handleCinemaSelect(cinema);
                            }}
                            options={cinemas.map((c) => c.PropertyName)}
                            id="cinema-select"
                            placeholder="Select Cinema"
                            loading={loadingCinemas}
                            disabled={false}
                        />

                        {/* <OptionPopover
                            label="Select Screen"
                            selected={selectedScreen?.ScreenType || ""}
                            setSelected={(value) => {
                                const screen = screens.find(s => s.ScreenType === value);
                                if (screen) handleScreenSelect(screen);
                            }}
                            options={screens.map(s => s.ScreenType)}
                            id="screen-select"
                            placeholder="Select Screen"
                            disabled={!selectedCinema}
                            loading={loadingScreens}
                        /> */}

                        <OptionPopover
                            label="Select Screen"
                            selected={
                                selectedScreen
                                    ? `Screen ${selectedScreen.ScreenId} - ${selectedScreen.ScreenType}`
                                    : ""
                            }
                            setSelected={(value) => {
                                // Extract ScreenId from the selected value
                                const screenIdMatch = value.match(/Screen (\d+) -/);
                                if (screenIdMatch) {
                                    const screenId = parseInt(screenIdMatch[1]);
                                    const screen = screens.find((s) => s.ScreenId === screenId);
                                    if (screen) handleScreenSelect(screen);
                                }
                            }}
                            options={screens.map(
                                (s) => `Screen ${s.ScreenId} - ${s.ScreenType}`
                            )}
                            id="screen-select"
                            placeholder="Select Screen"
                            disabled={!selectedCinema}
                            loading={loadingScreens}
                        />

                        <OptionPopover
                            label="Select Time"
                            selected={selectedTimeSlot?.TimeSlotRange || ""}
                            setSelected={(value) => {
                                const timeSlot = timeSlots.find(
                                    (t) => t.TimeSlotRange === value
                                );
                                if (timeSlot) handleTimeSlotSelect(timeSlot);
                            }}
                            options={timeSlots.map((t) => t.TimeSlotRange)}
                            id="time-select"
                            placeholder="Select Time"
                            disabled={!selectedScreen}
                            loading={loadingTimeSlots}
                        />
                    </div>

                    <hr className="mb-4" />

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-3 gap-4 overflow-y-auto max-h-96 p-6">
                        {loadingPricing ? (
                            <div className="col-span-3 text-center py-8">
                                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                                <p className="mt-2">Loading pricing data...</p>
                            </div>
                        ) : pricingData.length > 0 ? (
                            pricingData.map((data, index) => (
                                <CardComponent
                                    key={index}
                                    seatType={data.SeatType}
                                    filmFormat={data.FilmFormat}
                                    ticketPrice={data.TicketPrice}
                                />
                            ))
                        ) : selectedTimeSlot ? (
                            <div className="col-span-3 text-center py-8">
                                <p className="text-gray-500">
                                    No pricing data available for the selected options.
                                </p>
                            </div>
                        ) : (
                            <div className="col-span-3 text-center py-8">
                                <p className="text-gray-500">
                                    Please select cinema, screen, and time slot to view pricing.
                                </p>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};