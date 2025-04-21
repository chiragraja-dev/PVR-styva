import { BaseMovieDetails } from "./BaseMovieDetails";

export interface HistoricMovieDetails extends BaseMovieDetails {
  total_revenue: number;
  total_seats_sold: number;
  seats_alloted: number;
  total_shows_for_movie: number;
  total_shows_across_city: number;
  original_language_name: string;
  genres: string;
  movie_cast: string;
  revenue_per_show: number;
  revenue_label:
    | "regular"
    | "blockbuster"
    | "mega_blockbuster"
    | "popular"
    | "Below Average";
  seatsold_label: string;
  ratio_label: string;
}
