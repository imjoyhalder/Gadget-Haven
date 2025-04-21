import React, { useEffect, useState } from 'react';
import GadgetCart from '../GadgetCart/GadgetCart';

const GadgetsCart = () => {

    const [gadgets, setGadgets]  = useState([])
    
    useEffect(()=>{
        fetch('gadgetsData.json')
        .then(res => res.json())
        .then(data=>setGadgets(data))
    },[])
    
    return (
        <div className='my-6'>
            <h1 className='text-center text-2xl md:text-4xl font-bold'>Explore Cutting-Edge Gadgets</h1>
            {
                gadgets.map( gadget => <GadgetCart key={gadget.id} gadget={gadget}></GadgetCart>)
            }
        </div>
    );
};

export default GadgetsCart;