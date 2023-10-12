// import React from "react";

// const About = () => {
//   return (
//     <div
//       className="bg-cover bg-center h-screen"
      
//     >
//       <div className="flex flex-col w-[100%]  items-center justify-center h-screen bg-opacity-50 bg-no-repeat"
//       style={{
//         backgroundImage: `url('https://images.healthshots.com/healthshots/en/uploads/2022/12/30174040/eye-makeup-1-770x436.jpg')`,
//       }}>
//         <div className="max-w-2xl px-6 py-12 bg-transparent rounded-lg ">
//           <h1 className="text-3xl font-bold mb-6">About Us</h1>
//           <p className="mb-6">
//           Makeup has been around for over a hundred thousand years, and beauty is only evolving. What started with red pigment clay is now a fascinating world of foundation, rouge, lipstick, blush, mascara, eye shadow, eye liner, eye caramba!
//           </p>
//         </div>
//       </div>
//     <div className="absolute  left-1/2 transform -translate-y-1/2 -translate-y-1/2">
        
//         <img class="pr t25 r33" src="https://media5.ppl-media.com/mediafiles/ecomm/promo/1474952933_ab-airoplane.png"></img>
//         <img src="https://media5.ppl-media.com/mediafiles/ecomm/promo/1474624129_ahh-se-aaahhhhh-tak.png"></img>
//     </div>
//     </div>
//   );
// };

// export default About;
import React from "react";

const About = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://cdn.purplle.com/images/banner_new.jpg"
          alt="background"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
        />
      </div>
      <div className="relative max-w-screen-xl mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="relative bg-white shadow-xl px-6 py-8 sm:px-10 sm:py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              About Purplle
            </h2>
            <img
              src="https://cdn.purplle.com/img/5de3fcb3e1c36d10f54c.png"
              alt="purplle logo"
              className="w-16"
            />
          </div>
          <p className="text-lg text-gray-500 mb-8">
            Purplle.com is India's one of the top beauty destinations. We are
            an online store for beauty products that offers a wide range of
            cosmetics, skincare, haircare, fragrance, personal care and
            grooming products for men and women at competitive prices. We
            offer a diverse selection of products from renowned brands in
            India and across the world.
          </p>
          <p className="text-lg text-gray-500 mb-8">
            At Purplle.com, our mission is to make beauty and grooming
            accessible and affordable to everyone. We believe that looking good
            should not come at a high cost, and we strive to offer products that
            are not only affordable but also of the highest quality.
          </p>
          <p className="text-lg text-gray-500 mb-8">
            We are passionate about beauty and we are dedicated to providing
            our customers with the best possible shopping experience. With
            Purplle.com, you can enjoy fast and reliable delivery, secure
            payment options, and friendly customer support. Shop with us today
            and discover why Purplle.com is India's top beauty destination.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
