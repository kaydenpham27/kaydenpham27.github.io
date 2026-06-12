import type { LIFE_TAGS } from "@/constants/tags";

export type Post = {
  url: string;
  description: string;
  startDate: string;
  endDate: string;
  tags: (typeof LIFE_TAGS)[number][];
  title: string;
  imgPath: string;
  imgClassName: string;
};
