import React, { useEffect, useState } from 'react';
import { deleteFormStoredProductList, getDataFormLocalStorage } from '../../Utilities/AddtoDB';
import SingleDashboardCartProduct from '../SingleDashboardCartProduct/SingleDashboardCartProduct';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const [cartList, setCartList] = useState([]);
    const [storedCartIds, setStoredCartIds] = useState(getDataFormLocalStorage());
    const [sort, setSort] = useState('');

    useEffect(() => {
        fetch('gadgetsData.json')
            .then(res => res.json())
            .then(data => setCartList(data))
            .catch(() => {
                toast.error('Failed to load product data!', {
                    position: "top-right",
                    autoClose: 2000,
                    theme: "colored",
                    transition: Zoom,
                });
            });
    }, []);

    const storedCartList = cartList
        .filter(cart => storedCartIds.map(id => parseInt(id)).includes(parseInt(cart.id)));

    const handleSort = (sortType) => {
        setSort(sortType);
        if (sortType === 'price') {
            const sorted = [...storedCartList].sort((a, b) => a.price - b.price);
            setCartList(sorted);
            toast.info('Sorted by price!', {
                position: "top-right",
                autoClose: 1500,
                theme: "dark",
                transition: Zoom,
            });
        }
    };

    const handleDeleteItem = (id) => {
        deleteFormStoredProductList(id);
        const updatedIdList = getDataFormLocalStorage();
        setStoredCartIds(updatedIdList);
    };

    return (
        <div>
            <ToastContainer />
            
            <div className='text-white text-center pt-6 px-4 md:px-16 lg:px-52 space-y-3 py-10 ' style={{ background: 'rgb(149, 56, 226)' }}>
                <h1 className='font-bold text-2xl'>Dashboard</h1>
                <p className='text-sm text-gray-200'>Explore the latest gadgets that will take your experience to the next level.</p>
                <div className='space-x-3'>
                    <button style={{ background: 'rgb(149, 56, 226)' }} className='btn btn-default w-24 md:w-28 text-white rounded-3xl'>Cart</button>
                    <button style={{ background: 'rgb(149, 56, 226)' }} className='btn btn-default w-24 md:w-28 text-white rounded-3xl'>WishList</button>
                </div>
            </div>

            <div className='flex justify-between my-8 items-center'>
                <p className='font-bold text-sm md:text-xl'>Cart</p>
                <div className='flex gap-2 items-center'>
                    <button onClick={() => handleSort('price')} className='btn btn-default border-purple-500 rounded-3xl text-purple-600 font-bold'>
                        Sort by Price <img className='w-5' src="https://img.icons8.com/?size=24&id=8quWHU0BbXsJ&format=png" alt="" />
                    </button>
                    <button className='btn btn-default border-purple-500 rounded-3xl text-white font-bold bg-purple-600'>Purchase</button>
                </div>
            </div>

            <div className='space-y lg:w-10/12 mx-auto'>
                {
                    storedCartList.map(item => (
                        <SingleDashboardCartProduct
                            handleDeleteItem={handleDeleteItem}
                            key={item.id}
                            item={item}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Dashboard;
