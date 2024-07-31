import { useContext } from "react";
import { MainContext } from "@/App.jsx";
export default function Drawer() {
  const { miniCartShow, setMiniCartShow } = useContext(MainContext);
  return (
    <div className={`miniCartwrapper ${miniCartShow ? "show" : null}`}>
      <div className='miniCartContainer'>
        <div className='miniCartContent'>
          <h2 className='miniCartTitle'>
            Cart
            <button
              className='closeMiniCart'
              onClick={() => {
                setMiniCartShow(!miniCartShow);
              }}>
              <svg aria-hidden='true' focusable='false' role='presentation' viewBox='0 0 64 64' width='20px' height='20px' fill='#000'>
                <path d='M19 17.61l27.12 27.13m0-27.12L19 44.74' strokeWidth='2px' stroke='currentColor'></path>
              </svg>
            </button>
          </h2>
          <ul className='miniCartdrawerItems'>
            <li className='miniCartdrawerItem'>
              <span className='itemImgWrapper'>
                <img src='https://store.benjaminhardman.com/cdn/shop/files/34ef108ad1c1461189ebe8b0764f7aba_720x.jpg?v=1700930842' />
              </span>
              <div className='itemDetail'>
                <span className='itemTitle'>Peace Within The Steam</span>
                <form className='itemQtyForm'>
                  <div className='productQtywrapper'>
                    <button className='productQtyUp cta cta-wbg productQtyCta' type='button'>
                      +
                    </button>
                    <input type='number' className='productQtyInput' />
                    <button className='productQtyDown cta cta-wbg productQtyCta' type='button'>
                      -
                    </button>
                  </div>
                  <span className='itemPrice'>$1.99</span>
                </form>
              </div>
            </li>
          </ul>
          <div className='miniCartFooter'>
            <div className='miniCartSubtotal'>
              <span className='text'>Subtotal</span>
              <span className='value'>$1.99</span>
            </div>
            <button className='miniCartCheckout cta cta-wbg'>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
