import React from "react";
import Accordion from "./Accordion";

const page = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-[1050px] h-[600px]">
        <div className="flex justify-center items-center ">
          <h1 className="text-[40px] font-bold">Questions Looks Here</h1>
        </div>
        <div className="text-center mt-2">
          <p className="text-[12px] text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the{" "}
          </p>
        </div>
        <div className="flex items-center justify-center mr-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 3 rows × 2 columns */}
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
    </div>
      </div>
    </div>
  );
};

export default page;
