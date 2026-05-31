import Typography from "@/components/ui/typography";
import { BASE_URL } from "@/constants";

type DetailsRowProps = {
  iconUrl: string;
  title: string;
  description: string;
};

const DetailsRow = ({ iconUrl, title, description }: DetailsRowProps) => {
  return (
    <div className="w-full grid grid-cols-3 md:grid-cols-[5%_20%_75%] items-center pt-4 text-left">
      <img src={iconUrl} className="w-8" />
      <Typography.H4 className="pl-4"> {title} </Typography.H4>
      <Typography.Large className="font-normal pl-4">
        {description}
      </Typography.Large>
    </div>
  );
};

export const PersonalDetails = () => {
  return (
    <div className="flex flex-col justify-start items-start pl-4">
      <Typography.H2> Software Engineer </Typography.H2>
      <Typography.H3 className="font-normal">Trung Kien Pham</Typography.H3>
      <Typography.Large className="font-normal pb-6">
        Brisbane, Australia
      </Typography.Large>
      <DetailsRow
        iconUrl={`${BASE_URL}/work_place.png`}
        title="Company"
        description="Nanoputian"
      />
      <DetailsRow
        iconUrl={`${BASE_URL}/energy_drink.png`}
        title="Drink"
        description="I love iced long black! Don't really know if 
        this is what they call it anywhere else, but in Australia, this is a GOATed drink.
        "
      />
      <DetailsRow
        iconUrl={`${BASE_URL}/enjoy.png`}
        title="Hobbies"
        description="I love hiking, the nature here in Australia is breathtaking, plenty of places we can go
        visit and enjoy on the weekends to escape a hectic working week. I also like to cook in the free time, 
        cooking and chilling is absolutely a fav activity for my chill weekends. 
        "
      />
    </div>
  );
};
