import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../pages/CartContext";
import React, { useContext } from "react";


const Header = () => {
  const { cartItems } = useContext(CartContext);
  const { user } = useContext(UserContext);




  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-white p-6 h-24">
        <div className=" flex items-center flex-shrink-0 text-black mr-6">
          <img
            className="fill-current h-8 w-8 mr-2 text-pink-600 "
            alt="logo"
            src="https://www.templatesarea.com/wp-content/uploads/2023/02/butterfly-silhouette-svg-files-crafts-designs.jpg"
            width={64}
            height={64}
          />
          <span className="font-bold text-xl text-pink-600 tracking-tight cursor-pointer">
            Glamm
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-black border-black-400 hover:text-black hover:border-black">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="flex w-full  flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm font-bold lg:flex-grow ">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-pink-600 mx-3"
            >
              Categories
            </Link>
            <Link
              to="/product"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-pink-600 mx-3"
            >
              Products
            </Link>
            <Link
              to="/auth"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-pink-600 mx-3"
            >
              Luxe
            </Link>
            <Link
              to="Fashion"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-pink-600 mx-3"
            >
              Fashion
            </Link>
            <Link
              to="BeautyAdvise"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-pink-600 mx-3 "
            >
              Beauty Advise
            </Link>
            <input
              type="search"
              class=" px-auto border rounded-lg border-gray-500 hover:border-pink-5 00 pl-2 mr-2 sm:ml-0 lg:ml-[20%] h-10"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            />

            <Link
              to="#"
              className="inline-block ml-5 text-sm px-4 py-2 leading-none border rounded text-white border-white bg-pink-600 hover:border-transparent hover:bg-pink-500 mt-4 hover:cursor-pointer lg:mt-0"
            >
              Download
            </Link>
            <Link
              to="/cart"
              className="inline-block text-lg ml-8 mt-2 leading-none rounded text-black bg-white hover:cursor-pointer hover:text-pink-600 relative"
            >
              <FaShoppingCart />
              {cartItems.length > 0 && (
                <span className="cart-item-badge bg-red-500 text-white px-1 py-0 rounded-full text-xs absolute top-[-8px] right-[-8px]">
                  {cartItems.length}
                </span>
              )}
            </Link>
            {user && (
          <Link
            to="/profile"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-pink-600 mx-3"
          >
            Profile
          </Link>
        )}
                <Link
                to="/register"
                className="inline-block ml-7 text-sm px-2 py-2 leading-none border rounded text-white border-white bg-pink-600 hover:border-transparent hover:bg-pink-500 mt-4 hover:cursor-pointer lg:mt-0"
              >
                Login/Signup
              </Link>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
