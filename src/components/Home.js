import { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { scrollToTop } from "../pages/scoll";
import { products, adv, Brands } from "./HomeData";
import { Link } from "react-router-dom";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  function handleScroll() {
    if (window.pageYOffset > 450) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }
  window.addEventListener("scroll", handleScroll);

  const chunk = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) {
        acc.push(arr.slice(i, i + size));
      }
      return acc;
    }, []);
  };
  const chunks = chunk(products, 3);
  const chunkBrand = chunk(Brands, 3);

  return (
    <div>
      <h1 className="ml-8 mb-2 font-bold text-3xl">Best In Beauty</h1>
      <Carousel
        autoPlay={true}
        interval={4000}
        transitionTime={1000}
        infiniteLoop={true}
      >
        {chunks.map((chunk) => (
          <div className="flex mx-5" >
            {chunk.map((product) => (
              <div
                className="flex-1  rounded-xl overflow-hidden shadow-lg mx-3 mt-7 relative w-2/5"
                key={product.id}
              >
               <Link to={product.url}> <img
                  className="w-full h-9/12"
                  src={product.img}
                  alt="Card image"
                />
                <div className="absolute inset-0 flex items-end justify-left text-white text-2xl font-bold text-left ml-2 mb-2">
                  <div>
                    <h2>{product.name}</h2>
                    <p className="text-xl">{product.offer}</p>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
<Carousel>
      <div class="flex mx-4 w-[100%]">
        {adv.map((adv) => (
         <Link to="/product"> <img class="w-[95%] h-80 mx-1" src={adv.img} alt="Card image" /></Link>
        ))}
      </div>
      </Carousel>

      <h1 className="ml-8 mt-10 font-bold text-3xl">Top Brands</h1>
      {chunkBrand.map((chunk) => (
        <div class="flex">
          {chunk.map((brand) => {
            return (
              <div
                class="w-2/5  bg-white rounded-md  flex-1  overflow-hidden mx-7 mt-7 relative shadow-md"
                key={brand.id}
              >
                <img
                  class="w-full h-9/12 object-cover hover:cursor-pointer"
                  src={brand.img}
                  alt="Card image"
                />
                <div class="p-4">
                  <h3 class="font-bold text-xl mb-2 text-pink-600">
                    {brand.offer}
                  </h3>
                  <p class="text-gray-700 text-xl">{brand.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      ))}

      {showButton && (
        <button
          className="fixed bottom-10 right-8 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full"
          onClick={scrollToTop}
        >
          <BsFillArrowUpCircleFill />
        </button>
      )}
    </div>
  );
};

export default Home;
