import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/home/CTASection";
import CodeOfEthicsGrid from "@/components/about/CodeOfEthicsGrid";
import QualitySystemsSection from "@/components/about/QualitySystemsSection";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name} — ${siteConfig.accreditation}`,
  description:
    `Established in ${siteConfig.establishedYear}, ${siteConfig.name} is an ${siteConfig.accreditation} for Mechanical, Electro-Technical & Thermal Disciplines operating across Calibration, Thermal Validation, and HVAC Validation.`,
};

export default function AboutPage() {
  return (
    <div className="flex-grow">
      {/* Hero Header */}
      <section className="bg-[#0F766E] text-white py-12 md:py-16 px-6 md:px-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-white/10 px-3.5 py-1 rounded-full text-xs font-semibold text-[#99F6E4] border border-white/10">
            <span className="material-symbols-outlined text-sm">verified</span>
            <span>{siteConfig.accreditation}</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Excellence in Measurement &amp; Validation Since {siteConfig.establishedYear}
          </h1>
          <p className="font-body text-white/90 text-sm sm:text-base max-w-3xl leading-relaxed">
            {siteConfig.name} is an ISO/IEC 17025:2017 Accredited Laboratory by NABL for Mechanical, Electro-Technical &amp; Thermal Disciplines. Since inception in {siteConfig.establishedYear}, we have provided timely, high-precision Calibration, Thermal Validation &amp; HVAC Validation across India.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-80 h-80 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent rounded-full translate-x-1/3 translate-y-1/3" />
      </section>

      {/* Overview & Core Scope Split Section */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Main Overview Content */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[#0F766E] font-bold text-xs uppercase tracking-wider bg-teal-50 border border-teal-200 px-3.5 py-1.5 rounded-full inline-block">
                Company Profile &amp; Legacy
              </span>
              
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                Comprehensive Metrology Services Tailored for Critical Industries
              </h2>
              
              <div className="space-y-4 font-body text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Established as a proprietorship by <strong className="text-slate-900">{siteConfig.proprietor}</strong>, {siteConfig.name} began its journey with a clear vision: to deliver uncompromising measurement precision and responsive calibration support across India.
                </p>
                <p>
                  With the emergence of a highly dynamic, quality-conscious buyer&apos;s market and strict regulatory mandates (such as 21 CFR Part 11 and cGMP), {siteConfig.name} expanded its operational footprint to provide end-to-end services across three core disciplines:
                </p>
              </div>
            </div>

            {/* 3 Core Discipline Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#0F766E]/40 hover:shadow-md transition-all flex flex-col justify-between space-y-3 group">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0F766E] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">straighten</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-[#0F766E] transition-colors">
                    Calibration
                  </h3>
                  <p className="text-xs text-slate-500 font-body leading-normal mt-1">
                    Mechanical, Thermal &amp; Electro-Technical
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#0F766E]/40 hover:shadow-md transition-all flex flex-col justify-between space-y-3 group">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0F766E] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">thermostat</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-[#0F766E] transition-colors">
                    Thermal Validation
                  </h3>
                  <p className="text-xs text-slate-500 font-body leading-normal mt-1">
                    Chambers, Autoclaves &amp; Warehouses
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#0F766E]/40 hover:shadow-md transition-all flex flex-col justify-between space-y-3 group">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0F766E] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">air</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-[#0F766E] transition-colors">
                    HVAC Cleanroom
                  </h3>
                  <p className="text-xs text-slate-500 font-body leading-normal mt-1">
                    ISO 14644 APC &amp; Filter Integrity
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Laboratory Overview Quick Facts Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between h-full space-y-6 relative overflow-hidden">
              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="bg-[#0F766E] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Quick Facts
                  </span>
                  <span className="text-xs font-mono font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60">
                    Est. {siteConfig.establishedYear}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
                  Laboratory Overview
                </h3>

                <dl className="space-y-0 text-xs sm:text-sm divide-y divide-slate-100">
                  <div className="flex items-center justify-between py-3">
                    <dt className="text-slate-500 font-medium">Established:</dt>
                    <dd className="font-bold text-slate-900">{siteConfig.establishedYear}</dd>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <dt className="text-slate-500 font-medium">Constitution:</dt>
                    <dd className="font-bold text-slate-900">Proprietorship ({siteConfig.proprietor})</dd>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <dt className="text-slate-500 font-medium">Primary Accreditations:</dt>
                    <dd className="font-bold text-[#0F766E] text-right">ISO/IEC 17025:2017 &amp; NABL</dd>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <dt className="text-slate-500 font-medium">Quality Systems:</dt>
                    <dd className="font-bold text-slate-900 text-right">ALCOA &amp; Periodic Review</dd>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <dt className="text-slate-500 font-medium">Inquiries Guarantee:</dt>
                    <dd className="font-bold text-[#0F766E] text-right">2-Hour Response Time</dd>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <dt className="text-slate-500 font-medium">Technical Training:</dt>
                    <dd className="font-bold text-slate-900 text-right">Half-Yearly SWP &amp; ISO Review</dd>
                  </div>
                </dl>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                <span className="text-slate-500 font-medium">NABL Accredited Facility</span>
                <Link
                  href="/services"
                  className="font-bold text-[#0F766E] hover:underline flex items-center gap-1"
                >
                  <span>Explore Scope</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quality Systems & Objectives Subcomponent */}
      <QualitySystemsSection />

      {/* Code of Ethics Subcomponent */}
      <CodeOfEthicsGrid />

      {/* Office Locations & Regional Centres */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[#0F766E] font-bold text-xs uppercase tracking-wider bg-teal-50 border border-teal-200 px-3.5 py-1.5 rounded-full inline-block">
                Infrastructure &amp; Reach
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                Registered Office &amp; Regional Reach
              </h2>
              <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
                Our central administration and in-house calibration facility is strategically located in Vasai (East), District Palghar, serving industrial hubs across Maharashtra and nationwide.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-start gap-4 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#0F766E] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">apartment</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-slate-900">
                    Registered &amp; Administration Office
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    205, Tirupati Trade Centre, Navghar Road, {siteConfig.address.street}, Dist: {siteConfig.address.district} – {siteConfig.address.pincode}, {siteConfig.address.state}, India
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2.5 text-xs font-semibold text-[#0F766E]">
                    <span>Phones: {siteConfig.telephone.join(" / ")}</span>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50/70 border border-teal-200/80 p-5 rounded-2xl flex items-start gap-4 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#99F6E4] text-[#0F766E] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">share_location</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-slate-900">
                    Projected Regional Service Centres
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Expanding nationwide presence to better support enterprise manufacturing and pharmaceutical plants across:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="bg-white border border-teal-300 text-teal-800 text-xs font-bold px-3 py-1 rounded-full shadow-2xs">
                      Madhya Pradesh
                    </span>
                    <span className="bg-white border border-teal-300 text-teal-800 text-xs font-bold px-3 py-1 rounded-full shadow-2xs">
                      Sikkim
                    </span>
                    <span className="bg-white border border-teal-300 text-teal-800 text-xs font-bold px-3 py-1 rounded-full shadow-2xs">
                      Ahmedabad
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0F766E] text-white p-8 md:p-10 rounded-3xl shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <span className="bg-white/10 text-[#99F6E4] text-xs font-semibold px-3.5 py-1 rounded-full border border-white/10">
                Strategic Metrology Partner
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl leading-tight">
                Partner with an Accredited Laboratory You Can Trust
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Whether you need rapid 2-hour quote turnaround, on-site calibration visits, or cleanroom HVAC validation, our certified metrologists are ready to support your audit requirements.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 relative z-10">
              <Link
                href="/contact"
                className="bg-white text-[#0F766E] hover:bg-[#99F6E4] font-bold px-7 py-3.5 rounded-xl shadow transition-all inline-flex items-center gap-2 text-sm"
              >
                <span>Inquire Online</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl transition-all inline-flex items-center gap-2 text-sm"
              >
                <span>View Full Scope</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Ready to Work with India's Leading Metrology Team?"
        subtitle="Contact our Vasai (E) laboratory or submit your calibration scope right now for a guaranteed 2-hour response."
        buttonText="Request Calibration Quote"
        buttonHref="/contact"
      />
    </div>
  );
}
