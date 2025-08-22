import Image from "next/image";
import Banner from "./pages/banner/Banner";
import ProductCard from "./components/ProductCard";

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
  {
    id: 4,
    name: "Product 4",
    price: 400,
    description: "This is product 4",
    image: "https://i.ibb.co.com/60xT4b0K/Bid5-min.png",
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    description: "This is product 5",
    image: "https://i.ibb.co.com/hFTMZkfL/Bid3-min.png",
  },
  {
    id: 6,
    name: "Product 6",
    price: 600,
    description: "This is product 6",
    image: "https://i.ibb.co.com/9kcgL3mw/Bid1-min.png",
  },
  {
    id: 7,
    name: "Product 7",
    price: 700,
    description: "This is product 7",
    image: "https://i.ibb.co.com/9kcgL3mw/Bid1-min.png",
  },
];

export default function Home() {
  //   const products = await getProducts();
  const displayedProducts = products.slice(0, 6);
  return (
    <div>
      <Banner />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
