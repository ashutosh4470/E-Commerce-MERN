import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartPage = () => {
    
  const { cartItems, removeFromCart } = useContext(CartContext);
  
  const calculateTotal = () => {
    if (cartItems.length === 0) {
      return 0;
    }
    
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.qty;
    });
    
    return total;
  };
  


  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

//   const handleBuyNow = () => {
//     addToCart(product);
//     // Redirect or perform other actions for buy now functionality
//   };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="border border-gray-300 p-4">
              <img
                className="w-full h-80 object-cover mb-4"
                src={item.img}
                alt={item.name}
              />
              <h3 className="text-lg font-bold mb-2">{item.name}</h3>
              <p className="text-gray-700 mb-2">{item.price}</p>
              <br />
              <p className="text-base text-gray-700">
                {item.description}
                <br />
                {item.detail}
                {}
              </p>
              <button
                className="bg-pink-500 text-white rounded px-4 py-2 hover:bg-pink-600"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
              <button
                className="bg-pink-500 text-white rounded ml-10 px-4 py-2 hover:bg-pink-600"
                // onClick={() => handleBuyNow(item.id)}
              >
                Buy Now
              </button>

            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
              <p>Total: ${calculateTotal()}</p>

    </div>
  );
};

export default CartPage;
