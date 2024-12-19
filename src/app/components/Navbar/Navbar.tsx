'use client'
import Link from "next/link";
import React from "react";
import { FiAlertCircle, FiShoppingCart } from "react-icons/fi";
import Image from 'next/image'
import { useRouter } from "next/navigation";

const LogoImages = {
  image1:"/Images/Logo.png"
}


const Navbar = () => {
  const router = useRouter()
  return (
    <>
    <div className="">
        <div className="p-3.5 flex justify-between bg-[#272343]">
          <p className="text-sm text-[#FFFFFF] ml-40">
            Free shipping on all orders over $50
          </p>
          <div className="flex text-[#FFFFFF] mr-40 text-sm gap-5">
            <select className="bg-[#272343]">
              <option value="Eng">Eng</option>
            </select>
            <Link href={"/FAQ"}>Faqs</Link>
            <Link href={"#"} className="flex justify-center items-center gap-1">
              <FiAlertCircle />
              Need Help
            </Link>
          </div>
        </div>
          {/* second */}
      
      <div className="bg-[#F0F2F3]">
        <div className="py-2 flex flex-col lg:flex-row items-center lg:justify-between px-5 lg:px-40">
          {/* Logo */}
          <Image src={LogoImages.image1} alt="Logo" width={175} height={175} className="w-auto h-auto"/>

          {/* Cart Button */}
          <div className="mt-3 lg:mt-0 flex items-center gap-3">
            <button onClick={() => router.push('#')} className="w-[120px] h-[42px] flex justify-center items-center gap-2 bg-[#FAFAFA] rounded-lg"><FiShoppingCart />Cart
              <p className="w-[25px] h-[25px] text-center text-[#FAFAFA] bg-[#007580] rounded-full">2</p>
            </button>
          </div>
        </div>
      </div>

      {/* Third */}

      <div className="relative">
      <nav className="px-5 lg:px-40">
        <ul className="mt-7 text-[16px] flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-7 items-center lg:items-start">
          <Link href="/" className="hover:text-[#007580] hover:underline">Home</Link>
          <Link href="/Cart" className="hover:text-[#007580] hover:underline">Shop</Link>
          <Link href="/AllProduct" className="hover:text-[#007580] hover:underline">Product</Link>
          <Link href="/SinglePage" className="hover:text-[#007580] hover:underline">Pages</Link>
          <Link href="AboutUs" className="hover:text-[#007580] hover:underline">About</Link>
          <Link href="/ContactUs" className="hover:text-[#007580] hover:underline">Contact Us</Link>
        </ul>
      </nav>
      <p className="mt-4 lg:absolute lg:-mt-6 lg:right-40 text-[16px] text-center lg:text-left text-[#636270]">
        Contact: <b>(808) 555-0111</b>
      </p>
    </div>
    </div>    
    </>
  );
};

export default Navbar;
