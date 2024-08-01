import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Homepage from "./pages/Homepage.jsx";
import ProductsPage from "@pages/ProductsPage.jsx";
import ErrorPage from "@pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        index: true,
      },
      {
        path: "products/",
        element: <ProductsPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
