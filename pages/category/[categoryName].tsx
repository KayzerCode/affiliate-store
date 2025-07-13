import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import ProductCard, { Product } from "@/components/ProductCard";

export default function CategoryPage() {
  const router = useRouter();
  const { categoryName } = router.query;

  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Load categories for navigation
  useEffect(() => {
    fetch("https://altimo.fi/amaproducts/public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Failed to load categories", err));
  }, []);

  // Load products for current category
  useEffect(() => {
    if (!categoryName) return;

    const fetchProducts = async () => {
      try {
        const res = await fetch(`https://altimo.fi/amaproducts/public/products-${categoryName}.json`);
        const json = await res.json();
        setProducts(json);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Categories navigation */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((slug) => (
            <Link
              key={slug}
              href={`/category/${slug}`}
              className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-xl hover:bg-indigo-200"
            >
              {slug.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
      </div>

      {/* Category title */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        Category: {categoryName ? String(categoryName).replace(/-/g, " ") : ""}
      </h1>

      {/* Products */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-6 mt-10">
        <div className="space-x-4">
          <Link href="/affiliate-disclaimer" className="hover:text-white underline">
            Affiliate Disclaimer
          </Link>
          <Link href="/privacy-policy" className="hover:text-white underline">
            Privacy Policy
          </Link>
        </div>
        <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} Best Tech Deals</p>
      </footer>

      <Analytics />
    </div>
  );
}
