import React from 'react';

const Temp = () => {
  const handleAddToCart = () => {
    // Logic for adding the product to the cart
  };

  const handleBuyNow = () => {
    // Logic for initiating the checkout process
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      {/* Product information */}
      <h2 className="text-lg font-semibold">Product Name</h2>
      <p className="text-gray-500">Product Description</p>

      {/* Buttons */}
      <div className="flex mt-4">
        <button
          className="flex items-center justify-center px-4 py-2 mr-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button
          className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Temp;
