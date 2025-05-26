// utils/normalizeMovieData.ts
import { BaseMovieDetails } from "@/types/BaseMovieDetails";
import { HistoricMovieDetails } from "@/types/HistoricMovieDetails";

export const normalizeMovieData = <T extends BaseMovieDetails>(
  movies: any[],
  isHistoric: boolean = false
): T[] => {
  return movies.map((movie) => {
    const baseMovie: BaseMovieDetails = {
      FilmCommonName: movie.FilmCommonName || "",
      directorRating: Number(movie.directorRating) || 0,
      directorReason: movie.directorReason || "",
      actorRating: Number(movie.actorRating) || 0,
      actorReason: movie.actorReason || "",
      producerRating: Number(movie.producerRating) || 0,
      producerReason: movie.producerReason || "",
      musicDirectorRating:
        Number(
          movie.musicDirectorRating21 ||
            movie.musicDirectorRating ||
            movie.musicdirectorrating29
        ) || 0,
      musicDirectorReason: movie.musicDirectorReason || "",
      sentimentScore: Number(movie.sentimentScore) || 0,
      sentimentReason: movie.sentimentReason || "",
      franchiseRating: Number(movie.franchiseRating) || 0,
      franchiseRatingReason: movie.franchiseRatingReason || "",
      isControversial: movie.isControversial || "",
      controversialReason: movie.controversialReason || "",
      isHistoric: movie.isHistoric || "",
      historicTopic: movie.historicTopic || "",
      hasStereotypes: movie.hasStereotypes || "",
      stereotypesReason: movie.stereotypesReason || "",
      isReligious: movie.isReligious || "",
      religiousTopic: movie.religiousTopic || "",
      isPolitical: movie.isPolitical || "",
      politicalTopic: movie.politicalTopic || "",
      isSensitive: movie.isSensitive || "",
      sensitiveReason: movie.sensitiveReason || "",
      isPatriotic: movie.isPatriotic || "",
      patrioticTopic: movie.patrioticTopic || "",
      songsRating: Number(movie.songsRating) || 0,
      songReason: movie.songReason || "",
      audiencePopularityScore: Number(movie.audiencePopularityScore) || 0,
      audiencePopularityReason: movie.audiencePopularityReason || "",
      plotRatingReason: movie.plotRatingReason || "",
      plotRating: Number(movie.plotRating) || 0,
      filmGenre: movie.FilmGenre
        ? [movie.FilmGenre]
        : movie.genres
        ? movie.genres.split(",")
        : [],
      movie_name: movie.FilmName || movie.movie_name || null,
      budget_score: Number(movie.budgetScore || movie.budget_score) || 0,
      Total_Score_s6b3: (() => {
        const score = Number(
          movie.classificationScore ||
            movie.Total_Score_s6b3 ||
            movie.Total_Score
        );
        if (!Number.isFinite(score)) {
          console.warn(
            `Invalid Total_Score_s6b3 for ${movie.FilmCommonName}: ` +
              `classificationScore=${movie.classificationScore}, ` +
              `Total_Score_s6b3=${movie.Total_Score_s6b3}, ` +
              `Total_Score=${movie.Total_Score}`
          );
          return 0;
        }
        return score;
      })(),
      classification_s6b3: (
        movie.classificationLabel ||
        movie.classification_s6b3 ||
        movie.classification_s3 ||
        "regular"
      ).toLowerCase(),
      revenue_label: (
        movie.revenue_label ||
        movie.revenue_label5 ||
        movie.revenue_label50 ||
        movie.classificationLabel ||
        movie.Revenue_Label ||
        "regular"
      ).toLowerCase(),
      FilmName: movie.FilmName || "",
      FilmId: Number(movie.FilmId) || 0,
      FilmCommonCode: Number(movie.FilmCommonCode) || 0,
      FilmLang: movie.FilmLang || "",
      FilmGenre: movie.FilmGenre || movie.genres || "",
      FilmStars: movie.FilmStars || movie.movie_cast || "",
      FilmRelDate:
        movie.FilmRelDate || movie.release_date || movie.Release_year || "",
      FilmCert: movie.FilmCert || "",
      FilmDistExh: movie.FilmDistExh || "",
      FilmFormat: movie.FilmFormat || "",
      FilmSound: movie.FilmSound || "",
      FilmSAPId: movie.FilmSAPId || "",
      FilmRunTime: Number(movie.FilmRunTime) || 0,
      ProductionHouse: movie.ProductionHouse || null,
      FilmPlot: movie.FilmPlot || null,
      FilmOriginalLang:
        movie.FilmOriginalLang || movie.original_language_name || null,
      DubbedLang: movie.DubbedLang || null,
      Producer: movie.Producer || null,
      Director: movie.Director || null,
      IsMetadataFetched: movie.IsMetadataFetched || null,
      ImdbId: movie.ImdbId || null,
      InsertedAt: movie.InsertedAt || null,
      FilmPosterUrl: movie.FilmPosterUrl || null,
    };

    if (isHistoric) {
      const historicMovie: HistoricMovieDetails = {
        ...baseMovie,
        total_revenue: parseFloat(movie.total_revenue) || 0,
        total_seats_sold: Number(movie.total_seats_sold) || 0,
        seats_alloted: Number(movie.seats_alloted) || 0,
        total_shows_for_movie: Number(movie.total_shows_for_movie) || 0,
        total_shows_across_city: Number(movie.total_shows_across_city) || 0,
        original_language_name:
          movie.original_language_name || movie.FilmOriginalLang || "",
        genres: movie.genres || movie.FilmGenre || "",
        movie_cast: movie.movie_cast || movie.FilmStars || "",
        revenue_per_show:
          parseFloat(movie.revenue_per_show || movie.Rev_per_show) || 0,
        revenue_label: (
          movie.revenue_label ||
          movie.revenue_label5 ||
          movie.revenue_label50 ||
          movie.classificationLabel ||
          movie.Revenue_Label ||
          "regular"
        ).toLowerCase() as HistoricMovieDetails["revenue_label"],
        seatsold_label: movie.seatsold_label || "",
        ratio_label: movie.ratio_label || "",
      };
      // Type guard to ensure T is HistoricMovieDetails
      if (isHistoricMovieDetails<T>()) {
        return historicMovie as unknown as T;
      }
      throw new Error(
        "Type T must be HistoricMovieDetails when isHistoric is true"
      );
    }

    return baseMovie as T;
  });
};

// Type guard for HistoricMovieDetails
function isHistoricMovieDetails<T extends BaseMovieDetails>(): boolean {
  return true;
}
