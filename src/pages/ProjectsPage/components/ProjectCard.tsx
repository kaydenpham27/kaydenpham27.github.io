import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import type { ProjectCardTag } from "@/types/ProjectCardTag";
import { Calendar1, CalendarCheck, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

export type ProjectCardProps = {
  title: string;
  description: string;
  tags: ProjectCardTag[];
  githubUrl: string;
  imgPath: string;
  imgClassName: string;
  startDate: string;
  endDate: string;
  delay: number;
};

export const ProjectCard = ({
  title,
  description,
  imgPath,
  imgClassName,
  tags,
  githubUrl,
  startDate,
  endDate,
  delay,
}: ProjectCardProps) => {
  const [imgLoaded, setImgLoaded] = React.useState(false);

  const handleCardClick = () => {
    if (githubUrl) {
      window.open(githubUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay,
      }}
      className="w-full"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <Card className="h-full flex flex-col overflow-hidden pt-0 gap-0 shadow-xl/20 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl cursor-pointer">
        {imgPath && (
          <div className="pb-2">
            {!imgLoaded && <Skeleton className="h-48 w-full" />}
            <img
              src={imgPath}
              alt={title}
              onLoad={() => setImgLoaded(true)}
              className={cn(
                "h-48 w-full p-4 bg-muted max-h-full max-w-full object-contain flex items-center justify-center",
                imgClassName,
                !imgLoaded && "hidden",
              )}
              style={{ display: imgLoaded ? "flex" : "none" }}
            />
          </div>
        )}
        <CardHeader className="flex flex-col text-start w-full pt-4 gap-2">
          <div className="flex items-center gap-2">
            <Typography.H4>{title}</Typography.H4>
            <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-4 justify-start">
            <div className="flex flex-row gap-2 items-center">
              <Calendar1 className="w-5 flex-shrink-0" />
              <Typography.Small className="whitespace-nowrap">
                {startDate}
              </Typography.Small>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <CalendarCheck className="w-5 flex-shrink-0" />
              <Typography.Small className="whitespace-nowrap">
                {endDate}
              </Typography.Small>
            </div>
          </div>

          <Typography.Muted className="line-clamp-3">
            {description}
          </Typography.Muted>
        </CardHeader>

        <CardContent className="flex flex-col w-full gap-2 pt-2">
          <div className="flex flex-row flex-wrap justify-start gap-2">
            {tags.map((tag) => {
              return (
                <Badge key={tag} variant={"outline"}>
                  <Typography.Small>{tag}</Typography.Small>
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
