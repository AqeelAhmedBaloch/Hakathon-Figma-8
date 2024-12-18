import Image from "next/image";

const ImagesRoot ={
  Image1:"/Images/Image3.png",
  Image2:"/Images/Card.png"
}

export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3">
      {/* Bag/Cart Section */}
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-semibold mb-6">Bag</h1>

        {/* Cart Item 1 */}
        <div className="flex items-center justify-between border-b py-4">
          {/* Left - Image and Info */}
          <div className="flex items-center gap-4">
            <Image src={ImagesRoot.Image1}  alt="Library Stool Chair" width={130} height={130} className="rounded"/>
            <div>
              <h3 className="font-medium">Library Stool Chair</h3>
              <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
              <p className="text-sm text-gray-500">Size: L • Quantity: 1</p>
            </div>
          </div>
          {/* Right - Price */}
          <p className="font-medium">MRP: $99</p>
        </div>

        {/* Cart Item 2 */}
        <div className="flex items-center justify-between border-b py-4">
          {/* Left - Image and Info */}
          <div className="flex items-center gap-4">
            <Image src={ImagesRoot.Image2}  alt="Library Stool Chair" width={130} height={130} className="rounded"/>
            <div>
              <h3 className="font-medium">Library Stool Chair</h3>
              <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
              <p className="text-sm text-gray-500">Size: L • Quantity: 1</p>
            </div>
          </div>
          {/* Right - Price */}
          <p className="font-medium">MRP: $99</p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="p-6 bg-gray-50">
        <h2 className="text-lg font-semibold mb-4">Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span className="font-medium">$198.00</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Estimated Delivery & Handling</span>
          <span className="font-medium">Free</span>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>$198.00</span>
        </div>
        <button className="w-full bg-teal-500 text-white py-2 mt-4 rounded-full hover:bg-teal-600">
          Member Checkout
        </button>
      </div>
    </div>
  );
}
