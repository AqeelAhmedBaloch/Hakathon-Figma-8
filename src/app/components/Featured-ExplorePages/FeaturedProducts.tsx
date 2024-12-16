import React from 'react'
import Image from 'next/image'
import { IoCartOutline } from "react-icons/io5";

const FeaturedProducts = () => {
  return (
<div className="w-[1300px] h-auto">
<h1 className="text-[24px] font-semibold mb-4">Featured Products</h1>
<div className="flex justify-between">
  {/* Product 1 */}
  <div className="relative w-[240px]">
    <p className="h-[18px] w-[30px] absolute top-0 left-0 bg-[#01AD5A] text-white text-[10px] text-center">New</p>
    <Image src={"/Image1.png"} alt="Image1" width={300} height={300} />
    <p className="text-[10px] text-[#007580] mt-1">Library Stool Chair</p>
    <p className="text-[14px] flex items-center">
      $20
      <IoCartOutline className="text-[30px] rounded-md bg-[#029FAE] ml-[60%] p-1 text-white" />
    </p>
  </div>

  {/* Product 2 */}
  <div className="relative w-[240px]">
    <p className="h-[20px] w-[30px] absolute top-0 left-0 bg-[#F5813F] text-white text-[10px] text-center">Sale</p>
    <Image src={"/Image2.png"} alt="Image2" width={300} height={300} />
    <p className="text-[10px] text-[#007580] mt-2">Library Stool Chair</p>
    <p className="text-[14px] flex items-center mt-1">
      $20
      <IoCartOutline className="text-[30px] rounded-md bg-slate-300 ml-[60%] p-1" />
    </p>
  </div>

  {/* Product 3 */}
  <div className="relative w-[240px]">
    <Image src={"/Image3.png"} alt="Image3" width={300} height={300} />
    <p className="text-[10px] text-[#007580] mt-2">Library Stool Chair</p>
    <p className="text-[14px] flex items-center mt-1">
      $20
      <IoCartOutline className="text-[30px] rounded-md bg-slate-300 ml-[60%] p-1" />
    </p>
  </div>

  {/* Product 4 */}
  <div className="relative w-[240px]">
    <Image src={"/Image4.png"} alt="Image4" width={300} height={300} />
    <p className="text-[10px] text-[#007580] mt-2">Library Stool Chair</p>
    <p className="text-[14px] flex items-center mt-1">
      $20
      <IoCartOutline className="text-[30px] rounded-md bg-slate-300 ml-[60%] p-1" />
    </p>
  </div>
</div>
</div>
  )
}

export default FeaturedProducts
