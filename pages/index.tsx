import { useState } from "react";
import ProductCard, { Product } from "@/components/ProductCard";
import productsData from "@/products/products.json";

const categories = Array.from(
  new Set(productsData.map((product: Product) => product.category).filter(Boolean))
);

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? productsData.filter((product: Product) => product.category === selectedCategory)
    : productsData;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Магазин аффилиатных товаров</h1>

      <div className="flex justify-center mb-8">
        <select
          onChange={(e) => setSelectedCategory(e.target.value || null)}
          className="p-2 border rounded"
          defaultValue=""
        >
          <option value="">Все категории</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
