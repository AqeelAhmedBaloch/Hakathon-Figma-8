import React from "react";
import OurProductImage from "../components/OurProduct/OurProductImage";
import Newsletter from "./Newsletter";
import OurProductImage1 from "../components/OurProduct/OurProductImage1";
import OurProductImage2 from "../components/OurProduct/OurProductImage2";

const Page = () => {
  return (
    <div className="ml-40 mt-8 w-[1335px] h-full">
      <h1 className="text-[20px] font-semibold mb-4 text-start">
        All Products
      </h1>
      <OurProductImage />
      <div className="mt-8">
        <OurProductImage1 />
      </div>
      <div className="mt-8">
        <OurProductImage2 />
      </div>
      <div className="mt-8">
        <Newsletter />
      </div>
    </div>
  );
};

export default Page;
