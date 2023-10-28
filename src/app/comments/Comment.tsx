"use client";

import { Children, ReactNode, useState } from "react";

type CommentProps = {
  value: string;
  children?: ReactNode;
};

export default function Comment({ children, value }: CommentProps) {
  const [expandChildren, setExpandChildren] = useState(true);
  const childrenCount = Children.count(children);
  return (
    <div>
      <div className="flex w-full gap-2 divide-x-2 text-sm font-light">
        <div className="">test user · 1 hour ago</div>
        <a className="px-2">prev</a>
        <a className="px-2">next</a>
      </div>
      <div className="flex flex-col gap-2 border-l-4 border-blue-400 bg-gray-50 p-2 ps-3">
        <div className="flex flex-col items-start">
          {value}
          {childrenCount > 0 && (
            <button
              onClick={() => setExpandChildren((prev) => !prev)}
              className="text-sm text-orange-300 underline"
            >
              {childrenCount} comments
            </button>
          )}
        </div>
        {expandChildren && children}
      </div>
    </div>
  );
}
