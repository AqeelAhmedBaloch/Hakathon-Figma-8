import React from "react";
import Image from 'next/image'

const ExploreNew = () => {
  return (
  <div className="relative items-center justify-center w-[1300px] h-[480px] mt-32">
    {/* Rotated Text */}
    <div className="absolute -left-40 top-1/2 transform -rotate-90 text-gray-800 text-[18px] font-medium">
      Explore new and popular styles
    </div>

    {/* Left Side Main Image */}
    <div className="flex flex-row gap-5">
    <div className="">
      <Image src="/itemcategory1.png" alt="Category" width={550} height={450} className="w-[550px] h-[500px]"/>
    </div>

    <div className="grid grid-cols-2 gap-4 ml-[250px]">
      <Image src="/card.png" alt="Card" width={235} height={235} />
      <Image src="/card2.png" alt="Card 2" width={235} height={235} />

      <Image src="/card4.png" alt="Card 4" width={235} height={235} />
      <Image src="/card2.png" alt="Card 2" width={235} height={235} />
    </div>
  </div>
  </div>

  );
};

export default ExploreNew;
