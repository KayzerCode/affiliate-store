import { useEffect, useState } from "react";
import ProductCard, { Product } from "@/components/ProductCard";
import Link from "next/link";
import { toUrlSlug } from "@/utils/slugify";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    }
    fetchProducts();
  }, []);

  const categories = Array.from(
    new Set(
      products
        .map((product) => product.category)
        .filter((category): category is string => Boolean(category))
    )
  );

  const tags = Array.from(
    new Set(products.flatMap((product) => product.tags || []))
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Affiliate Products Store</h1>

      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <Link
            href={`/category/${toUrlSlug(category)}`}
            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl hover:bg-blue-200"
          >
            {category}
          </Link>

          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
            href={`/tag/${toUrlSlug(tag)}`}
            className="bg-green-100 text-green-800 px-3 py-1 rounded-xl hover:bg-green-200 text-sm"
          >
            {tag}
          </Link>

          ))}
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
