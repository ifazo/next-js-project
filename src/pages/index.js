import CategoryList from "@/components/CategoryList";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import RootLayout from "@/layouts/RootLayout";

export async function getStaticProps() {
  try {
    const productRes = await fetch(`https://ifaz-nextjs.vercel.app/api/random`);
    const products = await productRes.json()
    const categoryRes = await fetch(`https://ifaz-nextjs.vercel.app/api/categories`);
    const categories = await categoryRes.json();
    return {
      props: {
        products,
        categories,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        products: [],
        categories: [],
      },
    };
  }
}

export default function Page({ products, categories }) {
  return (
    <main>
      <Hero />
      <ProductList products={products} />
      <CategoryList categories={categories} />
    </main>
  );
}

Page.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
