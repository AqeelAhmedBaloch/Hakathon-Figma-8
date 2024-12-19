// pages/index.tsx
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";

const ImagesSingle = {
  image1: "/Images/Image2.png",
  image2: "/Images/Image.png",
  image3: "/Images/Card5.png",
  image4: "/Images/Image13.png",
  image5: "/Images/Image3.png",
  image6: "/Images/Image11.png",
};

export default function Home() {
  return (
    <div className="container mx-auto px-32 py-10">
      <div className="flex justify-between items-start">
        <div className="w-[375px] h-[307px]">
          <Image src={ImagesSingle.image1} alt="Library Stool Chair" width={375} height={307} className="rounded-lg"/>
        </div>
        <div className="w-[305px] h-[80px]">
          <h1 className="text-4xl font-bold">Library Stool Chair</h1>
          <button className="bg-[#029FAE] text-white rounded-full text-sm py-1 px-3 mt-2">$20.00 USD</button>
          <div className="w-[305px] mt-2 border-b-2">
            <hr />
          </div>
          <p className="mt-4 text-slate-500 w-[305px] h-[100px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing.
          </p>
          <button className="flex items-center justify-center w-40 h-10 bg-[#029FAE] text-white rounded-lg mt-5">
            <IoCartOutline className="mr-2 text-lg" />Add To Cart</button>
        </div>
      </div>
      <div className="mt-24">
        <div className="flex items-center gap-[980px]">
          <h2 className="text-[21px] font-bold">Featured Products</h2>
          <button className="text-[#000000] underline text-[14px] font-bold">View all</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-4">
          {
          [
            {src: ImagesSingle.image2, name: "Library Stool Chair",price: "$99",},
            { src: ImagesSingle.image3, name: "Office Chair", price: "$120" },
            { src: ImagesSingle.image4, name: "Gaming Chair", price: "$150" },
            { src: ImagesSingle.image5, name: "Recliner", price: "$200" },
            { src: ImagesSingle.image6, name: "Study Chair", price: "$80" },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="w-60 h-50 rounded-lg flex justify-center items-center">
                <Image src={item.src} alt={item.name} width={175} height={175} className="z-30"/>
              </div>
              <h3 className="text-sm font-medium mt-2">{item.name} <b className="ml-7">{item.price}</b></h3>
              {/* <p className="text-sm font-bold text-center">{item.price}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
