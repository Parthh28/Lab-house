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
      ? "text-[#99F6E4] font-semibold border-b-[3px] border-[#99F6E4] pt-1 duration-200 ease-in-out h-full flex items-center"
      : "text-white/85 hover:text-[#99F6E4] hover:border-b-2 hover:border-[#99F6E4]/50 transition-all duration-200 ease-in-out h-full flex items-center";
  };

  const mobileItemClasses = (path: string) => {
    return isActive(path)
      ? "block font-medium text-[#99F6E4] font-semibold py-1 border-l-4 border-[#99F6E4] pl-3"
      : "block font-medium text-white/85 hover:text-[#99F6E4] py-1 pl-4";
  };

  return (
    <>
      <div className="bg-[#0d625b] text-white/90 text-[12px] py-1.5 px-6 border-b border-white/10 hidden lg:block">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-semibold text-[#99F6E4]">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              {siteConfig.accreditation}
            </span>
            <span>•</span>
            <span>Est. {siteConfig.establishedYear} (Proprietorship: {siteConfig.proprietor})</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-[#99F6E4] flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">mail</span>
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.telephone[0].replace(/\s+/g, "")}`} className="hover:text-[#99F6E4] flex items-center gap-1 font-medium">
              <span className="material-symbols-outlined text-[14px]">call</span>
              {siteConfig.telephone.join(" / ")}
            </a>
          </div>
        </div>
      </div>
      <header className="bg-[#0F766E] sticky top-0 h-16 w-full z-50 border-b border-white/15 shadow-md text-white">
        <div className="flex justify-between items-center px-6 md:px-10 h-full">
          <Link
            className="font-bold text-white tracking-tight flex items-center gap-2.5 hover:opacity-95 transition-opacity"
            href="/"
          >
            <img src="/logo.png" alt="Lab House Logo" className="h-8 w-8 object-contain rounded-sm bg-white p-0.5" />
            <span className="text-xl">{siteConfig.name}</span>
          </Link>
          <nav className="hidden md:flex gap-8 h-full items-center text-[15px]">
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
          <div className="hidden md:flex items-center gap-6">
            <Link
              className="bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm items-center text-[14px]"
              href="/contact"
            >
              Get a Quote
            </Link>
            <div className="w-px h-6 bg-white/20"></div>
            <Link
              href="/login"
              className="text-white hover:text-[#99F6E4] font-medium transition-colors text-[14px] flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">login</span>
              Client Login
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#99F6E4] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#99F6E4]"
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
          <div className="md:hidden bg-[#0F766E] border-b border-white/15 px-6 py-4 space-y-3 shadow-xl text-white">
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
                className="block w-full text-center bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-2.5 rounded-full font-medium transition-colors shadow-md"
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white px-4 py-2.5 rounded-full font-medium transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">login</span>
                Client Login
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
