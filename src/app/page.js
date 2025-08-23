"use client";
import Image from "next/image";
import Banner from "./pages/banner/Banner";
import ProductCard from "./components/ProductCard";
import { useEffect, useState } from "react";
import ChoseProductHub from "./pages/ChoseProductHub";
import { useSession } from "next-auth/react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { status } = useSession();

  useEffect(() => {
    fetch("/api/products?limit=8")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-8 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div>
      <Banner />
      <div className="p-6">
        <h2 className="text-4xl text-center md:text-5xl font-bold mb-6">
          Product Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <ChoseProductHub />
    </div>
  );
}
