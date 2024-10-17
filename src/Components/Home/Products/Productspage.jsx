import React from "react";

const ProductPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a> &gt;
          <a href="#" className="text-gray-600 hover:text-gray-900 ml-1"> Category</a> &gt;
          <span className="text-gray-900 ml-1">Product Name</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              className="rounded-lg w-full h-auto max-w-md"
              src="https://via.placeholder.com/400x400"
              alt="Product"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900">Product Name</h1>

            {/* Price */}
            <p className="text-xl font-semibold text-gray-900">$199.99</p>

            {/* Description */}
            <p className="text-gray-700">
              This is a sample description of the product. It's detailed, informative,
              and gives users a great understanding of the product.
            </p>

            {/* Add to Cart Button */}
            <div className="flex space-x-4 items-center">
              <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring">
                Add to Cart
              </button>

              {/* Quantity Selector */}
              <div className="flex items-center">
                <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-l-lg">-</button>
                <span className="px-4 py-1 bg-white border border-gray-300">1</span>
                <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-r-lg">+</button>
              </div>
            </div>

            {/* Product Details Tabs */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Product Details</h2>
              <div className="border-b">
                <nav className="flex space-x-6 text-gray-600">
                  <a href="#" className="pb-2 text-blue-600 border-b-2 border-blue-600">Description</a>
                  <a href="#" className="pb-2 hover:text-gray-900">Reviews</a>
                  <a href="#" className="pb-2 hover:text-gray-900">Shipping Info</a>
                </nav>
              </div>

              <div className="mt-4">
                <p className="text-gray-700">
                  Here are more details about the product, its specifications, features, and
                  additional information that the customer might want to know.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Sample Related Product */}
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Related Product"
                className="w-full h-auto mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900">Related Product</h3>
              <p className="text-sm text-gray-600">$99.99</p>
            </div>
            {/* Repeat for other related products */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
