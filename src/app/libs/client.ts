import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSDate,
  MicroCMSContentId,
} from "microcms-js-sdk";
import { notFound } from "next/navigation";

// ブログの型定義
export type Blog = {
  number: number;
  title: string;
  description: string;
  body: string;
};

export type Article = Blog & MicroCMSContentId & MicroCMSDate;

if (!process.env.SERVICE_DOMAIN) {
  throw new Error("SERVICE_DOMAIN is required");
}

if (!process.env.CMS_API_KEY) {
  throw new Error("CMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || "",
  apiKey: process.env.CMS_API_KEY || "",
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Blog>({
      endpoint: "blog",
      queries,
      customRequestInit: {
        cache: "force-cache",
      },
    })
    .catch(notFound);
  return listData;
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client
    .getListDetail<Blog>({
      endpoint: "blog",
      contentId,
      queries,
      customRequestInit: {
        cache: "force-cache",
      },
    })
    .catch(notFound);

  return detailData;
};
