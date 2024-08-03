import { useState, createContext, useEffect } from "react";

const CartContext = createContext("");

const CartProvider = ({ children }) => {
  const [miniCartShow, setMiniCartShow] = useState(false);
  const [cartUpdated, setCartUpdated] = useState(false);
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
    localStorage.setItem("cart", JSON.stringify(cart));
    if (cart.cartItems.length > 0) {
      console.log("cart updated!");
    }
  }, [cart]);

  // Handle cartUpdated state
  useEffect(() => {
    if (cartUpdated) {
      const timer = setTimeout(() => {
        setCartUpdated(false);
      }, 1000);

      // Clean up the timer
      return () => clearTimeout(timer);
    }
  }, [cartUpdated]);

  // Add or update item in cart
  const addToBag = product => {
    console.log("Adding product with details : ", product);
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
        setCartUpdated(true);
      }
      return { cartItems: updatedItems, subtotal };
    });
  };
  // Function to calculate cart total
  const calculateTotal = cartItems => {
    const total = cartItems.reduce((t, crr) => {
      console.log(crr);
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
      setMiniCartShow(true);
      return {
        cartItems: NEWITEMS,
        subtotal: subtotal,
      };
    });
  };

  return <CartContext.Provider value={{ miniCartShow, setMiniCartShow, addToBag, cart, removeFromCart, cartUpdated }}>{children}</CartContext.Provider>;
};

export default CartProvider;

export { CartContext };
