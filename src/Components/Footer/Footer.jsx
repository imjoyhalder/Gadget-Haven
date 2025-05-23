import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='text-center space-y-4 md:mt-44 lg:mt-60'>
                <h1 className='font-bold text-3xl'>Gadget Haven</h1>
                <p className='text-gray-500 font-bold'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <footer className="footer md:flex max-w-4xl justify-between p-10 mx-auto">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>

    );
};

export default Footer;