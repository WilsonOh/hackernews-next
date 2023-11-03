import Comment from "./_sub/Comment";
import { Item } from "@/lib/hackernews/hackernews.schema";

type Props = {
  item: Item;
  gp?: string;
  isDirectChild?: boolean;
};

export default function Comments({ item, gp, isDirectChild }: Props) {
  if (!item.kids || item.kids.length == 0) {
    return null;
  }
  return (
    <div className="flex flex-col gap-4">
      {item.kids.map((kid) => (
        <Comment isDirectChild={isDirectChild} gp={gp} id={kid} key={kid} />
      ))}
    </div>
  );
}
