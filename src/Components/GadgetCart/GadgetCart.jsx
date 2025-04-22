
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const GadgetCart = ({ gadget }) => {
    const { id, price, product_title, product_image } = gadget

    return (
        <div className='w-[330px] md:w-[220px] lg:w-[300px] space-y-4  border px-2 py-3  rounded-2xl bg-slate-200  '>
            <div className='w-[320px] md:w-[195px] lg:w-[290px] mx-auto '>
                <img className='w-[310px] md:w-[210px] lg:w-[280px] lg:h-[280px]  mx-auto rounded-2xl h-64 pr-2  md:h-44' src={product_image} alt="" />
            </div>
            <div className='space-y-2 pl-2'>
                <p className='font-bold text-lg'>{product_title}</p>
                <p className='text-gray-500'>Price: ${price}</p>

            </div>
            <Link to={`product/:${id}`} >
                <button style={{ color: 'rgb(149, 56, 226)' }}
                    className='btn border-purple-500 border-b-red-400 
                 btn-default rounded-2xl p-5'>Details</button>
            </Link>
        </div>

    );
};

export default GadgetCart;