import Comment from "./Comment";
import { Item } from "@/lib/hackernews/hackernews.schema";

type Props = {
  item: Item;
};

export default function Comments({ item }: Props) {
  if (!item.kids || item.kids.length == 0) {
    return null;
  }
  return (
    <div className="flex flex-col gap-4">
      {item.kids.map((kid) => (
        <Comment id={kid} key={kid} />
      ))}
    </div>
  );
}
