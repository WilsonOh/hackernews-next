import LoadingPost from "@/composites/Loading/LoadingPost";
import { Post } from "@/composites/Post";
import { Suspense } from "react";

type SectionProps = {
  section: string;
};

export default async function Section({ section }: SectionProps) {
  const posts = (await fetch(
    `https://hacker-news.firebaseio.com/v0/${section}.json`
  ).then((res) => res.json())) as string[];

  return (
    <div className="flex flex-col overflow-y-scroll justify-center items-baseline">
      {posts.slice(0, 10).map((postId) => (
        <Suspense key={postId} fallback={<LoadingPost />}>
          <Post postId={postId} />
        </Suspense>
      ))}
    </div>
  );
}
