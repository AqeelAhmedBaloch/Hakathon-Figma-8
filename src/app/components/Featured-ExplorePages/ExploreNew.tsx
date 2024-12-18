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
  <div className="relative items-center justify-center w-[1300px] h-[520px] mt-40">
    {/* Rotated Text */}
    <div className="absolute -left-40 top-1/2 transform -rotate-90 text-gray-800 text-[18px] font-medium">
      Explore new and popular styles
    </div>

    {/* Left Side Main Image */}
    <div className="flex flex-row gap-5">
    <div className="">
      <Image src={Images.image1} alt="Category" width={550} height={450} className="w-[550px] h-[500px]"/>
    </div>

    <div className="grid grid-cols-2 gap-4 ml-[250px]">
      <Image src={Images.image2} alt="Card" width={235} height={235} />
      <Image src={Images.image3} alt="Card 2" width={235} height={235} />

      <Image src={Images.image4} alt="Card 4" width={235} height={235} />
      <Image src={Images.image3} alt="Card 2" width={235} height={235} />
    </div>
  </div>
  </div>

  );
};

export default ExploreNew;
