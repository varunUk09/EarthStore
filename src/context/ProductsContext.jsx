import { createContext, useState, useEffect } from "react";
const ProductsContext = createContext("");

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching products...");
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => {
        console.log("Products fetched:", json);
        setProducts(json);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return <ProductsContext.Provider value={{ products, loading, error }}>{children}</ProductsContext.Provider>;
};

export default ProductsProvider;
export { ProductsContext };
