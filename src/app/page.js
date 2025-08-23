"use client";
import Image from "next/image";
import Banner from "./pages/banner/Banner";
import ProductCard from "./components/ProductCard";
import { useEffect, useState } from "react";
import ChoseProductHub from "./pages/ChoseProductHub";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // const displayedProducts = products.slice(0, 6);
  return (
    <div>
      <Banner />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <ChoseProductHub />
    </div>
  );
}
