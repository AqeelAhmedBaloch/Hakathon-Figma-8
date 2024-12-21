import React from "react";
import Image from "next/image";

const Images = {
  image1: "/Images/Logo1.png",
  image2: "/Images/Logo2.png",
  image3: "/Images/Logo3.png",
  image4: "/Images/Logo4.png",
  image5: "/Images/Logo5.png",
  image6: "/Images/Logo6.png",
  image7: "/Images/Logo7.png",
};

const Logo = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-between w-full lg:w-[1285px] mx-auto mt-4 gap-4">
      {[
        Images.image1,
        Images.image2,
        Images.image3,
        Images.image4,
        Images.image5,
        Images.image6,
        Images.image7,
      ].map((image, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-[70px] h-[70px] sm:w-[70px] sm:h-[70px] md:w-[70px] md:h-[70px] lg:w-[125px] lg:h-[125px] p-2 bg-gray-100 rounded-lg hover:scale-95 transition-transform duration-300"
        >
          <Image
            src={image}
            alt={`logo-${index + 1}`}
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Logo;
