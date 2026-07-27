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
      <section className="bg-[#0F766E] text-white py-10 md:py-12 px-6 md:px-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-0.5 rounded-full text-xs font-semibold text-[#99F6E4]">
            <span className="material-symbols-outlined text-sm">verified</span>
            <span>{siteConfig.accreditation}</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Excellence in Measurement &amp; Validation Since {siteConfig.establishedYear}
          </h1>
          <p className="font-body text-white/90 text-sm sm:text-base max-w-3xl leading-relaxed">
            {siteConfig.name} is an ISO/IEC 17025:2017 Accredited Laboratory by NABL for Mechanical, Electro-Technical &amp; Thermal Discipline. Since inception in {siteConfig.establishedYear}, we have provided timely, high-precision Calibration, Thermal Validation &amp; HVAC Validation across India.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-72 h-72 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent rounded-full translate-x-1/3 translate-y-1/3" />
      </section>

      {/* Overview & Core Scope Split Section */}
      <section className="py-20 px-6 md:px-10 bg-[--color-bg-section]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#0F766E] font-semibold text-sm uppercase tracking-wider bg-[#F0FDFA] px-3.5 py-1 rounded-full">
              Company Profile &amp; Legacy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[--color-text-primary] leading-tight">
              Comprehensive Metrology Services Tailored for Critical Industries
            </h2>
            <div className="space-y-4 font-body text-[--color-text-secondary] text-base sm:text-lg leading-relaxed">
              <p>
                Established as a proprietorship by <strong>{siteConfig.proprietor}</strong>, {siteConfig.name} began its journey with a clear vision: to deliver uncompromising measurement precision and responsive calibration support across India.
              </p>
              <p>
                With the emergence of a highly dynamic, quality-conscious buyer&apos;s market and strict regulatory mandates (such as 21 CFR Part 11 and cGMP), {siteConfig.name} expanded its operational footprint to provide end-to-end services across three core disciplines:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white p-5 rounded-xl border border-[--color-border] shadow-sm space-y-2">
                <span className="material-symbols-outlined text-[#0F766E] text-2xl">straighten</span>
                <h3 className="font-heading font-bold text-base text-[--color-text-primary]">Calibration</h3>
                <p className="text-xs text-[--color-text-secondary]">Mechanical, Thermal &amp; Electro-Technical</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-[--color-border] shadow-sm space-y-2">
                <span className="material-symbols-outlined text-[#0F766E] text-2xl">thermostat</span>
                <h3 className="font-heading font-bold text-base text-[--color-text-primary]">Thermal Validation</h3>
                <p className="text-xs text-[--color-text-secondary]">Chambers, Autoclaves &amp; Warehouses</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-[--color-border] shadow-sm space-y-2">
                <span className="material-symbols-outlined text-[#0F766E] text-2xl">air</span>
                <h3 className="font-heading font-bold text-base text-[--color-text-primary]">HVAC Cleanroom</h3>
                <p className="text-xs text-[--color-text-secondary]">ISO 14644 APC &amp; Filter Integrity</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white border border-[--color-border] rounded-2xl p-8 shadow-md space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F0FDFA] rounded-bl-full pointer-events-none -z-0" />
              <div className="relative z-10 space-y-4">
                <span className="bg-[#0F766E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Quick Facts
                </span>
                <h3 className="font-heading font-bold text-2xl text-[--color-text-primary]">
                  Laboratory Overview
                </h3>
                <dl className="space-y-4 text-sm divide-y divide-gray-100">
                  <div className="flex justify-between pt-2">
                    <dt className="text-gray-500 font-medium">Established:</dt>
                    <dd className="font-semibold text-[--color-text-primary]">{siteConfig.establishedYear}</dd>
                  </div>
                  <div className="flex justify-between pt-2">
                    <dt className="text-gray-500 font-medium">Constitution:</dt>
                    <dd className="font-semibold text-[--color-text-primary]">Proprietorship ({siteConfig.proprietor})</dd>
                  </div>
                  <div className="flex justify-between pt-2">
                    <dt className="text-gray-500 font-medium">Primary Accreditations:</dt>
                    <dd className="font-semibold text-[#0F766E] text-right">ISO/IEC 17025:2017 &amp; NABL</dd>
                  </div>
                  <div className="flex justify-between pt-2">
                    <dt className="text-gray-500 font-medium">Quality Systems:</dt>
                    <dd className="font-semibold text-[--color-text-primary] text-right">ALCOA &amp; Periodic Review</dd>
                  </div>
                  <div className="flex justify-between pt-2">
                    <dt className="text-gray-500 font-medium">Inquiries Guarantee:</dt>
                    <dd className="font-semibold text-[#0F766E] text-right">2-Hour Response Time</dd>
                  </div>
                  <div className="flex justify-between pt-2">
                    <dt className="text-gray-500 font-medium">Technical Training:</dt>
                    <dd className="font-semibold text-[--color-text-primary] text-right">Half-Yearly SWP &amp; ISO Review</dd>
                  </div>
                </dl>
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
      <section className="py-20 px-6 md:px-10 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#0F766E] font-semibold text-sm uppercase tracking-wider bg-[#F0FDFA] px-3.5 py-1 rounded-full">
              Infrastructure &amp; Reach
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[--color-text-primary]">
              Registered Office &amp; Regional Reach
            </h2>
            <p className="font-body text-[--color-text-secondary] text-base leading-relaxed">
              Our central administration and in-house calibration facility is strategically located in Vasai (East), District Thane, serving industrial hubs across Maharashtra and nationwide.
            </p>

            <div className="space-y-4 pt-2">
              <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F766E] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">apartment</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[--color-text-primary]">
                    Registered &amp; Administration Office
                  </h4>
                  <p className="text-sm text-[--color-text-secondary] mt-1">
                    207, Tirupati Trade Centre, Navghar Road, {siteConfig.address.street}, Dist: {siteConfig.address.district} – {siteConfig.address.pincode}, {siteConfig.address.state}, India
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2 text-xs font-semibold text-[#0F766E]">
                    <span>Phones: {siteConfig.telephone.join(" / ")}</span>
                    <span>Admin: 7021434698</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#F0FDFA] border border-[#0F766E]/30 p-5 rounded-xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#99F6E4] text-[#0F766E] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">share_location</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[--color-text-primary]">
                    Projected Regional Service Centres
                  </h4>
                  <p className="text-sm text-[--color-text-secondary] mt-1">
                    Expanding nationwide presence to better support enterprise manufacturing and pharmaceutical plants across:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="bg-white border border-[#0F766E]/30 text-[#0F766E] text-xs font-bold px-3 py-1 rounded-full">
                      Madhya Pradesh
                    </span>
                    <span className="bg-white border border-[#0F766E]/30 text-[#0F766E] text-xs font-bold px-3 py-1 rounded-full">
                      Sikkim
                    </span>
                    <span className="bg-white border border-[#0F766E]/30 text-[#0F766E] text-xs font-bold px-3 py-1 rounded-full">
                      Ahmedabad
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0F766E] text-white p-8 md:p-10 rounded-2xl shadow-xl space-y-6">
            <h3 className="font-heading font-bold text-2xl">
              Partner with an Accredited Laboratory You Can Trust
            </h3>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed">
              Whether you need rapid 2-hour quote turnaround, on-site calibration visits, or cleanroom HVAC validation, our certified metrologists are ready to support your audit requirements.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#0F766E] hover:bg-[#99F6E4] font-bold px-7 py-3.5 rounded-full shadow transition-colors inline-flex items-center gap-2"
              >
                <span>Inquire Online</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-full transition-colors inline-flex items-center gap-2"
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
