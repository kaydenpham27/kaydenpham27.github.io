import "./App.css";
import { ProfileCard } from "@/components/ProfileCard";
import { TagsCard } from "@/components/TagsCard";
import { Outlet } from "react-router";
import { AppRouter } from "./AppRouter";
import { AppProvider } from "./AppProvider";

export function MainLayout() {
  return (
    <div className="grid lg:grid-cols-[19rem_auto_15rem] grid-cols-1 justify-stretch gap-5">
      <div>
        <ProfileCard />
      </div>
      <main className="min-w-0">
        <Outlet />
      </main>
      <div>
        <TagsCard />
      </div>
    </div>
  );
}

export const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};
