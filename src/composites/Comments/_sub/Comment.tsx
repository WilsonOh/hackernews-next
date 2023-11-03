"use client";

import CommentContainer from "./CommentContainer";
import LoadingComment from "@/composites/Loading/LoadingComment";
import { Item } from "@/lib/hackernews/hackernews.schema";
import useSWR from "swr";

type Props = {
  id: number;
  gp?: string;
  isDirectChild?: boolean;
};

async function fetcher(id: string): Promise<Item> {
  return fetch(`/api/items?id=${id}`).then((res) => res.json());
}

export default function Comment({ id, gp, isDirectChild }: Props) {
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

  return (
    <>
      {!error && comment && (
        <CommentContainer
          isDirectChild={isDirectChild}
          gp={gp}
          comment={comment}
        />
      )}
    </>
  );
}
