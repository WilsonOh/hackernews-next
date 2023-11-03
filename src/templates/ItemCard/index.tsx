"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoadingPost from "@/composites/Loading/LoadingPost";
import { Item } from "@/lib/hackernews/hackernews.schema";
import { getUrlDomain, getWebsiteFaviconUrl } from "@/lib/utils";
import { formatDistanceToNowStrict } from "date-fns";
import { Clock, MessageSquare, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import useSWR from "swr";

type Props = {
  id: number;
  idx: number;
};

const fetcher = (id: string) =>
  fetch(`/api/items?id=${id}`).then((res) => res.json());

const ItemCard = forwardRef<HTMLDivElement, Props>(function ItemCard(
  { id, idx }: Props,
  ref
) {
  const { data: post, isLoading } = useSWR<Item>(id.toString(), fetcher);

  if (isLoading) {
    return <LoadingPost />;
  }

  if (!post) {
    return null;
  }

  const iconUrl = post.url && getWebsiteFaviconUrl(post.url);

  return (
    <Card
      ref={ref}
      className="w-full flex justify-between items-center pb-4 min-w-0 overflow-auto"
    >
      <div className="flex items-baseline">
        <span className="ms-4 text-muted-foreground">{idx + 1}.</span>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription className="flex gap-2 min-h-0 flex-wrap">
            {post.url && (
              <>
                {" "}
                <Link className="flex gap-2 max-w-[10rem]" href={post.url}>
                  {iconUrl && (
                    <Image
                      unoptimized
                      src={iconUrl}
                      alt={iconUrl}
                      width={20}
                      height={20}
                    />
                  )}
                  <span className="truncate">{getUrlDomain(post.url)}</span>
                </Link>
              </>
            )}
            <div className="flex gap-1 items-center">
              <Clock size="1rem" />
              <span>{formatDistanceToNowStrict(post.time * 1000)}</span>
            </div>
            <div className="flex gap-1 items-center">
              <ThumbsUp size="1rem" />
              <span>{post.score}</span>
            </div>
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
});
export default ItemCard;
