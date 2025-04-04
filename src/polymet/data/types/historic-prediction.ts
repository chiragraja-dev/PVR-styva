export interface HISTORIC_PREDICT {
  FilmCommonName: string;
  total_revenue: number;
  total_seats_sold: number;
  seats_alloted: number;
  total_shows_for_movie: number;
  total_shows_across_city: number;
  original_language_name: string;
  genres: string;
  movie_cast: string;
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
  plotRatingReason: string;
  plotRating: number;
  filmGenre: string;
  budget_score: number;
  movie_name: string;
  Total_Score_s6b3: number;
  classification_s6b3: string;
  revenue_per_show: number;
  revenue_label: string;
  seatsold_label: string;
  ratio_label: string;
}

// Example usage:
export const HISTORIC_PREDICTION: HISTORIC_PREDICT[] = [
  {
    FilmCommonName: "Aazam",
    total_revenue: 154166.0,
    total_seats_sold: 552.0,
    seats_alloted: 148876.0,
    total_shows_for_movie: 6.0,
    total_shows_across_city: 594.0,
    original_language_name: "Hindi",
    genres: "'JIMMY SHEIRGILL'",
    movie_cast: "'JIMMY SHEIRGILL'",
    directorRating: 70,
    directorReason:
      "Shravan Tiwari has limited prior high-profile records, so while the trailer and narrative execution look promising, the lack of a proven blockbuster streak keeps the rating moderate.",
    actorRating: 75,
    actorReason:
      "Jimmy Shergill is widely appreciated for his versatility and consistent performances; while his box office numbers may not put him among the very top, audience admiration is clear.",
    producerRating: 70,
    producerReason:
      "There isn't extensive data on MB SHYANI's recent productions, so based on available reputation and moderate past success, a middle-of-the-road rating is given.",
    musicDirectorRating: 65,
    musicDirectorReason:
      "Mentions of the background score are limited and moderately positive, but the music isn't a standout feature, leading to a somewhat lower score.",
    sentimentScore: 80,
    sentimentReason:
      "The overwhelming tone in the comments is positive with viewers praising the ensemble cast (especially Jimmy Shergill) and the intriguing underworld theme, even though a few minor criticisms (like predictability or editing issues) were noted.",
    isControversial: "No",
    controversialReason:
      "The film has underworld violence but lacks explicit gore or excessive brutality that would trigger major controversy.",
    isHistoric: "No",
    historicTopic: "None",
    hasStereotypes: "Yes",
    stereotypesReason:
      "The portrayal of mafia dons and underworld figures follows typical, sometimes exaggerated, gangster archetypes that can reinforce common stereotypes.",
    isReligious: "No",
    religiousTopic: "None",
    isPolitical: "No",
    politicalTopic: "None",
    isSensitive: "No",
    sensitiveReason:
      "There are no graphic depictions of sexual violence or other sensitive traumatic events; the content is more in the realm of gangster drama.",
    isPatriotic: "No",
    patrioticTopic: "None",
    songsRating: 70,
    songReason:
      "The film's design emphasizes a gritty, underworld feel with minimal song-and-dance elements; the background score is noted modestly but isn't a major selling point.",
    audiencePopularityScore: 85,
    audiencePopularityReason:
      "High viewer anticipation is evident from numerous positive comments and excitement about the cast and storyline, suggesting strong theatrical pull.",
    plotRatingReason:
      "The storyline of an underworld power struggle, family betrayal, and a ticking clock creates an engaging and layered narrative with the potential for unexpected twists and strong character dynamics.",
    plotRating: 80,
    filmGenre: "CRIME,MYSTERY",
    budget_score: 4.0,
    movie_name: "Aazam",
    Total_Score_s6b3: 62.0,
    classification_s6b3: "regular",
    revenue_per_show: 25694.333333333332,
    revenue_label: "regular",
    seatsold_label: "regular",
    ratio_label: "regular",
  },
  {
    FilmCommonName: "Aazam",
    total_revenue: 154166.0,
    total_seats_sold: 552.0,
    seats_alloted: 148876.0,
    total_shows_for_movie: 6.0,
    total_shows_across_city: 594.0,
    original_language_name: "Hindi",
    genres: "'JIMMY SHEIRGILL'",
    movie_cast: "'JIMMY SHEIRGILL'",
    directorRating: 70,
    directorReason:
      "Shravan Tiwari has limited prior high-profile records, so while the trailer and narrative execution look promising, the lack of a proven blockbuster streak keeps the rating moderate.",
    actorRating: 75,
    actorReason:
      "Jimmy Shergill is widely appreciated for his versatility and consistent performances; while his box office numbers may not put him among the very top, audience admiration is clear.",
    producerRating: 70,
    producerReason:
      "There isn't extensive data on MB SHYANI's recent productions, so based on available reputation and moderate past success, a middle-of-the-road rating is given.",
    musicDirectorRating: 65,
    musicDirectorReason:
      "Mentions of the background score are limited and moderately positive, but the music isn't a standout feature, leading to a somewhat lower score.",
    sentimentScore: 80,
    sentimentReason:
      "The overwhelming tone in the comments is positive with viewers praising the ensemble cast (especially Jimmy Shergill) and the intriguing underworld theme, even though a few minor criticisms (like predictability or editing issues) were noted.",
    isControversial: "No",
    controversialReason:
      "The film has underworld violence but lacks explicit gore or excessive brutality that would trigger major controversy.",
    isHistoric: "No",
    historicTopic: "None",
    hasStereotypes: "Yes",
    stereotypesReason:
      "The portrayal of mafia dons and underworld figures follows typical, sometimes exaggerated, gangster archetypes that can reinforce common stereotypes.",
    isReligious: "No",
    religiousTopic: "None",
    isPolitical: "No",
    politicalTopic: "None",
    isSensitive: "No",
    sensitiveReason:
      "There are no graphic depictions of sexual violence or other sensitive traumatic events; the content is more in the realm of gangster drama.",
    isPatriotic: "No",
    patrioticTopic: "None",
    songsRating: 70,
    songReason:
      "The film's design emphasizes a gritty, underworld feel with minimal song-and-dance elements; the background score is noted modestly but isn't a major selling point.",
    audiencePopularityScore: 85,
    audiencePopularityReason:
      "High viewer anticipation is evident from numerous positive comments and excitement about the cast and storyline, suggesting strong theatrical pull.",
    plotRatingReason:
      "The storyline of an underworld power struggle, family betrayal, and a ticking clock creates an engaging and layered narrative with the potential for unexpected twists and strong character dynamics.",
    plotRating: 80,
    filmGenre: "CRIME,MYSTERY",
    budget_score: 4.0,
    movie_name: "Aazam",
    Total_Score_s6b3: 62.0,
    classification_s6b3: "regular",
    revenue_per_show: 25694.333333333332,
    revenue_label: "regular",
    seatsold_label: "regular",
    ratio_label: "regular",
  },
  {
    FilmCommonName: "Aazam",
    total_revenue: 154166.0,
    total_seats_sold: 552.0,
    seats_alloted: 148876.0,
    total_shows_for_movie: 6.0,
    total_shows_across_city: 594.0,
    original_language_name: "Hindi",
    genres: "'JIMMY SHEIRGILL'",
    movie_cast: "'JIMMY SHEIRGILL'",
    directorRating: 70,
    directorReason:
      "Shravan Tiwari has limited prior high-profile records, so while the trailer and narrative execution look promising, the lack of a proven blockbuster streak keeps the rating moderate.",
    actorRating: 75,
    actorReason:
      "Jimmy Shergill is widely appreciated for his versatility and consistent performances; while his box office numbers may not put him among the very top, audience admiration is clear.",
    producerRating: 70,
    producerReason:
      "There isn't extensive data on MB SHYANI's recent productions, so based on available reputation and moderate past success, a middle-of-the-road rating is given.",
    musicDirectorRating: 65,
    musicDirectorReason:
      "Mentions of the background score are limited and moderately positive, but the music isn't a standout feature, leading to a somewhat lower score.",
    sentimentScore: 80,
    sentimentReason:
      "The overwhelming tone in the comments is positive with viewers praising the ensemble cast (especially Jimmy Shergill) and the intriguing underworld theme, even though a few minor criticisms (like predictability or editing issues) were noted.",
    isControversial: "No",
    controversialReason:
      "The film has underworld violence but lacks explicit gore or excessive brutality that would trigger major controversy.",
    isHistoric: "No",
    historicTopic: "None",
    hasStereotypes: "Yes",
    stereotypesReason:
      "The portrayal of mafia dons and underworld figures follows typical, sometimes exaggerated, gangster archetypes that can reinforce common stereotypes.",
    isReligious: "No",
    religiousTopic: "None",
    isPolitical: "No",
    politicalTopic: "None",
    isSensitive: "No",
    sensitiveReason:
      "There are no graphic depictions of sexual violence or other sensitive traumatic events; the content is more in the realm of gangster drama.",
    isPatriotic: "No",
    patrioticTopic: "None",
    songsRating: 70,
    songReason:
      "The film's design emphasizes a gritty, underworld feel with minimal song-and-dance elements; the background score is noted modestly but isn't a major selling point.",
    audiencePopularityScore: 85,
    audiencePopularityReason:
      "High viewer anticipation is evident from numerous positive comments and excitement about the cast and storyline, suggesting strong theatrical pull.",
    plotRatingReason:
      "The storyline of an underworld power struggle, family betrayal, and a ticking clock creates an engaging and layered narrative with the potential for unexpected twists and strong character dynamics.",
    plotRating: 80,
    filmGenre: "CRIME,MYSTERY",
    budget_score: 4.0,
    movie_name: "Aazam",
    Total_Score_s6b3: 62.0,
    classification_s6b3: "regular",
    revenue_per_show: 25694.333333333332,
    revenue_label: "regular",
    seatsold_label: "regular",
    ratio_label: "regular",
  },
];
