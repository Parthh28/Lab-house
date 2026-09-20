"use client";

import Image from "next/image";

export default function HeroImageCard() {
  return (
    <div className="relative w-full max-w-lg mx-auto group">
      {/* Ambient background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500 pointer-events-none" />

      {/* Main Image Container */}
      <div className="relative rounded-2xl overflow-hidden border border-white/25 shadow-2xl bg-white/10 backdrop-blur-md">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src="/hero-lab.jpg"
            alt="Lab House Metrology & Calibration Laboratory"
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Subtle gradient overlay to ensure text contrast and teal brand aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#003732]/85 via-transparent to-black/30" />
        </div>

        {/* Floating Top Badge */}
        <div className="absolute top-4 left-4 flex items-center">
          <span className="bg-[#004540]/85 backdrop-blur-md text-teal-200 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
            <span className="material-symbols-outlined text-sm text-teal-300">verified</span>
            NABL Accredited Facility
          </span>
        </div>

        {/* Bottom Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-teal-200 tracking-wide uppercase">
                Metrology &amp; Validation Center
              </p>
              <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                Thermal, Mechanical &amp; Electro-Technical
              </h4>
            </div>
            <div className="w-10 h-10 rounded-lg bg-teal-400/20 border border-teal-300/30 flex items-center justify-center shrink-0 text-teal-200">
              <span className="material-symbols-outlined text-xl">precision_manufacturing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
