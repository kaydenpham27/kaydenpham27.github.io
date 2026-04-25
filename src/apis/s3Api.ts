import { createApiClient } from "./baseApi";
import type {
  ListObjectsCommandOutput,
  ListBucketsCommandOutput,
  GetObjectCommandOutput,
} from "@aws-sdk/client-s3";

const client = createApiClient({
  resourceName: "s3",
});

export const s3Api = {
  listBuckets: async () => {
    return client.get<ListBucketsCommandOutput>("/");
  },

  listBucketObjects: async (bucketId: string) => {
    return client.get<ListObjectsCommandOutput>(`/${bucketId}/objects`);
  },

  getBucketObject: async (bucketId: string, objectId: string) => {
    return client.get<GetObjectCommandOutput>(
      `/${bucketId}/objects/${objectId}`,
    );
  },
};
