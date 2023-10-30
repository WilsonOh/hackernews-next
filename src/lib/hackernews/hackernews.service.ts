import { Item, ItemSchema, User, UserSchema } from "./hackernews.schema";
import { Category, apiBaseUrl } from "@/utils/constants";
import { logger } from "@/utils/logger";

export async function getItem(id: number): Promise<Item | null> {
  logger.info(`Retrieving item ${id}`);
  const data = await fetch(`${apiBaseUrl}/item/${id}.json`).then((res) =>
    res.ok ? res.json() : null
  );
  if (!data) {
    logger.error(`Failed to retrieve item ${id}`);
    return null;
  }
  const parseResult = ItemSchema.safeParse(data);
  if (parseResult.success) {
    logger.info(`Successfully retrieved item ${id}`);
    logger.debug({ item: parseResult.data });
    return parseResult.data;
  }
  logger.warn(parseResult.error.formErrors, `Failed to parse item ${id}`);
  return null;
}

export async function getStories(category: Category): Promise<number[]> {
  logger.info(`Retrieving ${category} stories`);
  const stories = await fetch(`${apiBaseUrl}/${category}stories.json`).then(
    (res) => res.json()
  );
  logger.info(`Successfully retrieved ${category} stories`);
  logger.debug({ stories });
  return stories;
}

export async function getMaxItemId(): Promise<number> {
  return await fetch(`${apiBaseUrl}/maxitem.json`).then((res) => res.json());
}

export async function getUser(id: string): Promise<User | null> {
  const data = await fetch(`${apiBaseUrl}/user/${id}.json`).then((res) =>
    res.json()
  );
  const parseResult = UserSchema.safeParse(data);
  if (parseResult.success) {
    return parseResult.data;
  }
  logger.warn(parseResult.error, "Failed to parse user");
  return null;
}
