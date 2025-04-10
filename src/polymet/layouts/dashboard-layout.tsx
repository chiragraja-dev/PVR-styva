import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  CalendarIcon,
  FilterIcon,
  // UserIcon,
  LogOutIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import MovieFilters from "@/polymet/components/movie-filters";
import { FilterOptions } from "@/polymet/components/movie-filters";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const availableGenres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "War",
  ];

  const availableLanguages = ["English", "Hindi"];

  const handleFilterChange = (filters: FilterOptions) => {
    // Dispatch a custom event that pages can listen to
    const event = new CustomEvent("filterChange", { detail: filters });
    window.dispatchEvent(event);
  };

  return (
    <div
      className="flex h-screen bg-background"
      data-pol-id="g5rzyj"
      data-pol-file-name="dashboard-layout"
      data-pol-file-type="layout"
    >
      {/* Sidebar */}
      <div
        className={cn(
          "flex flex-col border-r bg-card transition-all duration-300 overflow-hidden",
          isSidebarOpen ? "w-1/6" : "w-16"
        )}
        data-pol-id="8cuskg"
        data-pol-file-name="dashboard-layout"
        data-pol-file-type="layout"
      >
        {/* Logo */}
        <div
          className="p-4 border-b flex items-center h-16"
          data-pol-id="7vq07p"
          data-pol-file-name="dashboard-layout"
          data-pol-file-type="layout"
        >
          <div
            className="flex items-center"
            data-pol-id="qrmx4f"
            data-pol-file-name="dashboard-layout"
            data-pol-file-type="layout"
          >
            <div
              className="bg-primary rounded p-1 mr-2"
              data-pol-id="nrkuv0"
              data-pol-file-name="dashboard-layout"
              data-pol-file-type="layout"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-primary-foreground"
                data-pol-id="4not5p"
                data-pol-file-name="dashboard-layout"
                data-pol-file-type="layout"
              >
                <rect
                  width="18"
                  height="18"
                  x="3"
                  y="3"
                  rx="2"
                  data-pol-id="6aurxf"
                  data-pol-file-name="dashboard-layout"
                  data-pol-file-type="layout"
                />
                <path
                  d="M7 7v10"
                  data-pol-id="rctt42"
                  data-pol-file-name="dashboard-layout"
                  data-pol-file-type="layout"
                />
                <path
                  d="M11 7v10"
                  data-pol-id="w7z5za"
                  data-pol-file-name="dashboard-layout"
                  data-pol-file-type="layout"
                />
                <path
                  d="m15 7 2 10"
                  data-pol-id="wc8xrl"
                  data-pol-file-name="dashboard-layout"
                  data-pol-file-type="layout"
                />
              </svg>
            </div>
            {isSidebarOpen && (
              <span
                className="font-bold text-lg"
                data-pol-id="djveeu"
                data-pol-file-name="dashboard-layout"
                data-pol-file-type="layout"
              >
                PVR Dynamic Pricing
              </span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div
          className="flex flex-col flex-1 overflow-y-auto"
          data-pol-id="8oz0mi"
          data-pol-file-name="dashboard-layout"
          data-pol-file-type="layout"
        >
          <nav
            className="flex-1 px-2 py-4 space-y-1"
            data-pol-id="ygzo4f"
            data-pol-file-name="dashboard-layout"
            data-pol-file-type="layout"
          >
            <Link
              to="/"
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === "/"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
              data-pol-id="v1ekk3"
              data-pol-file-name="dashboard-layout"
              data-pol-file-type="layout"
            >
              <HomeIcon
                className="h-5 w-5 mr-3"
                data-pol-id="obcw1f"
                data-pol-file-name="dashboard-layout"
                data-pol-file-type="layout"
              />
              {isSidebarOpen && (
                <span
                  data-pol-id="wc843j"
                  data-pol-file-name="dashboard-layout"
                  data-pol-file-type="layout"
                >
                  Upcoming Movies
                </span>
              )}
            </Link>

            <Link
              to="/past-predictions"
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === "/past-predictions"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
              data-pol-id="qzo0i8"
              data-pol-file-name="dashboard-layout"
              data-pol-file-type="layout"
            >
              <CalendarIcon
                className="h-5 w-5 mr-3"
                data-pol-id="tka0si"
                data-pol-file-name="dashboard-layout"
                data-pol-file-type="layout"
              />
              {isSidebarOpen && (
                <span
                  data-pol-id="zc29xf"
                  data-pol-file-name="dashboard-layout"
                  data-pol-file-type="layout"
                >
                  Past Movies
                </span>
              )}
            </Link>
          </nav>

          {/* Filters Section */}
          {isSidebarOpen && (
            <div
              className="px-4 py-2 border-t"
              data-pol-id="2rukzy"
              data-pol-file-name="dashboard-layout"
              data-pol-file-type="layout"
            >
              <div
                className="flex items-center justify-between mb-4"
                data-pol-id="85dyte"
                data-pol-file-name="dashboard-layout"
                data-pol-file-type="layout"
              >
                <h3
                  className="font-medium text-sm"
                  data-pol-id="n50zyz"
                  data-pol-file-name="dashboard-layout"
                  data-pol-file-type="layout"
                >
                  Filters
                </h3>
                <FilterIcon
                  className="h-4 w-4 text-muted-foreground"
                  data-pol-id="43tcys"
                  data-pol-file-name="dashboard-layout"
                  data-pol-file-type="layout"
                />
              </div>
              <MovieFilters
                onFilterChange={handleFilterChange}
                availableGenres={availableGenres}
                availableLanguages={availableLanguages}
                compact={true}
                data-pol-id="jua4xd"
                data-pol-file-name="dashboard-layout"
                data-pol-file-type="layout"
              />
            </div>
          )}
        </div>

        {/* User Profile */}
        {/* <div
          className="p-4 border-t flex items-center"
          data-pol-id="hmnn2x"
          data-pol-file-name="dashboard-layout"
          data-pol-file-type="layout"
        >
          <div
            className="flex-shrink-0"
            data-pol-id="pdku1r"
            data-pol-file-name="dashboard-layout"
            data-pol-file-type="layout"
          >
            <img
              src="https://github.com/yusufhilmi.png"
              alt="User"
              className="h-8 w-8 rounded-full"
              data-pol-id="8jevjf"
              data-pol-file-name="dashboard-layout"
              data-pol-file-type="layout"
            />
          </div>
          {isSidebarOpen && (
            <div
              className="ml-3 flex-1 min-w-0"
              data-pol-id="pqmlq7"
              data-pol-file-name="dashboard-layout"
              data-pol-file-type="layout"
            >
              <p
                className="text-sm font-medium truncate"
                data-pol-id="yj68vp"
                data-pol-file-name="dashboard-layout"
                data-pol-file-type="layout"
              >
                Yusuf Hilmi
              </p>
              <p
                className="text-xs text-muted-foreground truncate"
                data-pol-id="q7ilyj"
                data-pol-file-name="dashboard-layout"
                data-pol-file-type="layout"
              >
                Executive Director
              </p>
            </div>
          )}
          {isSidebarOpen && (
            <button
              className="ml-2 p-1 rounded-md hover:bg-accent"
              data-pol-id="czggpl"
              data-pol-file-name="dashboard-layout"
              data-pol-file-type="layout"
            >
              <LogOutIcon
                className="h-4 w-4 text-muted-foreground"
                data-pol-id="8c40ur"
                data-pol-file-name="dashboard-layout"
                data-pol-file-type="layout"
              />
            </button>
          )}
        </div> */}

        {/* Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute top-4 right-4 p-1 rounded-md bg-background border shadow-sm"
          data-pol-id="gq0c6r"
          data-pol-file-name="dashboard-layout"
          data-pol-file-type="layout"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            data-pol-id="ci5jf3"
            data-pol-file-name="dashboard-layout"
            data-pol-file-type="layout"
          >
            {isSidebarOpen ? (
              <>
                <path
                  d="m15 6-6 6 6 6"
                  data-pol-id="lq7oiv"
                  data-pol-file-name="dashboard-layout"
                  data-pol-file-type="layout"
                />
              </>
            ) : (
              <>
                <path
                  d="m9 6 6 6-6 6"
                  data-pol-id="dy1e64"
                  data-pol-file-name="dashboard-layout"
                  data-pol-file-type="layout"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div
        className="flex-1 flex flex-col overflow-hidden"
        data-pol-id="hk0cxi"
        data-pol-file-name="dashboard-layout"
        data-pol-file-type="layout"
      >
        <main
          className="flex-1 overflow-y-auto p-6"
          data-pol-id="659zhk"
          data-pol-file-name="dashboard-layout"
          data-pol-file-type="layout"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
