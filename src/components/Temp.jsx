import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Temp() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      setProducts(products);
     
    }
    fetchProducts();
  }, []);
  return (
    <div>
      <h1 className='ml-5'>Product List</h1>
      <ul>
        {products.map(product => (
         <div
         className="bg-white h-[90%] rounded-lg shadow-lg overflow-hidden hover:cursor-pointer mb-7  ml-5 "
         key={product.id}
       >
         <img
           src={product.image}
           alt="Product 1"
           className="w-[20%] h-[60%] object-cover ml-[40%]"
         />
         <div className="p-4 text-center">
           <h3 className="text-lg font-bold mb-5 ">{product.title}</h3>
           <p className="text-gray-600 mb-4">
             MRP : <strike>{product.prevprice}</strike>
             <span classname="text-black text-lg"> {product.price}</span>
             <br />
             <span classname="text-lg text-pink-500">
               {product.description}
             </span>
             <br />
           </p>
           <Link
             to={`/product/${product.id}`}
             className="bg-pink-500 mt-5 text-white py-2 px-4 rounded-lg hover:bg-pink-800 "
           >
             Add to Cart
           </Link>
         </div>
       </div>
        ))}
      </ul>
    </div>
  );
}
export default Temp;


