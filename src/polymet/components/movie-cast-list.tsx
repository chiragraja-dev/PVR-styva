import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface MovieCastListProps {
  cast: string[];
  className?: string;
}

export default function MovieCastList({ cast, className }: MovieCastListProps) {
  return (
    <Card
      className={cn("h-full", className)}
      data-pol-id="sghd10"
      data-pol-file-name="movie-cast-list"
      data-pol-file-type="component"
    >
      <CardHeader
        data-pol-id="4ppy49"
        data-pol-file-name="movie-cast-list"
        data-pol-file-type="component"
      >
        <CardTitle
          data-pol-id="redbmx"
          data-pol-file-name="movie-cast-list"
          data-pol-file-type="component"
        >
          Cast
        </CardTitle>
      </CardHeader>
      <CardContent
        data-pol-id="1ng0vh"
        data-pol-file-name="movie-cast-list"
        data-pol-file-type="component"
      >
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          data-pol-id="i1tmbk"
          data-pol-file-name="movie-cast-list"
          data-pol-file-type="component"
        >
          {cast.map((actor, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
              data-pol-id={`odyed1_${index}`}
              data-pol-file-name="movie-cast-list"
              data-pol-file-type="component"
            >
              <Avatar
                className="h-16 w-16"
                data-pol-id={`r0sqya_${index}`}
                data-pol-file-name="movie-cast-list"
                data-pol-file-type="component"
              >
                <AvatarFallback
                  className="bg-primary/10 text-primary"
                  data-pol-id={`vx2sy9_${index}`}
                  data-pol-file-name="movie-cast-list"
                  data-pol-file-type="component"
                >
                  {getInitials(actor)}
                </AvatarFallback>
              </Avatar>
              <span
                className="text-sm font-medium"
                data-pol-id={`xya87n_${index}`}
                data-pol-file-name="movie-cast-list"
                data-pol-file-type="component"
              >
                {actor}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Helper function to get initials from a name
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
}
