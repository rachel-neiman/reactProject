import { Routes, Route } from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import HomePage from "./HomePage";
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Products from './Products';
import UserManagement from './UserManagement';
import Log from './Log';
import Profile from './Profile';

const Routing = ({ products, onAddToCart, cartItems, setCartItems, totalAmount, setTotalAmount, setCartCount ,remove}) => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products products={products} onAddToCart={onAddToCart}  remove={remove} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ProductDetails/:id/:name/:writer/:price/:img" element={<ProductDetails onAddToCart={onAddToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} totalAmount={totalAmount} setTotalAmount={setTotalAmount} setCartCount={setCartCount} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/log" element={<Log />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    )
}

export default Routing;
