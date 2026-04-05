import type { Post } from "@/types";
import { LifeCard } from "./components/LifeCard";

const pages: Post[] = [
  {
    title: "North Stradbroke Island",
    description: "A trip to North Stradbroke Island - Vietnamese Version",
    url: "north-stradbroke-island-25-12-2025",
    startDate: "25-12-2025",
    endDate: "25-12-2025",
    tags: ["Australia", "QLD"],
  },
];

export const LifePage = () => {
  return (
    <div className="flex flex-row flex-wrap items-start gap-2">
      {pages.map((page) => {
        return (
          <LifeCard
            key={page.url}
            title={page.title}
            description={page.description}
            url={page.url}
            startDate={page.startDate}
            endDate={page.endDate}
            tags={page.tags}
          />
        );
      })}
    </div>
  );
};
