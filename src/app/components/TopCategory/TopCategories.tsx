import React from 'react';
import Image from 'next/image';

const ImagesTop = {
  image1: "/Images/Image11.png",
  image2: "/Images/Image12.png",
  image3: "/Images/Image13.png",
};

const TopCategories = () => {
  return (
    <div className="w-full px-4 lg:px-8 -mx-[25px] max-w-[1350px]">
      <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold mb-6 text-center md:text-left">
        Top Categories
      </h2>
      <div className="flex flex-wrap justify-center md:justify-between gap-4">
        {/* Image 1 */}
        <div className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] lg:w-[350px] lg:h-[350px]">
          <Image
            src={ImagesTop.image1}
            alt="Wing Chair"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 w-full h-[60px] bg-black bg-opacity-50 flex items-center p-2">
            <div className="ml-2 text-[12px] text-white">
              <p>Wing Chair</p>
              <span className="text-[10px] text-gray-300">3,584 Products</span>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] lg:w-[350px] lg:h-[350px]">
          <Image
            src={ImagesTop.image2}
            alt="Wooden Chair"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 w-full h-[60px] bg-black bg-opacity-50 flex items-center p-2">
            <div className="ml-2 text-[12px] text-white">
              <p>Wooden Chair</p>
              <span className="text-[10px] text-gray-300">157 Products</span>
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] lg:w-[350px] lg:h-[350px]">
          <Image
            src={ImagesTop.image3}
            alt="Desk Chair"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 w-full h-[60px] bg-black bg-opacity-50 flex items-center p-2">
            <div className="ml-2 text-[12px] text-white">
              <p>Desk Chair</p>
              <span className="text-[10px] text-gray-300">154 Products</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
