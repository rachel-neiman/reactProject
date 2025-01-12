import { Routes, Route } from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import HomePage from "./HomePage";
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Products from './Products';

const Routing = ({products, onAddToCart, cartItems, setCartItems, totalAmount, setTotalAmount, setCartCount}) => {  
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products products={products} onAddToCart={onAddToCart}  />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ProductDetails/:id/:name/:writer/:price/:img" element={<ProductDetails onAddToCart={onAddToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} totalAmount={totalAmount} setTotalAmount={setTotalAmount} setCartCount={setCartCount} />} />
        </Routes>
    )
}

export default Routing;
