import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-6 md:flex items-center">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to <span className="text-blue-600">MyWebsite</span>
          </h1>
          <p className="text-lg  max-w-md mx-auto md:mx-0">
            Discover amazing products, explore services, and connect with us for
            the best experience.
          </p>
          <div className="space-x-4">
            <Link
              href="/products"
              className="px-6 py-3 bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          {/* <Image
            src="/banner.png" 
            alt="Banner"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          /> */}
        </div>
      </div>
    </section>
  );
}
