import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export default function Footer() {
  return (
    <footer className="bg-[#0F766E] text-white py-10 px-6 md:px-10 border-t border-white/10 font-body-sm mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/20">
        {/* Company Info (7 cols) */}
        <div className="md:col-span-7 md:pr-10 md:border-r md:border-white/20">
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.png" alt="Lab House Logo" className="h-8 w-8 object-contain rounded-sm bg-white p-0.5" />
            <span className="font-headline-sm font-bold text-xl text-white tracking-tight">
              {siteConfig.name}
            </span>
          </div>
          <p className="text-white/95 text-[14px] leading-relaxed mb-4 max-w-sm">
            {siteConfig.accreditation} for Mechanical,
            Electro-Technical &amp; Thermal Discipline. Providing excellence in
            Calibration, Thermal Validation &amp; HVAC Validation since {siteConfig.establishedYear}.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white/15 text-white text-[12px] font-semibold px-2.5 py-1 rounded border border-white/25">
              ISO 2017
            </span>
            <span className="bg-white/15 text-white text-[12px] font-semibold px-2.5 py-1 rounded border border-white/25">
              NABL Accredited
            </span>
            <span className="bg-white/15 text-white text-[12px] font-semibold px-2.5 py-1 rounded border border-white/25">
              ALCOA QMS
            </span>
          </div>
        </div>
        {/* Contact (5 cols) */}
        <div className="md:col-span-5 md:pl-10">
          <h4 className="font-headline-sm font-semibold text-white text-[16px] mb-4 tracking-wide">
            Contact Us
          </h4>
          <ul className="space-y-3 text-[14px] text-white/95">
            <li className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-teal-200 text-[18px]">
                mail
              </span>
              <a
                className="hover:text-teal-200 transition-colors"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-teal-200 text-[18px] mt-0.5">
                call
              </span>
              <div>
                  <a
                  className="hover:text-teal-200 transition-colors block font-medium"
                  href={`tel:${siteConfig.telephone[0].replace(/\s+/g, "")}`}
                >
                  {siteConfig.telephone.join(" / ")}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-teal-200 text-[18px] mt-0.5">
                location_on
              </span>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${siteConfig.name}, 205, Tirupati Trade Centre, Navghar Road, ${siteConfig.address.street}, ${siteConfig.address.district}, ${siteConfig.address.pincode}, ${siteConfig.address.state}, India`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-200 transition-colors"
              >
                205, Tirupati Trade Centre, Navghar Road, {siteConfig.address.street}, Dist: {siteConfig.address.district} – {siteConfig.address.pincode}, {siteConfig.address.state}, India
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-teal-200 text-[18px]">
                person
              </span>
              <span>Chief Executive: {siteConfig.proprietor}</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright & Legal */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-white/90">
        <div>
          © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.accreditation}. All
          rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link className="hover:text-teal-200 transition-colors" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="hover:text-teal-200 transition-colors" href="/about#code-of-ethics">
            Code of Ethics
          </Link>
          <Link className="hover:text-teal-200 transition-colors" href="/about#quality-systems">
            Quality Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
