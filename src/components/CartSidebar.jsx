function CartSidebar({ cart, isOpen, onClose }) {
  return (
    <div className={isOpen ? "cart open" : "cart"}>
      <button onClick={onClose}>Close</button>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CartSidebar;