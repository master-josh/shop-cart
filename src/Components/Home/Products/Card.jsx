import React, { useState } from 'react'
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

function Card() {
    const products = [
        {
            id: 1,
            name: "Wireless Earbuds, IPX8",
            price: "$89.99",
            description: "Organic Cotton, fairtrade certified and workking",
            rating: 4,
            reviews: 121,
            Liked: true,
            image: "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039320.jpg?t=st=1728335196~exp=1728338796~hmac=33afca6f03e9e4f514894bcac0f747c17e23688de4d58d7db45401b95edecf4b&w=740",
        },
        {
            id: 2,
            name: "AirPods Max",
            price: "$559.99",
            description: "A perfect balance of high-fidelity audio",
            rating: 5,
            reviews: 112,
            image: "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039322.jpg?t=st=1728335252~exp=1728338852~hmac=a4b8257e8066b40ce0c0f955e566f95899de7a886bee111b69952dc7515ded18&w=826",
        },
        {
            id: 3,
            name: "Bose BT Earphones",
            price: "$289.99",
            description: "Table with air purifier, stained veneer/black",
            rating: 4,
            reviews: 121,
            image: "https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074295.jpg?t=st=1728335323~exp=1728338923~hmac=a387f25accf14f2b233f60389396b1d2bbd7ef78fb74832d73340eac479a282d&w=740",
        },
        {
            id: 4,
            name: "VIVEFOX Headphones",
            price: "$39.99",
            description: "Wired Stereo Headsets With Mic and working",
            rating: 3,
            reviews: 78,
            image: "https://img.freepik.com/free-photo/red-gold-headphones-digital-device_53876-97303.jpg?t=st=1728335406~exp=1728339006~hmac=29af4706b685e8e34ab202de0d29108e723f23167dc6abd3a9c36c8936da2397&w=740",
        },
    ];

    const [liked, Setliked] = useState(false)

    const Click = () => {
        Setliked(!liked)
    }
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="border-2 hover:border-green-500 rounded-lg hover:shadow-md overflow-hidden relative">
                        <div className='bg-white rounded-full absolute right-2 top-2 text-center h-10 w-10 flex flex-col items-center justify-center'>
                                <CiHeart onClick={Click} className='text-4xl text-green-600 absolute ' />
                        </div>
                        <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-sm text-gray-500">{product.description}</p>
                            <div className="flex items-center mt-3">
                                <div className="flex text-yellow-500">
                                    {Array(product.rating)
                                        .fill(0)
                                        .map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                </div>
                                <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-xl font-bold">{product.price}</span>
                                <button className="border-2 border-green-600 text-gray-800 px-4 py-2  rounded-full hover:bg-green-700 hover:text-white transition duration-300">
                                    <FaShoppingCart className="lg:inline-block mr-2 hidden" />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card
