import App from "../App";
import CollectionSection from "@components/CollectionSection";
import { useProducts } from "@context/ProductsContext";

export default function Products() {
  const { products, loading, error } = useProducts();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products!</p>;
  return (
    <App>
      <section className='productsList-wrapper'>
        <div className='container'>
          <CollectionSection products={products} title='products' />
        </div>
      </section>
    </App>
  );
}
