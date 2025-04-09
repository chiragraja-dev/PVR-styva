import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { IndianRupeeIcon } from "lucide-react";

interface PricingRecommendationCardProps {
  premium: number;
  standard: number;
  budget: number;
  className?: string;
}

export default function PricingRecommendationCard({
  premium,
  standard,
  budget,
  className,
}: PricingRecommendationCardProps) {
  return (
    <Card
      className={cn("h-full", className)}
      data-pol-id="2921os"
      data-pol-file-name="pricing-recommendation-card"
      data-pol-file-type="component"
    >
      <CardHeader
        data-pol-id="9zb333"
        data-pol-file-name="pricing-recommendation-card"
        data-pol-file-type="component"
      >
        <CardTitle
          data-pol-id="0025ye"
          data-pol-file-name="pricing-recommendation-card"
          data-pol-file-type="component"
        >
          Pricing Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent
        data-pol-id="iu18ur"
        data-pol-file-name="pricing-recommendation-card"
        data-pol-file-type="component"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          data-pol-id="mzeuvs"
          data-pol-file-name="pricing-recommendation-card"
          data-pol-file-type="component"
        >
          <PriceItem
            label="Premium"
            price={premium}
            data-pol-id="3wedh1"
            data-pol-file-name="pricing-recommendation-card"
            data-pol-file-type="component"
          />
          <PriceItem
            label="Standard"
            price={standard}
            data-pol-id="ijn0yc"
            data-pol-file-name="pricing-recommendation-card"
            data-pol-file-type="component"
          />
          <PriceItem
            label="Budget"
            price={budget}
            data-pol-id="yerg0o"
            data-pol-file-name="pricing-recommendation-card"
            data-pol-file-type="component"
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface PriceItemProps {
  label: string;
  price: number;
}

function PriceItem({ label, price }: PriceItemProps) {
  return (
    <div
      className="flex flex-col items-center p-4 bg-secondary rounded-lg"
      data-pol-id="10iigm"
      data-pol-file-name="pricing-recommendation-card"
      data-pol-file-type="component"
    >
      <span
        className="text-sm text-muted-foreground mb-1"
        data-pol-id="rd72j0"
        data-pol-file-name="pricing-recommendation-card"
        data-pol-file-type="component"
      >
        {label}
      </span>
      <div
        className="flex items-center"
        data-pol-id="azm7e5"
        data-pol-file-name="pricing-recommendation-card"
        data-pol-file-type="component"
      >
        <IndianRupeeIcon
          className="h-4 w-4 mr-1"
          data-pol-id="esc5b8"
          data-pol-file-name="pricing-recommendation-card"
          data-pol-file-type="component"
        />
        <span
          className="text-2xl font-bold"
          data-pol-id="d8m5rz"
          data-pol-file-name="pricing-recommendation-card"
          data-pol-file-type="component"
        >
          {price}
        </span>
      </div>
    </div>
  );
}
