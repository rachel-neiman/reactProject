
import ProductCard from "./ProductCard";

function Products({ products,remove }) {


    return <>
            <div className="products-grid">
            {products.map(p => <ProductCard key={p.id} product={p} remove={remove} />)}
        </div>

    </>
}

export default Products