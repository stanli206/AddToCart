import React from "react";

function Product({ products, addToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((item) => (
        <div key={item.id} className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center transition transform hover:scale-105">
          <img src={item.image} alt={item.title} className="w-32 h-32 object-contain mb-4" />
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-gray-700 text-sm">{item.description.substring(0, 60)}...</p>
          <h3 className="text-xl font-bold text-green-600">&#8377;{item.price}</h3>
          <button
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={() => addToCart(item)}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Product;
