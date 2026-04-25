import { cn } from "@/lib/utils";
import Typography from "./ui/typography";

type TagProps = {
  label: string;
  count: number;
  className?: string;
};

export const Tag = ({ className, label, count }: TagProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-stretch rounded-[4px] overflow-hidden min-w-0 max-w-full max-w-full",
        className,
      )}
    >
      {/* Blue section for label */}
      <Typography.Small className="bg-blue-500 text-white px-2 py-0.5 truncate flex-shrink min-w-0 flex items-center justify-center max-w-[150px]">
        {label}
      </Typography.Small>

      {/* White section for count */}
      <Typography.Small className="bg-gray-200 text-gray-900 px-2 py-0.5 text-sm font-medium flex items-center justify-center min-w-[2ch] w-auto">
        {count}
      </Typography.Small>
    </div>
  );
};
