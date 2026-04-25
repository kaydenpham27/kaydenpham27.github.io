import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { Coffee, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { GITHUB_PROFILE_URL } from "@/constants/github";
import { GitHubIcon } from "./GithubIcon";
import { InstagramIcon } from "./InstagramIcon";
import { LinkedInIcon } from "./LinkedInIcon";
import { MailIcon } from "./MailIcon";
import { CodeforcesIcon } from "./CodeforcesIcon";
import { BASE_URL } from "@/constants";

type ProfileCardProps = {
  className?: string;
};

export const ProfileCard = ({ className = "" }: ProfileCardProps) => {
  // TODO: Hooks to retrieve data

  return (
    <Card className={cn(className, "w-full min-w-0 max-w-full")}>
      <CardContent className="flex flex-col justify-center">
        <img
          src={`${BASE_URL}/AVA.png`}
          alt="Portrait of Trung Kien Pham"
          className="aspect-square place-self-center rounded-full border border-solid border-gray-700 object-cover w-[30%] lg:w-[50%]"
        />
        <Typography.Large className="pt-5">Trung Kien Pham</Typography.Large>
        <Typography.Muted className="italic">
          Software Engineer
        </Typography.Muted>
        <Typography.Muted className="italic">Computer Science</Typography.Muted>
        <Typography.Muted className="italic">
          Competitive Programming
        </Typography.Muted>
        <div className="flex flex-row justify-center items-center gap-1 pb-6">
          <MapPin className="w-4" />
          <Typography.Muted> Brisbane, Australia </Typography.Muted>
        </div>
        <div className="flex flex-col gap-6">
          {/* Stats */}
          <div className="flex flex-wrap justify-around gap-5">
            <div className="flex flex-col">
              <Typography.Small className="font-thin font-serif">
                {" "}
                POSTS{" "}
              </Typography.Small>
              <Typography.Lead> 3 </Typography.Lead>
            </div>
            <div className="flex flex-col">
              <Typography.Small className="font-thin font-serif">
                {" "}
                CATEGORIES{" "}
              </Typography.Small>
              <Typography.Lead> 1 </Typography.Lead>
            </div>
            <div className="flex flex-col">
              <Typography.Small className="font-thin font-serif">
                {" "}
                TAGS{" "}
              </Typography.Small>
              <Typography.Lead> 4 </Typography.Lead>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-3">
            <div
              className="flex"
              role="button"
              tabIndex={0}
              onClick={() =>
                window.open(GITHUB_PROFILE_URL, "_blank", "noopener,noreferrer")
              }
              style={{ outline: "none" }}
            >
              <Button
                variant="outline"
                className="min-w-30 cursor-pointer"
                title="Follow for more"
              >
                <GitHubIcon className="px-0 w-5" />
                <Typography.Muted>Follow</Typography.Muted>
              </Button>
            </div>
            <div
              className="flex"
              role="button"
              tabIndex={0}
              onClick={() =>
                window.open(GITHUB_PROFILE_URL, "_blank", "noopener,noreferrer")
              }
              style={{ outline: "none" }}
            >
              <Button
                variant="outline"
                className="min-w-30 cursor-pointer"
                title="Buy me a coffee"
              >
                <Coffee />
                <Typography.Muted>Coffee</Typography.Muted>
              </Button>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-row justify-around items-center">
            <GitHubIcon
              width="25px"
              className="hover:bg-transparent"
              colorChangeOnHover={false}
            />
            <InstagramIcon width="22px" className="hover:bg-transparent" />
            <LinkedInIcon
              height="25px"
              className="hover:bg-transparent"
              colorChangeOnHover={false}
            />
            <MailIcon />
            <CodeforcesIcon />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
