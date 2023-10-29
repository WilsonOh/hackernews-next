"use client";

import LoadingComment from "../Loading/LoadingComment";
import CommentContainer from "./CommentContainer";
import { Item } from "@/lib/hackernews/hackernews.schema";
import useSWR from "swr";

type Props = {
  id: number;
};

async function fetcher(id: string): Promise<Item> {
  return fetch(`/api/comments?itemId=${id}`).then((res) => res.json());
}

export default function Comment({ id }: Props) {
  const { data: comment, isLoading, error } = useSWR(id.toString(), fetcher);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <LoadingComment />
      </div>
    );
  }

  if (error || (!isLoading && !comment)) {
    return null;
  }

  return <>{!error && comment && <CommentContainer comment={comment} />}</>;
}
