import React from "react";
import OurProductImage from "./OurProductImage";
import OurProductImage1 from "./OurProductImage1";

const OurProduct = () => {
  return (
    <div className="w-[1300px] h-[600px]">
      <h1 className="text-[28px] font-semibold mb-5 text-center">Our Products</h1>
      <OurProductImage />
      <div className="mt-2">
        <OurProductImage1 />
      </div>
    </div>
  );
};

export default OurProduct;
