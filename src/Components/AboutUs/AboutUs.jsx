import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-purple-50 text-gray-800 py-16 px-6 md:px-20 lg:px-52">
            <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">About Us</h1>
            <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg">
                Welcome to our gadget world — your ultimate destination for the latest and coolest tech products!
                We are passionate about bringing you cutting-edge gadgets that enhance your daily life, improve productivity, and add fun to your routine.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-semibold text-purple-600 mb-2">Our Mission</h2>
                    <p className="text-gray-700">
                        To deliver innovative gadgets and smart accessories that simplify your lifestyle. We aim to ensure satisfaction, quality, and excellent customer service at every step.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-purple-600 mb-2">Why Choose Us?</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Handpicked premium products</li>
                        <li>Affordable pricing</li>
                        <li>Fast and reliable delivery</li>
                        <li>Friendly customer support</li>
                        <li>Secure payment system</li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 text-center">
                <p className="text-md text-gray-600">
                    We’re more than just a gadget shop — we’re your tech-savvy companions helping you explore the future, one gadget at a time!
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
