import type { Project } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/constants";

const fetchProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${BASE_URL}/projects/index.json`);
  if (!res.ok) throw new Error(`Failed to fetch projects: ${res.statusText}`);
  return res.json();
};

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 60,
  });
};
