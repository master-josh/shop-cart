import React from 'react';
import Cartimage from '../../../public/time/empty-cart.png'

const CartPage = () => {
  const cartItems = []; 
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cartItems.length === 0 ? (
          <div className="col-span-3 text-center flex flex-col items-center justify-center">
            <img
              src={Cartimage}
              alt="Empty Cart"
              className="w-64 h-64 object-contain mb-8"
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
            <p className="text-lg text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <a
              href="/shop"
              className="bg-primary-green text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
              Continue Shopping
            </a>
          </div>
        ) : (
          <>
            <div className="col-span-2">
              <h1 className="text-3xl font-bold text-primary-green mb-6">Shopping Cart</h1>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-md mr-4"
                      />
                      <div>
                        <h2 className="text-xl font-semibold">{item.name}</h2>
                        <p className="text-gray-600">Price: ${item.price}</p>
                        <div className="flex items-center mt-2">
                          <button className="bg-primary-green text-white px-3 py-1 rounded-l-md hover:bg-green-700 transition duration-300">
                            -
                          </button>
                          <span className="px-4 py-2 border border-gray-300">{item.quantity}</span>
                          <button className="bg-primary-green text-white px-3 py-1 rounded-r-md hover:bg-green-700 transition duration-300">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button className="text-red-500 hover:underline mt-2">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="sticky top-0 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary-green mb-6">Cart Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-gray-600">Total Items</p>
                  <p>{cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Total Cost</p>
                  <p className="text-xl font-bold">${calculateTotal()}</p>
                </div>
              </div>
              <button className="w-full mt-6 bg-primary-green text-white py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
