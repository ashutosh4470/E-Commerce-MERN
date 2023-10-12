// import React, { useState, useEffect } from "react";
// import products from "./data";
// import { useParams } from "react-router-dom";

// const Productdetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const selectedProduct = products.find(
//       (product) => product.id === parseInt(id)
//     );
//     setProduct(selectedProduct);
//   }, [id, products]);

//   return (
//     <div className="w-[100%]  py-12 sm:px-6 lg:px-8">
//       {product ? (
//         <div className="flex flex-col md:flex-row max-w-4xl mx-52">
//           <div className="md:w-1/2">
//             <img
//               className="h-64 md:h-auto w-full object-cover"
//               src={product.img}
//               alt={product.name}
//             />
//           </div>
//           <div className="md:w-1/2 md:ml-40 mt-8 md:mt-0">
//             <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//               {product.name}
//             </h2>
//             <p className="mt-2 text-lg text-gray-600"><strike>{product.prevprice}</strike> {product.price}</p>
//             <div className="mt-4">
//               <p className="text-base text-gray-700">{product.description}<br></br>{product.detail}</p>
//             </div>
//             <button className="bg-pink-500 mx-20 my-5 rounded px-5 py-2 text-white hover:bg-pink-600">Buy Now</button>
//             {/* < StarRating /> */}
//           </div>
//         </div>
//       ) : (
//         <p>Product not found.</p>
//       )}
//     </div>
//   );
// };

// export default Productdetail;

import React, { useState, useEffect, useContext } from 'react';
import products from './data';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';

const Productdetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const selectedProduct = products.find((product) => product.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      // alert('Product added to cart:', product);
    }
  };

  return (
    <div className="w-[100%]  py-12 sm:px-6 lg:px-8">
      {product ? (
        <div className="flex flex-col md:flex-row max-w-4xl mx-52">
          <div className="md:w-1/2">
            <img
              className="h-64 md:h-auto w-full object-cover"
              src={product.img}
              alt={product.name}
            />
          </div>
          <div className="md:w-1/2 md:ml-40 mt-8 md:mt-0">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {product.name}
            </h2>
            <p className="mt-2 font-bold text-lg text-black">
              <strike className="text-sm font-light">{product.prevprice}</strike> {product.price}
            </p>
            <div className="mt-4">
              <p className="text-lg text-black font-bold">
                {product.description}
                <br />
                <br />
                </p>
                <p>
                {product.detail}
              </p>
            </div>
            <button
              className="bg-pink-500 mx-20 my-5 rounded px-5 py-2 text-white hover:bg-pink-600"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            {/* < StarRating /> */}
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default Productdetail;
