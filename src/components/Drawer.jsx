import { useContext } from "react";
import { CartContext } from "@context/CartContext";
import ProductDetailsWithQuantity from "@components/ProductDetailsWithQuantity";
export default function Drawer() {
  const { miniCartShow, setMiniCartShow, cart, removeFromCart, addToBag } = useContext(CartContext);
  return (
    <div className={`miniCartwrapper ${miniCartShow ? "show" : ""}`}>
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
            {cart.cartItems.length > 0 &&
              cart.cartItems.map(cartItem => {
                return (
                  <li className='miniCartdrawerItem' key={cartItem.productId}>
                    <span className='itemImgWrapper'>
                      <img src={cartItem.image} />
                    </span>
                    <div className='itemDetail'>
                      <span className='itemTitle'>
                        {cartItem.name}
                        <button
                          type='button'
                          className='itemRemove'
                          onClick={() => {
                            removeFromCart(cartItem.productId);
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
                          addToBag(e);
                        }}>
                        <div className='productQtywrapper'>
                          <ProductDetailsWithQuantity id={cartItem.productId} image={cartItem.image} title={cartItem.name} price={cartItem.price} quantity={cartItem.quantity} isMinicart={true} />
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
            <button className='miniCartCheckout cta cta-wbg'>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
