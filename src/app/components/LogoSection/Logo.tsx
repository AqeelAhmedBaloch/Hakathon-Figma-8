import React from 'react'
import Image from 'next/image'

const Images = {
  image1:"/Images/Logo1.png",
  image2:"/Images/Logo2.png",
  image3:"/Images/Logo3.png",
  image4:"/Images/Logo4.png",
  image5:"/Images/Logo5.png",
  image6:"/Images/Logo6.png",
  image7:"/Images/Logo7.png"
}

const Logo = () => {
  return (
    <div className='flex justify-between w-[1285px] h-[20px] ml-40 top-1'>
      <Image src={Images.image1} alt ='hero-image' width={150} height={175} className='h-[90px] w-[85px] transition-all duration-300 hover:scale-90'/>
      <Image src={Images.image2} alt ='hero-image' width={150} height={175} className='h-[90px] w-[85px] transition-all duration-300 hover:scale-90'/>
      <Image src={Images.image3} alt ='hero-image' width={150} height={175} className='h-[90px] w-[85px] transition-all duration-300 hover:scale-90'/>
      <Image src={Images.image4} alt ='hero-image' width={150} height={175} className='h-[90px] w-[85px] transition-all duration-300 hover:scale-90'/>
      <Image src={Images.image5} alt ='hero-image' width={150} height={175} className='h-[90px] w-[85px] transition-all duration-300 hover:scale-90'/>
      <Image src={Images.image6} alt ='hero-image' width={150} height={175} className='h-[90px] w-[85px] transition-all duration-300 hover:scale-90'/>
      <Image src={Images.image7} alt ='hero-image' width={150} height={175} className='h-[90px] w-[85px] transition-all duration-300 hover:scale-90'/>
    </div>
  )
}
export default Logo
