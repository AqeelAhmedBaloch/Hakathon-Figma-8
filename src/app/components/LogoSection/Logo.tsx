import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex justify-between w-[1285px] h-[20px] ml-40 top-1'>
      <Image src={"/Logo1.png"} alt ='hero-image' width={150} height={175} className='h-[90px] w-[85px]'/>
      <Image src={"/Logo2.png"} alt ='hero-image' width={150} height={175} className='h-[90px] w-[85px]'/>
      <Image src={"/Logo3.png"} alt ='hero-image' width={150} height={175} className='h-[90px] w-[85px]'/>
      <Image src={"/Logo4.png"} alt ='hero-image' width={150} height={175} className='h-[90px] w-[85px]'/>
      <Image src={"/Logo5.png"} alt ='hero-image' width={150} height={175} className='h-[90px] w-[85px]'/>
      <Image src={"/Logo6.png"} alt ='hero-image' width={150} height={175} className='h-[90px] w-[85px]'/>
      <Image src={"/Logo7.png"} alt ='hero-image' width={150} height={175} className='h-[90px] w-[85px]'/>
    </div>
  )
}
export default Logo
