import React, { useState } from "react";
import { Heart, ShoppingCart, User, Filter, Menu, X } from "lucide-react";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import Logo from "../../../public/logo.svg";

const products = [
  {
    id: 1,
    name: "Gold Standard Whey Protein",
    price: 2399,
    rating: 4.5,
    reviews: 350,
    image: "https://via.placeholder.com/200/200",
  },
  {
    id: 2,
    name: "Gold Standard Whey Protein",
    price: 2399,
    rating: 4.5,
    reviews: 350,
    image: "https://via.placeholder.com/200/200",
  },
  {
    id: 3,
    name: "Gold Standard Whey Protein",
    price: 2399,
    rating: 4.5,
    reviews: 350,
    image: "https://via.placeholder.com/200/200",
  },
  {
    id: 4,
    name: "Gold Standard Whey Protein",
    price: 2399,
    rating: 4.5,
    reviews: 350,
    image: "https://via.placeholder.com/200/200",
  },
  {
    id: 5,
    name: "Gold Standard Whey Protein",
    price: 2399,
    rating: 4.5,
    reviews: 350,
    image: "https://via.placeholder.com/200/200",
  },
  {
    id: 6,
    name: "Gold Standard Whey Protein",
    price: 2399,
    rating: 4.5,
    reviews: 350,
    image: "https://via.placeholder.com/200/200",
  },
];

const Header = ({ toggleSidebar }) => (
  <header className="bg-white text-black px-4 py-3 mx-auto sticky top-0 z-50">
    <div className="container flex justify-between items-center ">
      <div className="flex items-center">
        <img src={Logo} alt="Shopcart Logo" className="h-11 w-auto mr-2" />
        <span className="text-xl font-semibold text-green-600">Shopcart</span>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-4 font-semibold">
          <li>Supplements</li>
          <li>Apparel</li>
          <li>Equipment</li>
          <li>Gadgets</li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4">
        <IoCartOutline className="cursor-pointer text-4xl" />
        <CiUser className="cursor-pointer text-4xl" />
        <LuMenu
          className="md:hidden cursor-pointer text-4xl"
          onClick={toggleSidebar}
        />
      </div>
    </div>
  </header>
);

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div
    className={`fixed inset-y-0 left-0 transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } md:relative md:translate-x-0 transition duration-200 ease-in-out z-30 bg-white md:bg-transparent w-64 p-4`}
  >
    <div className="flex justify-between items-center md:hidden mb-4">
      <h2 className="font-bold">Filters</h2>
      <X className="cursor-pointer" onClick={toggleSidebar} />
    </div>
    <h2 className="font-bold mb-4 flex items-center">
      <Filter className="mr-2" /> Filter
    </h2>
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Pick Color</h3>
      <div className="flex space-x-2">
        {["red", "blue", "green", "yellow"].map((color) => (
          <div
            key={color}
            className={`w-6 h-6 rounded-full cursor-pointer`}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Brand</h3>
      {["Optimum Nutrition", "MyProtein", "MuscleTech", "BSN", "Dymatize"].map(
        (brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input type="checkbox" id={brand} className="mr-2" />
            <label htmlFor={brand}>{brand}</label>
          </div>
        )
      )}
    </div>
    <div>
      <h3 className="font-semibold mb-2">Price</h3>
      {[
        "$0 - $500",
        "$501 - $1000",
        "$1001 - $2000",
        "$2001 - $5000",
        "$5000+",
      ].map((range) => (
        <div key={range} className="flex items-center mb-1">
          <input type="checkbox" id={range} className="mr-2" />
          <label htmlFor={range}>{range}</label>
        </div>
      ))}
    </div>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="bg-white p-4 rounded-lg shadow hover:border-green-500 border-2 ">
    <div className="relative ">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
      />
      <Heart className="absolute top-2 right-2 cursor-pointer text-green-600" />
    </div>
    <h3 className="font-semibold mb-2">{product.name}</h3>
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-gray-600 ml-2">({product.reviews})</span> 
    </div>
    <p className="font-bold mb-2">${product.price}</p>
    <button className="w-full bg-green-600 text-white py-2 rounded">
      Add to cart
    </button>
  </div>
);

const ProductList = () => (
  <div className="flex-1 hover:border-green-500 ">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
      <h2 className="font-bold mb-2 sm:mb-0">Product List (56)</h2>
      <select className="border p-2 rounded w-full sm:w-auto">
        <option>Sort by</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Popularity</option>
      </select>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

const ResponsiveProductListPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header toggleSidebar={toggleSidebar} />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="flex-1 md:ml-6 mt-6 md:mt-0">
            <ProductList />
          </div>
        </div>
      </div>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default ResponsiveProductListPage;
