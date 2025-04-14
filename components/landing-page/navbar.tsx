"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaVk } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const navItems = [
  { name: "Beranda", href: "/" },
  { name: "Giat Utama", href: "/giat-utama" },
  { name: "Pelayanan", href: "/pelayanan" },
  { name: "Inspirasi", href: "/inspirasi" },
  { name: "Opini", href: "/opini" },
  { name: "Prestasi Polri", href: "/prestasi-polri" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-4 lg:px-0 lg:w-[75%] mx-auto">
      <nav className=" w-full border-b border-gray-200 py-4">
        <div className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4 lg:py-14">
          {/* Left - Search */}
          <div className="flex items-center z-10">
            <FiSearch className="text-base lg:text-xl text-black cursor-pointer" />
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image width={1920} height={1080} src="/assets/icon/logo.png" alt="Bhayangkara Kita" className="w-[90px] h-[90px] lg:w-[180px] lg:h-[180px] object-contain" />
          </div>

          {/* Hamburger (mobile) */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-black focus:outline-none flex left-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-between items-center w-full max-w-screen-xl mx-auto px-4">
          <div className="flex gap-6 justify-center flex-1">
            {navItems.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <Link key={idx} href={item.href}>
                  <span className={`text-[15px] font-semibold px-2 py-1 border-b-2 ${isActive ? "text-black border-red-600" : "text-black border-transparent hover:text-red-800"}`}>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Social Media - Right */}
          <div className="hidden lg:flex items-center space-x-3 text-red-600">
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaVk className="cursor-pointer" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black px-4 pb-4">
            {navItems.map((item, idx) => (
              <Link key={idx} href={item.href}>
                <div className={`py-2 text-sm font-semibold ${item.name === "BERANDA" ? "bg-gray-600" : "text-gray-300"} hover:text-red-800`}>{item.name}</div>
              </Link>
            ))}
            {/* Social Media - Right */}
            <div className="lg:hidden flex items-center mt-2 space-x-3 text-red-600">
              <FaFacebookF className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaYoutube className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaVk className="cursor-pointer" />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
