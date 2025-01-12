
import ProductCard from "./ProductCard";

function Products({products }) {


    return <>
        <h1 style={{ textAlign: 'center', color: '#333' }}>יצירות אומנות</h1>
        {products.map(p => <ProductCard key={p.id} product={p} />)}
    </>
}

export default Products