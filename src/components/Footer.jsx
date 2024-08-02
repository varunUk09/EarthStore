import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-logo-wrapper'>
          <Link className='footer-logo site-logo' to='/'>
            EARTH STORE
          </Link>
        </div>
        <div className='footer-content'>
          <ul className='footer-items footer-menu'>
            <li className='footer-menu-item'>
              <a href='#' className='footer-menu-item_link'>
                <span className='hoverLine'>FAQ &amp; Shipping Information</span>
              </a>
            </li>
            <li className='footer-menu-item'>
              <a href='#' className='footer-menu-item_link'>
                <span className='hoverLine'>About Us</span>
              </a>
            </li>
            <li className='footer-menu-item'>
              <a href='#' className='footer-menu-item_link'>
                <span className='hoverLine'>Terms and Conditions</span>
              </a>
            </li>
            <li className='footer-menu-item'>
              <a href='#' className='footer-menu-item_link'>
                <span className='hoverLine'>Privacy Policy</span>
              </a>
            </li>
          </ul>
          {/* News letter */}
          <ul className='footer-items footer-newsletter'>
            <li className='footer-menu-item footer-newsletter-item'>
              <span>CONTACT US</span>
              <p>Enter your email and get in touch with us.</p>
              <form id='newsletter-form' className='footer-newsletter-form'>
                <div className='form-group'>
                  <input type='email' placeholder='Enter your email' />
                  <button type='submit'>
                    <svg aria-hidden='true' focusable='false' role='presentation' viewBox='0 0 64 64' width='20px' height='20px' fill='#000'>
                      <path d='M63 52H1V12h62zM1 12l25.68 24h9.72L63 12M21.82 31.68L1.56 51.16m60.78.78L41.27 31.68' fill='none' strokeWidth='2px' stroke='currentColor'></path>
                    </svg>
                  </button>
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
