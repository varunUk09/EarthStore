import { useState, useEffect, useContext } from "react";
import { CartContext } from "@context/CartContext";
export default function ProductDetailsWithQuantity({ id, image, title, price, quantity, isMinicart = false }) {
  const { addToBag } = useContext(CartContext);
  const [qty, setQty] = useState(quantity);
  const updateQty = value => {
    setQty(prevValue => {
      let newQty = 0;
      if (value < 0 || isNaN(value)) {
        newQty = prevValue;
      } else {
        if (value <= 10) {
          newQty = value;
        } else {
          newQty = prevValue;
        }
      }
      if (isMinicart) {
        // If it's the mini cart, trigger form submission programmatically
        const productData = {
          name: title,
          image: image,
          productId: id,
          quantity: newQty,
          price: price,
        };

        const callBack = {
          productData: productData, // Simulate form elements
          minicart: true,
        };

        addToBag(callBack); // Call addToBag with the simulated event
      }
      return newQty;
    });
  };
  // Update qty when quantity prop changes
  useEffect(() => {
    setQty(quantity);
  }, [quantity]);
  return (
    <>
      <input type='hidden' value={id} name='productId' />
      <input type='hidden' value={title} name='productTitle' />
      <input type='hidden' value={image} name='productImage' />
      <input type='hidden' value={price} name='productPrice' />
      <button
        className='productQtyUp cta cta-wbg productQtyCta'
        type='button'
        onClick={() => {
          updateQty(qty + 1);
        }}>
        +
      </button>
      <input type='text' pattern='[0-9]*' name='productQty' className='productQtyInput' value={qty} onChange={e => updateQty(e.target.value)} />
      <button
        className='productQtyDown cta cta-wbg productQtyCta'
        type='button'
        onClick={() => {
          updateQty(qty - 1);
        }}>
        -
      </button>
    </>
  );
}
