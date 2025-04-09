import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import MovieDetailHeader from "@/polymet/components/movie-detail-header";
// import ScoreAttributeCard from "@/polymet/components/score-attribute-card";
// import MovieSynopsis from "@/polymet/components/movie-synopsis";
// import PricingRecommendationCard from "@/polymet/components/pricing-recommendation-card";
// import MovieCastList from "@/polymet/components/movie-cast-list";
// import CompetingReleasesCard from "@/polymet/components/competing-releases-card";
// import RevenuePredictionCard from "@/polymet/components/revenue-prediction-card";
// import SimplifiedPricingSection from "@/polymet/components/simplified-pricing-section";

import { fetchPrediction } from "@/services/movieService";
import { Prediction } from "@/types/Prediction";
import { HistoricPrediction } from "@/types/HistoricPrediction";
import { fetchHistoricPrediction } from "@/services/movieService";

import ScoreAnalysisSection from "../components/ScoreAnalysisSection";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function MovieDetailPage() {
  const { id: movieName } = useParams(); // This is FilmCommonName
  const query = useQuery();
  const mode = query.get("mode");
  const language = query.get("language") || "Hindi";
  const region = query.get("region") || "Mumbai";

  const [movie, setMovie] = useState<Prediction | HistoricPrediction>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setLoading(true);

        if (mode === "historic") {
          const historicPrediction = await fetchHistoricPrediction({
            movie: movieName!,
            language,
            region,
          });

          setMovie(historicPrediction as unknown as Prediction); // if type mismatch, cast
        } else {
          const prediction = await fetchPrediction({
            movie: movieName!,
            language,
            region,
          });

          setMovie(prediction);
        }
      } catch (error) {
        console.error("Failed to fetch movie data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [movieName, language, region, mode]);

  const isHistoricPrediction = (
    data: Prediction | HistoricPrediction
  ): data is HistoricPrediction => {
    return "total_revenue" in data;
  };

  if (loading) {
    return (
      <div
        className="animate-pulse space-y-8"
        data-pol-id="chqwgq"
        data-pol-file-name="movie-detail-page"
        data-pol-file-type="page"
      >
        <div
          className="h-8 w-48 bg-muted rounded"
          data-pol-id="6300np"
          data-pol-file-name="movie-detail-page"
          data-pol-file-type="page"
        ></div>
        <div
          className="flex flex-col md:flex-row gap-6"
          data-pol-id="tk30xe"
          data-pol-file-name="movie-detail-page"
          data-pol-file-type="page"
        >
          <div
            className="w-full max-w-[300px] aspect-[2/3] bg-muted rounded-lg"
            data-pol-id="q7kkap"
            data-pol-file-name="movie-detail-page"
            data-pol-file-type="page"
          ></div>
          <div
            className="flex-1 space-y-4"
            data-pol-id="taxk62"
            data-pol-file-name="movie-detail-page"
            data-pol-file-type="page"
          >
            <div
              className="h-10 w-3/4 bg-muted rounded"
              data-pol-id="edi1nm"
              data-pol-file-name="movie-detail-page"
              data-pol-file-type="page"
            ></div>
            <div
              className="h-6 w-1/2 bg-muted rounded"
              data-pol-id="b7mrso"
              data-pol-file-name="movie-detail-page"
              data-pol-file-type="page"
            ></div>
            <div
              className="h-20 w-full bg-muted rounded"
              data-pol-id="q046v0"
              data-pol-file-name="movie-detail-page"
              data-pol-file-type="page"
            ></div>
          </div>
        </div>
      </div>
    );
  }

  if (!movie) return null;

  // Generate mock score attributes with descriptions
  const scoreAttributes = movie
    ? [
        {
          title: "Actor Rating",
          score: movie.actorRating,
          description: movie.actorReason,
          tooltipText:
            "Measures the quality and audience reception of the cast's performance",
        },
        {
          title: "Director Rating",
          score: movie.directorRating,
          description: movie.directorReason,
          tooltipText:
            "Evaluates the director's reputation and previous work success",
        },
        {
          title: "Plot Rating",
          score: movie.plotRating,
          description: movie.plotRatingReason,
          tooltipText:
            "Assesses the quality, originality and audience appeal of the storyline",
        },
        {
          title: "Budget Score",
          score: movie.budget_score,
          description:
            "Based on estimated production and marketing investment.",
          tooltipText:
            "Evaluation of production and marketing budget relative to genre expectations",
        },
        {
          title: "Overall Sentiment",
          score: movie.sentimentScore,
          description: movie.sentimentReason,
          tooltipText:
            "Analysis of social media sentiment and audience reactions",
        },
        {
          title: "Audience Popularity",
          score: movie.audiencePopularityScore,
          description: movie.audiencePopularityReason,
          tooltipText:
            "Measures pre-release audience interest and popularity score",
        },
        {
          title: "Producer Rating",
          score: movie.producerRating,
          description: movie.producerReason,
          tooltipText:
            "Measures pre-release audience interest and popularity score",
        },
        {
          title: "Music Director Rating",
          score: movie.musicDirectorRating,
          description: movie.musicDirectorReason,
          tooltipText:
            "Measures pre-release audience interest and popularity score",
        },
        {
          title: "Songs Rating",
          score: movie.songsRating,
          description: movie.songReason,
          tooltipText:
            "Measures pre-release audience interest and popularity score",
        },
      ]
    : [];

  return (
    <div
      className="space-y-4"
      data-pol-id="at924k"
      data-pol-file-name="movie-detail-page"
      data-pol-file-type="page"
    >
      {/* Back button */}
      <div
        data-pol-id="iomnot"
        data-pol-file-name="movie-detail-page"
        data-pol-file-type="page"
      >
        <Link
          to="/"
          data-pol-id="12paj9"
          data-pol-file-name="movie-detail-page"
          data-pol-file-type="page"
        >
          <Button
            variant="ghost"
            className="pl-0 flex items-center gap-2"
            data-pol-id="hl4o28"
            data-pol-file-name="movie-detail-page"
            data-pol-file-type="page"
          >
            <ArrowLeftIcon
              className="h-4 w-4"
              data-pol-id="7fr2n3"
              data-pol-file-name="movie-detail-page"
              data-pol-file-type="page"
            />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      {/* Movie header */}
      {movie && (
        <MovieDetailHeader
          movie={movie}
          data-pol-id="udj1ct"
          data-pol-file-name="movie-detail-page"
          data-pol-file-type="page"
        />
      )}

      <Separator
        data-pol-id="s236ib"
        data-pol-file-name="movie-detail-page"
        data-pol-file-type="page"
      />

      <div>
        <h2
          className="text-2xl font-bold"
          data-pol-id="n2nr7t"
          data-pol-file-name="movie-detail-page"
          data-pol-file-type="page"
        >
          Score Analysis
        </h2>
        {movie && <ScoreAnalysisSection scoreAttributes={scoreAttributes} />}
      </div>

      {isHistoricPrediction(movie) && (
        <>
          <Separator
            data-pol-id="s236ib"
            data-pol-file-name="movie-detail-page"
            data-pol-file-type="page"
          />

          <div>
            <h2
              className="text-2xl font-bold"
              data-pol-id="n2nr7t"
              data-pol-file-name="movie-detail-page"
              data-pol-file-type="page"
            >
              Historic Revenue Overview
            </h2>

            {/* Historic-only fields */}
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="bg-green-50 rounded-xl p-4 shadow-sm">
                  <div className="text-base text-gray-500 mb-1">
                    Total Revenue
                  </div>
                  <div className="text-2xl font-bold text-green-700">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 2,
                    }).format(movie!.total_revenue)}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
                  <div className="text-base text-gray-500 mb-1">
                    Total Seats Sold
                  </div>
                  <div className="text-2xl font-bold text-blue-700">
                    {new Intl.NumberFormat("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(movie!.total_seats_sold)}
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 shadow-sm">
                  <div className="text-base text-gray-500 mb-1">
                    Revenue per Show
                  </div>
                  <div className="text-2xl font-bold text-purple-700">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 2,
                    }).format(movie!.revenue_per_show)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-pol-id="40v827"
        data-pol-file-name="movie-detail-page"
        data-pol-file-type="page"
      >
        {scoreAttributes.map((attr, index) => (
          <ScoreAttributeCard
            key={index}
            title={attr.title}
            score={attr.score}
            description={attr.description}
            tooltipText={attr.tooltipText}
            data-pol-id={`0nrcod_${index}`}
            data-pol-file-name="movie-detail-page"
            data-pol-file-type="page"
          />
        ))}
      </div> */}

      {/* Tabs for different sections */}
      {/* <Tabs
        defaultValue="overview"
        className="space-y-6"
        data-pol-id="zc2rly"
        data-pol-file-name="movie-detail-page"
        data-pol-file-type="page"
      >
        <TabsList
          data-pol-id="izcw12"
          data-pol-file-name="movie-detail-page"
          data-pol-file-type="page"
        >
          <TabsTrigger
            value="overview"
            data-pol-id="9zyelp"
            data-pol-file-name="movie-detail-page"
            data-pol-file-type="page"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="performance"
            data-pol-id="73u25g"
            data-pol-file-name="movie-detail-page"
            data-pol-file-type="page"
          >
            Performance
          </TabsTrigger>
          <TabsTrigger
            value="pricing"
            data-pol-id="k7utbm"
            data-pol-file-name="movie-detail-page"
            data-pol-file-type="page"
          >
            Pricing
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="overview"
          className="space-y-6"
          data-pol-id="8l772e"
          data-pol-file-name="movie-detail-page"
          data-pol-file-type="page"
        >

          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            data-pol-id="bz1540"
            data-pol-file-name="movie-detail-page"
            data-pol-file-type="page"
          >
            <MovieSynopsis
              synopsis={movie.synopsis}
              className="lg:col-span-2"
              data-pol-id="vv4cio"
              data-pol-file-name="movie-detail-page"
              data-pol-file-type="page"
            />

            <MovieCastList
              cast={movie.cast}
              data-pol-id="ly0wmw"
              data-pol-file-name="movie-detail-page"
              data-pol-file-type="page"
            />
          </div>
        </TabsContent>

        <TabsContent
          value="performance"
          className="space-y-6"
          data-pol-id="lu2hzz"
          data-pol-file-name="movie-detail-page"
          data-pol-file-type="page"
        >
          <h2
            className="text-2xl font-bold"
            data-pol-id="8c9td3"
            data-pol-file-name="movie-detail-page"
            data-pol-file-type="page"
          >
            Performance Metrics
          </h2>

          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            data-pol-id="yk8mt2"
            data-pol-file-name="movie-detail-page"
            data-pol-file-type="page"
          >
            <RevenuePredictionCard
              opening={movie.predictedRevenue.opening}
              lifetime={movie.predictedRevenue.lifetime}
              similarMovies={movie.historicalPerformance.similarMovies}
              className="lg:col-span-2"
              data-pol-id="lpnv1m"
              data-pol-file-name="movie-detail-page"
              data-pol-file-type="page"
            />

            <CompetingReleasesCard
              competingReleases={movie.competingReleases}
              weekendType={movie.weekendType}
              data-pol-id="u6ohrx"
              data-pol-file-name="movie-detail-page"
              data-pol-file-type="page"
            />
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-pol-id="tiiufy"
            data-pol-file-name="movie-detail-page"
            data-pol-file-type="page"
          >
            <ScoreAttributeCard
              title="Social Media Buzz"
              score={movie.socialMediaBuzz}
              description={`The film has generated ${
                movie.socialMediaBuzz > 75 ? "significant" : "moderate"
              } buzz across social media platforms. Sentiment analysis shows ${
                movie.socialMediaBuzz > 60 ? "positive" : "mixed"
              } reception to trailers and promotional content.`}
              data-pol-id="b75jyi"
              data-pol-file-name="movie-detail-page"
              data-pol-file-type="page"
            />

            <ScoreAttributeCard
              title="Pre-Release Bookings"
              score={movie.preReleaseBookings}
              description={`Current pre-release booking rate is at ${
                movie.preReleaseBookings
              }% of projected capacity. ${
                movie.preReleaseBookings > 70
                  ? "Strong early interest suggests potential for sold-out opening weekend."
                  : "Additional promotional efforts may boost opening weekend numbers."
              }`}
              data-pol-id="qnwb4y"
              data-pol-file-name="movie-detail-page"
              data-pol-file-type="page"
            />
          </div>
        </TabsContent>

        <TabsContent
          value="pricing"
          className="space-y-6"
          data-pol-id="0aomek"
          data-pol-file-name="movie-detail-page"
          data-pol-file-type="page"
        >
          <h2
            className="text-2xl font-bold"
            data-pol-id="6sj4cm"
            data-pol-file-name="movie-detail-page"
            data-pol-file-type="page"
          >
            Pricing Strategy
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-pol-id="uvcwab"
            data-pol-file-name="movie-detail-page"
            data-pol-file-type="page"
          >
            <div
              className="md:col-span-3"
              data-pol-id="z91n0h"
              data-pol-file-name="movie-detail-page"
              data-pol-file-type="page"
            >
              <PricingRecommendationCard
                premium={movie.pricingRecommendation.premium}
                standard={movie.pricingRecommendation.standard}
                budget={movie.pricingRecommendation.budget}
                data-pol-id="y78foa"
                data-pol-file-name="movie-detail-page"
                data-pol-file-type="page"
              />
            </div>
          </div>

          <SimplifiedPricingSection
            movieId={movie.id}
            data-pol-id="m4256l"
            data-pol-file-name="movie-detail-page"
            data-pol-file-type="page"
          />
        </TabsContent>
      </Tabs> */}
    </div>
  );
}
