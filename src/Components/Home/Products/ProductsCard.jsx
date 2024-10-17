import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Card from "./Card";
import Devices from '../../../../public/Categories/elegant-smartphone-composition.png'
import pre from '../../../../public/Categories/pre.png'
import Chair from '../../../../public/Categories/Chair.png'
import Watch from '../../../../public/Categories/Watch.png'
import cosmetics from '../../../../public/Categories/cosmetics.png'
import Decor from '../../../../public/Categories/Decor.png'
import Neckace from '../../../../public/Categories/Neckace.png'
import Topbrands from "./Topbrands";
import DailyEssentials from "./DailyEssentials";
import { Link } from "react-router-dom";

const HomePage = () => {
  const products = [
    {
      id: 1,
      name: "Decor",
      image: (Decor)
    },
    {
      id: 2,
      name: "cosmetics",
      image: (cosmetics)
    },
    {
      id: 3,
      name: "Accessories",
      image: (Neckace)
    },
    {
      id: 4,
      name: "Phones",
      image: (Devices)
    },
    {
      id: 5,
      name: "Laptops",
      image: (pre),
    },
    {
      id: 6,
      name: "Watch",
      image: (Watch),
    },
    {
      id: 7,
      name: "Automotive",
      image: (Chair),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="py-10">
        <div className="container mx-auto p-0">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-semibold">Featured Products</h2>
            <div className="flex items-center hover:text-green-600">
              <Link to='/shop' className="cursor-pointer">See More</Link>
              <IoIosArrowForward />
            </div>
          </div>
          <Card />
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold">Exclusive Deals for the Weekend</h2>
          <p className="mt-4 text-lg">Up to 50% off on selected items. Limited time only!</p>
          <button className="mt-6 bg-white text-gray-900 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
            Explore Now
          </button>
        </div>
      </section>

      <section className="mt-10">
        <div className="container mx-auto px-4 flex flex-col items-center lg:items-stretch">
          <span className="text-3xl font-semibold mb-4">Shop From <span className="text-green-600">Top Categories</span></span>
          <hr className="w-[23rem] border-green-700 border" />
          <div className="py-10 p-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8  ">
            {products.map((p) => (
              <div className="flex flex-col items-center group ">
                <div className="border-2 bg-gray-300 flex justify-center items-center w-36 h-36 hover:border-green-700 hover:transition-transform duration-700 rounded-full overflow-hidden relative">
                  <div className="w-36 absolute flex-col items-center justify-center bg-white/30 backdrop-blur-sm flex transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-full inset-0">{p.name}</div>
                  <img src={p.image} alt={p.name} className="w-[80%] object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <Topbrands />
      </section>
      <section className="py-1">
        <DailyEssentials />
      </section>
    </div>
  );
};

export default HomePage;
