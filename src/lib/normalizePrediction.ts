import { Prediction } from "@/types/Prediction";

export function normalizePrediction(raw: any): Prediction {
  const features = raw.features;
  const meta = raw.meta;

  return {
    features: {
      directorRating: Number(features.directorRating),
      directorReason: features.directorReason,
      actorRating: Number(features.actorRating),
      actorReason: features.actorReason,
      producerRating: Number(features.producerRating),
      producerReason: features.producerReason,
      musicDirectorRating: Number(
        features.musicDirectorRating ??
          features.musicDirectorRating21 ??
          features.musicdirectorrating29
      ),
      musicDirectorReason: features.musicDirectorReason,
      sentimentScore: Number(features.sentimentScore),
      sentimentReason: features.sentimentReason,
      isControversial: features.isControversial,
      controversialReason: features.controversialReason,
      isHistoric: features.isHistoric,
      historicTopic: features.historicTopic,
      hasStereotypes: features.hasStereotypes,
      stereotypesReason: features.stereotypesReason,
      isReligious: features.isReligious,
      religiousTopic: features.religiousTopic,
      isPolitical: features.isPolitical,
      politicalTopic: features.politicalTopic,
      isSensitive: features.isSensitive,
      sensitiveReason: features.sensitiveReason,
      isPatriotic: features.isPatriotic,
      patrioticTopic: features.patrioticTopic,
      songsRating: Number(features.songsRating),
      songReason: features.songReason,
      audiencePopularityScore: Number(features.audiencePopularityScore),
      audiencePopularityReason: features.audiencePopularityReason,
      FilmCommonName: features.FilmCommonName,
      plotRatingReason: features.plotRatingReason,
      plotRating: Number(features.plotRating),
      filmGenre: features.filmGenre ?? features.FilmGenre,
      movie_name: features.movie_name,
      budget_score: Number(features.budget_score),
      revenue_label: features.revenue_label,
      Total_Score_s6b3: Number(
        features.Total_Score_s6b3 ?? features.Total_Score
      ),
      classification_s6b3:
        features.classification_s6b3 ?? features.classification_label,
    },
    meta: {
      FilmStars: meta.FilmStars,
      ProductionHouse: meta.ProductionHouse,
      FilmRunTime: Number(meta.FilmRunTime),
      FilmPosterUrl: meta.FilmPosterUrl,
    },
  };
}
