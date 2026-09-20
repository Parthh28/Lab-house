"use client";

import { useState } from "react";
import CTASection from "@/components/home/CTASection";
import ServicesTabsNav from "@/components/services/ServicesTabsNav";
import NablScopeSection from "@/components/services/NablScopeSection";
import CalibrationScopeList from "@/components/services/CalibrationScopeList";
import ThermalValidationList from "@/components/services/ThermalValidationList";
import HvacValidationList from "@/components/services/HvacValidationList";
import MasterInstrumentsTable from "@/components/services/MasterInstrumentsTable";
import { siteConfig } from "@/config/site.config";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("nabl");

  return (
    <div className="flex-grow">
      {/* Hero Header */}
      <section className="bg-[#0F766E] text-white py-10 md:py-12 px-6 md:px-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 space-y-2.5 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 bg-white/15 px-3 py-0.5 rounded-full text-xs font-semibold text-teal-200 border border-white/25">
            <span className="material-symbols-outlined text-sm">verified</span>
            <span>{siteConfig.accreditation} Scope</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Accredited NABL Scope &amp; Services
          </h1>
          <p className="font-body text-white text-sm sm:text-base max-w-3xl leading-relaxed">
            Operating under ISO 2017 accreditation (Certificate CC-4341) and ALCOA+ data integrity principles across Permanent Laboratory and Site Facilities.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-72 h-72 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent rounded-full translate-x-1/3 translate-y-1/3" />
      </section>

      {/* Main Tab Navigation Bar */}
      <ServicesTabsNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tab 1: NABL Scope in Services & Accredited Parameter Table */}
      {activeTab === "nabl" && <NablScopeSection />}

      {/* Tab 2: Calibration Scope */}
      {activeTab === "calibration" && <CalibrationScopeList />}

      {/* Tab 3: Thermal Validation */}
      {activeTab === "thermal" && <ThermalValidationList />}

      {/* Tab 4: HVAC Cleanroom Validation */}
      {activeTab === "hvac" && <HvacValidationList />}

      {/* Tab 5: Master Instruments Table */}
      {activeTab === "instruments" && <MasterInstrumentsTable />}

      {/* Bottom Quote CTA */}
      <CTASection
        title="Need Custom Scope Verification or On-Site Calibration?"
        subtitle={`Our technical team responds within 2 hours. Speak directly with ${siteConfig.proprietor} or our Lab Incharge today.`}
        buttonText="Request Calibration Quote"
        buttonHref="/contact"
      />
    </div>
  );
}
