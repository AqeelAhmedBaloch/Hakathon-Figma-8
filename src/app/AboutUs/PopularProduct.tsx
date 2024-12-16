import React from "react";

const PopularProducts = () => {
  // Product Data
  const products = [
    {
      id: 1,
      name: "The Poplar suede sofa",
      price: "$89.00",
      image: "/Large.png",
    },
    {
      id: 2,
      name: "The Dandy chair",
      price: "$99.00",
      image: "/card4.png",
    },
    {
      id: 3,
      name: "The Dandy chair",
      price: "$99.00",
      image: "/image11.png",
    },
  ];

  return (
    <section className="md:px-12 lg:px-24 py-8">
      {/* Section Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Popular Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="text-start">
            {/* Product Image */}
            <div className="mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover rounded-lg"
              />
            </div>

            {/* Product Details */}
            <h3 className="font-medium text-[12px] mb-1">{product.name}</h3>
            <p className="text-gray-600 text-[12px] font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
