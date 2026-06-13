import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import type { Post } from "@/types";
import { Calendar1, CalendarCheck } from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type LifeCardProps = Post & {
  delay: number;
};

export const LifeCard = ({
  title,
  description,
  tags,
  url,
  startDate,
  endDate,
  delay,
  imgPath,
  imgClassName,
}: LifeCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay,
      }}
      className="w-full"
      onClick={() => {
        navigate(url);
      }}
    >
      <Card className="h-full flex flex-col overflow-hidden pt-0 gap-0 shadow-xl/20 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl cursor-pointer">
        {imgPath && (
          <div className="h-48 w-full pb-2">
            <img
              src={imgPath}
              alt={title}
              loading="lazy"
              className={cn("w-full h-full object-cover", imgClassName)}
            />
          </div>
        )}
        <CardHeader className="flex flex-col text-start w-full pt-4 gap-2">
          <Typography.H4>{title}</Typography.H4>

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

          <Typography.Small className="line-clamp-3">
            {description}
          </Typography.Small>
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
