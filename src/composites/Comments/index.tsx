import Comment from "./Comment";
import { Item } from "@/lib/hackernews/hackernews.schema";

type Props = {
  item: Item;
  gp?: string;
};

export default function Comments({ item, gp }: Props) {
  if (!item.kids || item.kids.length == 0) {
    return null;
  }
  return (
    <div className="flex flex-col gap-4">
      {item.kids.map((kid) => (
        <Comment gp={gp} id={kid} key={kid} />
      ))}
    </div>
  );
}
