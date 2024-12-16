import React from 'react'
import Image from 'next/image'

const TopCategories = () => {
  return (
    <div className="w-[1300px] h-[300px]">
      <h2 className="text-[20px] font-semibold mb-4">Top Categories</h2>
      <div className="flex justify-between items-center">
        {/* Image 1 */}
        <div className="relative">
          <Image src={"/Image11.png"} alt="Image1" width={350} height={350} />
          <div className="absolute bottom-0 left-0 w-full h-[40px] bg-black bg-opacity-50 text-[12px] text-white text-start flex items-start justify-start p-1">
            <div className="ml-2 text-[12px] text-gray-300">
              <p>Wing Chair</p><span className="text-[8px]">3,584 Products</span>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative">
          <Image src={"/Image12.png"} alt="Image2" width={350} height={350} />
          <div className="absolute bottom-0 left-0 w-full h-[40px] bg-black bg-opacity-50 text-white text-start flex items-start justify-start p-1">
            <div className="ml-2 text-[12px] text-gray-300">
              <p>Wooden Chair</p><span className="text-[8px]">157 Products</span>
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative">
          <Image src={"/Image13.png"} alt="Image3" width={350} height={350} />
          <div className="absolute bottom-0 left-0 w-full h-[40px] bg-black bg-opacity-50 text-white text-start flex items-start justify-start p-1">
            <div className="ml-2 text-[12px] text-gray-300">
              <p>Desk Chair</p><span className="text-[8px]">154 Products</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCategories
