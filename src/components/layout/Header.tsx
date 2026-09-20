"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site.config";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

  const navItemClasses = (path: string) => {
    return isActive(path)
      ? "text-[#0F766E] font-semibold border-b-[3px] border-[#0F766E] pt-1 duration-200 ease-in-out h-full flex items-center"
      : "text-slate-600 hover:text-[#0F766E] hover:border-b-2 hover:border-[#0F766E]/40 transition-all duration-200 ease-in-out h-full flex items-center";
  };

  const mobileItemClasses = (path: string) => {
    return isActive(path)
      ? "block font-semibold text-[#0F766E] py-1 border-l-4 border-[#0F766E] pl-3"
      : "block font-medium text-slate-600 hover:text-[#0F766E] py-1 pl-4";
  };

  return (
    <header className="bg-white sticky top-0 h-16 w-full z-50 border-b border-slate-200/80 shadow-xs text-slate-800 backdrop-blur-md bg-white/95">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 w-full h-full">
        {/* Logo & Accreditation Tag */}
        <Link
          className="flex items-center gap-2.5 hover:opacity-95 transition-opacity shrink-0"
          href="/"
        >
          <img src="/logo.png" alt="Lab House Logo" className="h-8 w-8 object-contain rounded-sm" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-slate-900 tracking-tight leading-tight">{siteConfig.name}</span>
            <span className="text-[11px] font-semibold text-[#0F766E] flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">verified</span>
              {siteConfig.accreditation}
            </span>
          </div>
        </Link>

        {/* Center Navigation */}
        <nav className="hidden md:flex gap-7 h-full items-center text-[15px]">
          <Link className={navItemClasses("/")} href="/">
            Home
          </Link>
          <Link className={navItemClasses("/services")} href="/services">
            Services
          </Link>
          <Link className={navItemClasses("/about")} href="/about">
            About Us
          </Link>
          <Link className={navItemClasses("/contact")} href="/contact">
            Contact
          </Link>
        </nav>

        {/* Right Action Items */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            className="bg-[#EA580C] hover:bg-[#C2410C] text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm text-[14px]"
            href="/contact"
          >
            Get a Quote
          </Link>

          <div className="w-px h-6 bg-slate-200"></div>

          <Link
            href="/login"
            className="text-slate-700 hover:text-[#0F766E] font-medium transition-colors text-[14px] flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[18px]">login</span>
            Client Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700 hover:text-[#0F766E] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 shadow-xl text-slate-800">
          <div className="pb-2 border-b border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#0F766E]">
            <span className="material-symbols-outlined text-sm">verified</span>
            {siteConfig.accreditation}
          </div>
          <Link
            className={mobileItemClasses("/")}
            href="/"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className={mobileItemClasses("/services")}
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            className={mobileItemClasses("/about")}
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            className={mobileItemClasses("/contact")}
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-2 flex flex-col gap-3">
            <Link
              className="block w-full text-center bg-[#EA580C] hover:bg-[#C2410C] text-white px-4 py-2.5 rounded-full font-semibold transition-colors shadow-md"
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-full font-medium transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">login</span>
              Client Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
