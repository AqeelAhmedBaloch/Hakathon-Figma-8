import React from "react";
import { Heebo } from 'next/font/google'
import Image from 'next/image'

const heebo = Heebo({subsets:['latin']})

const Images = {
  image1:"/Images/ProductImage.png"
}

const Page = () => {
  return (
    <div className='my-[50px] p-3 mx-auto w-[100%] md:w-[1280px] md:h-[600px] flex flex-col-reverse md:flex-row items-center justify-between rounded-b-lg bg-[#d0e1ea]'>
      {/* Text div */}
      <div className='ml-20 md:w-[521px] h-[275px] flex flex-col md:justify-between items-start justify-evenly'>
      <h1 className="text-[13px]">Welcome to chairy</h1>
      <h1 className={`${heebo.className} text-[24px] md:text-[48px] font-black text-[#000000]`}>Best Furniture Collection For Your interior.</h1>
      <button className={`${heebo.className} w-[160px] h-[45px] text-[18px] bg-[#029FAE] text-white rounded-lg shadow-sm hover:shadow-black/60 font-medium`}>Shop Now</button>
      </div>
      {/* Image div*/}
      <div className='w-[380px] h-[280px] relative transition-all duration-300 hover:scale-90'>
        <Image src={Images.image1} alt ='Product' width={270} height={270} />
      </div>
    </div>
  );
};

export default Page;
