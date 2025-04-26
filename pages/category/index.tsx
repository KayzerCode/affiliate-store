import Link from "next/link";
import productsData from "@/products/products.json";
import { toUrlSlug } from "@/utils/slugify";

export default function CategoriesPage() {
  const categories = Array.from(
    new Set(
      productsData
        .map((product) => product.category)
        .filter((category): category is string => Boolean(category))
    )
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">All Categories</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/category/${toUrlSlug(category)}`}
            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl hover:bg-blue-200"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
