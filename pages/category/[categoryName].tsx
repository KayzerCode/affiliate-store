import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { useRouter } from "next/router";
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

export default function CategoryPage() {
  const router = useRouter();
  const { categoryName } = router.query;

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categoryName) return;

    const fetchProducts = async () => {
      try {
        const res = await fetch(`/products-${categoryName}.json`);
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

      <h1 className="text-3xl font-bold mb-6 text-center">
        Category: {categoryName}
      </h1>

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



  );
}
