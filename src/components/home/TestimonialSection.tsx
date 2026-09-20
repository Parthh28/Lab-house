"use client";

import { useState } from "react";
import Link from "next/link";
import { clientCategories } from "@/data/testimonials.data";
import { siteConfig } from "@/config/site.config";

export default function TestimonialSection() {
  const [activeTab, setActiveTab] = useState("pharma");

  const currentCategory = clientCategories.find((c) => c.id === activeTab) || clientCategories[0];

  return (
    <section className="py-20 px-6 md:px-10 bg-[#F0FDFA]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#005c55] font-semibold text-sm tracking-wider uppercase bg-[#005c55]/10 px-3 py-1 rounded-full">
            Our Valued Clientele
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#121c2a]">
            Trusted by Leading Industries Across India
          </h2>
          <p className="font-body text-slate-700 text-base sm:text-lg">
            For over 25 years, Lab House has served top-tier enterprises across Pharmaceutical,
            Engineering, Chemical, and Public Sector industries with complete NABL and {siteConfig.accreditation} traceability.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {clientCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-heading font-medium text-sm transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-[#005c55] text-white shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-gray-100 border border-[#D1D5DB]"
              }`}
            >
              <span className="material-symbols-outlined text-lg">{cat.icon}</span>
              <span>{cat.name}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                  activeTab === cat.id ? "bg-white/20 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Client Grid */}
        <div className="bg-white border border-[#D1D5DB] rounded-2xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D1D5DB]/60">
            <h3 className="font-heading font-bold text-xl text-[#121c2a] flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#005c55] text-2xl">
                {currentCategory.icon}
              </span>
              <span>{currentCategory.name}</span>
            </h3>
            <span className="text-xs text-slate-700 bg-gray-100 px-3 py-1 rounded-full font-medium border border-gray-200">
              Full NABL Traceability &amp; ALCOA QMS Compliance
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentCategory.clients.map((clientName) => (
              <div
                key={clientName}
                className="bg-[#F0FDFA]/50 hover:bg-[#F0FDFA] border border-[#0F766E]/20 hover:border-[#0F766E]/50 p-4 rounded-xl flex items-center gap-3 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0F766E]/10 group-hover:bg-[#0F766E] text-[#0F766E] group-hover:text-white flex items-center justify-center font-bold text-xs shrink-0 transition-colors">
                  <span className="material-symbols-outlined text-base">verified</span>
                </div>
                <span className="font-body text-sm font-medium text-[#121c2a] leading-snug">
                  {clientName}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Code of Ethics Commitment Banner */}
        <div className="bg-gradient-to-r from-[#0F766E] to-[#0d625b] text-white p-8 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-teal-200 text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-base">gavel</span>
              <span>Lab House Code of Ethics Commitment</span>
            </div>
            <h4 className="font-heading font-bold text-xl sm:text-2xl">
              Impartiality, Confidentiality &amp; Absolute Integrity
            </h4>
            <p className="text-white text-sm leading-relaxed">
              We strictly adhere to 12 ethical pillars: ensuring reliability of results, preserving complete confidentiality of client calibration data, avoiding all conflicts of interest, and upholding ALCOA measurement integrity.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/about"
              className="bg-white text-[#004540] hover:bg-teal-50 font-bold px-6 py-3 rounded-full shadow transition-colors text-sm inline-flex items-center gap-2"
            >
              <span>Read Full Code of Ethics</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
