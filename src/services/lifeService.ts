import { s3Api } from "@/apis/s3Api";

export const postService = {
  listPosts: () => {
    return s3Api.listBucketObjects("");
  },
};
