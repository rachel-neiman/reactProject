
import ProductCard from "./ProductCard";

function Products({ products,remove }) {


    return <>
        <h1 style={{ textAlign: 'center', color: '#333' }}>יצירות אומנות</h1>
        <div className="products-grid">
            {products.map(p => <ProductCard key={p.id} product={p} remove={remove} />)}
        </div>

    </>
}

export default Products