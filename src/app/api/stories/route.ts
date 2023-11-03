import { Item } from "@/lib/hackernews/hackernews.schema";
import { getItem, getStories } from "@/lib/hackernews/hackernews.service";
import { Category, categories } from "@/utils/constants";
import { env } from "@/utils/env";
import { logger } from "@/utils/logger";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const pageIndex = req.nextUrl.searchParams.get("pageIndex");
  const category = req.nextUrl.searchParams.get("category") as Category;
  logger.info(
    `Retrieving stories from the ${category} category at page index ${pageIndex}`
  );
  if (!category || !categories.includes(category)) {
    return Response.json(
      { error: "Please provide a valid category for this request" },
      {
        status: 400,
      }
    );
  }
  if (!pageIndex) {
    return Response.json(
      { error: "Please provide the pageNumber for this request" },
      {
        status: 400,
      }
    );
  }
  const cursor = env.pageSize * parseInt(pageIndex);
  const stories = await getStories(category);
  const page = stories.slice(cursor, cursor + env.pageSize);
  logger.info(page, "Fetching stories");
  const settledResults = await Promise.allSettled(
    page.map((story) => getItem(story))
  );
  const items = settledResults
    .map((settledResult) =>
      settledResult.status === "fulfilled" ? settledResult.value : null
    )
    .filter((item) => item != null) as Item[];

  logger.info(`Successfully fetched ${items.length} items`);
  logger.debug({ items });
  return Response.json(items);
}
