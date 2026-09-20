import Link from "next/link";
import { calibrationParameters } from "@/data/services.data";
import { siteConfig } from "@/config/site.config";

export default function CalibrationScopeList() {
  return (
    <section className="py-16 px-6 md:px-10 bg-[--color-bg-section]">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="border-b border-gray-200 pb-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <span className="text-[#004540] font-bold text-xs uppercase tracking-wider bg-[#F0FDFA] px-3 py-1 rounded-full border border-teal-300">
              {siteConfig.accreditation} &amp; NABL Traceable
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[--color-text-primary] mt-2">
              Comprehensive Calibration Scope (Key Parameters)
            </h2>
          </div>
          <p className="text-sm text-[--color-text-secondary] max-w-md">
            All measurements are traceable to National and International Nodal Laboratories with unbroken measurement traceability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calibrationParameters.map((param) => (
            <div key={param.title} className="bg-white border border-[--color-border] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#F0FDFA] text-[#005c55] flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-2xl">{param.icon}</span>
                  </div>
                  <span className="text-xs font-mono font-bold bg-gray-100 text-gray-800 px-2.5 py-1 rounded border border-gray-200">
                    {param.range}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-[--color-text-primary]">
                  {param.title}
                </h3>

                <div className="text-xs font-bold text-[#004540] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">verified</span>
                  <span>{param.accuracy}</span>
                </div>

                <p className="font-body text-sm text-[--color-text-secondary] leading-relaxed">
                  {param.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-slate-600 font-medium">Standard &amp; Emergency Turnaround</span>
                <Link href="/contact" className="text-xs font-bold text-[#005c55] hover:underline flex items-center gap-1">
                  <span>Get Quote</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
