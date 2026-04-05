import { ProfileCard } from "@/components/ProfileCard";
import { TagsCard } from "@/components/TagsCard";
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
    <div className="grid lg:grid-cols-[19rem_auto_15rem] grid-cols-1 justify-stretch gap-5">
      <div>
        <ProfileCard />
      </div>
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
      <div>
        <TagsCard />
      </div>
    </div>
  );
};
