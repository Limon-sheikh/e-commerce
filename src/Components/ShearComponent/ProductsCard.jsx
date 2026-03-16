import React from 'react';

const ProductsCard = ({product}) => {
    return (
        <div>
            <h1>{product.name}</h1>
        </div>
    );
};

export default ProductsCard;