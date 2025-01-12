import { Link } from "react-router-dom"
import { cardStyle, imageStyle, linkStyle, titleStyle2 } from "../Style"


function ProductCard({ product }) {


    return (
        <div style={cardStyle} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} >
            <img style={imageStyle} src={`/images/${product.img}`} alt={product.name} />
            <p style={titleStyle2}>{product.name}</p>
            <Link
                style={linkStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
                to={`/ProductDetails/${product.id}/${product.name}/${product.writer}/${product.price}/${product.img}`}>
                לפרטים
            </Link>

        </div>
    );
}

export default ProductCard