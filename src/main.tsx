import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { AssessmentProvider } from "./context/assessment-context.tsx";
import { LandingPage } from "./pages/LandingPage.tsx";
import { QuestionnairePage } from "./pages/QuestionnairePage.tsx";
import "./index.css";

const ResultsPage = lazy(() =>
  import("./pages/ResultsPage.tsx").then((m) => ({ default: m.ResultsPage }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "assess", element: <QuestionnairePage /> },
      {
        path: "results",
        element: (
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="h-8 w-8 rounded-full border-2 border-aegis-accent border-t-transparent animate-spin" />
              </div>
            }
          >
            <ResultsPage />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AssessmentProvider>
      <RouterProvider router={router} />
    </AssessmentProvider>
  </StrictMode>
);
