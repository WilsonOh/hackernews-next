import { Item, ItemSchema, User, UserSchema } from "./hackernews.schema";
import { Category, apiBaseUrl } from "@/utils/constants";
import { logger } from "@/utils/logger";

export async function getItem(id: number): Promise<Item | null> {
  const data = await fetch(`${apiBaseUrl}/item/${id}.json`).then((res) =>
    res.ok ? res.json() : null
  );
  if (!data) {
    return null;
  }
  const parseResult = ItemSchema.safeParse(data);
  if (parseResult.success) {
    return parseResult.data;
  }
  logger.warn(parseResult.error.formErrors, "Failed to parse item");
  return null;
}

export async function getStories(category: Category): Promise<number[]> {
  return await fetch(`${apiBaseUrl}/${category}stories.json`).then((res) =>
    res.json()
  );
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
