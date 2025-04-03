import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MovieSynopsisProps {
  synopsis: string;
  className?: string;
}

export default function MovieSynopsis({
  synopsis,
  className,
}: MovieSynopsisProps) {
  return (
    <Card
      className={cn("h-full", className)}
      data-pol-id="omt49z"
      data-pol-file-name="movie-synopsis"
      data-pol-file-type="component"
    >
      <CardHeader
        data-pol-id="7osqiq"
        data-pol-file-name="movie-synopsis"
        data-pol-file-type="component"
      >
        <CardTitle
          data-pol-id="q4vexb"
          data-pol-file-name="movie-synopsis"
          data-pol-file-type="component"
        >
          Synopsis
        </CardTitle>
      </CardHeader>
      <CardContent
        data-pol-id="isiypg"
        data-pol-file-name="movie-synopsis"
        data-pol-file-type="component"
      >
        <p
          className="text-muted-foreground"
          data-pol-id="4z6fqg"
          data-pol-file-name="movie-synopsis"
          data-pol-file-type="component"
        >
          {synopsis}
        </p>
      </CardContent>
    </Card>
  );
}
