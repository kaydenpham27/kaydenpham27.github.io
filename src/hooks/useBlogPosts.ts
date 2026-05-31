import type { BlogPost } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/constants";

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const res = await fetch(`${BASE_URL}/blogs/index.json`);
  if (!res.ok) throw new Error(`Failed to fetch blog posts: ${res.statusText}`);
  return res.json();
};

export const useBlogPosts = () => {
  return useQuery({ queryKey: ["blogPosts"], queryFn: fetchBlogPosts });
};
