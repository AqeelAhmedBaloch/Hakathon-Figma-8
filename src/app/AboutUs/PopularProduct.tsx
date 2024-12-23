import Image from "next/image";

const PopularProducts = () => {


  return (
    <div className="ml-3 w-[1250px] h-[450px]">
      <div className="text-2xl md:text-2xl font-bold">
        Our Popular Products
        <div className="flex gap-5 mt-4">
          <Image src={"/Images/Large.png"} alt={"Large"} width={600} height={350} className="w-[600px] h-[350px] rounded-lg"/>
          <Image src={"/Images/Photo1.png"} alt={"Photo1"} width={600} height={350} className="w-[300px] h-[350px] rounded-lg"/>
          <Image src={"/Images/Photo2.png"} alt={"Photo2"} width={600} height={350} className="w-[300px] h-[350px] rounded-lg"/>
        </div>
      <div className="w-[1240px] h-[50px]">
          {/* Product 1 */}
          <div className="flex justify-between">
            <h3 className="font-medium text-gray-600 text-[12px]">The Poplar suede sofa</h3>
            <h3 className="font-medium text-gray-600 text-[12px] ml-[265px]">The Dandy chair</h3>
            <h3 className="font-medium text-gray-600 text-[12px] mr-52">The Dandy chair</h3>
            </div>
            <div className="flex gap-[582px] -mt-5">
              <span className="text-gray-600 text-[12px] font-semibold">$99.00</span>
              <span className="text-gray-600 text-[12px] font-semibold">$199.00</span>
          </div>
          <div className="flex justify-end items-center -mt-8">
          <span className="text-gray-600 text-[12px] font-semibold mr-[253px] ">$299.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
