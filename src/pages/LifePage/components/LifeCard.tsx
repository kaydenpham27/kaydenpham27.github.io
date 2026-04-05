import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import type { Post } from "@/types";
import { Calendar1, CalendarCheck } from "lucide-react";
import { Link } from "react-router";

type LifeCardProps = Post;

export const LifeCard = ({
  title,
  description,
  tags,
  url,
  startDate,
  endDate,
}: LifeCardProps) => {
  return (
    <Link to={`${url}`} title={`View ${title} in details`} className="w-full">
      <Card className="h-full flex flex-col items-center shadow-xl/20 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl cursor-pointer">
        <CardHeader className="flex flex-col text-start w-full">
          <CardTitle>
            <Typography.H4>{title}</Typography.H4>
          </CardTitle>

          <div className="flex flex-wrap gap-2 sm:gap-4 justify-start pb-4">
            {/* Start Date */}
            <div className="flex flex-row gap-2 items-center">
              <Calendar1 className="w-5 flex-shrink-0" />
              <Typography.Small className="whitespace-nowrap">
                {startDate}
              </Typography.Small>
            </div>

            {/* End Date */}
            <div className="flex flex-row gap-2 items-center">
              <CalendarCheck className="w-5 flex-shrink-0" />
              <Typography.Small className="whitespace-nowrap">
                {endDate}
              </Typography.Small>
            </div>
          </div>

          <CardDescription>
            <Typography.Small className="line-clamp-3">
              {description}
            </Typography.Small>
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col w-full items-center gap-5">
          <div className="flex flex-row flex-wrap justify-center gap-2">
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
    </Link>
  );
};
