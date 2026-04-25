import { ProjectCard } from "./components";
import { BASE_URL } from "@/constants";

// TODO: This will be retrieved through the API later
const projects: any[] = [
  {
    title: "Telegram Clone",
    description: "Cloned Telegram using Typescript and AWS",
    tags: ["AWS", "Cloud", "CI/CD", "Backend", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/kaydenpham27/Telegram.git",
    imgPath: `${BASE_URL}/project-images/telegram.png`,
    imgClassName: "w-30 h-30",
    startDate: "20-8-2025",
    endDate: "Present",
  },
  {
    title: "Competive Programming Solutions",
    description:
      "I've been doing CP for a while, so I decided to create this repository where I save my solutions for the official ICPC contests and interesting problems from platforms like CodeForces, AtCoder or QOJ",
    tags: ["C++"],
    githubUrl: "https://github.com/kaydenpham27/Competitive-Programming",
    imgPath: `${BASE_URL}/project-images/icpc.png`,
    imgClassName: "w-50 h-30",
    startDate: "20-8-2025",
    endDate: "Present",
  },
  {
    title: "Microservice Evaluation",
    description:
      "FUSE, a microservice evaluation technique, based on eBPF technology to monitor microservice's behavior at the Kernal level",
    tags: ["Python", "Cloud"],
    githubUrl: "https://github.com/kaydenpham27/MicroserviceEvaluation",
    imgPath: `${BASE_URL}/project-images/eBPF.png`,
    imgClassName: "w-60 h-30",
    startDate: "??-??-2022",
    endDate: "??-??-2022",
  },
];

export const ProjectsPage = () => {
  return (
    <div className="flex flex-row flex-wrap items-center gap-2">
      {projects.map((project, index) => {
        return (
          <ProjectCard
            key={project.githubUrl}
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
        );
      })}
    </div>
  );
};
