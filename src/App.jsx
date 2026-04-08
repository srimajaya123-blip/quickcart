import { useState } from 'react'; // ← Add this import
import Header from './components/Header';
import ProductList from './components/ProductList';
import { products } from './data/products';
import './styles/App.css';
import { useState } from 'react';
function App() {
  // TODO: Add state for cart items (array)
  // Hint: const [cart, setCart] = useState([]);
  
  // TODO: Add state for cart visibility (boolean)
  // Hint: const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // TODO: Create addToCart function
  // This function should:
  // 1. Check if item already exists in cart
  // 2. If yes, increase quantity
  // 3. If no, add new item with quantity 1
  const addToCart = (product) => {
  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    setCart(cart.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

const removeFromCart = (id) => {
  setCart(cart.filter(item => item.id !== id));
};

const updateQuantity = (id, quantity) => {
  if (quantity <= 0) {
    removeFromCart(id);
  } else {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  }
};

const toggleCart = () => {
  setIsCartOpen(!isCartOpen);
};

const getTotalItems = () => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};
  // TODO: Create removeFromCart function
  // This function should filter out the item by id
  
  // TODO: Create updateQuantity function
  // This function should update the quantity of a specific item
  
  // TODO: Create toggleCart function
  // This function should toggle isCartOpen between true/false

  return (
    <div className="app">
      <Header 
  cartItemCount={getTotalItems()}
  onCartClick={toggleCart}
/>
      <main className="main-content">
        <ProductList products={products} />
      </main>
      <ProductList 
  products={products} 
  onAddToCart={addToCart}
/>
      <CartSidebar 
  cart={cart}
  isOpen={isCartOpen}
  onClose={toggleCart}
/>
    </div>
  );
}

export default App;