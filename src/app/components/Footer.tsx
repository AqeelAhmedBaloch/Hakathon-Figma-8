import Link from 'next/link'
import React from 'react'
import { Heebo } from 'next/font/google'
import { FaYoutube, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import Image from 'next/image';

const heebo = Heebo({subsets:["latin"]})

const ImageLogo = {
  image1:"/Images/Logo.png",
  image2:"/Images/Logos.png",
}

const Footer = () => {
  return  (
    <footer className="w-[1350px] h-[150px] ml-36 mt-4">
      <div className='border-b-2 my-2'>
        <hr/>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-4">
      {/* Column 1: Logo */}
      <div className="flex flex-col items-start">
      <Image src={ImageLogo.image1} alt="Logo" width={150} height={150}/>
      <p className={`${heebo.className} text-gray-500 text-[12px] mt-2`}>Vivamus tristique odio sit amet velit semper,<br /> eu posuere turpis interdum. <br /> Cras egestas purus</p>
      <div className='flex space-x-6 mt-5'>
         <Link href={'#'}><RiFacebookCircleLine className='w-[20px] h-[20px] text-slate-500'/></Link>
         <Link href={'#'}><FaTwitter className='w-[20px] h-[20px] text-slate-500'/></Link>
         <Link href={'#'}><FaInstagram className='w-[20px] h-[20px] text-slate-500'/></Link>
         <Link href={'#'}><FaPinterest className='w-[20px] h-[20px] text-slate-500'/></Link>
         <Link href={'#'}><FaYoutube className='w-[20px] h-[20px] text-slate-500'/></Link>
      </div>
      </div>

      {/* Column 2: Category */}
      <div className='ml-14'>
        <h3 className="text-lg font-semibold mb-1 uppercase">Category</h3>
        <p className="hover:text-[#007580] hover:underline text-[13px] text-gray-500 cursor-pointer">Sofa</p>
        <p className="hover:text-[#007580] hover:underline text-[13px] text-gray-500 cursor-pointer">Armchair</p>
        <p className="hover:text-[#007580] hover:underline text-[13px] text-gray-500 cursor-pointer">Wing Chair</p>
        <p className="hover:text-[#007580] hover:underline text-[13px] text-gray-500 cursor-pointer">Desk Chair</p>
        <p className="hover:text-[#007580] hover:underline text-[13px] text-gray-500 cursor-pointer">wooden Chair</p>
        <p className="hover:text-[#007580] hover:underline text-[13px] text-gray-500 cursor-pointer">Park Bench</p>
      </div>

      {/* Column 3: Support */}
      <div className='ml-10'>
        <h3 className="text-lg font-semibold mb-1 uppercase">Support</h3>
        <p className="text-[13px] text-gray-500">Help & Support</p>
        <p className="text-[13px] text-gray-500">Terms & Conditions</p>
        <p className="text-[13px] text-gray-500">Privacy Policy</p>
        <p className="text-[13px] text-gray-500">Help</p>
      </div>

      {/* Column 4: Newsletter */}
      <div className='w-[324px] h-[142px]'>
        <h3 className="text-lg font-semibold mb-1 uppercase">Newsletter</h3>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Your email"
            className="px-2 py-1 text-black rounded-l-md w-[170px]"
          />
          <button className="px-2 py-1 ml-2 bg-[#029FAE] rounded-md hover:bg-[#029FAE] text-white">Subscribe</button>
        </div>
        <p className="mt-4 text-[11px] w-[250px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
      </div>
    </div>
    <hr className='border-b-2 my-2' />
    <div className='flex justify-between items-center'>
      <p className='w-[380px] h-[22px] text-[10px] flex'>@2021 - Blogy - Designed & Develop by</p> 
      <span className='-ml-[1040px] font-bold text-[10px]'>Zakirsoft</span>
      <Image src={ImageLogo.image2} alt='Logos' width={270} height={27} className='relative blend-color'/>
    </div>
  </footer>
  )
}

export default Footer
