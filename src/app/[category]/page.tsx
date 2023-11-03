import Spinner from "@/components/ui/spinner";
import InfiniteStoryList from "@/templates/StoryList/InfiniteView";
import PaginatedStoryList from "@/templates/StoryList/PaginatedView";
import { Category, categories } from "@/utils/constants";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

type Props = {
  params: { category: string };
  searchParams: { p: string; pageView: string };
};

type PageViewType = "infinite" | "paginated";

export default function CategoryPage({ params, searchParams }: Props) {
  const category = params.category as Category;
  const pageNumber = searchParams.p ? parseInt(searchParams.p) : 0;
  const pageView = (searchParams.pageView ?? "paginated") as PageViewType;

  if (pageView !== "paginated" && pageView !== "infinite") {
    return notFound();
  }

  if (!categories.includes(category)) {
    return notFound();
  }
  return (
    <div className="flex flex-col justify-center items-baseline">
      {pageView === "paginated" ? (
        <Suspense fallback={<Spinner type="page" />}>
          <PaginatedStoryList pageNumber={pageNumber} category={category} />
        </Suspense>
      ) : (
        <InfiniteStoryList category={category} />
      )}
    </div>
  );
}
