import { useState, useEffect, useContext, useCallback } from "react";
import { CartContext } from "@context/CartContext";
export default function ProductDetailsWithQuantity({ id, image, title, price, quantity, isMinicart = false }) {
  const { addToBag, removeFromCart } = useContext(CartContext);
  const [qty, setQty] = useState(quantity);
  const [valueUpdated, setValueUpdated] = useState(false);
  const updateQty = value => {
    setQty(prevValue => {
      let newQty = prevValue;
      if (!isNaN(value) && value >= 0) {
        newQty = value;
      }
      return newQty;
    });
    setValueUpdated(true);
  };
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  const debouncedAddToBag = useCallback(
    debounce(newQty => {
      if (isMinicart) {
        addToBag({
          title: title,
          image: image,
          id: id,
          quantity: newQty,
          price: price,
          cart: true,
        });
      }
    }, 500),
    [addToBag, id, image, isMinicart, price, title]
  );

  const debouncedRemove = useCallback(
    debounce(id => {
      if (isMinicart) {
        removeFromCart(id);
      }
    }, 500),
    [addToBag, id, image, isMinicart, price, title]
  );

  useEffect(() => {
    if (valueUpdated && qty && qty > 0) {
      debouncedAddToBag(qty);
    }
    if (valueUpdated && qty && qty == 0) {
      debouncedRemove(id);
    }
  }, [qty, valueUpdated]);

  // Update qty when quantity prop changes
  useEffect(() => {
    setQty(quantity);
  }, [quantity]);

  return (
    <>
      <input type='hidden' value={id} name='id' />
      <input type='hidden' value={title} name='title' />
      <input type='hidden' value={image} name='image' />
      <input type='hidden' value={price} name='price' />
      <button
        className='productQtyDown cta cta-wbg productQtyCta'
        type='button'
        onClick={() => {
          updateQty(Number(qty) - 1);
        }}>
        -
      </button>
      <input type='text' pattern='[0-9]*' name='quantity' className='productQtyInput' value={qty} onChange={e => updateQty(e.target.value)} />
      <button
        className='productQtyUp cta cta-wbg productQtyCta'
        type='button'
        onClick={() => {
          updateQty(Number(qty) + 1);
        }}>
        +
      </button>
    </>
  );
}
