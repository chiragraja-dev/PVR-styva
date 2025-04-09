import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IndianRupeeIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SeatPricing {
  type: "PRIME" | "CLASSIC" | "REGULAR";
  baseFare: number;
  weekendFare: number;
  format: "2D" | "3D" | "IMAX" | "4DX";
  available: number;
  total: number;
}

interface SeatPricingDetailsProps {
  pricingDetails: SeatPricing[];
  isWeekend?: boolean;
}

export default function SeatPricingDetails({
  pricingDetails,
  isWeekend = false,
}: SeatPricingDetailsProps) {
  const getSeatTypeColor = (type: SeatPricing["type"]) => {
    switch (type) {
      case "PRIME":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      case "CLASSIC":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "REGULAR":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      default:
        return "";
    }
  };

  const getFormatColor = (format: SeatPricing["format"]) => {
    switch (format) {
      case "2D":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "3D":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      case "IMAX":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400";
      case "4DX":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400";
      default:
        return "";
    }
  };

  return (
    <Card
      data-pol-id="zmwqdv"
      data-pol-file-name="seat-pricing-details"
      data-pol-file-type="component"
    >
      <CardHeader
        className="pb-2"
        data-pol-id="5fqsl0"
        data-pol-file-name="seat-pricing-details"
        data-pol-file-type="component"
      >
        <CardTitle
          className="text-lg flex items-center justify-between"
          data-pol-id="8p5pqd"
          data-pol-file-name="seat-pricing-details"
          data-pol-file-type="component"
        >
          <span
            data-pol-id="nmbyav"
            data-pol-file-name="seat-pricing-details"
            data-pol-file-type="component"
          >
            Seat Pricing Details
          </span>
          <Badge
            variant={isWeekend ? "default" : "outline"}
            data-pol-id="3iy4nz"
            data-pol-file-name="seat-pricing-details"
            data-pol-file-type="component"
          >
            {isWeekend ? "Weekend Rates" : "Regular Rates"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent
        data-pol-id="6415xz"
        data-pol-file-name="seat-pricing-details"
        data-pol-file-type="component"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          data-pol-id="g9eprc"
          data-pol-file-name="seat-pricing-details"
          data-pol-file-type="component"
        >
          {pricingDetails.map((pricing, index) => (
            <Card
              key={index}
              className="overflow-hidden"
              data-pol-id={`wthprc_${index}`}
              data-pol-file-name="seat-pricing-details"
              data-pol-file-type="component"
            >
              <div
                className={cn(
                  "py-2 px-4 text-center font-medium",
                  getSeatTypeColor(pricing.type),
                )}
                data-pol-id={`02tz9e_${index}`}
                data-pol-file-name="seat-pricing-details"
                data-pol-file-type="component"
              >
                {pricing.type}
              </div>
              <CardContent
                className="p-4 space-y-3"
                data-pol-id={`rl1ddy_${index}`}
                data-pol-file-name="seat-pricing-details"
                data-pol-file-type="component"
              >
                <div
                  className="flex justify-between items-center"
                  data-pol-id={`35p4rd_${index}`}
                  data-pol-file-name="seat-pricing-details"
                  data-pol-file-type="component"
                >
                  <Badge
                    variant="secondary"
                    className={cn(getFormatColor(pricing.format))}
                    data-pol-id={`bf2brm_${index}`}
                    data-pol-file-name="seat-pricing-details"
                    data-pol-file-type="component"
                  >
                    {pricing.format}
                  </Badge>
                  <div
                    className="text-xs text-muted-foreground"
                    data-pol-id={`81q905_${index}`}
                    data-pol-file-name="seat-pricing-details"
                    data-pol-file-type="component"
                  >
                    {pricing.available} of {pricing.total} available
                  </div>
                </div>

                <div
                  className="grid grid-cols-2 gap-2 pt-2"
                  data-pol-id={`ernqxx_${index}`}
                  data-pol-file-name="seat-pricing-details"
                  data-pol-file-type="component"
                >
                  <div
                    className="space-y-1"
                    data-pol-id={`ysw3pu_${index}`}
                    data-pol-file-name="seat-pricing-details"
                    data-pol-file-type="component"
                  >
                    <div
                      className="text-xs text-muted-foreground"
                      data-pol-id={`joti46_${index}`}
                      data-pol-file-name="seat-pricing-details"
                      data-pol-file-type="component"
                    >
                      Base Fare
                    </div>
                    <div
                      className="flex items-center font-medium"
                      data-pol-id={`gxyrt1_${index}`}
                      data-pol-file-name="seat-pricing-details"
                      data-pol-file-type="component"
                    >
                      <IndianRupeeIcon
                        className="h-3 w-3 mr-1"
                        data-pol-id={`xs0z3r_${index}`}
                        data-pol-file-name="seat-pricing-details"
                        data-pol-file-type="component"
                      />
                      {pricing.baseFare}
                    </div>
                  </div>
                  <div
                    className="space-y-1"
                    data-pol-id={`d7a0hs_${index}`}
                    data-pol-file-name="seat-pricing-details"
                    data-pol-file-type="component"
                  >
                    <div
                      className="text-xs text-muted-foreground"
                      data-pol-id={`g8xuea_${index}`}
                      data-pol-file-name="seat-pricing-details"
                      data-pol-file-type="component"
                    >
                      Weekend Fare
                    </div>
                    <div
                      className="flex items-center font-medium"
                      data-pol-id={`soabav_${index}`}
                      data-pol-file-name="seat-pricing-details"
                      data-pol-file-type="component"
                    >
                      <IndianRupeeIcon
                        className="h-3 w-3 mr-1"
                        data-pol-id={`vx87xi_${index}`}
                        data-pol-file-name="seat-pricing-details"
                        data-pol-file-type="component"
                      />
                      {pricing.weekendFare}
                    </div>
                  </div>
                </div>

                <div
                  className="pt-2 text-center"
                  data-pol-id={`noeqow_${index}`}
                  data-pol-file-name="seat-pricing-details"
                  data-pol-file-type="component"
                >
                  <div
                    className="text-xs text-muted-foreground mb-1"
                    data-pol-id={`9z8iil_${index}`}
                    data-pol-file-name="seat-pricing-details"
                    data-pol-file-type="component"
                  >
                    Current Price
                  </div>
                  <div
                    className="flex items-center justify-center font-bold text-lg"
                    data-pol-id={`k2vfip_${index}`}
                    data-pol-file-name="seat-pricing-details"
                    data-pol-file-type="component"
                  >
                    <IndianRupeeIcon
                      className="h-4 w-4 mr-1"
                      data-pol-id={`tg9b12_${index}`}
                      data-pol-file-name="seat-pricing-details"
                      data-pol-file-type="component"
                    />
                    {isWeekend ? pricing.weekendFare : pricing.baseFare}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
