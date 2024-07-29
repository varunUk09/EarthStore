import Layout from "@components/Layout";
import CollectionSection from "@components/CollectionSection";
import { useProducts } from "@context/ProductsContext";
export default function Products() {
  const { products, loading, error } = useProducts();
  console.log(products);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products!</p>;
  return (
    <Layout>
      <section className='productsList-wrapper'>
        <div className='container'>
          <CollectionSection products={products} title='products' />
        </div>
      </section>
    </Layout>
  );
}
