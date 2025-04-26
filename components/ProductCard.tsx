import { FC } from "react";

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
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
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
        Купить
      </a>
    </div>
  );
};

export default ProductCard;
