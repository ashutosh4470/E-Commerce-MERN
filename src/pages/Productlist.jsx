import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import React, { useState } from "react";
import { scrollToTop } from "./scoll";
import products from "./data";

function Productlist() {
  const [showButton, setShowButton] = useState(false);
  const productsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  function handleScroll() {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  window.addEventListener("scroll", handleScroll);

 
 

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-5 ml-10">Featured Products</h2>

      <div className="grid grid-cols-4 gap-4 mx-10">
        {currentProducts.map((product) => {
          return (
            <div
              className="bg-white h-[90%] rounded-lg shadow-lg overflow-hidden hover:cursor-pointer mb-7 "
              key={product.id}
            >
              <img
                src={product.img}
                alt="Product 1"
                className="w-full h-[60%] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-5 ">{product.name}</h3>
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
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>


      <div className="flex justify-center mt-0">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handleClick(i + 1)}
            className={`mx-2 px-3 py-2 rounded-full ${
              i + 1 === currentPage ? 'bg-pink-500 text-white' : ''
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {showButton && (
        <button
          className="fixed bottom-4 right-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full"
          onClick={scrollToTop}
        >
          <BsFillArrowUpCircleFill/>
        </button>
      )}
      
    </div>
  );
}

export default Productlist;
