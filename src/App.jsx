import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ← Add import
import Header from './components/Header';
import HomePage from './components/HomePage.jsx'; // ← New
import CategoryPage from './components/CategoryPage'; // ← New
import CartPage from './components/CartPage'; // ← New
import CartSidebar from './components/CartSidebar';
import { products } from './data/products';
import './styles/App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // ← Add search state
  
  // ... all your existing functions (addToCart, removeFromCart, etc.) ...
  
  return (
    <BrowserRouter>  {/* ← Wrap entire app */}
      <div className="app">
        <Header 
          cartItemCount={getTotalItems()}
          onCartClick={toggleCart}
          searchTerm={searchTerm}           // ← Pass search state
          onSearchChange={setSearchTerm}    // ← Pass setter
        />
        
        <main className="main-content">
          {/* TODO: Create Routes */}
          {/* <Routes>
            <Route path="/" element={
              <HomePage 
                products={products}
                onAddToCart={addToCart}
                searchTerm={searchTerm}
              />
            } />
            
            <Route path="/category/:category" element={
              <CategoryPage 
                products={products}
                onAddToCart={addToCart}
              />
            } />
            
            <Route path="/cart" element={
              <CartPage 
                cart={cart}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeFromCart}
              />
            } />
          </Routes> */}
        </main>
        
        <CartSidebar 
          isOpen={isCartOpen}
          onClose={toggleCart}
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;