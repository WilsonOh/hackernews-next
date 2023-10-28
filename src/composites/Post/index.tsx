import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatDistanceToNow } from "date-fns";
import { MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PostProps = {
  postId: string;
};

type PostType = {
  id: string;
  url: string;
  title: string;
  time: number;
  score: number;
  descendants: number;
};

export async function Post({ postId }: PostProps) {
  const post = (await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${postId}.json`
  ).then((res) => res.json())) as PostType;

  const parsedUrl = new URL(post.url);
  const iconUrl = `${parsedUrl.origin}/favicon.ico`;

  return (
    <Card className="w-full flex-wrap flex justify-between items-center">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription className="flex gap-2 h-5">
          <Link className="flex gap-2" href={post.url}>
            {/* eslint-disable-next-line */}
            <Image src={iconUrl} alt={iconUrl} width="20" height="20" />
            <span className="truncate max-w-sm">{post.url}</span>
          </Link>
          <Separator orientation="vertical" />
          <div>{formatDistanceToNow(post.time * 1000)} ago</div>
          <Separator orientation="vertical" />
          <div>{post.score} points</div>
        </CardDescription>
      </CardHeader>
      <Button variant="link" className="flex me-3 gap-2">
        <span className="font-bold text-lg">{post.descendants}</span>
        <MessageSquare />
      </Button>
    </Card>
  );
}
