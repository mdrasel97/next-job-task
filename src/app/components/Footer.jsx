import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Logo + Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              L
            </div>
            <span className="text-xl font-bold text-white">MyWebsite</span>
          </div>
          <p className="text-sm">
            MyWebsite helps you explore products, services, and connect with us
            easily. Stay updated and enjoy our features.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-400 transition">
                Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" target="_blank" className="hover:text-blue-400">
              <Facebook />
            </a>
            <a href="#" target="_blank" className="hover:text-blue-400">
              <Twitter />
            </a>
            <a href="#" target="_blank" className="hover:text-blue-400">
              <Instagram />
            </a>
            <a href="#" target="_blank" className="hover:text-blue-400">
              <Github />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}
