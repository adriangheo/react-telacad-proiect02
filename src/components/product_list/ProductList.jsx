import React from 'react';
import ProductItem from '../product_item/ProductItem';

function ProductList(props) {
    const { products } = props;

    return (
        <div 
        className="row my-4"
        style={{background: "pink"}}
        >
            { products.map((product) => {
                return <ProductItem
                    {...product}
                    key={product.id}
                />
            })}
        </div>
    );
}

export default ProductList;