import { createContext, useContext, useState } from "react";



// 1. Create the Cart Context
const CartContext = createContext();
// 2. Create a Hook to use Cart Context easily in other components
export const useCart = () => useContext(CartContext);


const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);
      if (itemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += quantity;
        return updatedItems;
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Count the total items in the cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  )


  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, cartCount, totalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider