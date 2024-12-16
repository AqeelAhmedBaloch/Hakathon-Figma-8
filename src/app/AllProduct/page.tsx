import React from "react";
import OurProductImage from "../components/OurProduct/OurProductImage";
import Newsletter from "./Newsletter";

const Page = () => {
  return (
    <div className="ml-40 mt-8 w-[1335px] h-full">
      <h1 className="text-[20px] font-semibold mb-4 text-start">
        All Products
      </h1>
      <OurProductImage />
      <div className="mt-8">
        <OurProductImage />
      </div>
      <div className="mt-8">
        <OurProductImage />
      </div>
      <div className="mt-8">
        <Newsletter />
      </div>
    </div>
  );
};

export default Page;
