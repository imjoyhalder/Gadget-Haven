import React from 'react';

const SingleDashboardCartProduct = ({ item }) => {
    const { price, Specification, product_image, product_title, id } = item
    return (
        <div className='p-2'>
            <div className='flex bg-slate-200 p-5 gap-2 md:gap-5 items-center rounded-2xl shadow-xl relative'>

                {/* Product Image */}
                <div>
                    <img className='w-32 lg:w-44 rounded-2xl' src={product_image} alt="Product" />
                </div>

                {/* Product Details */}
                <div className='flex-1'>
                    <h1 className='font-bold text-sm md:text-xl'>{product_title}</h1>
                    {Specification.map((sp, idx) => (
                        <p key={idx} className='mt-1 text-xs text-gray-600'>{sp}</p>
                    ))}
                    <p className='text-gray-700 mt-2'>
                        Price: <span className='font-bold text-black'>${price}</span>
                    </p>
                </div>

                {/* Delete Button */}
                <div className='flex items-start'>
                    <button className='hover:scale-105 transition-transform'>
                        <img
                            className='w-6 h-6 md:w-10 md:h-10'
                            src="https://img.icons8.com/?size=80&id=102350&format=png"
                            alt="Delete"
                        />
                    </button>
                </div>
            </div>
        </div>


    );
};

export default SingleDashboardCartProduct;