export interface Prediction {
  features: {
    directorRating: number;
    directorReason: string;
    actorRating: number;
    actorReason: string;
    producerRating: number;
    producerReason: string;
    musicDirectorRating: number;
    musicDirectorReason: string;
    sentimentScore: number;
    sentimentReason: string;
    franchiseRating: number;
    franchiseRatingReason: string;
    isControversial: string;
    controversialReason: string;
    isHistoric: string;
    historicTopic: string;
    hasStereotypes: string;
    stereotypesReason: string;
    isReligious: string;
    religiousTopic: string;
    isPolitical: string;
    politicalTopic: string;
    isSensitive: string;
    sensitiveReason: string;
    isPatriotic: string;
    patrioticTopic: string;
    songsRating: number;
    songReason: string;
    audiencePopularityScore: number;
    audiencePopularityReason: string;
    FilmCommonName: string;
    plotRatingReason: string;
    plotRating: number;
    filmGenre: string;
    movie_name: string;
    budget_score: number;
    Total_Score_s6b3: number;
    classification_s6b3:
      | "regular"
      | "blockbuster"
      | "mega_blockbuster"
      | "popular"
      | "Below Average";
    revenue_label:
      | "regular"
      | "blockbuster"
      | "mega_blockbuster"
      | "popular"
      | "Below Average";
  };
  meta: {
    FilmStars: string;
    ProductionHouse: string | null;
    FilmRunTime: number;
    FilmPosterUrl: string | null;
  };
}
