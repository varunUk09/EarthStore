import { useState, createContext, useEffect } from "react";

const CartContext = createContext("");

const CartProvider = ({ children }) => {
  const [miniCartShow, setMiniCartShow] = useState(false);
  const [itemAdded, setitemAdded] = useState(false);
  const [itemRemoved, setItemRemoved] = useState(false);
  const [cart, setCart] = useState({
    cartItems: [],
    subtotal: 0.0,
  });
  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || {
      cartItems: [],
      subtotal: 0.0,
    };
    setCart(savedCart);
  }, []);
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Handle itemAdded state
  useEffect(() => {
    if (itemAdded) {
      const timer = setTimeout(() => {
        setitemAdded(false);
      }, 1000);

      // Clean up the timer
      return () => clearTimeout(timer);
    }
  }, [itemAdded]);

  // Handle itemRemoved state
  useEffect(() => {
    if (itemRemoved) {
      const timer = setTimeout(() => {
        setItemRemoved(false);
      }, 1000);

      // Clean up the timer
      return () => clearTimeout(timer);
    }
  }, [itemRemoved]);

  // Add or update item in cart
  const addToBag = product => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.cartItems.findIndex(item => item.id === product.id);
      let updatedItems;

      if (existingItemIndex > -1) {
        // Update existing item
        updatedItems = prevCart.cartItems.map((item, index) => {
          if (index === existingItemIndex) {
            let newqty = Number(product.quantity); // new
            let oldqty = Number(item.quantity);
            let qty = oldqty + newqty;
            if (product.cart) {
              qty = newqty;
            }
            return {
              ...item,
              quantity: qty,
            };
          }
          return item;
        });
      } else {
        // Add new item
        updatedItems = [...prevCart.cartItems, product];
      }

      const subtotal = calculateTotal(updatedItems);
      if (!product.cart) {
        setitemAdded(true);
      }
      return { cartItems: updatedItems, subtotal };
    });
  };
  // Function to calculate cart total
  const calculateTotal = cartItems => {
    const total = cartItems.reduce((t, crr) => {
      const crrItemQty = Number(crr.quantity);
      const crrItemPrice = Number(crr.price);
      const total = crrItemPrice * crrItemQty;
      return (t += total);
    }, 0.0);
    return total.toFixed(2);
  };
  // Function to remove item from cart
  const removeFromCart = id => {
    setCart(prevCart => {
      let NEWITEMS = prevCart.cartItems.filter(item => item.id !== id);
      const subtotal = calculateTotal(NEWITEMS);
      // setMiniCartShow(true);
      setItemRemoved(true);
      return {
        cartItems: NEWITEMS,
        subtotal: subtotal,
      };
    });
  };

  return <CartContext.Provider value={{ miniCartShow, setMiniCartShow, addToBag, cart, removeFromCart, itemAdded, itemRemoved }}>{children}</CartContext.Provider>;
};

export default CartProvider;

export { CartContext };
