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
    posterUrl: "https://posters.movieposterdb.com/25_02/2025/3566834/l_a-minecraft-movie-movie-poster_0be81db1.jpg";
  };
  meta: {
    FilmStars: string;
    ProductionHouse: string | null;
    FilmRunTime: number;
  };
}
