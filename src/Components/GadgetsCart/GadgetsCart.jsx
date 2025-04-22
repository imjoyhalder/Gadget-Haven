import React, { useEffect, useState } from 'react';
import GadgetCart from '../GadgetCart/GadgetCart';

const GadgetsCart = () => {

    const [gadgets, setGadgets] = useState([])

    useEffect(() => {
        fetch('gadgetsData.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])
    return (
        <div className='my-6 px-4'>
            <div className='max-w-screen-xl mx-auto'>
                <h1 className='text-center text-2xl md:text-4xl font-bold mt-4'>
                    Explore Cutting-Edge Gadgets
                </h1>

                <div className='flex flex-col md:flex-row items-center justify-between gap-4 mt-8'>
                    <div className='p-2 rounded-2xl w-full md:w-auto flex justify-center'>
                        {/* <button
                            style={{ background: 'rgb(149, 56, 226)' }}
                            className='btn rounded-2xl text-white px-6 py-2 text-sm md:text-base hover:opacity-90 transition'
                        >
                            All Products
                        </button> */}
                        <button  className="btn text-white rounded-2xl" popoverTarget="popover-1" style={{ anchorName: "--anchor-1",  background: 'rgb(149, 56, 226)' } /* as React.CSSProperties */}>
                            All Products
                        </button>

                        <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                            popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                            {
                                
                            }
                        </ul>
                    </div>
                </div>

                <div className='my-8 grid gap-6 sm:grid-cols-1 md:grid-cols-3 justify-items-center '>
                    {gadgets.map((gadget) => (
                        <GadgetCart key={gadget.id} gadget={gadget} />
                    ))}
                </div>
            </div>
        </div>
    );

};

export default GadgetsCart;