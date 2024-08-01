import CollectionSection from "@components/CollectionSection";
import { useContext } from "react";
import { ProductsContext } from "@context/ProductsContext";

export default function ProductsPage() {
  const { products, loading, error } = useContext(ProductsContext);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products!</p>;
  return (
    <section className='productsList-wrapper'>
      <div className='container'>
        <CollectionSection products={products} title='products' />
      </div>
    </section>
  );
}
