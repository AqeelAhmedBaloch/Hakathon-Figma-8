import React from "react";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";

const Images = {
  image1: "/Images/Image1.png",
  image2: "/Images/Image2.png",
  image3: "/Images/Image3.png",
  image4: "/Images/Image4.png",
};

const FeaturedProducts = () => {
  return (
<div className="w-full max-w-[1300px]">
  <h1 className="text-[24px] font-semibold mb-4 text-center lg:text-left mr-36">Featured Products</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Product 1 */}
    <div className="relative">
      <p className="h-[18px] w-[30px] absolute top-0 left-0 bg-[#01AD5A] text-white text-[10px] text-center">New</p>
      <Image src={Images.image1} alt="Image1" width={300} height={300} className="w-full h-auto object-cover" />
      <p className="text-[10px] text-[#007580] mt-1">Library Stool Chair</p>
      <p className="text-[14px] flex items-center">$20
        <IoCartOutline className="text-[30px] rounded-md bg-[#029FAE] ml-auto p-1 text-white" />
      </p>
    </div>

    {/* Product 2 */}
    <div className="relative">
      <p className="h-[20px] w-[30px] absolute top-0 left-0 bg-[#F5813F] text-white text-[10px] text-center">Sale</p>
      <Image src={Images.image2} alt="Image2" width={300} height={300} className="w-full h-auto object-cover" />
      <p className="text-[10px] text-[#007580] mt-2">Library Stool Chair</p>
      <p className="text-[14px] flex items-center mt-1">$20
        <IoCartOutline className="text-[30px] rounded-md bg-slate-300 ml-auto p-1" />
      </p>
    </div>

    {/* Product 3 */}
    <div className="relative">
      <Image src={Images.image3} alt="Image3" width={300} height={300} className="w-full h-auto object-cover" />
      <p className="text-[10px] text-[#007580] mt-2">Library Stool Chair</p>
      <p className="text-[14px] flex items-center mt-1">$20
        <IoCartOutline className="text-[30px] rounded-md bg-slate-300 ml-auto p-1" />
      </p>
    </div>

    {/* Product 4 */}
    <div className="relative">
      <Image src={Images.image4} alt="Image4" width={300} height={300} className="w-full h-auto object-cover" />
      <p className="text-[10px] text-[#007580] mt-2">Library Stool Chair</p>
      <p className="text-[14px] flex items-center mt-1">$20
        <IoCartOutline className="text-[30px] rounded-md bg-slate-300 ml-auto p-1" />
      </p>
    </div>
  </div>
</div>

  );
};

export default FeaturedProducts;
