import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useProducts } from "@context/ProductsContext";

// Utility function to truncate long names
const truncateName = (name, maxLength = 25) => {
  if (name.length > maxLength) {
    return name.slice(0, maxLength) + "...";
  }
  return name;
};

export default function Breadcrumbs() {
  const location = useLocation();
  const { products } = useProducts();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const pathnames = location.pathname.split("/").filter(x => x);
    const breadcrumbList = pathnames.map((value, index) => {
      const to = `/${pathnames.slice(0, index + 1).join("/")}`;
      let name = value;

      // Check if the value is a product ID and replace it with the truncated product name
      const product = products.find(product => product.id.toString() === value);
      if (product) {
        name = truncateName(product.title);
      }

      return { name, to };
    });
    setBreadcrumbs(breadcrumbList);
  }, [location, products]);

  return (
    <ul className='breadcrumbs container'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      {breadcrumbs.map((breadcrumb, index) => (
        <li key={breadcrumb.to}>{index !== breadcrumbs.length - 1 ? <Link to={breadcrumb.to}>{breadcrumb.name}</Link> : breadcrumb.name}</li>
      ))}
    </ul>
  );
}
