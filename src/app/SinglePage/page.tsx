// pages/index.tsx
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="container mx-auto px-32 py-10">
      <div className="flex justify-between items-start">
        <div className="w-[375px] h-[307px]">
          <Image src="/Image2.png" alt="Library Stool Chair" width={375} height={307} className="rounded-lg"/>
        </div>
        <div className="w-[305px] h-[80px]">
          <h1 className="text-4xl font-bold">Library Stool Chair</h1>
          <button className="bg-[#029FAE] text-white rounded-full text-sm py-1 px-3 mt-2">
            $20.00 USD
          </button>
          <div className="w-[305px] mt-2 border-b-2">
            <hr />
          </div>
          <p className="mt-4 text-slate-500 w-[305px] h-[100px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing.
          </p>
          <button className="flex items-center justify-center w-40 h-10 bg-[#029FAE] text-white rounded-lg mt-5">
            <IoCartOutline className="mr-2 text-lg" />
            Add To Cart
          </button>
        </div>
      </div>
      <div className="mt-24">
        <div className="flex items-center gap-[980px]">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <button className="text-[#029FAE]">View all</button>
        </div>

        <div className="grid grid-cols-5 gap-20 mt-4">
          {Array(5)
            .fill("")
            .map((_, idx) => (
              <div key={idx} className="-ml-10 text-center">
                <div className="w-60 h-50 rounded-lg flex justify-center items-center">
                  <Image className='z-30' src={"/Image13.png"} alt ='Product' width={175} height={175}/>
                </div>
                <h3 className="text-sm font-medium mt-2 text-center">Library Stool Chair</h3>
                <p className="text-sm font-bold text-center">$99</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
