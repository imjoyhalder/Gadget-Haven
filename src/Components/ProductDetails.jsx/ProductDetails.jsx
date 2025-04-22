import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {productId} = useParams()
    const data = useLoaderData()

    console.log(productId)

    return (
        <div>
            <h1>Product-{productId}</h1>
        </div>
    );
};

export default ProductDetails;