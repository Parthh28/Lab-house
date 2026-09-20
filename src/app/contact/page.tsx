import type { Metadata } from "next";
import QuoteForm from "@/components/forms/QuoteForm";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: `Contact & Quote | ${siteConfig.name} Calibration Services`,
  description:
    `Get in touch with ${siteConfig.name}. ${siteConfig.accreditation}. We guarantee a 2-hour response for all calibration, thermal validation, and HVAC cleanroom inquiries.`,
};

export default function ContactPage() {
  return (
    <div className="flex-grow">
      {/* Mini Hero Section */}
      <section className="bg-[#0F766E] text-white py-10 md:py-12 px-6 md:px-10 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 bg-white/15 px-3 py-0.5 rounded-full text-xs font-semibold text-teal-200 border border-white/25">
            <span className="material-symbols-outlined text-sm">schedule</span>
            <span>2-Hour Customer Inquiry &amp; Complaint Response Guarantee</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white">
            Get a Quote or Inquire
          </h1>
          <p className="text-sm sm:text-base font-body text-white max-w-2xl mx-auto leading-relaxed">
            We are ready to support your audit and precision measurement requirements. Contact our {siteConfig.address.street} laboratory right now for rapid turnaround.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-72 h-72 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent rounded-full translate-x-1/2 translate-y-1/2" />
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left Column: Quote Form (7 cols) */}
        <div className="md:col-span-7">
          <QuoteForm />
        </div>

        {/* Right Column: Info Cards (5 cols) */}
        <div className="md:col-span-5 flex flex-col gap-6">
          {/* Card 1: Registered Office */}
          <div className="bg-white border border-[#D1D5DB] rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
              <h3 className="font-heading text-xl text-[#121c2a] font-bold">
                Registered Laboratory &amp; Office
              </h3>
              <span className="bg-[#F0FDFA] text-[#004540] text-xs font-bold px-2.5 py-1 rounded border border-teal-300">
                {siteConfig.address.street}, {siteConfig.address.district}
              </span>
            </div>

            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] text-[#005c55] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <div>
                  <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold mb-0.5">
                    Official Email
                  </p>
                  <a
                    className="font-medium text-[#005c55] hover:underline font-semibold text-base block"
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </a>
                  <span className="text-xs text-slate-600">Fast 2-hour quote turnaround</span>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] text-[#005c55] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-xl">call</span>
                </div>
                <div>
                  <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold mb-0.5">
                    Phone &amp; Direct Lines
                  </p>
                  <a
                    className="font-semibold text-[#121c2a] hover:text-[#005c55] transition-colors block text-base"
                    href={`tel:${siteConfig.telephone[0].replace(/\s+/g, "")}`}
                  >
                    {siteConfig.telephone.join(" / ")}
                  </a>

                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] text-[#005c55] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold mb-0.5">
                    Laboratory Address
                  </p>
                  <p className="font-medium text-[#121c2a] leading-relaxed">
                    205, Tirupati Trade Centre, Navghar Road,
                    <br />
                    {siteConfig.address.street}, District: {siteConfig.address.district} – {siteConfig.address.pincode},
                    <br />
                    {siteConfig.address.state}, India
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] text-[#005c55] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-xl">person</span>
                </div>
                <div>
                  <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold mb-0.5">
                    Chief Executive &amp; Proprietor
                  </p>
                  <p className="font-semibold text-[#121c2a]">
                    {siteConfig.proprietor}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Technical Head — Established {siteConfig.establishedYear}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Card 2: ALCOA QMS & Objectives Box */}
          <div className="bg-gradient-to-br from-[#0F766E] to-[#0d625b] rounded-2xl p-6 text-white space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 text-teal-200 flex items-center justify-center shrink-0 font-bold border border-white/20">
                <span className="material-symbols-outlined text-xl">verified</span>
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg leading-snug">
                  Our Customer Service Guarantee
                </h4>
                <p className="text-xs text-teal-200">Quantifiable Quality Objectives</p>
              </div>
            </div>
            <ul className="space-y-2.5 text-xs text-white">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-teal-200 text-base shrink-0 mt-0.5">check_circle</span>
                <span>We respond to customer complaints &amp; inquiries within <strong>two working hours</strong> of receipt.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-teal-200 text-base shrink-0 mt-0.5">check_circle</span>
                <span>We provide comprehensive review &amp; clarification within <strong>2 working days</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-teal-200 text-base shrink-0 mt-0.5">check_circle</span>
                <span>Operating under strict <strong>ALCOA systems</strong> and half-yearly technical training procedures.</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Location Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-[#005c55] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
              <span className="material-symbols-outlined text-2xl">apartment</span>
            </div>
            <h4 className="font-heading font-bold text-[#121c2a] text-base">
              Tirupati Trade Centre, {siteConfig.address.street}
            </h4>
            <p className="text-xs text-slate-600 max-w-xs mx-auto">
              Our state-of-the-art calibration lab and stability chamber testing facility in {siteConfig.address.district} district, {siteConfig.address.state}.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-bold text-[#004540] bg-white border border-teal-300 px-3.5 py-1 rounded-full">
                {siteConfig.accreditation}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
