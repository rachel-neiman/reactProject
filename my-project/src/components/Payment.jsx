// import "./styles.css";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Payment({ setCartItems, setCartCount, setTotalAmount }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalAmount } = location.state || { cartItems: [], totalAmount: 0 };
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);

  const handlePaymentConfirmation = () => {
    // איפוס כל הערכים של סל הקניות
    setCartItems([]);
    setCartCount(0);
    setTotalAmount(0);
    setIsPaymentConfirmed(true);
  };

  if (!cartItems.length) {
    return (
      <div className="payment-container">
        <h2>אין פריטים בסל.</h2>
        <Link to="/products">
          <button>חזרה לדף המוצרים</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="payment-container">
      {!isPaymentConfirmed ? (
        <>
          <h2>פריטים בסל:</h2>
          {cartItems.map((item, index) => (
            <div key={index} className="payment-item">
              <img src={`/images/${item.img}`} alt={item.name} />
              <div>
                <p>שם: {item.name}</p>
                <p>כמות: {item.quantity}</p>
                <p>מחיר ליחידה: ₪{item.price}</p>
              </div>
            </div>
          ))}
          <div className="payment-summary">סה"כ לתשלום: ₪{totalAmount}</div>
          <button onClick={handlePaymentConfirmation}>לתשלום סופי</button>
        </>
      ) : (
        <div className="success-message">
          <h2>התשלום בוצע בהצלחה!</h2>
          <p>ההזמנה בדרך אליך 😊</p>
          <button onClick={() => navigate("/products")}>חזרה לדף המוצרים</button>
        </div>
      )}
    </div>
  );
}

export default Payment;
