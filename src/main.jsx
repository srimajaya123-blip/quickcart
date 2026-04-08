import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from './context/CartContext'; // ← Add importimport { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>  {/* ← Wrap App */}
      <App />
    </CartProvider>
  </React.StrictMode>
);