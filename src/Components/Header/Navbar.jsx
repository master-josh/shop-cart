import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Logo from "../../../public/logo.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to='/' className="flex items-center">
            <img src={Logo} alt="Shopcart Logo" className="h-11 w-auto mr-2" />
            <span className="text-xl font-semibold text-green-600">
              Shopcart
            </span>
          </Link>
        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3">
          <input
            type="text"
            placeholder="Search Product"
            className="bg-transparent outline-none flex-grow px-2"
          />
          <FaSearch className="text-gray-500" />
        </div>

        <div className="hidden lg:flex items-center space-x-6 font-semibold ">
          <div className="relative group">
            <button className="text-gray-700 hover:text-green-800">
              Categories
            </button>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 p-4 w-48">
              <a href="#" className="block px-2 py-1 hover:bg-gray-100 ">
                Electronics
              </a>
              <a href="#" className="block px-2 py-1 hover:bg-gray-100">
                Clothing
              </a>
              <a href="#" className="block px-2 py-1 hover:bg-gray-100">
                Home & Kitchen
              </a>
            </div>
          </div>
          <a href="#" className="text-gray-700 hover:text-green-600">
            Deals
          </a>
          <a href="#" className="text-gray-700 hover:text-green-600">
            What's New
          </a>
          <a href="#" className="text-gray-700 hover:text-green-600">
            Delivery
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <Link
            to="/login"
            className="text-gray-700 hover:text-green-600 flex items-center"
          >
            <CiUser className=" text-4xl" />
            Account
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 hover:text-green-600 flex items-center"
          >
            <IoCartOutline className="text-4xl" />
            Cart
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-700" onClick={toggleMobileMenu}>
          <FaBars className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div className="lg:hidden bg-white shadow-lg p-4 space-y-4 ">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Search Product"
              className="bg-transparent outline-none flex-grow px-2"
            />
            <FaSearch className="text-gray-500" />
          </div>

          <div className="space-y-2 ">
            <a href="#" className="block text-gray-700 hover:text-green-600">
              Categories
            </a>
            <a href="#" className="block text-gray-700 hover:text-green-600">
              Deals
            </a>
            <a href="#" className="block text-gray-700 hover:text-green-600">
              What's New
            </a>
            <a href="#" className="block text-gray-700 hover:text-green-600">
              Delivery
            </a>
          </div>

          {/* Account and Cart Links for Mobile */}
          <div className="space-y-2">
            <a
              href="#"
              className=" text-gray-700 hover:text-green-600 flex items-center"
            >
              <CiUser className="mr-2 text-3xl" />
              Account
            </a>
            <a
              href="#"
              className=" text-gray-700 hover:text-green-600 flex items-center"
            >
              <IoCartOutline className="mr-2 text-3xl" />
              Cart
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
