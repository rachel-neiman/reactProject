function Cart({ cartItems, setCartItems, totalAmount, setTotalAmount ,setCartCount}) {
  
  const increaseQuantity = (id) => {
    const itemToUpdate = cartItems.find((item) => item.id === id);
    if (itemToUpdate) {
      const updatedCart = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
      setTotalAmount((prevTotal) => prevTotal + itemToUpdate.price);
      setCartCount((prevCount) => prevCount + 1);
    }
  };
  
  const decreaseQuantity = (id) => {
    const itemToUpdate = cartItems.find((item) => item.id === id);
    if (itemToUpdate.quantity > 1) {
      const updatedCart = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedCart);
      setTotalAmount((prevTotal) => prevTotal - itemToUpdate.price);
      setCartCount((prevCount) => prevCount - 1);
    } else {
      removeItem(id);
    }
  };
  

  const removeItem = (id) => {
    const itemToRemove = cartItems.find((item) => item.id === id);
    if (itemToRemove) {
      const updatedCart = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCart);
      setTotalAmount((prevTotal) => prevTotal - itemToRemove.price * itemToRemove.quantity);
      setCartCount((prevCount) => prevCount - itemToRemove.quantity);
    }
  };
  

  return (
    <div className="cart-container">
      <h1 >סל הקניות</h1>
      <div >
        {cartItems.map((item, index) => (
          <div key={index}  className="cart-item" >
            <img src={`/images/${item.img}`} alt={item.name}  />
            <div  className="cart-item-details">
              <h3 style={{ margin: '0 0 10px 0' }}>{item.name}</h3>
              <p style={{ margin: '5px 0' }}>אומן: {item.writer}</p>
              <p style={{ margin: '5px 0' }}>מחיר: ₪{item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>➖</button>
                <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>➕</button>
              </div>
              <button className="remove-button"  onClick={() => removeItem(item.id)} style={{ marginTop: '10px' }}>מחק פריט</button>
            </div>
          </div>
        ))}
        <div className="cart-total">
          סה"כ לתשלום: ₪{totalAmount}
        </div>
      </div>
    </div>
  );
}
export default Cart;