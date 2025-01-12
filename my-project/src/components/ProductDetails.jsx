import { useParams } from "react-router-dom";
import { buttonStyle, containerStyle, detailsImageStyle, infoStyle, titleStyle } from "../Style";

const ProductDetails = ({ onAddToCart }) => {
    const { id, name, writer, price, img } = useParams(); 

    const handleAddToCart = () => {
        onAddToCart({
            id: parseInt(id),
            name,
            writer,
            price: parseInt(price), 
            img,
        });
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>פרטי היצירה</h1>
            <p style={infoStyle}>שם היצירה: {name}</p>
            <p style={infoStyle}>אומן: {writer}</p>
            <p style={infoStyle}>מחיר: ₪{price}</p>
            <img style={detailsImageStyle} src={`/images/${img}`} alt={name} />
            <button
                onClick={handleAddToCart}
                style={buttonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}>
                הוספה לסל
            </button>
        </div>
    );
};

export default ProductDetails;
