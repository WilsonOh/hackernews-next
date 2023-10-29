export function SkeletonLine({ width }: { width: string }) {
  return (
    <div role="status" className={`space-y-2.5 animate-pulse w-${width}`}>
      <div
        className={`h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-${width}`}
      ></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default function LoadingComment() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <SkeletonLine width="10" />
      <SkeletonLine width="25" />
      <SkeletonLine width="25" />
      <SkeletonLine width="25" />
      <SkeletonLine width="25" />
    </div>
  );
}
