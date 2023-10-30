import LoadingPost from "@/composites/Loading/LoadingPost";
import PageNavigation from "@/composites/PageNavigation";
import { Post } from "@/composites/Post";
import { getStories } from "@/lib/hackernews/hackernews.service";
import { Category } from "@/utils/constants";
import { env } from "@/utils/env";
import { Suspense } from "react";

type Props = {
  category: Category;
  pageNumber: number;
};

export default async function Section({ category, pageNumber }: Props) {
  const posts = await getStories(category);
  const cursor = pageNumber * env.pageSize;
  const maxPage = Math.floor(posts.length / env.pageSize);
  return (
    <>
      {posts.slice(cursor, cursor + env.pageSize).map((id, idx) => (
        <Suspense key={id} fallback={<LoadingPost />}>
          <Post idx={idx + cursor} id={id} />
        </Suspense>
      ))}
      <PageNavigation
        category={category}
        pageNumber={pageNumber}
        maxPage={maxPage}
      />
    </>
  );
}
