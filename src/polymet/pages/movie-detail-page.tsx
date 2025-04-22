import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import MovieDetailHeader from "@/polymet/components/movie-detail-header";

import { fetchPrediction } from "@/services/movieService";
import { Prediction } from "@/types/Prediction";
import { HistoricPrediction } from "@/types/HistoricPrediction";
import { fetchHistoricPrediction } from "@/services/movieService";

import ScoreAnalysisSection from "../components/ScoreAnalysisSection";
import { PageProps } from "@/types/LayoutProps";
import { normalizePrediction } from "@/lib/normalizePrediction";

import { downloadFilmData } from "@/services/movieService";
import { convertToCSV } from "@/lib/csvUtils";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function MovieDetailPage({ setIsSidebarOpen }: PageProps) {
  const { id: movieName } = useParams(); // This is FilmCommonName
  const query = useQuery();
  const mode = query.get("mode");
  const language = query.get("language") || "Hindi";

  const [movie, setMovie] = useState<
    Prediction & Partial<HistoricPrediction>
  >();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieData = async () => {
      setIsSidebarOpen();
      try {
        setLoading(true);
        let rawData;

        if (mode === "historic") {
          rawData = await fetchHistoricPrediction({
            movie: movieName!,
            language,
          });
        } else {
          rawData = await fetchPrediction({
            movie: movieName!,
            language,
          });
        }

        const normalized = normalizePrediction(rawData);

        if (isHistoricPrediction(normalized)) {
          setMovie(normalized as HistoricPrediction);
        } else {
          setMovie(normalized as Prediction & Partial<HistoricPrediction>);
        }
      } catch (error) {
        console.error("Failed to fetch movie data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [movieName, language, mode]);

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
          score: movie.features.actorRating,
          description: movie.features.actorReason,
          tooltipText:
            "Measures the quality and audience reception of the cast's performance",
        },
        {
          title: "Director Rating",
          score: movie.features.directorRating,
          description: movie.features.directorReason,
          tooltipText:
            "Evaluates the director's reputation and previous work success",
        },
        {
          title: "Plot Rating",
          score: movie.features.plotRating,
          description: movie.features.plotRatingReason,
          tooltipText:
            "Assesses the quality, originality and audience appeal of the storyline",
        },
        {
          title: "Budget Score",
          score: movie.features.budget_score,
          description:
            movie.features.budget_score == 0
              ? "No Budget available"
              : "Based on estimated production and marketing investment.",
          tooltipText:
            "Evaluation of production and marketing budget relative to genre expectations",
        },
        {
          title: "Overall Sentiment",
          score: movie.features.sentimentScore,
          description: movie.features.sentimentReason,
          tooltipText:
            "Analysis of social media sentiment and audience reactions",
        },
        {
          title: "Audience Popularity",
          score: movie.features.audiencePopularityScore,
          description: movie.features.audiencePopularityReason,
          tooltipText:
            "Measures pre-release audience interest and popularity score",
        },
        {
          title: "Producer Rating",
          score: movie.features.producerRating,
          description: movie.features.producerReason,
          tooltipText:
            "Measures pre-release audience interest and popularity score",
        },
        {
          title: "Music Director Rating",
          score: movie.features.musicDirectorRating,
          description: movie.features.musicDirectorReason,
          tooltipText:
            "Measures pre-release audience interest and popularity score",
        },
        {
          title: "Songs Rating",
          score: movie.features.songsRating,
          description: movie.features.songReason,
          tooltipText:
            "Measures pre-release audience interest and popularity score",
        },
      ]
    : [];

  const handleDownloadCSV = async () => {
    try {
      if (!movieName) return;

      const data = await downloadFilmData({
        movie: movieName,
        language,
        isHistoric: mode === "historic",
      });

      const csv = convertToCSV(data);

      // Create download
      const blob = new Blob([csv], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${data.FilmCommonName}_data.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download CSV file");
    }
  };
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
          onClick={setIsSidebarOpen}
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
          movie={movie.features}
          movieMeta={movie.meta}
          data-pol-id="udj1ct"
          data-pol-file-name="movie-detail-page"
          data-pol-file-type="page"
        >
          <Button onClick={handleDownloadCSV} variant="outline">
            Download CSV
          </Button>
        </MovieDetailHeader>
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
                    }).format(movie!.features.total_revenue)}
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
                    }).format(movie!.features.total_seats_sold)}
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
                    }).format(movie!.features.revenue_per_show)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
