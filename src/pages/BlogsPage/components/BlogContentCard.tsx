import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { Calendar1 } from "lucide-react";
import { useNavigate } from "react-router";
import type { BlogPost } from "@/types";
import { cn } from "@/lib/utils";

type BlogContentCardProps = BlogPost & { delay: number };

export const BlogContentCard = ({
  title,
  description,
  postedDate,
  tags,
  url,
  delay,
  imgClassName,
  imgPath,
}: BlogContentCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="w-full"
      onClick={() => navigate(url)}
    >
      <Card className="h-full flex flex-col shadow-xl/20 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl cursor-pointer">
        <CardHeader className="flex flex-col text-start w-full gap-1">
          <Typography.H4>{title}</Typography.H4>
          <div className="flex flex-row gap-2 items-center">
            <Calendar1 className="w-4 flex-shrink-0" />
            <Typography.Small className="whitespace-nowrap">
              {postedDate}
            </Typography.Small>
          </div>
          <Typography.Muted className="line-clamp-3">
            {description}
          </Typography.Muted>
        </CardHeader>
        <CardContent className="flex flex-col w-full items-center gap-5">
          <img
            src={imgPath}
            className={cn("w-full max-h-50 border-gray-200 ", imgClassName)}
            alt={title}
          />
          <div className="flex flex-row flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                <Typography.Small>{tag}</Typography.Small>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
