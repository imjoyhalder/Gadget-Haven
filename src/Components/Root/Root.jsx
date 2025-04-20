import Navbar from 'daisyui/components/navbar';
import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar.jsx/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='w-11/12 pt-4 mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;