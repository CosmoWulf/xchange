'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import '../../public/style.css';

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <nav className="p-3 flex bg-background justify-between items-center fixed top-0 left-0 right-0 z-20 shadow-md">
        {/* LOGO */}
        <div>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent p-1">
            Xchange
          </h1>
        </div>

        {/* LINKS (Desktop) */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <Link href="/products" className="text-black text-base hover:text-[#ff00ff] transition-all duration-300">Products</Link>
          <Link href="/why_to_choose" className="text-black text-base hover:text-[#ff00ff] transition-all duration-300">Why to choose?</Link>
          <Link href="/marketplace" className="text-black text-base hover:text-[#ff00ff] transition-all duration-300">Marketplace</Link>
          <Link href="/company" className="text-black text-base hover:text-[#ff00ff] transition-all duration-300">Company</Link>
        </div>

        {/* STARTER */}
        <button className="hidden lg:flex items-center gap-1.5 border text-black hover:border-[#ff00ff] cursor-pointer transition-all font-[500] duration-300 hover:text-[#ff00ff] rounded-[10px] px-7 py-3">
          Get Started
          <FontAwesomeIcon icon={faArrowRight} className="transform transition-transform duration-300 group-hover:translate-x-2" />
        </button>

        {/* Mobile Menu Button */}
        <button className="p-2 lg:hidden" onClick={handleMenu}>
          <FontAwesomeIcon icon={faBars} className="cursor-pointer hover:text-gray-600 transition-all duration-200" />
        </button>
      </nav>

      {/* Mobile Nav Dialog */}
      <div
        id="nav-dialog"
        className={`fixed z-10 md:hidden bg-white inset-0 p-3 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div id="nav-bar" className="flex justify-between">
          <Link href="/" id="brand" className="flex gap-2 cursor-pointer items-center">
            <span className="text-lg font-medium font-display">Xchange</span>
          </Link>
          <button className="p-2 lg:hidden" onClick={handleMenu}>
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark} className="text-gray-700" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-gray-700" />
            )}
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-3.5">
          <Link href="#" className="text-foreground text-base hover:bg-gray-100 cursor-pointer  rounded-lg transition-all duration-300 p-3 block mt-3">Product</Link>
          <Link href="#" className="text-foreground text-base hover:bg-gray-100 cursor-pointer  rounded-lg transition-all duration-300 p-3 block">Features</Link>
          <Link href="#" className="text-foreground text-base hover:bg-gray-100 cursor-pointer  rounded-lg transition-all duration-300 p-3 block">Marketplace</Link>
          <Link href="#" className="text-foreground text-base hover:bg-gray-100 cursor-pointer  rounded-lg transition-all duration-300 p-3 block">Company</Link>
        </div>

        <div className="h-[1px] bg-gray-300 my-4"></div>

        <button className="group mt-6 w-full flex gap-2 items-center px-6 py-4 rounded-lg hover:bg-gray-50 transition">
          <span>Electron Developers</span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="transform transition-transform duration-300 group-hover:translate-x-5"
          />
        </button>

      </div>

      <main className="mt-16">
        {/* Hero Section */}
        <div className="h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

          {/* Hero Features */}
          <div id="hero-features" className="hidden sm:flex gap-8 my-6 relative z-10">
            <div className="flex justify-center gap-2 items-center text-gray-500">
              <p>Code Optional</p>
            </div>
            <div className="flex justify-center gap-2 items-center text-gray-500">
              <p>Drag & drop builder</p>
            </div>
            <div className="flex justify-center gap-2 items-center text-gray-500">
              <p>Windows, Mac, Linux</p>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl text-[#1F2937] font-semibold leading-snug mt-4 sm:text-6xl relative z-10">
            Xchange
          </h1>
          <p className="text-xl mt-4 sm:text-2xl text-gray-700 relative z-10">
            Buy, Sell, and Grow with Confidence
          </p>

          {/* Animated Blobs */}
          <div id="hero-shape">
            <div id="hero-1"></div>
            <div id="hero-2"></div>
            <div id="hero-3"></div>
          </div>
        </div>
        <div></div>
      </main>
    </div>
  );
}
