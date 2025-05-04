import { FC } from "react";
import Image from "next/image";
// import { Star } from "lucide-react"; // Подключаем иконки (например, из lucide-react)

export type Product = {
  name: string;
  image: string;
  price?: string;
  affiliate_link: string;
  description?: string;
  category?: string;
  tags?: string[];
  rating?: number; // Добавляем рейтинг (опционально)
};

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 max-w-sm mx-auto transform hover:-translate-y-1">
      {/* Изображение */}
      <div className="relative w-full h-56 mb-4 overflow-hidden rounded-xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority // Добавляем приоритет для важных изображений
        />
        {/* Тег категории (если есть) */}
        {product.category && (
          <span className="absolute top-2 left-2 bg-indigo-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {product.category}
          </span>
        )}
      </div>


      {/* Описание */}
      {product.description && (
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
      )}

      {/* Теги */}
      {product.tags && product.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Цена и кнопка */}
      <div className="flex items-center justify-between mt-4">
        {product.price && (
          <p className="text-lg font-semibold text-gray-900">{product.price}</p>
        )}
        <a
          href={product.affiliate_link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;