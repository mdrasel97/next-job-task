import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${"/assets/heroImg.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Amazing
            <span className="block bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
              Products
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Explore our curated collection of premium tech products designed to
            elevate your lifestyle and productivity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 text-lg shadow-elegant"
            >
              <Link href="/products">
                Shop Now
                {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
              </Link>
            </button>

            <button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg"
            >
              {/* <Play className="mr-2 h-5 w-5" /> */}
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-sm">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">10K+</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">500+</div>
                <div className="text-gray-300">Premium Products</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">4.9★</div>
                <div className="text-gray-300">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary-glow rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-white rounded-full opacity-10 animate-pulse delay-1000"></div>
    </section>
  );
};

export default Banner;
