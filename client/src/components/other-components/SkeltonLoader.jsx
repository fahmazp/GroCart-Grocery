import { Skeleton } from "../ui/skeleton";

export default function ProductsSkeleton({ count = 5 }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-3 max-w-7xl mx-auto">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="min-w-[150px] max-w-[150px] sm:min-w-[180px] sm:max-w-[180px]
                     mx-auto space-y-2 bg-green-50 dark:bg-emerald-900 rounded-xl shadow p-3"
        >
          <Skeleton className="w-full h-36 rounded-lg" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-9 w-full rounded-lg" />
        </div>
      ))}
    </div>
  );
}