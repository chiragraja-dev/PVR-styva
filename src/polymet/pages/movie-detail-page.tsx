import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MOVIES_DATA } from "@/polymet/data/movies-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import MovieDetailHeader from "@/polymet/components/movie-detail-header";
import ScoreAttributeCard from "@/polymet/components/score-attribute-card";
import MovieSynopsis from "@/polymet/components/movie-synopsis";
import PricingRecommendationCard from "@/polymet/components/pricing-recommendation-card";
import MovieCastList from "@/polymet/components/movie-cast-list";
import CompetingReleasesCard from "@/polymet/components/competing-releases-card";
import RevenuePredictionCard from "@/polymet/components/revenue-prediction-card";
import SimplifiedPricingSection from "@/polymet/components/simplified-pricing-section";

export default function MovieDetailPage() {
  const { id = "m001" } = useParams();
  const [movie, setMovie] = useState(MOVIES_DATA[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const foundMovie = MOVIES_DATA.find((m) => m.id === id) || MOVIES_DATA[0];
      setMovie(foundMovie);
      setLoading(false);
    }, 500);
  }, [id]);

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

  // Generate mock score attributes with descriptions
  const scoreAttributes = [
    {
      title: "Actor Rating",
      score: Math.floor(Math.random() * 30) + 70, // 70-100 range
      description: `Strong performances from the lead cast with notable chemistry. ${movie.cast[0]} delivers a standout performance that elevates key scenes.`,
      tooltipText:
        "Measures the quality and audience reception of the cast's performance",
    },
    {
      title: "Director Rating",
      score: Math.floor(Math.random() * 40) + 60, // 60-100 range
      description: `${movie.director} brings a unique vision to the film with signature stylistic elements. Direction shows strong command of the ${movie.genre[0]} genre conventions.`,
      tooltipText:
        "Evaluates the director's reputation and previous work success",
    },
    {
      title: "Plot Rating",
      score: Math.floor(Math.random() * 50) + 50, // 50-100 range
      description: `The narrative structure is well-crafted with engaging story arcs. The ${movie.genre.join("/")} elements blend effectively to create a cohesive storyline.`,
      tooltipText:
        "Assesses the quality, originality and audience appeal of the storyline",
    },
    {
      title: "Budget",
      score: Math.floor(movie.productionBudget / 3) + 40, // Scaled score
      description: `Production budget of $${movie.productionBudget}M with marketing spend of $${movie.marketingBudget}M positions this release competitively within its category.`,
      tooltipText:
        "Evaluation of production and marketing budget relative to genre expectations",
    },
    {
      title: "Overall Sentiment",
      score: movie.socialMediaBuzz,
      description:
        movie.socialMediaBuzz > 50
          ? `Positive social media buzz with strong anticipation building across platforms. Pre-release engagement metrics show promising audience interest.`
          : `Mixed to negative sentiment in social media conversations. Concerns about various aspects of the film are prevalent in online discussions.`,
      tooltipText: "Analysis of social media sentiment and audience reactions",
    },
    {
      title: "Audience Popularity",
      score: movie.preReleaseBookings,
      description:
        movie.preReleaseBookings > 60
          ? `Strong pre-release booking trends indicate high audience interest. Early ticket sales are tracking above average for the ${movie.category} category.`
          : `Pre-release bookings are below expectations for a film in the ${movie.category} category. Additional marketing push may be required.`,
      tooltipText:
        "Measures pre-release bookings and audience interest metrics",
    },
  ];

  return (
    <div
      className="space-y-8"
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
      <MovieDetailHeader
        title={movie.title}
        posterUrl={movie.posterUrl}
        language={movie.language}
        debutDate={movie.debutDate}
        score={movie.score}
        category={movie.category}
        genre={movie.genre}
        director={movie.director}
        runtime={movie.runtime}
        data-pol-id="udj1ct"
        data-pol-file-name="movie-detail-page"
        data-pol-file-type="page"
      />

      <Separator
        data-pol-id="s236ib"
        data-pol-file-name="movie-detail-page"
        data-pol-file-type="page"
      />

      {/* Tabs for different sections */}
      <Tabs
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
          <h2
            className="text-2xl font-bold"
            data-pol-id="n2nr7t"
            data-pol-file-name="movie-detail-page"
            data-pol-file-type="page"
          >
            Score Analysis
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
          </div>

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
              description={`The film has generated ${movie.socialMediaBuzz > 75 ? "significant" : "moderate"} buzz across social media platforms. Sentiment analysis shows ${movie.socialMediaBuzz > 60 ? "positive" : "mixed"} reception to trailers and promotional content.`}
              data-pol-id="b75jyi"
              data-pol-file-name="movie-detail-page"
              data-pol-file-type="page"
            />

            <ScoreAttributeCard
              title="Pre-Release Bookings"
              score={movie.preReleaseBookings}
              description={`Current pre-release booking rate is at ${movie.preReleaseBookings}% of projected capacity. ${movie.preReleaseBookings > 70 ? "Strong early interest suggests potential for sold-out opening weekend." : "Additional promotional efforts may boost opening weekend numbers."}`}
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
      </Tabs>
    </div>
  );
}
