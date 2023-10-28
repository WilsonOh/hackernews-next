import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MessageSquare } from "lucide-react";

export function SkeletonLine() {
  return (
    <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-28"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
export function SkeletonHeader() {
  return (
    <div role="status" className="space-y-2.5 animate-pulse w-full">
      <div className="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function SkeletonButton() {
  return (
    <div role="status" className="space-y-2.5 animate-pulse w-full">
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-5"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default function LoadingPost() {
  return (
    <Card className="w-full flex-wrap flex justify-between items-center">
      <CardHeader>
        <CardTitle>
          <SkeletonHeader />
        </CardTitle>
        <CardDescription className="flex gap-2 h-5">
          <SkeletonLine />
          <Separator orientation="vertical" />
          <SkeletonLine />
          <Separator orientation="vertical" />
          <SkeletonLine />
        </CardDescription>
      </CardHeader>
      <Button disabled variant="link" className="flex me-3 gap-2">
        <span className="font-bold text-lg">
          <SkeletonButton />
        </span>
        <MessageSquare />
      </Button>
    </Card>
  );
}
