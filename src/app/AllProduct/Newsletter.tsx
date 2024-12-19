import React from "react";
import Image from "next/image";

const ImageRoot ={
  image1:"/Images/Image1.png",
  image2:"/Images/Image2.png",
  image3:"/Images/Image3.png",
  image4:"/Images/Image4.png",
  image5:"/Images/Image11.png",
  image6:"/Images/Image12.png"

}

const Newsletter = () => {
  return (
    <div className="w-[1300px] h-[930x] bg-gray-200 rounded-lg">
        <div className="relative flex justify-center items-center">
      <div className="w-[760px] h-[100px] mt-16">
        <h1 className="text-[34px] font-semibold text-center">Or subscribe to the newsletter</h1>
      </div>
        </div>
      <div className="relative">
        <input type="text" className="ml-[400px] absolute w-[350px] h-[35px] border-none border-b-2 border-gray-300 rounded-sm outline-none" placeholder="Email Address..."/>
        <input type="text" className="ml-[760px] w-[150px] h-[35px] border-none border-b-2 border-gray-300 rounded-sm outline-none" placeholder="SUBMIT"/>
        </div>
        <div className="flex mt-8 text-[30px] font-semibold justify-center items-center">
            <h1>Follow products and discounts on Instagram</h1>
        </div>
        <div className="w-auto h-[200px]">
        <div className="flex justify-center space-x-14 mt-20 ml-8">
        <Image src={ImageRoot.image1} alt="Image1" width={150} height={150} className="transition-all duration-300 hover:scale-90"/>
        <Image src={ImageRoot.image2} alt="Image2" width={150} height={150} className="transition-all duration-300 hover:scale-90"/>
        <Image src={ImageRoot.image3} alt="Image3" width={150} height={150} className="transition-all duration-300 hover:scale-90"/>
        <Image src={ImageRoot.image4} alt="Image4" width={150} height={150} className="transition-all duration-300 hover:scale-90"/>
        <Image src={ImageRoot.image5} alt="Image5" width={150} height={150} className="transition-all duration-300 hover:scale-90"/>
        <Image src={ImageRoot.image6} alt="Image6" width={150} height={150} className="transition-all duration-300 hover:scale-90"/>
        </div>
      </div>
        
      </div>
  );
};

export default Newsletter;