import Link from "next/link";
import productsData from "@/products/products.json";
import { toUrlSlug } from "@/utils/slugify";

export default function TagsPage() {
  const tags = Array.from(
    new Set(productsData.flatMap((product) => product.tags || []))
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">All Tags</h1>
      <div className="flex flex-wrap gap-2 justify-center">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/tag/${toUrlSlug(tag)}`}
            className="bg-green-100 text-green-800 px-3 py-1 rounded-xl hover:bg-green-200 text-sm"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
