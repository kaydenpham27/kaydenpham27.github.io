import { ProfileCard } from "@/components/ProfileCard";
import { TagsCard } from "@/components/TagsCard";

export const BlogsPage = () => {
  // TODO: Use state here to load content and pass it down to NavBar and Content
  // Receives blogs from S3 bucket as static content, use React query to handle this,
  // pass content into ContentCard and NavSideBar
  return (
    <div className="grid lg:grid-cols-[19rem_auto_15rem] grid-cols-1 justify-stretch gap-5">
      <div>
        <ProfileCard />
      </div>
      <div className="flex flex-row flex-wrap items-center gap-2"></div>
      <div>
        <TagsCard />
      </div>
    </div>
  );
};
