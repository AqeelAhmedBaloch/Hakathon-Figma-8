import React from "react";
import PopularProducts from "./PopularProduct";
import Image from "next/image";

const AboutImage = {
  Image:"/Images/Card.png"
}

const AboutUs = () => {
  return (
    <div className="mt-8 ml-40 mr-40">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {/* Left Side */}

        <div className="bg-teal-800 text-white p-8 flex items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us - Comforty</h2>
            <p className="text-base mb-6">
              At Comforty we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials and modern aesthetics we craft chairs that
              seamlessly blend style with functionality.
            </p>
            <button className="bg-white text-teal-800 px-6 py-2 rounded-md font-semibold hover:bg-gray-100">View collection</button>
          </div>
        </div>

        <div className="flex">
          <Image src={AboutImage.Image} alt="Image" width={619} height={478} className="w-[619px] h-[478px]"/>
        </div>
      </div>

      <div className="text-center mb-12">
        <h3 className="text-xl md:text-2xl font-bold mb-6">What Makes Our Brand Different</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          <div className="bg-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Next day as standard</h4>
            <p className="text-sm">Order before 3pm and get your order the next day as standard.</p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Made by true artisans</h4>
            <p className="text-sm">Handmade crafted goods made with real passion and craftsmanship.</p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Unbeatable prices</h4>
            <p className="text-sm">For our materials and quality you wont find better prices
              anywhere.</p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Recycled packaging</h4>
            <p className="text-sm">We use 100% recycled to ensure our footprint is more manageable.</p>
          </div>
        </div>
      </div>
      <PopularProducts/>
     </div>
  );
};

export default AboutUs;
