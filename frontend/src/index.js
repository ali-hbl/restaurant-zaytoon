import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContextProvider } from '../src/context/UserContext.jsx';
import CartProvider from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </CartProvider>
);
