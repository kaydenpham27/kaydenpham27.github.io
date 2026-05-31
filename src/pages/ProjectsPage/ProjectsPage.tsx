import { ProjectCard } from "./components";
import { useProjects } from "@/hooks/useProjects";

export const ProjectsPage = () => {
  const { data: projects = [], isLoading, error } = useProjects();

  if (isLoading) {
    return <></>;
  }

  if (error) {
    console.error(error);
    return <></>;
  }

  return (
    <div className="flex flex-row flex-wrap items-center gap-2">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.url}
          title={project.title}
          description={project.description}
          tags={project.tags}
          githubUrl={project.githubUrl}
          imgPath={project.imgPath}
          imgClassName={project.imgClassName}
          startDate={project.startDate}
          endDate={project.endDate}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};
