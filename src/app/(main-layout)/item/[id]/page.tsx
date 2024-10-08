import { getItem } from "@/lib/hackernews/hackernews.service";
import ItemPage from "@/templates/ItemPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const itemId = parseInt(params.id);
  if (isNaN(itemId)) {
    return notFound();
  }
  const item = await getItem(itemId);
  return {
    title: item?.title || "HackerNews",
    description: item?.title || "HackerNews",
  };
}

export const revalidate = 30;

export default async function page({ params }: { params: { id: string } }) {
  const itemId = parseInt(params.id);
  if (isNaN(itemId)) {
    return notFound();
  }
  const item = await getItem(itemId);
  if (!item) {
    return notFound();
  }
  return <ItemPage item={item} />;
}
