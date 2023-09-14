import { getCategories } from "@/actions/categories";
import Link from "next/link";

const CategoriesList = async () => {
  const categories = await getCategories();
  return (
    <div className="h-16 w-full flex items-center justify-center gap-x-2 md:gap-x-4 border-t shadow-md overflow-x-auto">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/${category.slug}`}
          className=" hover:text-indigo-400 transition uppercase tracking-wider text-sm md:text-base"
        >
          {category.title}
        </Link>
      ))}
    </div>
  );
};

export default CategoriesList;
