export interface CinemaLocation {
  id: string;
  name: string;
  area: string;
  city: string;
}

export interface CinemaScreen {
  id: string;
  name: string;
  type: "Standard" | "Premium" | "IMAX" | "4DX";
  capacity: number;
}

export interface ShowTiming {
  id: string;
  time: string;
  timeCategory: "Morning" | "Afternoon" | "Evening" | "Night" | "Late Night";
  format: "2D" | "3D" | "IMAX" | "4DX";
  availability: "Available" | "Fast Filling" | "Almost Full" | "Sold Out";
}

export interface SeatPricing {
  type: "PRIME" | "CLASSIC" | "REGULAR";
  baseFare: number;
  weekendFare: number;
  format: "2D" | "3D" | "IMAX" | "4DX";
  available: number;
  total: number;
}

export interface Cinema {
  id: string;
  locationId: string;
  screens: CinemaScreen[];
  showTimings: {
    screenId: string;
    timings: ShowTiming[];
  }[];
  seatPricing: {
    screenId: string;
    timingId: string;
    pricing: SeatPricing[];
  }[];
}

export const CINEMA_LOCATIONS: CinemaLocation[] = [
  {
    id: "loc1",
    name: "PVR Nexus",
    area: "Koramangala",
    city: "Bangalore",
  },
  {
    id: "loc2",
    name: "PVR Phoenix",
    area: "Whitefield",
    city: "Bangalore",
  },
  {
    id: "loc3",
    name: "PVR Forum",
    area: "Adyar",
    city: "Chennai",
  },
  {
    id: "loc4",
    name: "PVR Select Citywalk",
    area: "Saket",
    city: "Delhi",
  },
  {
    id: "loc5",
    name: "PVR Juhu",
    area: "Juhu",
    city: "Mumbai",
  },
];

export const CINEMAS: Cinema[] = [
  {
    id: "cin1",
    locationId: "loc1",
    screens: [
      {
        id: "scr1",
        name: "Screen 1",
        type: "IMAX",
        capacity: 280,
      },
      {
        id: "scr2",
        name: "Screen 2",
        type: "Standard",
        capacity: 180,
      },
      {
        id: "scr3",
        name: "Screen 3",
        type: "4DX",
        capacity: 120,
      },
      {
        id: "scr4",
        name: "Screen 4",
        type: "Premium",
        capacity: 90,
      },
    ],

    showTimings: [
      {
        screenId: "scr1",
        timings: [
          {
            id: "st1",
            time: "9:30 AM",
            timeCategory: "Morning",
            format: "IMAX",
            availability: "Available",
          },
          {
            id: "st2",
            time: "1:15 PM",
            timeCategory: "Afternoon",
            format: "IMAX",
            availability: "Fast Filling",
          },
          {
            id: "st3",
            time: "6:45 PM",
            timeCategory: "Evening",
            format: "IMAX",
            availability: "Almost Full",
          },
          {
            id: "st4",
            time: "10:30 PM",
            timeCategory: "Night",
            format: "IMAX",
            availability: "Available",
          },
        ],
      },
      {
        screenId: "scr2",
        timings: [
          {
            id: "st5",
            time: "10:00 AM",
            timeCategory: "Morning",
            format: "2D",
            availability: "Available",
          },
          {
            id: "st6",
            time: "2:30 PM",
            timeCategory: "Afternoon",
            format: "2D",
            availability: "Available",
          },
          {
            id: "st7",
            time: "5:45 PM",
            timeCategory: "Evening",
            format: "2D",
            availability: "Fast Filling",
          },
          {
            id: "st8",
            time: "9:00 PM",
            timeCategory: "Night",
            format: "2D",
            availability: "Sold Out",
          },
        ],
      },
      {
        screenId: "scr3",
        timings: [
          {
            id: "st9",
            time: "11:30 AM",
            timeCategory: "Morning",
            format: "4DX",
            availability: "Available",
          },
          {
            id: "st10",
            time: "3:45 PM",
            timeCategory: "Afternoon",
            format: "4DX",
            availability: "Fast Filling",
          },
          {
            id: "st11",
            time: "8:15 PM",
            timeCategory: "Night",
            format: "4DX",
            availability: "Almost Full",
          },
          {
            id: "st12",
            time: "11:45 PM",
            timeCategory: "Late Night",
            format: "4DX",
            availability: "Available",
          },
        ],
      },
      {
        screenId: "scr4",
        timings: [
          {
            id: "st13",
            time: "10:45 AM",
            timeCategory: "Morning",
            format: "3D",
            availability: "Available",
          },
          {
            id: "st14",
            time: "4:00 PM",
            timeCategory: "Afternoon",
            format: "3D",
            availability: "Available",
          },
          {
            id: "st15",
            time: "7:30 PM",
            timeCategory: "Evening",
            format: "3D",
            availability: "Fast Filling",
          },
        ],
      },
    ],

    seatPricing: [
      {
        screenId: "scr1",
        timingId: "st1",
        pricing: [
          {
            type: "PRIME",
            baseFare: 599,
            weekendFare: 699,
            format: "IMAX",
            available: 42,
            total: 60,
          },
          {
            type: "CLASSIC",
            baseFare: 399,
            weekendFare: 499,
            format: "IMAX",
            available: 85,
            total: 120,
          },
          {
            type: "REGULAR",
            baseFare: 249,
            weekendFare: 299,
            format: "IMAX",
            available: 70,
            total: 100,
          },
        ],
      },
      {
        screenId: "scr2",
        timingId: "st5",
        pricing: [
          {
            type: "PRIME",
            baseFare: 399,
            weekendFare: 499,
            format: "2D",
            available: 30,
            total: 40,
          },
          {
            type: "CLASSIC",
            baseFare: 299,
            weekendFare: 349,
            format: "2D",
            available: 60,
            total: 80,
          },
          {
            type: "REGULAR",
            baseFare: 199,
            weekendFare: 249,
            format: "2D",
            available: 45,
            total: 60,
          },
        ],
      },
      {
        screenId: "scr3",
        timingId: "st9",
        pricing: [
          {
            type: "PRIME",
            baseFare: 549,
            weekendFare: 649,
            format: "4DX",
            available: 25,
            total: 30,
          },
          {
            type: "CLASSIC",
            baseFare: 449,
            weekendFare: 549,
            format: "4DX",
            available: 40,
            total: 50,
          },
          {
            type: "REGULAR",
            baseFare: 349,
            weekendFare: 399,
            format: "4DX",
            available: 30,
            total: 40,
          },
        ],
      },
      {
        screenId: "scr4",
        timingId: "st13",
        pricing: [
          {
            type: "PRIME",
            baseFare: 449,
            weekendFare: 549,
            format: "3D",
            available: 20,
            total: 25,
          },
          {
            type: "CLASSIC",
            baseFare: 349,
            weekendFare: 399,
            format: "3D",
            available: 35,
            total: 40,
          },
          {
            type: "REGULAR",
            baseFare: 249,
            weekendFare: 299,
            format: "3D",
            available: 20,
            total: 25,
          },
        ],
      },
    ],
  },
  {
    id: "cin2",
    locationId: "loc2",
    screens: [
      {
        id: "scr5",
        name: "Screen 1",
        type: "Premium",
        capacity: 150,
      },
      {
        id: "scr6",
        name: "Screen 2",
        type: "Standard",
        capacity: 200,
      },
      {
        id: "scr7",
        name: "Screen 3",
        type: "IMAX",
        capacity: 250,
      },
    ],

    showTimings: [
      {
        screenId: "scr5",
        timings: [
          {
            id: "st16",
            time: "10:15 AM",
            timeCategory: "Morning",
            format: "2D",
            availability: "Available",
          },
          {
            id: "st17",
            time: "3:30 PM",
            timeCategory: "Afternoon",
            format: "2D",
            availability: "Fast Filling",
          },
          {
            id: "st18",
            time: "7:00 PM",
            timeCategory: "Evening",
            format: "2D",
            availability: "Available",
          },
        ],
      },
      {
        screenId: "scr6",
        timings: [
          {
            id: "st19",
            time: "11:00 AM",
            timeCategory: "Morning",
            format: "3D",
            availability: "Available",
          },
          {
            id: "st20",
            time: "4:15 PM",
            timeCategory: "Afternoon",
            format: "3D",
            availability: "Almost Full",
          },
          {
            id: "st21",
            time: "8:30 PM",
            timeCategory: "Night",
            format: "3D",
            availability: "Fast Filling",
          },
        ],
      },
      {
        screenId: "scr7",
        timings: [
          {
            id: "st22",
            time: "9:45 AM",
            timeCategory: "Morning",
            format: "IMAX",
            availability: "Available",
          },
          {
            id: "st23",
            time: "1:30 PM",
            timeCategory: "Afternoon",
            format: "IMAX",
            availability: "Available",
          },
          {
            id: "st24",
            time: "5:45 PM",
            timeCategory: "Evening",
            format: "IMAX",
            availability: "Fast Filling",
          },
          {
            id: "st25",
            time: "10:00 PM",
            timeCategory: "Night",
            format: "IMAX",
            availability: "Available",
          },
        ],
      },
    ],

    seatPricing: [
      {
        screenId: "scr5",
        timingId: "st16",
        pricing: [
          {
            type: "PRIME",
            baseFare: 449,
            weekendFare: 549,
            format: "2D",
            available: 35,
            total: 40,
          },
          {
            type: "CLASSIC",
            baseFare: 349,
            weekendFare: 399,
            format: "2D",
            available: 60,
            total: 70,
          },
          {
            type: "REGULAR",
            baseFare: 249,
            weekendFare: 299,
            format: "2D",
            available: 30,
            total: 40,
          },
        ],
      },
      {
        screenId: "scr6",
        timingId: "st19",
        pricing: [
          {
            type: "PRIME",
            baseFare: 499,
            weekendFare: 599,
            format: "3D",
            available: 40,
            total: 50,
          },
          {
            type: "CLASSIC",
            baseFare: 399,
            weekendFare: 449,
            format: "3D",
            available: 80,
            total: 100,
          },
          {
            type: "REGULAR",
            baseFare: 299,
            weekendFare: 349,
            format: "3D",
            available: 40,
            total: 50,
          },
        ],
      },
      {
        screenId: "scr7",
        timingId: "st22",
        pricing: [
          {
            type: "PRIME",
            baseFare: 599,
            weekendFare: 699,
            format: "IMAX",
            available: 50,
            total: 60,
          },
          {
            type: "CLASSIC",
            baseFare: 499,
            weekendFare: 599,
            format: "IMAX",
            available: 100,
            total: 120,
          },
          {
            type: "REGULAR",
            baseFare: 399,
            weekendFare: 449,
            format: "IMAX",
            available: 55,
            total: 70,
          },
        ],
      },
    ],
  },
];

// Helper function to get cinema by location ID
export function getCinemaByLocationId(locationId: string): Cinema | undefined {
  return CINEMAS.find((cinema) => cinema.locationId === locationId);
}

// Helper function to get screens by cinema ID
export function getScreensByCinemaId(cinemaId: string): CinemaScreen[] {
  const cinema = CINEMAS.find((c) => c.id === cinemaId);
  return cinema ? cinema.screens : [];
}

// Helper function to get show timings by cinema ID and screen ID
export function getShowTimingsByCinemaAndScreenId(
  cinemaId: string,
  screenId: string,
): ShowTiming[] {
  const cinema = CINEMAS.find((c) => c.id === cinemaId);
  if (!cinema) return [];

  const screenTimings = cinema.showTimings.find(
    (st) => st.screenId === screenId,
  );
  return screenTimings ? screenTimings.timings : [];
}

// Helper function to get seat pricing by cinema ID, screen ID, and timing ID
export function getSeatPricingByCinemaScreenAndTimingId(
  cinemaId: string,
  screenId: string,
  timingId: string,
): SeatPricing[] {
  const cinema = CINEMAS.find((c) => c.id === cinemaId);
  if (!cinema) return [];

  const pricing = cinema.seatPricing.find(
    (sp) => sp.screenId === screenId && sp.timingId === timingId,
  );
  return pricing ? pricing.pricing : [];
}
