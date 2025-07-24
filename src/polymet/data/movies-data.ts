export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  debutDate: string;
  category:
    | "Mega Blockbuster"
    | "Blockbuster"
    | "Hit"
    | "Average"
    | "Below Average";
  score: number;
  genre: string[];
  language: string;
  director: string;
  cast: string[];
  runtime: number; // in minutes
  synopsis: string;
  productionBudget: number; // in millions
  marketingBudget: number; // in millions
  socialMediaBuzz: number; // score out of 100
  preReleaseBookings: number; // percentage
  competingReleases: string[];
  weekendType: "Holiday" | "Regular" | "Extended Weekend";
  historicalPerformance: {
    similarMovies: {
      title: string;
      openingRevenue: number; // in millions
    }[];
  };
  predictedRevenue: {
    opening: number; // in millions
    lifetime: number; // in millions
  };
  pricingRecommendation: {
    premium: number;
    standard: number;
    budget: number;
  };
}

export const MOVIES_DATA: Movie[] = [
  {
    id: "m001",
    title: "Eternal Horizon",
    posterUrl: "https://picsum.photos/seed/movie1/300/450",
    debutDate: "2024-12-15",
    category: "Mega Blockbuster",
    score: 92,
    genre: ["Sci-Fi", "Adventure"],
    language: "English",
    director: "Christopher Nolan",
    cast: ["Tom Hardy", "Florence Pugh", "Idris Elba"],
    runtime: 165,
    synopsis:
      "A groundbreaking journey through space and time as humanity faces its greatest challenge yet.",
    productionBudget: 220,
    marketingBudget: 150,
    socialMediaBuzz: 94,
    preReleaseBookings: 85,
    competingReleases: ["Star Voyager", "The Last Mission"],
    weekendType: "Holiday",
    historicalPerformance: {
      similarMovies: [
        { title: "Interstellar", openingRevenue: 47.5 },
        { title: "Inception", openingRevenue: 62.8 },
      ],
    },
    predictedRevenue: {
      opening: 95,
      lifetime: 850,
    },
    pricingRecommendation: {
      premium: 599,
      standard: 399,
      budget: 249,
    },
  },
  {
    id: "m002",
    title: "Whispers in the Dark",
    posterUrl: "https://picsum.photos/seed/movie2/300/450",
    debutDate: "2023-11-24",
    category: "Hit",
    score: 78,
    genre: ["Horror", "Thriller"],
    language: "English",
    director: "Jordan Peele",
    cast: ["Lupita Nyong'o", "Daniel Kaluuya", "Elisabeth Moss"],
    runtime: 118,
    synopsis:
      "A family vacation turns into a nightmare when they discover the town's sinister secret.",
    productionBudget: 35,
    marketingBudget: 40,
    socialMediaBuzz: 82,
    preReleaseBookings: 62,
    competingReleases: ["The Haunting", "Night Terrors"],
    weekendType: "Regular",
    historicalPerformance: {
      similarMovies: [
        { title: "Get Out", openingRevenue: 33.4 },
        { title: "Us", openingRevenue: 71.1 },
      ],
    },
    predictedRevenue: {
      opening: 45,
      lifetime: 180,
    },
    pricingRecommendation: {
      premium: 499,
      standard: 349,
      budget: 199,
    },
  },
  {
    id: "m003",
    title: "The Last Kingdom",
    posterUrl: "https://picsum.photos/seed/movie3/300/450",
    debutDate: "2024-01-05",
    category: "Blockbuster",
    score: 85,
    genre: ["Action", "Fantasy"],
    language: "English",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Oscar Isaac"],
    runtime: 155,
    synopsis:
      "An epic tale of courage and betrayal as kingdoms clash in a battle for the ultimate power.",
    productionBudget: 185,
    marketingBudget: 120,
    socialMediaBuzz: 88,
    preReleaseBookings: 76,
    competingReleases: ["Dragon's Fury", "The Iron Throne"],
    weekendType: "Regular",
    historicalPerformance: {
      similarMovies: [
        { title: "Dune", openingRevenue: 41 },
        { title: "The Lord of the Rings", openingRevenue: 72.6 },
      ],
    },
    predictedRevenue: {
      opening: 75,
      lifetime: 650,
    },
    pricingRecommendation: {
      premium: 549,
      standard: 379,
      budget: 229,
    },
  },
  {
    id: "m004",
    title: "Love in Paris",
    posterUrl: "https://picsum.photos/seed/movie4/300/450",
    debutDate: "2023-12-22",
    category: "Average",
    score: 65,
    genre: ["Romance", "Comedy"],
    language: "English",
    director: "Nancy Meyers",
    cast: ["Emma Stone", "Ryan Gosling", "Jennifer Lawrence"],
    runtime: 112,
    synopsis:
      "Two strangers meet in the city of love and find themselves on an unexpected journey together.",
    productionBudget: 45,
    marketingBudget: 35,
    socialMediaBuzz: 72,
    preReleaseBookings: 48,
    competingReleases: ["Summer Romance", "The Date"],
    weekendType: "Holiday",
    historicalPerformance: {
      similarMovies: [
        { title: "La La Land", openingRevenue: 9.2 },
        { title: "The Notebook", openingRevenue: 13.5 },
      ],
    },
    predictedRevenue: {
      opening: 25,
      lifetime: 120,
    },
    pricingRecommendation: {
      premium: 449,
      standard: 299,
      budget: 179,
    },
  },
  {
    id: "m005",
    title: "The Heist",
    posterUrl: "https://picsum.photos/seed/movie5/300/450",
    debutDate: "2024-02-09",
    category: "Hit",
    score: 79,
    genre: ["Crime", "Drama"],
    language: "English",
    director: "Steven Soderbergh",
    cast: ["Brad Pitt", "George Clooney", "Matt Damon"],
    runtime: 128,
    synopsis:
      "A team of skilled thieves plan the most daring heist in history, targeting the world's most secure vault.",
    productionBudget: 70,
    marketingBudget: 60,
    socialMediaBuzz: 81,
    preReleaseBookings: 59,
    competingReleases: ["Bank Job", "The Getaway"],
    weekendType: "Regular",
    historicalPerformance: {
      similarMovies: [
        { title: "Ocean's Eleven", openingRevenue: 38.1 },
        { title: "Heat", openingRevenue: 8.4 },
      ],
    },
    predictedRevenue: {
      opening: 42,
      lifetime: 195,
    },
    pricingRecommendation: {
      premium: 499,
      standard: 349,
      budget: 199,
    },
  },
  {
    id: "m006",
    title: "Jungle Rumble",
    posterUrl: "https://picsum.photos/seed/movie6/300/450",
    debutDate: "2023-12-08",
    category: "Below Average",
    score: 52,
    genre: ["Animation", "Family"],
    language: "English",
    director: "Jennifer Yuh Nelson",
    cast: ["Jack Black", "Kevin Hart", "Karen Gillan"],
    runtime: 95,
    synopsis:
      "A group of misfit animals must band together to save their jungle home from destruction.",
    productionBudget: 90,
    marketingBudget: 85,
    socialMediaBuzz: 61,
    preReleaseBookings: 35,
    competingReleases: ["Animal Kingdom", "Wild Adventures"],
    weekendType: "Regular",
    historicalPerformance: {
      similarMovies: [
        { title: "Madagascar", openingRevenue: 47.2 },
        { title: "The Jungle Book", openingRevenue: 103.3 },
      ],
    },
    predictedRevenue: {
      opening: 18,
      lifetime: 85,
    },
    pricingRecommendation: {
      premium: 399,
      standard: 249,
      budget: 149,
    },
  },
  {
    id: "m007",
    title: "Quantum Paradox",
    posterUrl: "https://picsum.photos/seed/movie7/300/450",
    debutDate: "2024-01-19",
    category: "Blockbuster",
    score: 88,
    genre: ["Sci-Fi", "Mystery"],
    language: "English",
    director: "Alex Garland",
    cast: ["Oscar Isaac", "Alicia Vikander", "Domhnall Gleeson"],
    runtime: 135,
    synopsis:
      "A brilliant physicist discovers a way to manipulate reality, but at a devastating cost to the fabric of existence.",
    productionBudget: 120,
    marketingBudget: 100,
    socialMediaBuzz: 86,
    preReleaseBookings: 72,
    competingReleases: ["Time Warp", "The Multiverse"],
    weekendType: "Regular",
    historicalPerformance: {
      similarMovies: [
        { title: "Ex Machina", openingRevenue: 0.38 },
        { title: "Arrival", openingRevenue: 24.1 },
      ],
    },
    predictedRevenue: {
      opening: 65,
      lifetime: 480,
    },
    pricingRecommendation: {
      premium: 549,
      standard: 379,
      budget: 229,
    },
  },
  {
    id: "m008",
    title: "Legends of Glory",
    posterUrl: "https://picsum.photos/seed/movie8/300/450",
    debutDate: "2024-11-17",
    category: "Mega Blockbuster",
    score: 95,
    genre: ["Action", "Superhero"],
    language: "English",
    director: "Ryan Coogler",
    cast: ["Chadwick Boseman", "Michael B. Jordan", "Letitia Wright"],
    runtime: 150,
    synopsis:
      "The world's greatest heroes must unite to stop an ancient threat that could destroy the universe.",
    productionBudget: 250,
    marketingBudget: 180,
    socialMediaBuzz: 97,
    preReleaseBookings: 92,
    competingReleases: ["The Avenger", "Power Squad"],
    weekendType: "Extended Weekend",
    historicalPerformance: {
      similarMovies: [
        { title: "Black Panther", openingRevenue: 202 },
        { title: "Avengers: Endgame", openingRevenue: 357.1 },
      ],
    },
    predictedRevenue: {
      opening: 120,
      lifetime: 1200,
    },
    pricingRecommendation: {
      premium: 599,
      standard: 399,
      budget: 249,
    },
  },
  {
    id: "m009",
    title: "Desert Storm",
    posterUrl: "https://picsum.photos/seed/movie9/300/450",
    debutDate: "2024-02-23",
    category: "Hit",
    score: 76,
    genre: ["War", "Drama"],
    language: "English",
    director: "Kathryn Bigelow",
    cast: ["Jeremy Renner", "Anthony Mackie", "Brian Geraghty"],
    runtime: 140,
    synopsis:
      "A special forces team navigates the complexities of modern warfare in a hostile desert environment.",
    productionBudget: 80,
    marketingBudget: 65,
    socialMediaBuzz: 79,
    preReleaseBookings: 58,
    competingReleases: ["Battlefield", "War Heroes"],
    weekendType: "Regular",
    historicalPerformance: {
      similarMovies: [
        { title: "The Hurt Locker", openingRevenue: 0.145 },
        { title: "American Sniper", openingRevenue: 89.3 },
      ],
    },
    predictedRevenue: {
      opening: 38,
      lifetime: 210,
    },
    pricingRecommendation: {
      premium: 499,
      standard: 349,
      budget: 199,
    },
  },
  {
    id: "m010",
    title: "Midnight Mystery",
    posterUrl: "https://picsum.photos/seed/movie10/300/450",
    debutDate: "2023-12-29",
    category: "Average",
    score: 68,
    genre: ["Mystery", "Thriller"],
    language: "English",
    director: "David Fincher",
    cast: ["Jake Gyllenhaal", "Rosamund Pike", "Ben Affleck"],
    runtime: 132,
    synopsis:
      "A detective races against time to solve a series of cryptic murders that seem to follow an ancient pattern.",
    productionBudget: 60,
    marketingBudget: 50,
    socialMediaBuzz: 74,
    preReleaseBookings: 51,
    competingReleases: ["The Detective", "Murder Mystery"],
    weekendType: "Holiday",
    historicalPerformance: {
      similarMovies: [
        { title: "Gone Girl", openingRevenue: 37.5 },
        { title: "Seven", openingRevenue: 13.9 },
      ],
    },
    predictedRevenue: {
      opening: 32,
      lifetime: 145,
    },
    pricingRecommendation: {
      premium: 449,
      standard: 299,
      budget: 179,
    },
  },
  {
    id: "m011",
    title: "Galactic Odyssey",
    posterUrl: "https://picsum.photos/seed/movie11/300/450",
    debutDate: "2024-06-20",
    category: "Blockbuster",
    score: 87,
    genre: ["Sci-Fi", "Adventure"],
    language: "English",
    director: "James Cameron",
    cast: ["Zoe Saldana", "Sam Worthington", "Sigourney Weaver"],
    runtime: 162,
    synopsis:
      "A journey to the farthest reaches of the galaxy reveals secrets that could change the course of human history.",
    productionBudget: 230,
    marketingBudget: 160,
    socialMediaBuzz: 89,
    preReleaseBookings: 78,
    competingReleases: ["Star Frontier", "Cosmic Journey"],
    weekendType: "Regular",
    historicalPerformance: {
      similarMovies: [
        { title: "Avatar", openingRevenue: 77.0 },
        { title: "Star Wars: The Force Awakens", openingRevenue: 247.9 },
      ],
    },
    predictedRevenue: {
      opening: 85,
      lifetime: 780,
    },
    pricingRecommendation: {
      premium: 549,
      standard: 379,
      budget: 229,
    },
  },
  {
    id: "m012",
    title: "Urban Legends",
    posterUrl: "https://picsum.photos/seed/movie12/300/450",
    debutDate: "2024-04-12",
    category: "Hit",
    score: 75,
    genre: ["Horror", "Mystery"],
    language: "English",
    director: "Ari Aster",
    cast: ["Florence Pugh", "Jack Reynor", "William Jackson Harper"],
    runtime: 127,
    synopsis:
      "A group of college students discover that the urban legends they've been studying are coming to life with deadly consequences.",
    productionBudget: 40,
    marketingBudget: 35,
    socialMediaBuzz: 77,
    preReleaseBookings: 56,
    competingReleases: ["The Haunting", "Nightmare Alley"],
    weekendType: "Regular",
    historicalPerformance: {
      similarMovies: [
        { title: "Midsommar", openingRevenue: 6.6 },
        { title: "Hereditary", openingRevenue: 13.6 },
      ],
    },
    predictedRevenue: {
      opening: 35,
      lifetime: 160,
    },
    pricingRecommendation: {
      premium: 499,
      standard: 349,
      budget: 199,
    },
  },
  {
    id: "m013",
    title: "Royal Heist",
    posterUrl: "https://picsum.photos/seed/movie13/300/450",
    debutDate: "2024-03-08",
    category: "Blockbuster",
    score: 83,
    genre: ["Action", "Crime"],
    language: "English",
    director: "Guy Ritchie",
    cast: ["Jason Statham", "Idris Elba", "Rosie Huntington-Whiteley"],
    runtime: 118,
    synopsis:
      "A former special forces operative assembles an elite team to pull off the most daring jewel heist in British history.",
    productionBudget: 95,
    marketingBudget: 80,
    socialMediaBuzz: 84,
    preReleaseBookings: 70,
    competingReleases: ["The Score", "Fast Money"],
    weekendType: "Regular",
    historicalPerformance: {
      similarMovies: [
        { title: "The Gentlemen", openingRevenue: 10.7 },
        { title: "Wrath of Man", openingRevenue: 8.1 },
      ],
    },
    predictedRevenue: {
      opening: 55,
      lifetime: 320,
    },
    pricingRecommendation: {
      premium: 549,
      standard: 379,
      budget: 229,
    },
  },
  {
    id: "m014",
    title: "Summer Dreams",
    posterUrl: "https://picsum.photos/seed/movie14/300/450",
    debutDate: "2024-05-17",
    category: "Average",
    score: 67,
    genre: ["Romance", "Drama"],
    language: "English",
    director: "Greta Gerwig",
    cast: ["Saoirse Ronan", "Timothée Chalamet", "Florence Pugh"],
    runtime: 108,
    synopsis:
      "A coming-of-age story about first love, heartbreak, and the transformative power of a summer that changes everything.",
    productionBudget: 35,
    marketingBudget: 30,
    socialMediaBuzz: 71,
    preReleaseBookings: 45,
    competingReleases: ["First Love", "The Graduate"],
    weekendType: "Regular",
    historicalPerformance: {
      similarMovies: [
        { title: "Little Women", openingRevenue: 16.8 },
        { title: "Lady Bird", openingRevenue: 4.1 },
      ],
    },
    predictedRevenue: {
      opening: 28,
      lifetime: 135,
    },
    pricingRecommendation: {
      premium: 449,
      standard: 299,
      budget: 179,
    },
  },
  {
    id: "m015",
    title: "Mystic Mountain",
    posterUrl: "https://picsum.photos/seed/movie15/300/450",
    debutDate: "2024-07-26",
    category: "Hit",
    score: 80,
    genre: ["Adventure", "Fantasy"],
    language: "English",
    director: "Guillermo del Toro",
    cast: ["Tom Holland", "Daisy Ridley", "John Boyega"],
    runtime: 145,
    synopsis:
      "A young explorer discovers a hidden world within a legendary mountain, filled with magical creatures and ancient secrets.",
    productionBudget: 110,
    marketingBudget: 90,
    socialMediaBuzz: 82,
    preReleaseBookings: 68,
    competingReleases: ["The Lost City", "Adventure Quest"],
    weekendType: "Regular",
    historicalPerformance: {
      similarMovies: [
        { title: "Pan's Labyrinth", openingRevenue: 0.6 },
        { title: "The Shape of Water", openingRevenue: 3.0 },
      ],
    },
    predictedRevenue: {
      opening: 48,
      lifetime: 240,
    },
    pricingRecommendation: {
      premium: 499,
      standard: 349,
      budget: 199,
    },
  },
];
