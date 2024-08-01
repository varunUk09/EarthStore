import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Drawer from "@components/Drawer";
import CartProvider from "@context/CartContext";
import ProductsProvider from "@context/ProductsContext";
import "@/App.css";
function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Header />
        <main className='main'>
          <Outlet />
        </main>
        <Drawer />
        <Footer />
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
