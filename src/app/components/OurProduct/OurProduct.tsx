import React from "react";
import OurProductImage from "./OurProductImage";

const OurProduct = () => {
  return (
    <div className="w-[1340px] h-[600px]">
      <h1 className="text-[20px] font-semibold mb-4 text-center">Our Products</h1>
      <OurProductImage />
      <div className="mt-2">
        <OurProductImage />
      </div>
    </div>
  );
};

export default OurProduct;