import { useContext, useEffect } from "react";
import { CartContext } from "@context/CartContext";
import ProductDetailsWithQuantity from "@components/ProductDetailsWithQuantity";
export default function Drawer() {
  const { miniCartShow, setMiniCartShow, cart, removeFromCart, itemRemoved } = useContext(CartContext);
  return (
    <div
      className={`miniCartwrapper ${miniCartShow ? "show" : ""}`}
      onClick={e => {
        if (e.target.classList.contains("miniCartwrapper")) {
          setMiniCartShow(false);
        }
      }}>
      <div className='miniCartContainer'>
        <div className='miniCartContent'>
          <h2 className='miniCartTitle'>
            Cart
            <div className={`cartMessage ${itemRemoved ? "show" : ""}`} style={{ color: itemRemoved ? "red" : "inherit" }}>
              {itemRemoved && "Item removed ❌"}
            </div>
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
            {cart.cartItems.length > 0 &&
              cart.cartItems.map(cartItem => {
                return (
                  <li className='miniCartdrawerItem' key={cartItem.id}>
                    <span className='itemImgWrapper'>
                      <img src={cartItem.image} />
                    </span>
                    <div className='itemDetail'>
                      <span className='itemTitle'>
                        {cartItem.title}
                        <button
                          type='button'
                          className='itemRemove'
                          onClick={() => {
                            removeFromCart(cartItem.id);
                          }}>
                          <svg aria-hidden='true' focusable='false' role='presentation' viewBox='0 0 64 64' width='20px' height='20px' fill='#000'>
                            <path d='M19 17.61l27.12 27.13m0-27.12L19 44.74' strokeWidth='2px' stroke='currentColor'></path>
                          </svg>
                        </button>
                      </span>
                      <form
                        className='itemQtyForm'
                        onSubmit={e => {
                          e.preventDefault();
                        }}>
                        <div className='productQtywrapper'>
                          <ProductDetailsWithQuantity id={cartItem.id} image={cartItem.image} title={cartItem.title} price={cartItem.price} quantity={cartItem.quantity} isMinicart={true} />
                        </div>
                        <span className='itemPrice'>${cartItem.price}</span>
                      </form>
                    </div>
                  </li>
                );
              })}
          </ul>
          <div className='miniCartFooter'>
            <div className='miniCartSubtotal'>
              <span className='text'>Subtotal</span>
              <span className='value'>${cart.subtotal}</span>
            </div>
            <button className='miniCartCheckout cta cta-wbg hoverCta'>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
