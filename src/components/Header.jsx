import { Link } from "react-router-dom";
import Breadcrumbs from "@components/Breadcrumbs";
export default function Header() {
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
            <a href='#' className='links-icon searchcta'>
              <svg aria-hidden='true' focusable='false' role='presentation' viewBox='0 0 64 64'>
                <path d='M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42' stroke='currentColor' strokeWidth='2px' fill='none'></path>
              </svg>
            </a>
            <a href='#' className='links-icon minicartcta'>
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
