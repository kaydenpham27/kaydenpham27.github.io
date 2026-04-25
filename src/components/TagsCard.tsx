import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "./ui/card";
import Typography from "./ui/typography";
import { Tag } from "./Tag";
import { useState } from "react";

type TagsCardProps = {
  className?: string;
};

const TAGS = [
  {
    label: "CP",
    count: 1,
  },
  {
    label: "Git",
    count: 1,
  },
  {
    label: "Computer Science",
    count: 1,
  },
  {
    label: "Software Architecture",
    count: 1,
  },
];

export const TagsCard = ({ className }: TagsCardProps) => {
  const [tags] = useState(TAGS);

  // TODO: Hooks to retrieve tags
  return (
    <Card className={cn(className, "w-full min-w-0 max-w-full")}>
      <CardHeader className="flex">
        <Typography.Medium className="font-semibold">Tags</Typography.Medium>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        {tags.map((tag, index) => {
          return <Tag label={tag.label} count={tag.count} key={index} />;
        })}
      </CardContent>
    </Card>
  );
};
