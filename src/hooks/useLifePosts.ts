import type { Post } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/constants";

const fetchLifePosts = async (): Promise<Post[]> => {
  const res = await fetch(`${BASE_URL}/life-content/index.json`);
  if (!res.ok) throw new Error(`Failed to fetch life posts: ${res.statusText}`);
  return res.json();
};

export const useLifePosts = () => {
  return useQuery({ queryKey: ["lifePosts"], queryFn: fetchLifePosts });
};
