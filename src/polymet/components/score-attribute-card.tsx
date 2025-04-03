import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { HelpCircleIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ScoreAttributeCardProps {
  title: string;
  score: number;
  description: string;
  tooltipText?: string;
  className?: string;
}

export default function ScoreAttributeCard({
  title,
  score,
  description,
  tooltipText,
  className,
}: ScoreAttributeCardProps) {
  // Determine color based on score
  const getScoreColor = () => {
    if (score >= 80) return "text-green-600 dark:text-green-400";
    if (score >= 60) return "text-emerald-600 dark:text-emerald-400";
    if (score >= 40) return "text-amber-600 dark:text-amber-400";
    if (score >= 20) return "text-orange-600 dark:text-orange-400";
    return "text-red-600 dark:text-red-400";
  };

  // Determine progress color based on score
  const getProgressColor = () => {
    if (score >= 80) return "bg-green-600 dark:bg-green-500";
    if (score >= 60) return "bg-emerald-600 dark:bg-emerald-500";
    if (score >= 40) return "bg-amber-600 dark:bg-amber-500";
    if (score >= 20) return "bg-orange-600 dark:bg-orange-500";
    return "bg-red-600 dark:bg-red-500";
  };

  return (
    <Card
      className={cn("h-full", className)}
      data-pol-id="i0hwuz"
      data-pol-file-name="score-attribute-card"
      data-pol-file-type="component"
    >
      <CardContent
        className="pt-6"
        data-pol-id="77k5lw"
        data-pol-file-name="score-attribute-card"
        data-pol-file-type="component"
      >
        <div
          className="flex justify-between items-center mb-2"
          data-pol-id="5x8jm4"
          data-pol-file-name="score-attribute-card"
          data-pol-file-type="component"
        >
          <div
            className="flex items-center gap-2"
            data-pol-id="xwt79x"
            data-pol-file-name="score-attribute-card"
            data-pol-file-type="component"
          >
            <h3
              className="font-semibold text-lg"
              data-pol-id="gdemw0"
              data-pol-file-name="score-attribute-card"
              data-pol-file-type="component"
            >
              {title}
            </h3>
            {tooltipText && (
              <TooltipProvider
                data-pol-id="itxsrg"
                data-pol-file-name="score-attribute-card"
                data-pol-file-type="component"
              >
                <Tooltip
                  data-pol-id="i3orh8"
                  data-pol-file-name="score-attribute-card"
                  data-pol-file-type="component"
                >
                  <TooltipTrigger
                    asChild
                    data-pol-id="2c141p"
                    data-pol-file-name="score-attribute-card"
                    data-pol-file-type="component"
                  >
                    <HelpCircleIcon
                      className="h-4 w-4 text-muted-foreground cursor-help"
                      data-pol-id="qnxt7f"
                      data-pol-file-name="score-attribute-card"
                      data-pol-file-type="component"
                    />
                  </TooltipTrigger>
                  <TooltipContent
                    className="max-w-xs"
                    data-pol-id="w489y9"
                    data-pol-file-name="score-attribute-card"
                    data-pol-file-type="component"
                  >
                    <p
                      data-pol-id="e5s4ly"
                      data-pol-file-name="score-attribute-card"
                      data-pol-file-type="component"
                    >
                      {tooltipText}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          <span
            className={cn("text-xl font-bold", getScoreColor())}
            data-pol-id="phawhm"
            data-pol-file-name="score-attribute-card"
            data-pol-file-type="component"
          >
            {score}/100
          </span>
        </div>

        <Progress
          value={score}
          className="h-2 mb-4"
          indicatorClassName={getProgressColor()}
          data-pol-id="5cp82i"
          data-pol-file-name="score-attribute-card"
          data-pol-file-type="component"
        />

        <p
          className="text-sm text-muted-foreground"
          data-pol-id="m5rycd"
          data-pol-file-name="score-attribute-card"
          data-pol-file-type="component"
        >
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
