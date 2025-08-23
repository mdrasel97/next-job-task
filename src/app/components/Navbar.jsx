"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import ProfileDropdown from "../pages/ProfileDropdown";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-8 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <nav className="shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Logo + Name */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
            T
          </div>
          <span className="text-xl font-bold">Tohfa Shop</span>
        </div>

        {/* Middle: Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/products" className=" hover:text-primary">
            Products
          </Link>
          <Link href="/about" className=" hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>

        {/* Right: Buttons */}
        <div className="hidden md:flex space-x-4">
          <ModeToggle />
          {session ? (
            <>
              {/* <span>{session.user.name}</span> */}
              <ProfileDropdown />
              {/* <button onClick={() => signOut()} className="ml-4">
              Sign Out
            </button> */}
            </>
          ) : (
            <>
              <Link
                href="/auth/signin"
                className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-blue-50 transition"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-700 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col space-y-2 p-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-600"
            >
              Products
            </Link>
            <hr />
            <Link
              href="/app/auth/signin"
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
