"use client";

import { useState } from "react";
import CTASection from "@/components/home/CTASection";
import ServicesTabsNav from "@/components/services/ServicesTabsNav";
import CalibrationScopeList from "@/components/services/CalibrationScopeList";
import ThermalValidationList from "@/components/services/ThermalValidationList";
import HvacValidationList from "@/components/services/HvacValidationList";
import MasterInstrumentsTable from "@/components/services/MasterInstrumentsTable";
import { siteConfig } from "@/config/site.config";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("calibration");

  return (
    <div className="flex-grow">
      {/* Hero Header */}
      <section className="bg-[#0F766E] text-white py-10 md:py-12 px-6 md:px-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 space-y-2.5 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-0.5 rounded-full text-xs font-semibold text-[#99F6E4]">
            <span className="material-symbols-outlined text-sm">verified</span>
            <span>{siteConfig.accreditation} Scope</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Accredited Calibration &amp; Validation Scope
          </h1>
          <p className="font-body text-white/90 text-sm sm:text-base max-w-3xl leading-relaxed">
            Operating under strict ALCOA quality principles, Lab House maintains 37+ specialized master instruments across Calibration, Thermal Validation, and Cleanroom HVAC Testing.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-72 h-72 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent rounded-full translate-x-1/3 translate-y-1/3" />
      </section>

      {/* Main Tab Navigation Bar */}
      <ServicesTabsNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tab 1: Calibration Scope */}
      {activeTab === "calibration" && <CalibrationScopeList />}

      {/* Tab 2: Thermal Validation */}
      {activeTab === "thermal" && <ThermalValidationList />}

      {/* Tab 3: HVAC Cleanroom Validation */}
      {activeTab === "hvac" && <HvacValidationList />}

      {/* Tab 4: Master Instruments Table */}
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
