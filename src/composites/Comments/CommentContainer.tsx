"use client";

import Comments from ".";
import { Button } from "@/components/ui/button";
import { Item } from "@/lib/hackernews/hackernews.schema";
import { getUserProfileLink } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import parse from "html-react-parser";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Props = {
  comment: Item;
};

export default function CommentContainer({ comment }: Props) {
  const [expandChildren, setExpandChildren] = useState(false);

  if (!comment.by || !comment.text || comment.text.length == 0) {
    return null;
  }

  return (
    <div>
      <div className="flex w-full gap-2 divide-x-2 text-sm font-light">
        <div className="">
          <Link
            className="hover:underline"
            target="_blank"
            href={getUserProfileLink(comment.by)}
          >
            {comment.by}
          </Link>{" "}
          · {formatDistanceToNow(comment.time * 1000)} ago
        </div>
      </div>
      <div className="flex flex-col gap-2 border-l-2 border-primary bg-primary-foreground p-2 ps-5">
        <div className="">
          {comment.text && parse(comment.text)}
          {comment.kids && comment.kids.length > 0 && (
            <Button
              onClick={() => setExpandChildren((prev) => !prev)}
              variant="link"
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
        {expandChildren && <Comments item={comment} />}
      </div>
    </div>
  );
}
