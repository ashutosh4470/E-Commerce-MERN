import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-pink-600 py-8 mt-10">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="flex justify-between">
            <div className="w-1/3">
              <Link to={"/http://hmbyte.com"}>
                <h3 className="text-lg font-semibold text-white mb-4">
                  About Us
                </h3>
              </Link>
              <p className="text-white">
                ‘Organization Name’ ‘s beautifying agents advancement forms use
                logical research to guarantee that our items contain top-notch
                fixings that advance and sustain the skin. The outcome is a
                delightfully useful item that is securely perfect for all
                intents and purposes each skin type. ‘Organization Name’ starts
                by hoping to Mother Nature for the motivation behind our beauty
                care products. Our in-house logical group at that point plans an
                item that praises that motivation while conveying front-line
                beauty care products. We will likely give solid, clean, and
                unadulterated beautifying agents{" "}
              </p>
            </div>
            <div className="w-1/3 ml-20">
              <h3 className="text-lg font-semibold text-white  mb-4">Links</h3>
              <ul className="text-white">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Categories</a>
                </li>
                <li>
                  <Link to="/product">Products</Link>
                </li>
                <li>
                  <Link to="/brands">Top Brands</Link>
                </li>
                <li>
                  <Link to="#contactus">Contact Us</Link>
                </li>
                <li>
                  <Link to="#contactus">About Us</Link>
                </li>
                
              </ul>
            </div>
            <div className="w-1/3">
              <h3
                className="text-lg font-semibold text-white mb-4"
                id="contactus"
              >
                Contact Us
              </h3>
              <ul className="text-white">
                <li>Email: mahaleashutosh@gmail.com</li>
                <li>Phone: +91-77560 94735</li>
                <li>Address: Nashik</li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-700 my-8" />
          <div className="text-center text-white">
            <p>© Ashutosh Mahale</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
