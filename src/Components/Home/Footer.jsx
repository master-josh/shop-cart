import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            We provide high-quality products for your daily needs. Our aim is to offer the best e-commerce experience.
          </p>
        </div>
        
        {/* Customer Support */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Customer Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Track Order</a></li>
            <li><a href="#" className="hover:text-white">Return Policy</a></li>
            <li><a href="#" className="hover:text-white">Payment Methods</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 w-full bg-gray-700 text-white rounded-l"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r text-white">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-500 text-sm">© 2024 Shop-Cart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
