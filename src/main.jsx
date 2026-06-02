import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import './index.css';
import App from './App.jsx';
import ShoppingCartContextProvider from './context/ShoppingCartContext.jsx';
import CountContextProvider from './context/CountContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
    <ShoppingCartContextProvider>
      <CountContextProvider>
        <App />
      </CountContextProvider>
    </ShoppingCartContextProvider>
  </StrictMode>,
);
