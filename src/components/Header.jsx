import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "@components/Breadcrumbs";
import { useContext } from "react";
import { CartContext } from "@context/CartContext";

export default function Header() {
  const location = useLocation();
  const { miniCartShow, setMiniCartShow } = useContext(CartContext);

  // Render Breadcrumbs component only if the current path is not the home page
  const shouldShowBreadcrumbs = location.pathname !== "/";
  return (
    <header className='header'>
      <nav className='site-nav'>
        <ul className='site-nav-items container'>
          <li className='site-nav-item' data-has-links>
            <Link to='/products' className='links-text'>
              All Products
            </Link>
          </li>
          <li className='site-nav-item'>
            <Link className='header-logo site-logo' to='/'>
              EARTH STORE
            </Link>
          </li>
          <li className='site-nav-item'>
            <a
              className='links-icon minicartcta'
              onClick={() => {
                setMiniCartShow(!miniCartShow);
              }}>
              <svg aria-hidden='true' focusable='false' role='presentation' viewBox='0 0 64 64'>
                <g fill='none' stroke='#000' strokeWidth='2'>
                  <path d='M25 26c0-15.79 3.57-20 8-20s8 4.21 8 20'></path>
                  <path d='M14.74 18h36.51l3.59 36.73h-43.7z'></path>
                </g>
              </svg>
            </a>
          </li>
        </ul>
        {shouldShowBreadcrumbs && <Breadcrumbs />}
      </nav>
    </header>
  );
}
