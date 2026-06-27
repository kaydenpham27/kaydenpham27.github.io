import { BlogContentCard } from "./components";
import { PostCardSkeleton } from "@/components/PostCardSkeleton";
import { useBlogPosts } from "@/hooks/useBlogPosts";

export const BlogsPage = () => {
  const { data: blogPosts = [], isLoading, error } = useBlogPosts();

  if (isLoading) {
    return <PostCardSkeleton dateCount={1} />;
  }

  if (error) {
    throw error;
  }

  return (
    <div className="flex flex-row flex-wrap items-center gap-2">
      {blogPosts.map((post, index) => (
        <BlogContentCard key={post.url} {...post} delay={index * 0.1} />
      ))}
    </div>
  );
};
