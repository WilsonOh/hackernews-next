import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SkeletonLine() {
  return (
    <div role="status" className="space-y-2.5 animate-pulse">
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-7"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
export function SkeletonHeader() {
  return (
    <div role="status" className="space-y-2.5 animate-pulse">
      <div className="h-5 bg-gray-300 rounded-full dark:bg-gray-600"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default function LoadingPost() {
  return (
    <Card className="w-full flex justify-between items-center">
      <CardHeader className="w-full">
        <CardTitle>
          <SkeletonHeader />
        </CardTitle>
        <CardDescription className="flex gap-2 max-w-xs">
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine />
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
