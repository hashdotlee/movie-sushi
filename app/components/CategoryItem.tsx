import { TCategory } from "@/interfaces/TCategory";

interface CategoryItemProps {
  category: TCategory;
}

export default function CategoryItem({ category }: CategoryItemProps) {
  return (
    <div className="border dark:border-zinc-800 bg-gray-100 dark:bg-gray-800 shadow-sm rounded-md px-2">
      <span className="text-xs text-gray-700 dark:text-zinc-200">
        {category.name}
      </span>
    </div>
  );
}
