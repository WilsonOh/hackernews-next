"use client";

import { usePageView } from "@/hooks/globals";
import InfiniteItemList from "@/templates/ItemList/InfiniteView";
import PaginatedItemList from "@/templates/ItemList/PaginatedView";
import { categories } from "@/utils/constants";
import { Category } from "@/utils/types";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = {
  params: { category: string };
  searchParams: { p: string };
};

export default function CategoryPage({ params, searchParams }: Props) {
  const category = params.category as Category;
  const pageNumber = searchParams.p ? parseInt(searchParams.p) : 0;

  const { pageView } = usePageView();

  if (!categories.includes(category)) {
    return notFound();
  }
  return (
    <div className="flex flex-col justify-center items-baseline">
      {pageView === "paginated" ? (
        <PaginatedItemList pageNumber={pageNumber} category={category} />
      ) : (
        <InfiniteItemList category={category} />
      )}
    </div>
  );
}
