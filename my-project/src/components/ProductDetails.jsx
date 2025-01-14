import { useParams } from "react-router-dom";

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
        <div className="product-details">
            <h1>פרטי היצירה</h1>
            <p >שם היצירה: {name}</p>
            <p >אומן: {writer}</p>
            <p >מחיר: ₪{price}</p>
            <img src={`/images/${img}`} alt={name} />
            <button
                onClick={handleAddToCart}>
                הוספה לסל
            </button>
        </div>
    );
};

export default ProductDetails;
