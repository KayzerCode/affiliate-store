import { FC } from "react";
import Image from "next/image";

export type Product = {
  name: string;
  image: string;
  price?: string;
  affiliate_link: string;
  description?: string;
  category?: string;
  tags?: string[];
};

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      {product.price && <p className="text-gray-700 mb-2">{product.price}</p>}
      {product.description && (
        <p className="text-gray-500 text-sm mb-4">{product.description}</p>
      )}
      <a
        href={product.affiliate_link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl text-center"
      >
        Buy Now
      </a>
    </div>
  );
};

export default ProductCard;
