import {  cartStyle, cartHeaderStyle,  cartItemStyle,  cartCardStyle,  imageStyle1,  itemInfoStyle,  totalStyle } from "../Style";



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
    <div style={cartStyle}>
      <h1 style={cartHeaderStyle}>סל הקניות</h1>
      <div style={cartCardStyle}>
        {cartItems.map((item, index) => (
          <div key={index} style={cartItemStyle}>
            <img src={`/images/${item.img}`} alt={item.name} style={imageStyle1} />
            <div style={itemInfoStyle}>
              <h3 style={{ margin: '0 0 10px 0' }}>{item.name}</h3>
              <p style={{ margin: '5px 0' }}>אומן: {item.writer}</p>
              <p style={{ margin: '5px 0' }}>מחיר: ₪{item.price}</p>
              <div>
                <button onClick={() => decreaseQuantity(item.id)}>➖</button>
                <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>➕</button>
              </div>
              <button onClick={() => removeItem(item.id)} style={{ marginTop: '10px' }}>מחק פריט</button>
            </div>
          </div>
        ))}
        <div style={totalStyle}>
          סה"כ לתשלום: ₪{totalAmount}
        </div>
      </div>
    </div>
  );
}
export default Cart;