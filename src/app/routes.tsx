import { createBrowserRouter } from "react-router";
import { LandingPage } from "./components/LandingPage";
import { ChatbotPage } from "./components/ChatbotPage";
import { RatingPage } from "./components/RatingPage";
import { ReportPage } from "./components/ReportPage";
import { DashboardPage } from "./components/DashboardPage";
import { RootLayout } from "./components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: LandingPage },
      { path: "chat", Component: ChatbotPage },
      { path: "rating", Component: RatingPage },
      { path: "report", Component: ReportPage },
      { path: "dashboard", Component: DashboardPage },
    ],
  },
]);
