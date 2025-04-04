export interface PREDICT_DATA {
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
  isControversial: "Yes" | "No";
  controversialReason: string;
  isHistoric: "Yes" | "No";
  historicTopic: string;
  hasStereotypes: "Yes" | "No";
  stereotypesReason: string;
  isReligious: "Yes" | "No";
  religiousTopic: string;
  isPolitical: "Yes" | "No";
  politicalTopic: string;
  isSensitive: "Yes" | "No";
  sensitiveReason: string;
  isPatriotic: "Yes" | "No";
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
  classification_s6b3: string;
}

// Example usage:
export const PREDICTION_DATA: PREDICT_DATA[] = [
  {
    directorRating: 90,
    directorReason:
      "A.R. Murugadoss has a strong track record with recent blockbuster films, positioning him as a highly successful director.",
    actorRating: 90,
    actorReason:
      "Salman Khan is among the all-time top Bollywood actors with consistent box-office success, driving a high rating.",
    producerRating: 90,
    producerReason:
      "Nadiadwala Grandson Entertainment has a history of producing blockbuster films, supporting a high success score.",
    musicDirectorRating: 75,
    musicDirectorReason:
      "With no explicit mention of music director achievements in the input, a moderately positive score is assumed based on industry reputation.",
    sentimentScore: 90,
    sentimentReason:
      "YouTube comments are overwhelmingly positive with repeated heart and celebration emojis and strong support for Salman Khan, suggesting very high audience excitement.",
    isControversial: "No",
    controversialReason:
      "The available data does not include excessive violence, graphic content, or explicit ethical concerns.",
    isHistoric: "No",
    historicTopic:
      "There are no significant historical events or biographical details referenced in the content.",
    hasStereotypes: "No",
    stereotypesReason:
      "There is no indication of negative or stereotypical portrayals of any groups in the comments or plot outline.",
    isReligious: "No",
    religiousTopic:
      "The film does not contain any prominent religious content or depiction of religious practices.",
    isPolitical: "Yes",
    politicalTopic:
      "The plot revolving around a fiery youth fighting corruption and challenging the status quo introduces politically charged themes.",
    isSensitive: "No",
    sensitiveReason:
      "The film does not involve sensitive topics like sexual violence or graphic depictions that would require special caution.",
    isPatriotic: "No",
    patrioticTopic:
      "While the film centers on fighting injustice, it does not specifically glorify military or nationalistic themes.",
    songsRating: 75,
    songReason:
      "No specific music praises appear in the comments, but given the production houses pedigree, the songs are presumed to be solid though not highlighted exceptionally.",
    audiencePopularityScore: 90,
    audiencePopularityReason:
      "The enthusiastic and high-volume positive reviews suggest that the audience is highly anticipating the theatrical experience.",
    FilmCommonName: "SIKANDAR",
    plotRatingReason:
      "The plot of a youth standing up against corruption is engaging and timely; while formulaic, it is likely to appeal to audiences and generate box-office interest.",
    plotRating: 80,
    filmGenre: "Action",
    movie_name: "SIKANDAR",
    budget_score: 100,
    Total_Score_s6b3: 90.0,
    classification_s6b3: "blockbuster",
  },
  {
    directorRating: 90,
    directorReason:
      "A.R. Murugadoss has a strong track record with recent blockbuster films, positioning him as a highly successful director.",
    actorRating: 90,
    actorReason:
      "Salman Khan is among the all-time top Bollywood actors with consistent box-office success, driving a high rating.",
    producerRating: 90,
    producerReason:
      "Nadiadwala Grandson Entertainment has a history of producing blockbuster films, supporting a high success score.",
    musicDirectorRating: 75,
    musicDirectorReason:
      "With no explicit mention of music director achievements in the input, a moderately positive score is assumed based on industry reputation.",
    sentimentScore: 90,
    sentimentReason:
      "YouTube comments are overwhelmingly positive with repeated heart and celebration emojis and strong support for Salman Khan, suggesting very high audience excitement.",
    isControversial: "No",
    controversialReason:
      "The available data does not include excessive violence, graphic content, or explicit ethical concerns.",
    isHistoric: "No",
    historicTopic:
      "There are no significant historical events or biographical details referenced in the content.",
    hasStereotypes: "No",
    stereotypesReason:
      "There is no indication of negative or stereotypical portrayals of any groups in the comments or plot outline.",
    isReligious: "No",
    religiousTopic:
      "The film does not contain any prominent religious content or depiction of religious practices.",
    isPolitical: "Yes",
    politicalTopic:
      "The plot revolving around a fiery youth fighting corruption and challenging the status quo introduces politically charged themes.",
    isSensitive: "No",
    sensitiveReason:
      "The film does not involve sensitive topics like sexual violence or graphic depictions that would require special caution.",
    isPatriotic: "No",
    patrioticTopic:
      "While the film centers on fighting injustice, it does not specifically glorify military or nationalistic themes.",
    songsRating: 75,
    songReason:
      "No specific music praises appear in the comments, but given the production houses pedigree, the songs are presumed to be solid though not highlighted exceptionally.",
    audiencePopularityScore: 90,
    audiencePopularityReason:
      "The enthusiastic and high-volume positive reviews suggest that the audience is highly anticipating the theatrical experience.",
    FilmCommonName: "SIKANDAR",
    plotRatingReason:
      "The plot of a youth standing up against corruption is engaging and timely; while formulaic, it is likely to appeal to audiences and generate box-office interest.",
    plotRating: 80,
    filmGenre: "Action",
    movie_name: "SIKANDAR",
    budget_score: 100,
    Total_Score_s6b3: 90.0,
    classification_s6b3: "blockbuster",
  },
  {
    directorRating: 90,
    directorReason:
      "A.R. Murugadoss has a strong track record with recent blockbuster films, positioning him as a highly successful director.",
    actorRating: 90,
    actorReason:
      "Salman Khan is among the all-time top Bollywood actors with consistent box-office success, driving a high rating.",
    producerRating: 90,
    producerReason:
      "Nadiadwala Grandson Entertainment has a history of producing blockbuster films, supporting a high success score.",
    musicDirectorRating: 75,
    musicDirectorReason:
      "With no explicit mention of music director achievements in the input, a moderately positive score is assumed based on industry reputation.",
    sentimentScore: 90,
    sentimentReason:
      "YouTube comments are overwhelmingly positive with repeated heart and celebration emojis and strong support for Salman Khan, suggesting very high audience excitement.",
    isControversial: "No",
    controversialReason:
      "The available data does not include excessive violence, graphic content, or explicit ethical concerns.",
    isHistoric: "No",
    historicTopic:
      "There are no significant historical events or biographical details referenced in the content.",
    hasStereotypes: "No",
    stereotypesReason:
      "There is no indication of negative or stereotypical portrayals of any groups in the comments or plot outline.",
    isReligious: "No",
    religiousTopic:
      "The film does not contain any prominent religious content or depiction of religious practices.",
    isPolitical: "Yes",
    politicalTopic:
      "The plot revolving around a fiery youth fighting corruption and challenging the status quo introduces politically charged themes.",
    isSensitive: "No",
    sensitiveReason:
      "The film does not involve sensitive topics like sexual violence or graphic depictions that would require special caution.",
    isPatriotic: "No",
    patrioticTopic:
      "While the film centers on fighting injustice, it does not specifically glorify military or nationalistic themes.",
    songsRating: 75,
    songReason:
      "No specific music praises appear in the comments, but given the production houses pedigree, the songs are presumed to be solid though not highlighted exceptionally.",
    audiencePopularityScore: 90,
    audiencePopularityReason:
      "The enthusiastic and high-volume positive reviews suggest that the audience is highly anticipating the theatrical experience.",
    FilmCommonName: "SIKANDAR",
    plotRatingReason:
      "The plot of a youth standing up against corruption is engaging and timely; while formulaic, it is likely to appeal to audiences and generate box-office interest.",
    plotRating: 80,
    filmGenre: "Action",
    movie_name: "SIKANDAR",
    budget_score: 100,
    Total_Score_s6b3: 90.0,
    classification_s6b3: "blockbuster",
  },
];
