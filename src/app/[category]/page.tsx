import Spinner from "@/components/ui/spinner";
import Section from "@/templates/Section";
import { Category, categories } from "@/utils/constants";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const revalidate = 60;

export default function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { p: string };
}) {
  const category = params.category as Category;
  const pageNumber = searchParams.p ? parseInt(searchParams.p) : 0;

  if (!categories.includes(category)) {
    return notFound();
  }
  return (
    <div className="flex flex-col overflow-y-scroll justify-center items-baseline">
      <Suspense fallback={<Spinner />}>
        <Section pageNumber={pageNumber} category={category} />;
      </Suspense>
    </div>
  );
}
