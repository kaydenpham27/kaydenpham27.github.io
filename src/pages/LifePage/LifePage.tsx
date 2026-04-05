import type { Post } from "@/types";
import { LifeCard } from "./components/LifeCard";
import { motion } from "motion/react";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-row flex-wrap items-center gap-2"
    >
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
    </motion.div>
  );
};
