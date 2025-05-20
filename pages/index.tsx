import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import ProductCard, { Product } from "@/components/ProductCard";
import Link from "next/link";
import { toUrlSlug } from "@/utils/slugify";
import Head from "next/head";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки
  const [searchQuery, setSearchQuery] = useState(""); // Поиск

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Уникальные категории
  const categories = Array.from(
    new Set(
      products
        .map((product) => product.category)
        .filter((category): category is string => Boolean(category))
    )
  );

  // Уникальные теги
  const tags = Array.from(new Set(products.flatMap((product) => product.tags || [])));

  // Фильтрация продуктов по поисковому запросу
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <Head>
        <title>Chop Kritters</title>
        <meta
          name="description"
          content="Discover top deals on Beats headphones, earbuds, speakers, and tech accessories. Shop curated affiliate products for the best prices."
        />
        <meta name="keywords" content="tech deals, Beats headphones, earbuds, speakers, affiliate store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Headphones, Earbuds & Speakers
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Top Deals
          </p>
        </header>

        <main className="max-w-7xl mx-auto p-6">
          {/* Поиск */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Categories */}
          {categories.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Categories</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/category/${toUrlSlug(category)}`}
                    className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full hover:bg-indigo-200 transition-colors duration-200"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tag/${toUrlSlug(tag)}`}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full hover:bg-green-200 text-sm transition-colors duration-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Products */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Products</h2>
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl shadow-md animate-pulse"
                  >
                    <div className="w-full h-56 bg-gray-200 rounded-xl mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">No products found.</p>
            )}
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 text-center py-6">
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
    </>
  );
}