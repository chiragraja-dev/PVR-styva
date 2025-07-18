/* eslint-disable @typescript-eslint/no-unused-vars */
import { client, clientV2 } from "../api/client";
import {
  MOVIES,
  HISTORIC_MOVIES,
  PREDICTION,
  HISTORIC_PREDICTION,
  DOWNLOAD,
  HISTORIC_DOWNLOAD,
  GET_CINEMA,
  GET_SCREENS,
  GET_TIME_SLOTS,
  GET_PRICING,
} from "../api/endpoints";

import { HistoricMovieDetails } from "@/types/HistoricMovieDetails";
import { MovieDetails } from "@/types/MovieDetails";
import { Prediction } from "@/types/Prediction";
import { HistoricPrediction } from "@/types/HistoricPrediction";
import { ApiResponse } from "@/types/DownloadMovie";

export const fetchMovies = async (
  language: string
): Promise<MovieDetails[]> => {
  const response = await client.get(MOVIES, {
    params: { language },
  });
  return response.data;
};

/**
 * Get historic movies by language
 */
export const fetchHistoricMovies = async (
  language: string
): Promise<HistoricMovieDetails> => {
  const response = await client.get(HISTORIC_MOVIES, {
    params: { language },
  });
  return response.data;
};

/**
 * Get prediction by movie name, language, and region
 */
export const fetchPrediction = async ({
  movie,
  language,
}: {
  movie: string;
  language: string;
}): Promise<Prediction> => {
  const response = await client.get(PREDICTION, {
    params: { movie, language },
  });
  return response.data;
};

/**
 * Get historic prediction by movie name, language, and region
 */
export const fetchHistoricPrediction = async ({
  movie,
  language,
}: {
  movie: string;
  language: string;
}): Promise<HistoricPrediction> => {
  const response = await client.get(HISTORIC_PREDICTION, {
    params: { movie, language },
  });
  return response.data;
};

export const downloadFilmData = async ({
  movie,
  language,
  isHistoric,
}: {
  movie: string;
  language: string;
  isHistoric: boolean;
}): Promise<ApiResponse> => {
  const endpoint = isHistoric ? HISTORIC_DOWNLOAD : DOWNLOAD;
  const response = await client.get(endpoint, {
    params: { movie, language },
  });
  return response.data;
};


// 1. GET CINEMAS
export const fetchCinemas = async (): Promise<{ PropertyId: number; PropertyName: string }[]> => {
  const response = await clientV2.get(GET_CINEMA, {
    params: { code: process.env.API_CODE! },
  });
  return response.data;
};

// 2. GET SCREENS
export const fetchScreens = async (propertyId: number): Promise<{ ScreenId: number; ScreenType: string }[]> => {
  const response = await clientV2.get(GET_SCREENS, {
    params: {
      code: process.env.API_CODE!,
      property_id: propertyId,
    },
  });
  return response.data;
};

// 3. GET TIME SLOTS
export const fetchTimeSlots = async ({
  propertyId,
  screenId,
  language,
  movieName,
  isHistoric
}: {
  propertyId: number;
  screenId: number;
  language: string;
  movieName: string;
  isHistoric: boolean;
}): Promise<{ TimeSlot: string; TimeSlotRange: string }[]> => {
  const response = await clientV2.get(GET_TIME_SLOTS, {
    params: {
      code: process.env.API_CODE!,
      property_id: propertyId,
      screen_id: screenId,
      // time_slot: timeSlot,
      is_historic: isHistoric,
      language,
      movie_name: movieName,
    },
  });
  return response.data;
};

// 4. GET PRICING
export const fetchPricing = async ({
  propertyId,
  screenId,
  timeSlot,
  language,
  movieName,
  isHistoric
}: {
  propertyId: number;
  screenId: number;
  timeSlot: string;
  language: string;
  movieName: string;
  isHistoric: boolean
}): Promise<{ SeatType: string; FilmFormat: string; TicketPrice: number }[]> => {
  const response = await clientV2.get(GET_PRICING, {
    params: {
      code: process.env.API_CODE!,
      property_id: propertyId,
      screen_id: screenId,
      time_slot: timeSlot,
      language,
      is_historic: isHistoric,
      movie_name: movieName,
    },
  });
  return response.data;
};
