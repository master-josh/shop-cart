import React from "react";
import { useParams } from "react-router-dom";
import ProductLists from "../../ProductLists/Lists";

const products = [
  {
    id: 1,
    name: "Optimum Nutrition Gold Standard Whey",
    price: 4999,
    rating: 4.8,
    reviews: 16000,
    quantity: 1,
    image:
      "https://via.placeholder.com/200x200?text=Optimum+Nutrition+Gold+Standard",
  },
  {
    id: 2,
    name: "Dymatize ISO100 Hydrolyzed Protein",
    price: 6499,
    rating: 4.7,
    reviews: 9200,
    quantity: 1,
    image: "https://via.placeholder.com/200x200?text=Dymatize+ISO100",
  },
  {
    id: 3,
    name: "MuscleTech NitroTech Whey Protein",
    price: 5299,
    rating: 4.6,
    reviews: 8500,
    quantity: 1,
    image: "https://via.placeholder.com/200x200?text=MuscleTech+NitroTech",
  },
  {
    id: 4,
    name: "BSN Syntha-6 Protein Powder",
    price: 4499,
    rating: 4.5,
    reviews: 5700,
    quantity: 1,
    image: "https://via.placeholder.com/200x200?text=BSN+Syntha-6",
  },
  {
    id: 5,
    name: "Cellucor COR-Performance Whey Protein",
    price: 3999,
    rating: 4.4,
    reviews: 3400,
    quantity: 1,
    image: "https://via.placeholder.com/200x200?text=Cellucor+COR-Performance",
  },
  {
    id: 6,
    name: "MyProtein Impact Whey Isolate",
    price: 2999,
    rating: 4.3,
    reviews: 7800,
    quantity: 1,
    image: "https://via.placeholder.com/200x200?text=MyProtein+Impact+Whey",
  },
]


const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));
  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="text-sm mb-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a> &gt;
          <a href="#" className="text-gray-600 hover:text-gray-900 ml-1"> Category</a> &gt;
          <span className="text-gray-900 ml-1">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              className="rounded-lg w-full h-auto max-w-md"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-xl font-semibold text-gray-900">${product.price}</p>
            <p className="text-gray-700">
              This is a sample description of the product. It's detailed, informative,
              and gives users a great understanding of the product.
            </p>

            <div className="flex space-x-4 items-center">
              <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring">
                Add to Cart
              </button>

              <div className="flex items-center">
                <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-l-lg">-</button>
                <span className="px-4 py-1 bg-white border border-gray-300">1</span>
                <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-r-lg">+</button>
              </div>
            </div>

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


        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
