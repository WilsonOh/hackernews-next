import { getItem } from "@/lib/hackernews/hackernews.service";
import StoryCard from "@/templates/StoryCard";

type Props = {
  id: number;
  idx: number;
};

export async function Post({ id, idx }: Props) {
  const post = await getItem(id);

  if (!post) {
    return null;
  }

  return <StoryCard post={post} idx={idx} />;
}
