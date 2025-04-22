import { client } from "../api/client";
import {
  MOVIES,
  HISTORIC_MOVIES,
  PREDICTION,
  HISTORIC_PREDICTION,
  DOWNLOAD,
  HISTORIC_DOWNLOAD,
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
