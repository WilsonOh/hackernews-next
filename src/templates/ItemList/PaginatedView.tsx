"use client";

import StoryCard from "../ItemCard";
import Spinner from "@/components/ui/spinner";
import PageNavigation from "@/composites/PageNavigation";
import { env } from "@/utils/env";
import { Category } from "@/utils/types";
import useSWR from "swr";

type Props = {
  category: Category;
  pageNumber: number;
};

export default function PaginatedItemList({ category, pageNumber }: Props) {
  const { data: posts, isLoading } = useSWR<number[]>(
    [category, pageNumber.toString()],
    () =>
      fetch(`/api/stories?category=${category}&pageIndex=${pageNumber}`).then(
        (res) => res.json()
      )
  );

  if (isLoading) {
    return <Spinner type="page" />;
  }

  if (posts == null || posts == undefined) {
    throw new Error(`error fetching posts for category ${category}`);
  }

  const cursor = pageNumber * env.pageSize;

  return (
    <>
      {posts.map((id, idx) => (
        <StoryCard key={id} idx={idx + cursor} id={id} />
      ))}
      <PageNavigation
        category={category}
        pageNumber={pageNumber}
        isLastPage={pageNumber === 49}
      />
    </>
  );
}
