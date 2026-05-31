import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import type { BlogPost } from "@/types";

type BlogContentCardProps = BlogPost & { delay: number };

export const BlogContentCard = ({
  title,
  description,
  startDate,
  endDate,
  tags,
  delay,
}: BlogContentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="w-full"
    >
      <Card className="h-full flex flex-col shadow-xl/20">
        <CardHeader className="flex flex-col text-start w-full gap-1">
          <Typography.H4>{title}</Typography.H4>
          <Typography.Small className="text-muted-foreground">
            {startDate} — {endDate}
          </Typography.Small>
          <Typography.Muted className="line-clamp-3">
            {description}
          </Typography.Muted>
        </CardHeader>
        <CardContent className="flex flex-row flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              <Typography.Small>{tag}</Typography.Small>
            </Badge>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};
