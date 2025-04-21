import React from 'react';

const GadgetCart = ({gadget}) => {
    const {price,product_title, product_image} = gadget
    return (
        <div>
            <div>
                <img src={product_image} alt="" />
            </div>
        </div>
    );
};

export default GadgetCart;