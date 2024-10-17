import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-green-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-primary-green mb-6">Create an Account</h2>
        <p className="text-center text-gray-600 mb-6">Sign up to get started with <span className='text-green-600'>ShopCart</span></p>
        <form>
          <div className="relative mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-primary-green">
              <span className="px-3">
                <i className="fas fa-user text-gray-400"></i>
              </span>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 rounded-md outline-none"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-primary-green">
              <span className="px-3">
                <i className="fas fa-envelope text-gray-400"></i>
              </span>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 rounded-md outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-primary-green">
              <span className="px-3">
                <i className="fas fa-lock text-gray-400"></i>
              </span>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 rounded-md outline-none"
                placeholder="Create a password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-green text-white py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-primary-green font-bold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
