import React from "react";
import Image from 'next/image'

const Images = {
  image1:"/Images/itemcategory1.png",
  image2:"/Images/card.png",
  image3:"/Images/card2.png",
  image4:"/Images/card4.png",
}

const ExploreNew = () => {
  return (
  <div className="relative items-center justify-center w-[1300px] h-[470px] mt-40">
    {/* Rotated Text */}
    <div className="absolute -left-44 top-1/2 transform -rotate-90 text-gray-800 text-[20px] font-medium">
      Explore new and popular styles
    </div>

    {/* Left Side Main Image */}
    <div className="flex flex-row gap-5">
    <div className="">
      <Image src={Images.image1} alt="Category" width={550} height={500} className="w-[650px] h-[450px]"/>
    </div>

    <div className="grid grid-cols-2 gap-4 ml-[250px]">
      <Image src={Images.image2} alt="Card" width={250} height={250} />
      <Image src={Images.image3} alt="Card 2" width={250} height={250} />
      <Image src={Images.image4} alt="Card 4" width={250} height={250} />
      <Image src={Images.image3} alt="Card 2" width={250} height={250} />
    </div>
  </div>
  </div>

  );
};

export default ExploreNew;
