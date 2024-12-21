import React from "react";
import { Heebo } from 'next/font/google'
import Image from 'next/image'

const heebo = Heebo({subsets:['latin']})

const Images = {
  image1:"/Images/ProductImage.png"
}

const Page = () => {
  return (
    <div className="my-[50px] p-3 mx-auto w-full md:w-[90%] lg:w-[1280px] md:h-[600px] flex flex-col-reverse md:flex-row items-center justify-between rounded-b-lg bg-[#d0e1ea]">
    {/* Text Section */}
    <div className="mt-5 md:mt-0 md:ml-20 w-full md:w-[521px] h-auto flex flex-col justify-evenly md:justify-between items-start">
      <h1 className="text-[13px] text-center md:text-left">Welcome to chairy</h1>
      <h1 className={`${heebo.className} text-[24px] md:text-[36px] lg:text-[48px] font-black text-[#000000] text-start md:text-left`}>
        Best Furniture Collection For Your Interior.
      </h1>
      <div className="flex justify-start md:justify-start w-full">
        <button
          className={`${heebo.className} w-[160px] h-[45px] text-[16px] md:text-[18px] bg-[#029FAE] text-white rounded-lg shadow-sm hover:shadow-black/60 font-medium mt-3`}
        >
          Shop Now
        </button>
      </div>
    </div>
  
    {/* Image Section */}
    <div className="w-[300px] h-[250px] md:w-[380px] md:h-[280px] relative transition-transform duration-300 hover:scale-90">
      <Image src={Images.image1} alt="Product" width={270} height={270} className="w-full h-full object-contain"/>
    </div>
  </div>
  );
};

export default Page;
