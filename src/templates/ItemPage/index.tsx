import ItemMetadata from "./_sub/ItemMetadata";
import { Separator } from "@/components/ui/separator";
import Comments from "@/composites/Comments";
import { Item } from "@/lib/hackernews/hackernews.schema";
import { getUrlDomain, getUserProfileLink } from "@/lib/utils";
import { parseHtml } from "@/utils/parseHtml";
import { formatDistanceToNow } from "date-fns";
import { Clock, MessagesSquareIcon, ThumbsUp, UserCircle2 } from "lucide-react";
import Link from "next/link";

type Props = {
  item: Item;
};

export default function ItemPage({ item }: Props) {
  return (
    <div className="flex flex-col my-2 gap-2 container mx-auto">
      <h1 className="text-2xl font-bold">{item.title}</h1>
      {item.url && (
        <h2 className="text-sm text-muted-foreground max-w-[10rem] truncate hover:underline">
          <Link href={item.url}>{getUrlDomain(item.url)}</Link>
        </h2>
      )}
      <div className="flex flex-wrap gap-4 items-center">
        <ItemMetadata icon={<ThumbsUp />} contents={item.score} />
        <ItemMetadata
          icon={<MessagesSquareIcon />}
          contents={item.descendants}
        />
        <ItemMetadata
          icon={<Clock />}
          contents={`${formatDistanceToNow(item.time * 1000)} ago`}
        />
        {item.by && (
          <Link href={getUserProfileLink(item.by)} target="_blank">
            <ItemMetadata icon={<UserCircle2 />} contents={item.by} />
          </Link>
        )}
      </div>
      {parseHtml(item.text)}
      <Separator />
      <Comments isDirectChild gp={item.by} item={item} />
    </div>
  );
}
