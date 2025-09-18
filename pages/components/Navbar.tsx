import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-rose-500">
          Jachao
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-rose-500 transition">
            Home
          </Link>
          <Link href="#about" className="hover:text-rose-500 transition">
            About Us
          </Link>
          <Link href="#features" className="hover:text-rose-500 transition">
            Features
          </Link>
          <Link href="#screenshots" className="hover:text-rose-500 transition">
            Screenshots
          </Link>
          <Link href="/privacy" className="hover:text-rose-500 transition">
            Privacy
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.jachao.app"
            className="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition"
          >
            Download
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <span className="text-2xl">&#10005;</span> // X icon
            ) : (
              <span className="text-2xl">&#9776;</span> // Hamburger
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            href="/"
            className="block px-6 py-3 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block px-6 py-3 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="#features"
            className="block px-6 py-3 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#screenshots"
            className="block px-6 py-3 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Screenshots
          </Link>
          <Link
            href="/privacy"
            className="block px-6 py-3 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Privacy
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.jachao.app"
            className="block px-6 py-3 bg-rose-500 text-white text-center rounded-b-lg"
          >
            Download
          </a>
        </div>
      )}
    </nav>
  );
}
