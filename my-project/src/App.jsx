import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Routing from './components/Routing';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

function App() {


  const [products, setProducts] = useState([
    { id: 1, name: "PLAYGROUND", writer: "Gila Greenfield", price: 10000, img: "img.png" },
    { id: 2, name: "DANCE", writer: "Ronny Almagor", price: 11000, img: "img2.png" },
    { id: 3, name: "MONO_POP", writer: "Mono Jonesy", price: 9000, img: "img3.png" },
    { id: 4, name: "SHAPIRA", writer: "Michael Faust", price: 8000, img: "img4.png" },
    { id: 5, name: "HOLLYWOOD", writer: "Mono Jonesy", price: 10000, img: "img5.png" },
    { id: 6, name: "DA FLO_90", writer: "Shlomi Shiloni", price: 11000, img: "img6.png" },
    { id: 7, name: "DA FLO_93", writer: "Shlomi Shiloni", price: 9000, img: "img7.png" },
    { id: 8, name: "DA FLO_65", writer: "Shlomi Shiloni", price: 8000, img: "img8.png" }
  ])

  const [showCartPopup, setShowCartPopup] = useState(false);

  const triggerCartPopup = () => {
    setShowCartPopup(true);
    setTimeout(() => setShowCartPopup(false), 3000);
  };



  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (prod) => {
    const existingItem = cartItems.find((item) => item.id === prod.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === prod.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...prod, quantity: 1 }]);
    }

    setTotalAmount((prevTotal) => prevTotal + prod.price);
    setCartCount((prevCount) => prevCount + 1);

    triggerCartPopup();
  };



  return <>
    <BrowserRouter>
      {showCartPopup && (
        <div className={`cart-popup ${showCartPopup ? "show" : ""}`}>
          <h3>פריטים בעגלה</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-popup-item">
              <img src={`/images/${item.img}`} alt={item.name} />
              <span>{item.name}</span>
              <span>₪{item.price}</span>
              <span className="item-quantity">{item.quantity}</span>
            </div>
          ))}
          <div style={{ textAlign: 'right', marginTop: '10px' }}>
            <strong>סה"כ: ₪{totalAmount}</strong>
          </div>
        </div>
      )}


      <header>
        <h1>יצירות אומנות</h1>
        <nav>
          <Link to="/">דף הבית</Link>
          <Link to="/about">אודות</Link>
          <Link to="/products">מוצרים</Link>
          <Link to="/contact">יצירת קשר
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px', fontSize: '20px' }} />
          </Link>
          <Link to="/cart" style={{ position: "relative" }}>
            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: "24px" }} />
            {cartCount > 0 && (
              <span style={{
                position: "absolute",
                top: "-5px",
                right: "-10px",
                backgroundColor: "#ff0000",
                color: "#fff",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "12px",
              }}>
                {cartCount}
              </span>
            )}
          </Link>

        </nav>
      </header>
      <main>
        <Routing products={products} onAddToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} totalAmount={totalAmount} setTotalAmount={setTotalAmount} setCartCount={setCartCount} cartCount={cartCount} />
      </main>
      <footer className="homepage-footer">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </footer>
    </BrowserRouter>
  </>
}
export default App;

