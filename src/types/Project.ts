import type { ProjectCardTag } from "./ProjectCardTag";

export type Project = {
  url: string;
  title: string;
  description: string;
  tags: ProjectCardTag[];
  githubUrl: string;
  imgPath: string;
  imgClassName: string;
  startDate: string;
  endDate: string;
};
