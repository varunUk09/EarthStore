import CollectionSection from "@components/CollectionSection";
import { useContext } from "react";
import { ProductsContext } from "@context/ProductsContext";

export default function ProductsPage() {
  const { products, loading, error } = useContext(ProductsContext);
  const inlineCss = { fontSize: "var(--mdfnt)", fontWeight: "700", padding: "3rem", display: "flex", justifyContent: "center", alignItems: "center" };
  const messages = {
    error: <p style={inlineCss}>Error loading products!</p>,
    loading: <p style={inlineCss}>Loading...</p>,
  };
  return (
    <section className='productsList-wrapper'>
      <div className='container'>{loading ? messages.loading : error ? messages.error : <CollectionSection products={products} title='products' />}</div>
    </section>
  );
}
