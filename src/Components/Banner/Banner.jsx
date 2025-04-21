import React from 'react';
import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div style={{ background: 'rgb(149, 56, 226)' }} className='rounded-bl-3xl relative rounded-br-3xl pb-24'>
            <div className='pb-10'>
                <div className='space-y-4 text-white w-9/12 md:w-7/12 lg:w-6/12 mx-auto text-center pt-4'>
                    <h1 className=' text-2xl md:text-3xl lg:text-4xl font-bold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className='text-gray-200 text-sm md:text-md '>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button style={{color:'rgb(149, 56, 226)'}} className='btn rounded-3xl' > Shop Now</button>
                </div>
            </div>
            {/* <div className="absolute border-2 rounded-xl left-1/2 transform -translate-x-1/2 top-full -mt-32 w-11/12 md:w-8/12 h-9 ">
                <img className='rounded-2xl' src={bannerImg} alt="" />
            </div> */}
        </div>
    );
};


export default Banner;