import { Link } from "react-router-dom"
import { useContext } from "react";
import MyContext from '../context/Context'

function ProductCard({ product,remove }) {

    const { currentUser } = useContext(MyContext);

    return (
        <div className="product-card" onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
             onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
            <img  src={`/images/${product.img}`} alt={product.name} />
            <p >{product.name}</p>


            {currentUser && currentUser.role === "manager" ? (
            <button
              className="delete-button"
              onClick={() => remove(product.id)}  >
              מחק
            </button>
          ) : (
            <Link
                to={`/ProductDetails/${product.id}/${product.name}/${product.writer}/${product.price}/${product.img}`}>
                לפרטים
            </Link>
          )}

        </div>
    );
}

export default ProductCard