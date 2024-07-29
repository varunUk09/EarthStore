import { useParams } from "react-router-dom";
import Layout from "@components/Layout";
import { useProducts } from "@context/ProductsContext";

export default function Product() {
  const { id } = useParams();
  const { getProductById, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product!</p>;

  const product = getProductById(id);

  if (!product) return <p>Product not found</p>;

  return (
    <Layout>
      <section className='product-wrapper'>
        <div className='container'>
          <div className='product-details'>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {/* Add other product details as needed */}
          </div>
        </div>
      </section>
    </Layout>
  );
}
