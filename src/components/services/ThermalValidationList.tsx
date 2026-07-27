import Link from "next/link";
import { thermalValidationScope } from "@/data/services.data";

export default function ThermalValidationList() {
  return (
    <section className="py-16 px-6 md:px-10 bg-[--color-bg-section]">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="border-b border-gray-200 pb-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <span className="text-[#0F766E] font-semibold text-xs uppercase tracking-wider bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20">
              21 CFR Part 11 &amp; ALCOA Compliant
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[--color-text-primary] mt-2">
              Thermal Validation Services (Controlled Environments)
            </h2>
          </div>
          <p className="text-sm text-[--color-text-secondary] max-w-md">
            Utilizing high-accuracy wireless data loggers (-40 to 70°C, 0-100% RH) and wired thermocouple data loggers (-80 to +1200°C) with national traceability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {thermalValidationScope.map((item, idx) => (
            <div key={item.name} className="bg-white border border-[--color-border] rounded-2xl p-6 shadow-sm flex items-start gap-4 hover:border-[#0F766E]/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 text-[#0F766E] font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                0{idx + 1}
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-lg text-[--color-text-primary]">
                  {item.name}
                </h3>
                <p className="font-body text-sm text-[--color-text-secondary]">
                  {item.spec}
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1 text-xs text-[#0F766E] font-medium bg-[#F0FDFA] px-2.5 py-1 rounded border border-[#0F766E]/20">
                    <span className="material-symbols-outlined text-[14px]">sensors</span>
                    <span>Traceable to National Standards (±0.5°C accuracy)</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0F766E] to-[#0d625b] text-white p-8 rounded-2xl shadow flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="font-heading font-bold text-xl">Need Comprehensive Thermal Mapping Protocol Preparation?</h4>
            <p className="text-white/85 text-sm max-w-2xl">We execute complete IQ, OQ, PQ protocols with spatial 3D mapping reports, risk assessment, and deviation summaries tailored for regulatory inspections.</p>
          </div>
          <Link href="/contact" className="bg-white text-[#0F766E] hover:bg-[#99F6E4] font-bold px-6 py-3 rounded-full shadow transition-colors text-sm shrink-0">
            Schedule Validation Visit
          </Link>
        </div>
      </div>
    </section>
  );
}
