import React from "react";
import OurProductImage from "./OurProductImage";
import OurProductImage1 from "./OurProductImage1";
import OurProductImage2 from "./OurProductImage2";

const OurProduct = () => {
  return (
    <div className="w-[1340px] h-[600px]">
      <h1 className="text-[24px] font-semibold mb-5 text-center">Our Products</h1>
      <OurProductImage />
      <div className="mt-2">
        <OurProductImage1 />
      </div>
      <div className="mt-2">
        <OurProductImage2 />
      </div>
    </div>
  );
};

export default OurProduct;
