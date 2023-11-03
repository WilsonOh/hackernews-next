"use client";

import StoryCard from "../StoryCard";
import Spinner from "@/components/ui/spinner";
import { Item } from "@/lib/hackernews/hackernews.schema";
import { Category } from "@/utils/constants";
import { env } from "@/utils/env";
import { useIntersection } from "@mantine/hooks";
import { useEffect, useRef } from "react";
import useSWRInfinite, { SWRInfiniteKeyLoader } from "swr/infinite";

type Props = {
  category: Category;
};

export default function InfiniteStoryList({ category }: Props) {
  const getKey: SWRInfiniteKeyLoader = (pageIndex) => {
    return `/api/stories?category=${category}&pageIndex=${pageIndex}`;
  };

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading, setSize, size } = useSWRInfinite<Item[]>(
    getKey,
    fetcher,
    {
      onError: (e) => {
        throw e;
      },
    }
  );

  const lastItemRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: lastItemRef.current,
    threshold: 1,
  });

  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");

  const isEmpty = data?.[0]?.length === 0;

  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < env.pageSize);

  useEffect(() => {
    if (entry?.isIntersecting && !isReachingEnd) {
      setSize(size + 1);
    }
  });

  if (isLoading) {
    return <Spinner type="page" />;
  }

  if (!data) {
    return null;
  }

  const posts = data.flat();

  return (
    <>
      {posts.map((post, idx) => (
        <StoryCard key={post.id} post={post} idx={idx} />
      ))}
      {isLoadingMore ? (
        <Spinner
          type="inline"
          size={9}
          className="my-5 w-full justify-center flex"
        />
      ) : (
        <div className="flex justify-center w-full my-5 font-bold" ref={ref}>
          {isReachingEnd && "End of page"}
        </div>
      )}
    </>
  );
}
