import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function DashboardHeader({
  title,
  subtitle,
  className,
  children,
}: DashboardHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6",
        className,
      )}
      data-pol-id="8na6y1"
      data-pol-file-name="dashboard-header"
      data-pol-file-type="component"
    >
      <div
        data-pol-id="3eyjf2"
        data-pol-file-name="dashboard-header"
        data-pol-file-type="component"
      >
        <h1
          className="text-2xl font-bold tracking-tight"
          data-pol-id="cndoxu"
          data-pol-file-name="dashboard-header"
          data-pol-file-type="component"
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-muted-foreground mt-1"
            data-pol-id="ms5fey"
            data-pol-file-name="dashboard-header"
            data-pol-file-type="component"
          >
            {subtitle}
          </p>
        )}
      </div>
      {/* <div
        className="flex items-center gap-3 mt-4 sm:mt-0"
        data-pol-id="u073zp"
        data-pol-file-name="dashboard-header"
        data-pol-file-type="component"
      >
        {children}
        <Button
          className="flex items-center gap-1"
          data-pol-id="kcot69"
          data-pol-file-name="dashboard-header"
          data-pol-file-type="component"
        >
          <PlusIcon
            className="h-4 w-4"
            data-pol-id="1wgpj6"
            data-pol-file-name="dashboard-header"
            data-pol-file-type="component"
          />
          <span
            data-pol-id="ce27rw"
            data-pol-file-name="dashboard-header"
            data-pol-file-type="component"
          >
            Add Movie
          </span>
        </Button>
      </div> */}
    </div>
  );
}
