"use client";

import Comments from ".";
import "./CommentContainer.styles.scss";
import { Button } from "@/components/ui/button";
import { Item } from "@/lib/hackernews/hackernews.schema";
import { cn, getUserProfileLink } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import parse from "html-react-parser";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Props = {
  comment: Item;
  gp?: string;
};

export default function CommentContainer({ comment, gp }: Props) {
  const [expandChildren, setExpandChildren] = useState(false);

  if (!comment.by || !comment.text || comment.text.length == 0) {
    return null;
  }

  const authorClass = cn({
    "text-primary font-bold": comment.by === gp,
  });

  return (
    <div>
      <div className="flex w-full gap-2 divide-x-2 text-sm font-light">
        <div>
          <Link
            className="hover:underline"
            target="_blank"
            href={getUserProfileLink(comment.by)}
          >
            <span className={authorClass}>{comment.by}</span>
          </Link>{" "}
          · {formatDistanceToNow(comment.time * 1000)} ago
        </div>
      </div>
      <div className="text-sm gap-2 border-l-2 border-primary text-secondary-foreground bg-background ps-5 break-words">
        <div className="flex items-start flex-col">
          {comment.text && (
            <div id="comments-container">{parse(comment.text)}</div>
          )}
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
