"use client";

import Comments from "..";
import { Button } from "@/components/ui/button";
import { Item } from "@/lib/hackernews/hackernews.schema";
import { cn, getUserProfileLink } from "@/lib/utils";
import { parseHtml } from "@/utils/parseHtml";
import { formatDistanceToNow } from "date-fns";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Props = {
  comment: Item;
  gp?: string;
  isDirectChild?: boolean;
};

export default function CommentContainer({
  comment,
  gp,
  isDirectChild,
}: Props) {
  const [expandChildren, setExpandChildren] = useState(false);

  if (!comment.by || !comment.text || comment.text.length == 0) {
    return null;
  }

  const authorClass = cn({
    "text-primary font-bold": comment.by === gp,
  });

  const commentsClass = cn({
    "text-sm gap-2 border-primary text-secondary-foreground bg-background break-words":
      true,
    "border-l-2 ps-2 lg:ps-5": !isDirectChild,
  });

  const animateClass = cn({
    "animate-in fade-in duration-150": !isDirectChild,
  });

  const containerClass = cn(
    {
      "ms-2": !isDirectChild,
    },
    animateClass
  );

  return (
    <div className={containerClass}>
      <div className="flex w-full gap-2 divide-x-2 text-sm font-light">
        <div className="text-muted-foreground">
          <Link
            className="hover:underline font-bold"
            target="_blank"
            href={getUserProfileLink(comment.by)}
          >
            <span className={authorClass}>{comment.by}</span>
          </Link>{" "}
          · {formatDistanceToNow(comment.time * 1000)} ago
        </div>
      </div>
      <div className={commentsClass}>
        <div className="flex items-start flex-col">
          {parseHtml(comment.text)}
          {comment.kids && comment.kids.length > 0 && (
            <Button
              onClick={() => setExpandChildren((prev) => !prev)}
              variant="link"
              className="ps-0"
            >
              {`${comment.kids.length} ${
                comment.kids.length === 1 ? "comment" : "comments"
              }`}
              {expandChildren ? (
                <ChevronUp size="1rem" />
              ) : (
                <ChevronDown size="1rem" />
              )}
            </Button>
          )}
        </div>
        {expandChildren && <Comments gp={gp} item={comment} />}
      </div>
    </div>
  );
}
