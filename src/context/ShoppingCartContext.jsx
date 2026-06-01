import { createContext, useContext, useEffect, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
const ShoppingCartContext = createContext({});

const initialCartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const ShoppingCartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ShoppingCartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};
