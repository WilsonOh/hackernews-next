import { getItem } from "@/lib/hackernews/hackernews.service";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const qParams = req.nextUrl.searchParams;
  const id = qParams.get("id");
  if (!id) {
    return new Response("invalid itemId", { status: 400 });
  }
  const item = await getItem(parseInt(id));

  if (!item) {
    return new Response("failed to retrieve item", { status: 404 });
  }
  return Response.json(item);
}
