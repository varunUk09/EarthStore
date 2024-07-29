import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Products from "@pages/Products.jsx";
import ErrorPage from "@pages/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsProvider from "@context/ProductsContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products/",
    element: <Products />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsProvider>
    <RouterProvider router={router} />
  </ProductsProvider>
);
