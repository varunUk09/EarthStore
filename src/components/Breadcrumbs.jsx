import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const pathnames = location.pathname.split("/").filter(x => x);
    const breadcrumbList = pathnames.map((value, index) => {
      const to = `/${pathnames.slice(0, index + 1).join("/")}`;
      let name = value;
      return { name, to };
    });
    setBreadcrumbs(breadcrumbList);
  }, [location]);

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
