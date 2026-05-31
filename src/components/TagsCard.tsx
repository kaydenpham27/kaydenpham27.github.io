import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "./ui/card";
import Typography from "./ui/typography";
import { Tag } from "./Tag";
import { useMemo } from "react";
import { useLocation } from "react-router";
import { useLifePosts } from "@/hooks/useLifePosts";
import { useProjects } from "@/hooks/useProjects";
import { useBlogPosts } from "@/hooks/useBlogPosts";

type TagsCardProps = {
  className?: string;
};

export const TagsCard = ({ className }: TagsCardProps) => {
  const { pathname } = useLocation();
  const { data: lifePosts = [] } = useLifePosts();
  const { data: projects = [] } = useProjects();
  const { data: blogPosts = [] } = useBlogPosts();

  const tags = useMemo(() => {
    let raw: string[];

    if (pathname.startsWith("/life")) {
      raw = lifePosts.flatMap((p) => p.tags as string[]);
    } else if (pathname.startsWith("/projects")) {
      raw = projects.flatMap((p) => p.tags as string[]);
    } else if (pathname.startsWith("/blogs")) {
      raw = blogPosts.flatMap((p) => p.tags);
    } else {
      raw = [
        ...lifePosts.flatMap((p) => p.tags as string[]),
        ...projects.flatMap((p) => p.tags as string[]),
        ...blogPosts.flatMap((p) => p.tags),
      ];
    }

    const countMap = new Map<string, number>();
    for (const tag of raw) {
      countMap.set(tag, (countMap.get(tag) ?? 0) + 1);
    }
    return Array.from(countMap.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([label, count]) => ({ label, count }));
  }, [pathname, lifePosts, projects, blogPosts]);

  return (
    <Card className={cn(className, "w-full min-w-0 max-w-full")}>
      <CardHeader className="flex">
        <Typography.Medium className="font-semibold">Tags</Typography.Medium>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Tag label={tag.label} count={tag.count} key={tag.label} />
        ))}
      </CardContent>
    </Card>
  );
};
