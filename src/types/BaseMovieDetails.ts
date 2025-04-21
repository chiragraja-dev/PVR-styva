export interface BaseMovieDetails {
  FilmCommonName: string;
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
  plotRatingReason: string;
  plotRating: number;
  filmGenre: string[];
  movie_name: string | null;
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

  FilmName: string;
  FilmId: number;
  FilmCommonCode: number;
  FilmLang: string;
  FilmGenre: string;
  FilmStars: string;
  FilmRelDate: string;
  FilmCert: string;
  FilmDistExh: string;
  FilmFormat: string;
  FilmSound: string;
  FilmSAPId: string;
  FilmRunTime: number;
  ProductionHouse: string | null;
  FilmPlot: string | null;
  FilmOriginalLang: string | null;
  DubbedLang: string | null;
  Producer: string | null;
  Director: string | null;
  IsMetadataFetched: boolean | null;
  ImdbId: string | null;
  InsertedAt: string | null;
  FilmPosterUrl: string | null;
}
