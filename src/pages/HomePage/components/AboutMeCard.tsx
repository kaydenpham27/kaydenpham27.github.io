import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { PersonalDetails } from "./PersonalDetails";
import { cn } from "@/lib/utils";
import { BASE_URL } from "@/constants";

type AboutMeCardProps = {
  className?: string;
};

export const AboutMeCard = ({ className }: AboutMeCardProps) => {
  return (
    <div className="w-full">
      <Card className={cn("w-full", className)}>
        <CardHeader>
          <CardTitle>
            <Typography.H1> About Me </Typography.H1>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-4">
          <PersonalDetails />
          <img
            src={`${BASE_URL}/AVA.png`}
            className="w-75 place-self-center rounded-full border-solid border-2 border-gray-700"
          />
        </CardContent>
      </Card>
    </div>
  );
};
