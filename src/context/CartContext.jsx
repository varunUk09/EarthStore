import { useState, createContext, useEffect } from "react";

const CartContext = createContext("");

const CartProvider = ({ children }) => {
  const [miniCartShow, setMiniCartShow] = useState(false);
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
  }, [cart]);
  // add to cart
  const addToBag = callback => {
    let product = {};
    if (!callback.minicart) {
      callback.preventDefault();
      const formData = new FormData(callback.target); // Create FormData object from the form
      // Extract values from the form
      const productId = formData.get("productId");
      const quantity = parseInt(formData.get("productQty") || 0);
      const productTitle = formData.get("productTitle");
      const productImage = formData.get("productImage");
      const productPrice = formData.get("productPrice");
      product = {
        name: productTitle,
        image: productImage,
        productId: productId,
        quantity: quantity,
        price: productPrice,
      };
    } else {
      product = callback.productData;
    }

    console.log(product);

    updateCartItem(product);
  };
  const updateCartItem = newProduct => {
    setCart(prevItems => {
      // Find if the product already exists in the cart
      const productIndex = prevItems.cartItems.findIndex(item => item.productId === newProduct.productId);
      let NEWITEMS = [];
      if (productIndex > -1) {
        // Product exists in the cart, update its quantity
        const updatedItems = [...prevItems.cartItems];
        updatedItems[productIndex] = {
          ...updatedItems[productIndex],
          quantity: newProduct.quantity,
        };
        NEWITEMS = updatedItems;
      } else {
        // Product does not exist, add it to the cart
        NEWITEMS = [...prevItems.cartItems, newProduct];
      }
      const subtotal = cartTotal(NEWITEMS);
      setMiniCartShow(true);
      return {
        cartItems: NEWITEMS,
        subtotal: subtotal,
      };
    });
  };
  // Function to calculate cart total
  const cartTotal = cartItems => {
    return cartItems
      .reduce((t, crr) => {
        return (t += Math.floor(crr.price));
      }, 0.0)
      .toFixed(2);
  };
  // Function to remove item from cart
  const removeFromCart = id => {
    setCart(prevCart => {
      let NEWITEMS = prevCart.cartItems.filter(item => item.productId !== id);
      const subtotal = cartTotal(NEWITEMS);
      setMiniCartShow(true);
      return {
        cartItems: NEWITEMS,
        subtotal: subtotal,
      };
    });
  };

  return <CartContext.Provider value={{ miniCartShow, setMiniCartShow, addToBag, cart, removeFromCart }}>{children}</CartContext.Provider>;
};

export default CartProvider;

export { CartContext };
