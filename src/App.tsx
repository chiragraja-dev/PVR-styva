import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "@/polymet/layouts/dashboard-layout";
import DashboardPage from "@/polymet/pages/dashboard-page";
import MovieDetailPage from "@/polymet/pages/movie-detail-page";
import PastPredictionsPage from "@/polymet/pages/past-predictions-page";

export default function AppPrototype() {
  return (
    <Router
      data-pol-id="zsqeer"
      data-pol-file-name="app-prototype"
      data-pol-file-type="prototype"
    >
      <Routes
        data-pol-id="9ooc54"
        data-pol-file-name="app-prototype"
        data-pol-file-type="prototype"
      >
        <Route
          path="/"
          element={
            <DashboardLayout
              data-pol-id="bzcoud"
              data-pol-file-name="app-prototype"
              data-pol-file-type="prototype"
            >
              {(
                {
                  // setIsSidebarOpen
                }
              ) => (
                <DashboardPage
                  data-pol-id="s0lpq6"
                  data-pol-file-name="app-prototype"
                  data-pol-file-type="prototype"
                />
              )}
            </DashboardLayout>
          }
          data-pol-id="k8j8k7"
          data-pol-file-name="app-prototype"
          data-pol-file-type="prototype"
        />

        <Route
          path="/past-predictions"
          element={
            <DashboardLayout
              data-pol-id="o4sghp"
              data-pol-file-name="app-prototype"
              data-pol-file-type="prototype"
            >
              {({ 
                // setIsSidebarOpen
               }) => (
                <PastPredictionsPage
                  data-pol-id="wpukvl"
                  data-pol-file-name="app-prototype"
                  data-pol-file-type="prototype"
                />
              )}
            </DashboardLayout>
          }
          data-pol-id="o5ll5w"
          data-pol-file-name="app-prototype"
          data-pol-file-type="prototype"
        />

        <Route
          path="/movie/:id"
          element={
            <DashboardLayout
              data-pol-id="3w61zh"
              data-pol-file-name="app-prototype"
              data-pol-file-type="prototype"
            >
              {({ setIsSidebarOpen }) => (
                <MovieDetailPage
                  data-pol-id="zr8mr5"
                  data-pol-file-name="app-prototype"
                  data-pol-file-type="prototype"
                  setIsSidebarOpen={setIsSidebarOpen}
                />
              )}
            </DashboardLayout>
          }
          data-pol-id="ea3vik"
          data-pol-file-name="app-prototype"
          data-pol-file-type="prototype"
        />

        <Route
          path="*"
          element={
            <DashboardLayout
              data-pol-id="2hqbem"
              data-pol-file-name="app-prototype"
              data-pol-file-type="prototype"
            >
              {(
                {
                  //  setIsSidebarOpen
                }
              ) => (
                <div
                  className="flex flex-col items-center justify-center h-[70vh]"
                  data-pol-id="lyc8bz"
                  data-pol-file-name="app-prototype"
                  data-pol-file-type="prototype"
                >
                  <h1
                    className="text-3xl font-bold"
                    data-pol-id="zyygrj"
                    data-pol-file-name="app-prototype"
                    data-pol-file-type="prototype"
                  >
                    404
                  </h1>
                  <p
                    className="text-muted-foreground mt-2"
                    data-pol-id="zxnwph"
                    data-pol-file-name="app-prototype"
                    data-pol-file-type="prototype"
                  >
                    Page not found
                  </p>
                </div>
              )}
            </DashboardLayout>
          }
          data-pol-id="uca625"
          data-pol-file-name="app-prototype"
          data-pol-file-type="prototype"
        />
      </Routes>
    </Router>
  );
}
