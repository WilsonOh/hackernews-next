"use client";

import StoryCard from "../ItemCard";
import Spinner from "@/components/ui/spinner";
import { env } from "@/utils/env";
import { Category } from "@/utils/types";
import { useIntersection } from "@mantine/hooks";
import { useEffect, useRef } from "react";
import useSWRInfinite, { SWRInfiniteKeyLoader } from "swr/infinite";

type Props = {
  category: Category;
};

export default function InfiniteItemList({ category }: Props) {
  const getKey: SWRInfiniteKeyLoader = (pageIndex) => {
    return `/api/stories?category=${category}&pageIndex=${pageIndex}`;
  };

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading, setSize, size } = useSWRInfinite<number[]>(
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
    if (
      (entry?.isIntersecting || entry?.intersectionRatio == 1) &&
      !isReachingEnd
    ) {
      setSize(size + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry]);

  if (isLoading) {
    return <Spinner type="page" />;
  }

  if (!data) {
    return null;
  }

  const stories = data.flat();

  return (
    <>
      {stories.map((id, idx) => (
        <StoryCard
          ref={idx === stories.length - 1 ? ref : undefined}
          key={id}
          id={id}
          idx={idx}
        />
      ))}
      {isLoadingMore && (
        <Spinner
          type="inline"
          size={9}
          className="my-5 w-full justify-center flex"
        />
      )}
      {isReachingEnd && (
        <div className="flex justify-center w-full my-5 font-bold">
          End of page
        </div>
      )}
    </>
  );
}
