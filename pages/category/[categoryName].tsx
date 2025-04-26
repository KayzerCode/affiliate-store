import { GetStaticPaths, GetStaticProps } from "next";
import ProductCard, { Product } from "@/components/ProductCard";
import productsData from "@/products/products.json";

type Props = {
  categoryName: string;
  products: Product[];
};

export default function CategoryPage({ categoryName, products }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Category: {categoryName}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = Array.from(
    new Set(productsData.map((product) => product.category).filter(Boolean))
  );

  const paths = categories.map((category) => ({
    params: { categoryName: category.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const categoryName = context.params?.categoryName as string;

  const products = productsData.filter(
    (product) => product.category?.toLowerCase() === categoryName
  );

  return {
    props: {
      categoryName,
      products,
    },
  };
};
