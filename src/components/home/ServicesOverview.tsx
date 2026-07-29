"use client";

import Link from "next/link";
import Card, { CardIcon } from "@/components/ui/Card";
import { siteConfig } from "@/config/site.config";

const coreServices = [
  {
    id: "calibration",
    title: "Calibration Services",
    icon: "straighten",
    badge: "ISO/IEC 17025:2017",
    description:
      "Precision NABL accredited calibration for 10 core industrial measurement parameters using 37 specialized master instruments with full unbroken chain of national/international traceability.",
    turnaround: "Standard & Express Available",
    traceability: "National / International Traceable",
    features: [
      "Pressure & Vacuum (-1 to 700 bar)",
      "Temperature (-199.99°C to +1300°C) & Relative Humidity",
      "Dimensions (Calipers, Micrometers, Gauge Blocks)",
      "pH / Conductivity & Decade Resistance",
      "Electrical, Electro-Technical & Power Supply",
      "Weights / Weighing Scales (1 mg to 15 kg)",
      "RPM Tachometers & Precision Time/Timers",
    ],
  },
  {
    id: "thermal-validation",
    title: "Thermal Validation Services",
    icon: "thermostat",
    badge: "21 CFR Part 11 Compliant",
    description:
      "Comprehensive multi-point thermal mapping and validation across critical controlled environments using high-accuracy wireless and wired data loggers traceable to national standards.",
    turnaround: "On-Site & In-House Facility",
    traceability: "National/International Traceability (±0.5°C)",
    features: [
      "Area & Warehouse Temperature Mapping",
      "Walk-in type Stability Chambers (0 to 70°C, 0-100% RH)",
      "Incubators, Refrigerators & Cold Rooms/Chambers",
      "Autoclaves & Dry Heat Sterilizers",
      "Industrial Ovens, Furnaces & Sterilization Tunnels",
      "In-House Deep Freezer (-80 to 50°C) & Dry Block Calibrators",
    ],
  },
  {
    id: "hvac-validation",
    title: "HVAC Validation Services",
    icon: "air",
    badge: "Cleanroom Compliance",
    description:
      "Rigorous cleanroom, laminar flow, and HVAC validation protocols utilizing calibrated Aerosol Photometers and air flow instrumentation to ensure total environmental safety.",
    turnaround: "On-Site Specialist Team",
    traceability: "ISO Standards",
    features: [
      "Airborne Particle Count (APC) Testing",
      "Filter Integrity Test (PAO / DOP Aerosol Photometer)",
      "Air Velocity & Uniformity Testing",
      "Air Flow Pattern & Visualization Studies",
      "Comprehensive Air Balancing & ACH Calculation",
      "Laminar Air Flow (LAF) & Reverse LAF (RLAF) Validation",
    ],
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-[#F0FDFA] py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#005c55] font-semibold text-sm tracking-wider uppercase bg-[#005c55]/10 px-3 py-1 rounded-full">
            Accredited Capabilities
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#121c2a]">
            Our Core Calibration &amp; Validation Capabilities
          </h2>
          <p className="font-body text-[#64748B] text-base sm:text-lg">
            Operating under {siteConfig.accreditation}, Lab House delivers comprehensive
            measurement, thermal validation, and HVAC cleanroom testing with full ALCOA quality adherence.
          </p>
        </div>

        {/* 3 Core Categories Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {coreServices.map((cat) => (
            <Card key={cat.id} className="flex flex-col justify-between h-full p-7 border border-[#D1D5DB]/80 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <CardIcon icon={cat.icon} />
                  <span className="bg-[#005c55]/10 text-[#005c55] text-xs font-bold px-3 py-1 rounded-full border border-[#005c55]/20">
                    {cat.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-[#121c2a]">
                  {cat.title}
                </h3>

                <p className="font-body text-sm text-[#64748B] leading-relaxed">
                  {cat.description}
                </p>

                {/* Turnaround & Traceability Badges */}
                <div className="pt-1 pb-1 flex flex-wrap gap-2 text-xs">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md flex items-center gap-1.5 font-medium border border-gray-200">
                    <span className="material-symbols-outlined text-[14px] text-[#005c55]">
                      schedule
                    </span>
                    <span>{cat.turnaround}</span>
                  </span>
                  <span className="bg-[#F0FDFA] text-[#0F766E] px-3 py-1.5 rounded-md flex items-center gap-1.5 font-medium border border-[#0F766E]/20">
                    <span className="material-symbols-outlined text-[14px] text-[#0F766E]">
                      verified
                    </span>
                    <span>{cat.traceability}</span>
                  </span>
                </div>

                {/* Feature checklist */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#121c2a] mb-2.5">
                    Covered Scope &amp; Parameters:
                  </h4>
                  <ul className="space-y-2 text-xs text-[#64748B]">
                    {cat.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[#005c55] text-[16px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-6 mt-6 border-t border-[#D1D5DB]/60">
                <Link
                  href={`/services#${cat.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#005c55] hover:text-[#004540] group"
                >
                  <span>Explore Master Equipment &amp; Scope Specs</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Master Instruments & Validation Summary Strip */}
        <div className="bg-white border border-[#D1D5DB] rounded-2xl p-6 md:p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="pt-4 md:pt-0 px-4">
            <span className="material-symbols-outlined text-[#0F766E] text-3xl mb-2">precision_manufacturing</span>
            <h4 className="font-heading font-bold text-lg text-[#121c2a]">37+ Master Instruments</h4>
            <p className="text-xs text-[#64748B] mt-1">
              Low Pressure Calibrators, Decade Resistance Boxes, Gauge Blocks ('0' Grade), Surface Plates, and Aerosol Photometers.
            </p>
          </div>
          <div className="pt-4 md:pt-0 px-4">
            <span className="material-symbols-outlined text-[#0F766E] text-3xl mb-2">sensors</span>
            <h4 className="font-heading font-bold text-lg text-[#121c2a]">Validation Standards</h4>
            <p className="text-xs text-[#64748B] mt-1">
              Wireless (-40 to 70°C &amp; 0-100% RH) &amp; Wired 21 CFR Part 11 compliant data loggers (-80 to +1200°C) with national/international traceability.
            </p>
          </div>
          <div className="pt-4 md:pt-0 px-4">
            <span className="material-symbols-outlined text-[#0F766E] text-3xl mb-2">domain</span>
            <h4 className="font-heading font-bold text-lg text-[#121c2a]">In-House &amp; Regional Reach</h4>
            <p className="text-xs text-[#64748B] mt-1">
              In-house Stability Chambers and Dry Block Calibrators in {siteConfig.address.street}, {siteConfig.address.district}, plus regional centres in MP, Sikkim &amp; Ahmedabad.
            </p>
          </div>
        </div>

        {/* Bottom CTA to view all */}
        <div className="text-center pt-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#0F766E] text-white hover:bg-[#0d625b] font-medium px-8 py-4 rounded-full shadow-md transition-all duration-200"
          >
            <span>View Full Scope of 37 Instruments &amp; Validation Standards</span>
            <span className="material-symbols-outlined text-lg">
              library_books
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
