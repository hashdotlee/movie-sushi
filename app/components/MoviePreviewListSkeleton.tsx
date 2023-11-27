export default function MoviePreviewListSkeleton() {
  return (
    <div className="grid 2xl:grid-cols-6 2xl:gap-8 xl:grid-cols-4 xl:gap-6 md:grid-cols-3 gap-4 grid-cols-2 animate-pulse">
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="w-full aspect-[3/4] bg-gray-200 dark:bg-gray-800 rounded-md"
        ></div>
      ))}
    </div>
  );
}
