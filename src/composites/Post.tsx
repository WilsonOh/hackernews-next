import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getItem } from "@/lib/hackernews/hackernews.service";
import { getUrlDomain, getWebsiteFaviconUrl } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { Globe, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  idx: number;
};

export async function Post({ id, idx }: Props) {
  const post = await getItem(id);

  if (!post) {
    return null;
  }

  const iconUrl = post.url && getWebsiteFaviconUrl(post.url);

  return (
    <Card className="w-full flex justify-between items-center pb-4">
      <div className="flex items-baseline">
        <span className="ms-4 text-muted-foreground">{idx + 1}.</span>
        <CardHeader className="shrink">
          <CardTitle>{post.title}</CardTitle>
          <CardDescription className="flex gap-2 h-5 flex-wrap">
            {post.url && (
              <>
                {" "}
                <Link className="flex gap-2 max-w-xs" href={post.url}>
                  {iconUrl ? (
                    <Image src={iconUrl} alt={iconUrl} width={20} height={20} />
                  ) : (
                    <Globe size={20} />
                  )}
                  <span className="truncate">{getUrlDomain(post.url)}</span>
                </Link>
                <Separator orientation="vertical" />{" "}
              </>
            )}
            <div>{formatDistanceToNow(post.time * 1000)} ago</div>
            <Separator orientation="vertical" />
            <div>{post.score} points</div>
          </CardDescription>
        </CardHeader>
      </div>
      <Button variant="link" asChild className="flex me-3 gap-2">
        <Link href={`/item/${post.id}`}>
          <span className="font-bold text-lg">{post.descendants}</span>
          <MessageSquare />
        </Link>
      </Button>
    </Card>
  );
}
