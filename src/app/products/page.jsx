import React from "react";
import ProductCard from "../components/ProductCard";

// const getProducts = async () => {
//   const res = await fetch("https://example.com/api/products", {
//     cache: "no-store", // no cache for fresh data
//   });
//   return res.json();
// };

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "This is product 1",
    image: "https://i.ibb.co.com/0VvrJzVT/download-2.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    description: "This is product 2",
    image: "https://i.ibb.co.com/XfLZFJhG/Rectangle-16.png",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    description: "This is product 3",
    image: "https://i.ibb.co.com/YBfDX2v4/Bid2-min.png",
  },
];

const ProductsPage = async () => {
  //   const products = await getProducts();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
