import { getItem } from "@/lib/hackernews/hackernews.service";
import Item from "@/templates/Item";
import { notFound } from "next/navigation";

export const revalidate = 30;

export default async function ItemPage({ params }: { params: { id: string } }) {
  const itemId = parseInt(params.id);
  if (isNaN(itemId)) {
    return notFound();
  }
  const item = await getItem(itemId);
  if (!item) {
    return notFound();
  }
  return <Item item={item} />;
}
