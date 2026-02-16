import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { LandingPage } from "./pages/LandingPage.tsx";
import { QuestionnairePage } from "./pages/QuestionnairePage.tsx";
import { ResultsPage } from "./pages/ResultsPage.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "assess", element: <QuestionnairePage /> },
      { path: "results", element: <ResultsPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
