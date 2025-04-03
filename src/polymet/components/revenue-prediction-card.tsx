import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, CartesianGrid } from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TrendingUpIcon } from "lucide-react";

interface RevenuePredictionCardProps {
  opening: number; // in millions
  lifetime: number; // in millions
  similarMovies: {
    title: string;
    openingRevenue: number; // in millions
  }[];
  className?: string;
}

export default function RevenuePredictionCard({
  opening,
  lifetime,
  similarMovies,
  className,
}: RevenuePredictionCardProps) {
  // Prepare data for the chart
  const chartData = [
    {
      name: "Opening",
      current: opening,
      similar1: similarMovies[0]?.openingRevenue || 0,
      similar2: similarMovies[1]?.openingRevenue || 0,
    },
    {
      name: "Lifetime",
      current: lifetime,
      similar1: 0, // We don't have lifetime data for similar movies
      similar2: 0, // We don't have lifetime data for similar movies
    },
  ];

  return (
    <Card
      className={cn("h-full", className)}
      data-pol-id="fr39fa"
      data-pol-file-name="revenue-prediction-card"
      data-pol-file-type="component"
    >
      <CardHeader
        className="flex flex-row items-center justify-between"
        data-pol-id="10deuf"
        data-pol-file-name="revenue-prediction-card"
        data-pol-file-type="component"
      >
        <CardTitle
          data-pol-id="0bkjsz"
          data-pol-file-name="revenue-prediction-card"
          data-pol-file-type="component"
        >
          Revenue Predictions
        </CardTitle>
        <TrendingUpIcon
          className="h-5 w-5 text-primary"
          data-pol-id="9iz6sm"
          data-pol-file-name="revenue-prediction-card"
          data-pol-file-type="component"
        />
      </CardHeader>
      <CardContent
        data-pol-id="c6lwy0"
        data-pol-file-name="revenue-prediction-card"
        data-pol-file-type="component"
      >
        <div
          className="space-y-6"
          data-pol-id="4iexg4"
          data-pol-file-name="revenue-prediction-card"
          data-pol-file-type="component"
        >
          <div
            className="grid grid-cols-2 gap-4"
            data-pol-id="vke0er"
            data-pol-file-name="revenue-prediction-card"
            data-pol-file-type="component"
          >
            <div
              className="bg-secondary p-4 rounded-lg text-center"
              data-pol-id="gg51hl"
              data-pol-file-name="revenue-prediction-card"
              data-pol-file-type="component"
            >
              <p
                className="text-sm text-muted-foreground mb-1"
                data-pol-id="6oe54w"
                data-pol-file-name="revenue-prediction-card"
                data-pol-file-type="component"
              >
                Opening Weekend
              </p>
              <p
                className="text-2xl font-bold"
                data-pol-id="l2ezyk"
                data-pol-file-name="revenue-prediction-card"
                data-pol-file-type="component"
              >
                ${opening}M
              </p>
            </div>
            <div
              className="bg-secondary p-4 rounded-lg text-center"
              data-pol-id="ivliu1"
              data-pol-file-name="revenue-prediction-card"
              data-pol-file-type="component"
            >
              <p
                className="text-sm text-muted-foreground mb-1"
                data-pol-id="460xwp"
                data-pol-file-name="revenue-prediction-card"
                data-pol-file-type="component"
              >
                Lifetime Projection
              </p>
              <p
                className="text-2xl font-bold"
                data-pol-id="4kio88"
                data-pol-file-name="revenue-prediction-card"
                data-pol-file-type="component"
              >
                ${lifetime}M
              </p>
            </div>
          </div>

          <div
            data-pol-id="vt02nn"
            data-pol-file-name="revenue-prediction-card"
            data-pol-file-type="component"
          >
            <h4
              className="text-sm font-medium mb-3"
              data-pol-id="vsn0rz"
              data-pol-file-name="revenue-prediction-card"
              data-pol-file-type="component"
            >
              Comparison with Similar Movies
            </h4>
            <ChartContainer
              config={{}}
              className="aspect-[none] h-[200px]"
              data-pol-id="w5b81y"
              data-pol-file-name="revenue-prediction-card"
              data-pol-file-type="component"
            >
              <BarChart
                data={chartData}
                data-pol-id="kwqqf3"
                data-pol-file-name="revenue-prediction-card"
                data-pol-file-type="component"
              >
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      hideLabel
                      data-pol-id="oppjni"
                      data-pol-file-name="revenue-prediction-card"
                      data-pol-file-type="component"
                    />
                  }
                  cursor={false}
                  data-pol-id="jcf060"
                  data-pol-file-name="revenue-prediction-card"
                  data-pol-file-type="component"
                />

                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  data-pol-id="ab7yie"
                  data-pol-file-name="revenue-prediction-card"
                  data-pol-file-type="component"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={8}
                  data-pol-id="qphspq"
                  data-pol-file-name="revenue-prediction-card"
                  data-pol-file-type="component"
                />

                <Bar
                  name="This Movie"
                  dataKey="current"
                  fill="hsl(var(--chart-1))"
                  radius={4}
                  data-pol-id="hbz8st"
                  data-pol-file-name="revenue-prediction-card"
                  data-pol-file-type="component"
                />

                {similarMovies[0] && (
                  <Bar
                    name={similarMovies[0].title}
                    dataKey="similar1"
                    fill="hsl(var(--chart-2))"
                    radius={4}
                    data-pol-id="soeqb8"
                    data-pol-file-name="revenue-prediction-card"
                    data-pol-file-type="component"
                  />
                )}
                {similarMovies[1] && (
                  <Bar
                    name={similarMovies[1].title}
                    dataKey="similar2"
                    fill="hsl(var(--chart-3))"
                    radius={4}
                    data-pol-id="p3jxjv"
                    data-pol-file-name="revenue-prediction-card"
                    data-pol-file-type="component"
                  />
                )}
              </BarChart>
            </ChartContainer>
          </div>

          <div
            className="text-xs text-muted-foreground"
            data-pol-id="zsf9mq"
            data-pol-file-name="revenue-prediction-card"
            data-pol-file-type="component"
          >
            <p
              data-pol-id="yf9km3"
              data-pol-file-name="revenue-prediction-card"
              data-pol-file-type="component"
            >
              Predictions based on historical performance of similar movies,
              current market trends, and pre-release metrics.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
