import { client } from "../api/client";
import {
  MOVIES,
  HISTORIC_MOVIES,
  PREDICTION,
  HISTORIC_PREDICTION,
} from "../api/endpoints";

import { HistoricMovieDetails } from "@/types/HistoricMovieDetails";
import { MovieDetails } from "@/types/MovieDetails";
import { Prediction } from "@/types/Prediction";
import { HistoricPrediction } from "@/types/HistoricPrediction ";

export const fetchMovies = async (language: string): Promise<MovieDetails[]> => {
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
  region,
}: {
  movie: string;
  language: string;
  region: string;
}): Promise<Prediction> => {
  const response = await client.get(PREDICTION, {
    params: { movie, language, region },
  });
  return response.data;
};

/**
 * Get historic prediction by movie name, language, and region
 */
export const fetchHistoricPrediction = async ({
  movie,
  language,
  region,
}: {
  movie: string;
  language: string;
  region: string;
}): Promise<HistoricPrediction> => {
  const response = await client.get(HISTORIC_PREDICTION, {
    params: { movie, language, region },
  });
  return response.data;
};
