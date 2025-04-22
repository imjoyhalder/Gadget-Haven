import rating from 'daisyui/components/rating';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams()
    const data = useLoaderData()


    const product = data.find(gadget => gadget.id === parseInt(productId.slice(1)))
    const { availability, id, price, product_title, product_image, Specification, rating } = product
    return (
        <div>
            <div style={{ background: 'rgb(149, 56, 226)' }} className="pt-6 pb-32 relative">
                <div className="text-white text-center mt-4 w-11/12 md:w-8/12 mx-auto space-y-4">
                    <p className="text-2xl md:text-3xl font-bold">Product Details</p>
                    <h1 className="text-sm text-gray-200">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </h1>
                </div>
            </div>

            <div className="relative w-11/12 md:w-10/12 lg:w-8/12 mx-auto -top-24 border flex flex-col md:flex-row rounded-2xl bg-white p-4 gap-6 shadow-md">
                <div className="flex justify-center md:w-1/2">
                    <img className="rounded-2xl w-11/12 h-auto md:h-64 object-cover" src={product_image} alt="Product" />
                </div>

                <div className="md:w-1/2 space-y-4">
                    <h1 className="text-lg md:text-xl font-bold">{product_title}</h1>
                    <p className="text-base">Price: <span className="font-semibold">${price}</span></p>

                    <div className="border w-fit px-3 py-1 border-green-300 rounded-2xl">
                        {availability ? (
                            <p className="text-sm text-green-500 text-center">In Stock</p>
                        ) : (
                            <p className="text-sm text-red-500 text-center">Out of Stock</p>
                        )}
                    </div>

                    <div>
                        <h2 className="font-bold">Specification</h2>
                        <ol className="list-decimal list-inside text-sm text-gray-600">
                            {Specification.map((property, idx) => (
                                <li key={idx}>{property}</li>
                            ))}
                        </ol>
                    </div>

                    <div>
                        <h2 className="font-bold">Rating</h2>
                        <div className="flex items-center gap-3">
                            <div className="rating rating-sm">
                                {[1, 2, 3, 4, 5].map((star, index) => (
                                    <input
                                        key={index}
                                        type="radio"
                                        name="rating-6"
                                        className="mask mask-star-2 bg-orange-400"
                                        aria-label={`${star} star`}
                                        defaultChecked={star === 2}
                                    />
                                ))}
                            </div>
                            <div className="w-10 bg-slate-300 rounded-xl">
                                <p className="text-center">{rating}</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                        <button
                            style={{ background: 'rgb(149, 56, 226)' }}
                            className="btn text-white rounded-2xl px-4 py-2 flex items-center gap-2"
                        >
                            Add To Cart
                            <img className="w-5" src="https://img.icons8.com/?size=50&id=9671&format=png" alt="cart" />
                        </button>

                        <button className="w-10 h-10 border rounded-full bg-slate-100 flex items-center justify-center">
                            <img className="w-6" src="https://img.icons8.com/?size=32&id=16076&format=png" alt="wishlist" />
                        </button>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default ProductDetails;