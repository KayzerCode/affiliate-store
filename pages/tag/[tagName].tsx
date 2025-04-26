import { GetStaticPaths, GetStaticProps } from "next";
import ProductCard, { Product } from "@/components/ProductCard";
import productsData from "@/products/products.json";
import { toUrlSlug } from "@/utils/slugify";

type Props = {
  tagName: string;
  products: Product[];
};

export default function TagPage({ tagName, products }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Tag: {tagName}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = Array.from(
    new Set(productsData.flatMap((product) => product.tags || []))
  );

  const paths = tags.map((tag) => ({
    params: { tagName: toUrlSlug(tag) }, // <--- обязательно slugify
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const tagName = context.params?.tagName as string;

  const products = productsData.filter((product) =>
    product.tags?.some((tag) => toUrlSlug(tag) === tagName) // <--- сравниваем по slugified значениям
  );

  return {
    props: {
      tagName,
      products,
    },
  };
};
