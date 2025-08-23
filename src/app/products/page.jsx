"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

// const getProducts = async () => {
//   const res = await fetch("http://localhost:3000/api/products", {
//     cache: "no-store",
//   });
//   return res.json(); // { success: true, products: [...] }
// };

const ProductsPage = () => {
  // const { products } = await getProducts(); // destructure

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products") // এখানে limit নাই
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
