import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard, { Product } from "@/components/ProductCard";

const categories = [
  "vlogging-camera",
  "ring-light",
  "microphone-youtube",
  "tripod-phone",
  "monopod-camera",
  "camera-carry-bag",
  "usb-c-charger-camera",
  "vlogging-kit",
  "cold-shoe-mount",
  "portable-video-light",
];

export default function HomePage() {
  const [productsByCategory, setProductsByCategory] = useState<Record<string, Product[]>>({});

  useEffect(() => {
    categories.forEach(async (slug) => {
      try {
        const res = await fetch(`/products-${slug}.json`);
        const data = await res.json();
        setProductsByCategory((prev) => ({ ...prev, [slug]: data.slice(0, 3) }));
      } catch (e) {
        console.error("Failed to load:", e);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Chop Kritters</h1>

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

      {/* Product previews */}
      {categories.map((slug) => {
        const products = productsByCategory[slug] || [];
        if (products.length === 0) return null;

        return (
          <div key={slug} className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold capitalize">{slug.replace(/-/g, " ")}</h2>
              <Link
                href={`/category/${slug}`}
                className="text-sm text-blue-600 hover:underline"
              >
                View all
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
