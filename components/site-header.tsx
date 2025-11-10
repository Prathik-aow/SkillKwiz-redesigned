"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav className="flex flex-col w-full md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto bg-gradient-to-r from-[#f73e5d] via-[#00418d] to-[#2563eb] text-white rounded-b-3xl shadow-lg overflow-hidden">
        <div className="flex items-center justify-between pr-4 pl-0 py-2 relative h-[72px] md:h-[80px]">
          {/* Logo (Mobile) */}
          <Link
            href="/"
            className={`md:hidden relative group transition-all ml-0 ${
              pathname === "/" ? "text-yellow-400 font-semibold" : "text-white"
            }`}
          >
            <div className="relative flex items-center justify-start h-full overflow-hidden ml-0">
              <div className="scale-[1.1] origin-left">
                <Image
                  src="/images/logo1.png"
                  alt="SkillKwiz Logo"
                  width={140}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none z-30 flex items-center justify-center h-full"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-between md:flex-1 w-full">
            {/* Desktop Logo aligned to left */}
            <div className="flex items-center justify-start ml-0 pl-0">
              <Link
                href="/"
                className={`relative group py-4 px-0 text-sm lg:text-base transition-all ${
                  pathname === "/"
                    ? "text-yellow-400 font-semibold"
                    : "text-white"
                }`}
              >
                <div className="relative flex items-center justify-start h-full overflow-hidden ml-10">
                  <div className="scale-[1.05] origin-left">
                    <Image
                      src="/images/logo1.png"
                      alt="SkillKwiz Logo"
                      width={150}
                      height={40}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="flex items-center justify-center space-x-4">
              <Link
                href="/"
                className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                  pathname === "/" ? "text-yellow-400 font-semibold" : "text-white"
                }`}
              >
                <span>Home</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-[#f73e5d] via-[#00418d] to-[#2563eb] transform scale-x-0 origin-left transition-transform duration-300"></span>
              </Link>

              <Link
                href="/about"
                className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                  pathname === "/about"
                    ? "text-yellow-400 font-semibold"
                    : "text-white"
                }`}
              >
                <span>About Us</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-[#f73e5d] via-[#00418d] to-[#2563eb] transform scale-x-0 origin-left transition-transform duration-300"></span>
              </Link>

              <Link
                href="/services"
                className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                  pathname === "/services"
                    ? "text-yellow-400 font-semibold"
                    : "text-white"
                }`}
              >
                <span>Services</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-[#f73e5d] via-[#00418d] to-[#2563eb] transform scale-x-0 origin-left transition-transform duration-300"></span>
              </Link>

              <Link
                href="/blog"
                className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                  pathname === "/blog"
                    ? "text-yellow-400 font-semibold"
                    : "text-white"
                }`}
              >
                <span>Blog</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-[#f73e5d] via-[#00418d] to-[#2563eb] transform scale-x-0 origin-left transition-transform duration-300"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden flex flex-col items-center py-4 rounded-b-3xl absolute top-full left-0 w-full pt-16 shadow-lg bg-gradient-to-r from-[#f73e5d] via-[#00418d] to-[#2563eb] transition-transform duration-300 ease-in-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-[150%] opacity-0 pointer-events-none"
          }`}
        >
          <Link
            href="/"
            className="text-white relative group py-3 text-lg w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Home</span>
            <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-[#f73e5d] via-[#00418d] to-[#2563eb] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="/about"
            className="text-white relative group py-3 text-lg w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>About Us</span>
            <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-[#f73e5d] via-[#00418d] to-[#2563eb] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="/services"
            className="text-white relative group py-3 text-lg w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Services</span>
            <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-[#f73e5d] via-[#00418d] to-[#2563eb] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="/blog"
            className="text-white relative group py-3 text-lg w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Blog</span>
            <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-[#f73e5d] via-[#00418d] to-[#2563eb] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
