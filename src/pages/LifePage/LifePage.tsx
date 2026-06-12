import { LifeCard } from "./components/LifeCard";
import { useLifePosts } from "@/hooks/useLifePosts";
import { LifePageSkeleton } from "./components/LifePageSkeleton";

export const LifePage = () => {
  const { data: lifePosts = [], isLoading, error } = useLifePosts();

  if (isLoading) {
    return <LifePageSkeleton />;
  }

  if (error) {
    throw error;
  }

  return (
    <div className="flex flex-row flex-wrap items-center gap-2">
      {lifePosts.map((page, index) => (
        <LifeCard
          key={page.url}
          title={page.title}
          description={page.description}
          url={page.url}
          imgPath={page.imgPath}
          imgClassName={page.imgClassName}
          startDate={page.startDate}
          endDate={page.endDate}
          tags={page.tags}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};
