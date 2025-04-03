import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AlertTriangleIcon } from "lucide-react";

interface CompetingReleasesCardProps {
  competingReleases: string[];
  weekendType: "Holiday" | "Regular" | "Extended Weekend";
  className?: string;
}

export default function CompetingReleasesCard({
  competingReleases,
  weekendType,
  className,
}: CompetingReleasesCardProps) {
  // Determine weekend type badge color
  const getWeekendTypeColor = () => {
    switch (weekendType) {
      case "Holiday":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Extended Weekend":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Regular":
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <Card
      className={cn("h-full", className)}
      data-pol-id="mktrdo"
      data-pol-file-name="competing-releases-card"
      data-pol-file-type="component"
    >
      <CardHeader
        className="flex flex-row items-center justify-between"
        data-pol-id="xonozk"
        data-pol-file-name="competing-releases-card"
        data-pol-file-type="component"
      >
        <CardTitle
          data-pol-id="ref6la"
          data-pol-file-name="competing-releases-card"
          data-pol-file-type="component"
        >
          Market Competition
        </CardTitle>
        <span
          className={cn(
            "text-xs px-2 py-1 rounded-full font-medium",
            getWeekendTypeColor(),
          )}
          data-pol-id="hicwod"
          data-pol-file-name="competing-releases-card"
          data-pol-file-type="component"
        >
          {weekendType} Weekend
        </span>
      </CardHeader>
      <CardContent
        data-pol-id="ru0pdk"
        data-pol-file-name="competing-releases-card"
        data-pol-file-type="component"
      >
        {competingReleases.length > 0 ? (
          <div
            className="space-y-4"
            data-pol-id="g54qtd"
            data-pol-file-name="competing-releases-card"
            data-pol-file-type="component"
          >
            <p
              className="text-sm text-muted-foreground"
              data-pol-id="csqugw"
              data-pol-file-name="competing-releases-card"
              data-pol-file-type="component"
            >
              Competing releases during the same period:
            </p>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-2"
              data-pol-id="x7hemk"
              data-pol-file-name="competing-releases-card"
              data-pol-file-type="component"
            >
              {competingReleases.map((release, index) => (
                <div
                  key={index}
                  className="flex items-center p-2 bg-secondary rounded-md"
                  data-pol-id={`cpau19_${index}`}
                  data-pol-file-name="competing-releases-card"
                  data-pol-file-type="component"
                >
                  <AlertTriangleIcon
                    className="h-4 w-4 text-amber-500 mr-2"
                    data-pol-id={`l23grb_${index}`}
                    data-pol-file-name="competing-releases-card"
                    data-pol-file-type="component"
                  />
                  <span
                    className="text-sm"
                    data-pol-id={`qeci1g_${index}`}
                    data-pol-file-name="competing-releases-card"
                    data-pol-file-type="component"
                  >
                    {release}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p
            className="text-sm text-muted-foreground"
            data-pol-id="fvri8k"
            data-pol-file-name="competing-releases-card"
            data-pol-file-type="component"
          >
            No significant competing releases during this period.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
