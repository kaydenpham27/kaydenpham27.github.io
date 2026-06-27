import { SideBar } from "@/components/SideBar";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { DetailedLayout, MainLayout } from "./App";
import { HomePage } from "@/pages/HomePage";
import { BlogsPage } from "@/pages/BlogsPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { LifePage } from "@/pages/LifePage";
import { PortfolioPage } from "@/pages/PortfolioPage";
import { LifePostPageSkeleton } from "@/pages/LifePage/components/LifePostPageSkeleton";

const BlogPostPage = lazy(() =>
  import("@/pages/BlogsPage").then((m) => ({ default: m.BlogPostPage })),
);
const LifePostPage = lazy(() =>
  import("@/pages/LifePage").then((m) => ({ default: m.LifePostPage })),
);

const wrap = (element: React.ReactNode) => (
  <ErrorBoundary>
    <Suspense fallback={<LifePostPageSkeleton />}>{element}</Suspense>
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
            <Route path="/blogs/:contentUri" element={wrap(<BlogPostPage />)} />
          </Route>
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};
