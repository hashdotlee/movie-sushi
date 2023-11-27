import { TCategory } from "@/interfaces/TCategory";
import CategoryItem from "./CategoryItem";

interface GenreListProps {
  categories: TCategory[];
}

export default function CategoryList({ categories }: GenreListProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
