"use client";

import { Button } from "@/components/ui/button";
import { Category } from "@/utils/constants";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  category: Category;
  pageNumber: number;
  maxPage: number;
};

export default function PageNavigation({
  category,
  pageNumber,
  maxPage,
}: Props) {
  const router = useRouter();

  function goPrevPage() {
    router.push(`/${category}?p=${pageNumber - 1}`);
  }

  function goNextPage() {
    router.push(`/${category}?p=${pageNumber + 1}`);
  }

  return (
    <div className="inline-flex rounded-md shadow-sm justify-center w-full my-4">
      {pageNumber > 0 && (
        <Button variant="default" onClick={goPrevPage}>
          <ArrowBigLeft />
        </Button>
      )}
      {pageNumber < maxPage - 1 && (
        <Button variant="default" onClick={goNextPage}>
          <ArrowBigRight />
        </Button>
      )}
    </div>
  );
}
