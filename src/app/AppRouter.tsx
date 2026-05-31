import { SideBar } from "@/components/SideBar";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { DetailedLayout, MainLayout } from "./App";

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

const wrap = (element: React.ReactNode) => (
  <ErrorBoundary>
    <Suspense>{element}</Suspense>
  </ErrorBoundary>
);

export const AppRouter = () => {
  return (
    <BrowserRouter basename="">
      <SideBar>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={wrap(<HomePage />)} />
            <Route path="/projects" element={wrap(<ProjectsPage />)} />
            <Route path="/blogs" element={wrap(<BlogsPage />)} />
            <Route path="/life" element={wrap(<LifePage />)} />
            <Route path="/portfolio" element={wrap(<PortfolioPage />)} />
            <Route path="*" element={wrap(<HomePage />)} />
          </Route>
          <Route element={<DetailedLayout />}>
            <Route path="/life/:contentUri" element={wrap(<LifePostPage />)} />
          </Route>
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};
