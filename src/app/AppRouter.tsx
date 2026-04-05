import { SideBar } from "@/components/SideBar";
import { BASE_URL } from "@/constants";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const HomePage = lazy(() =>
  import("@/pages/HomePage").then((m) => ({ default: m.HomePage })),
);
const BlogsPage = lazy(() =>
  import("@/pages/BlogsPage").then((m) => ({ default: m.BlogsPage })),
);
const ProjectsPage = lazy(() =>
  import("@/pages/ProjectsPage").then((m) => ({ default: m.ProjectsPage })),
);
const LifePage = lazy(() =>
  import("@/pages/LifePage").then((m) => ({ default: m.LifePage })),
);
const LifePostPage = lazy(() =>
  import("@/pages/LifePage").then((m) => ({ default: m.LifePostPage })),
);
const PortfolioPage = lazy(() =>
  import("@/pages/PortfolioPage").then((m) => ({ default: m.PortfolioPage })),
);

const RouteFallback = () => (
  <div className="mx-auto max-w-380 px-8 py-16 text-center text-sm text-gray-500">
    Loading…
  </div>
);

export const AppRouter = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <SideBar>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/life" element={<LifePage />} />
            <Route path="/life/:contentUri" element={<LifePostPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </SideBar>
    </BrowserRouter>
  );
};
