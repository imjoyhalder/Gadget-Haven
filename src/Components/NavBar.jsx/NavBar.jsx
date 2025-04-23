import Link from 'daisyui/components/link';
import React from 'react';
import { NavLink } from 'react-router-dom';
import banner from '../../assets/banner.jpg'
import Dashboard from '../Dashboard/Dashboard';

const NavBar = () => {

    const handleCart =() =>{
        return <Dashboard></Dashboard>
    }

    const links = <>
        <li className='text-lg'><NavLink to='/'>Home</NavLink></li>
        <li className='text-lg'><NavLink >Statistics</NavLink></li>
        <li className='text-lg'><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li className='text-lg'><NavLink to='/about-us'>About Us</NavLink></li>
    </>

    return (
        <div style={{background:'rgb(149, 56, 226)' }} className="navbar  text-white shadow-sm rounded-tl-2xl rounded-tr-2xl ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-slate-600  rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Haven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <button onClick={handleCart} className="bg-slate-50 p-2 rounded-full">
                    <img
                        src="https://img.icons8.com/ios-filled/24/000000/shopping-cart.png"
                        alt="Cart"
                    />
                </button>
                <button className="bg-slate-50 p-2 rounded-full">
                    <img
                        src="https://img.icons8.com/?size=24&id=86737&format=png"
                        alt="WishList"
                    />
                </button>
            </div>
            
        </div>
    );
};


export default NavBar;