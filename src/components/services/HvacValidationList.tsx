import { hvacValidationScope } from "@/data/services.data";

export default function HvacValidationList() {
  return (
    <section className="py-16 px-6 md:px-10 bg-[--color-bg-section]">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="border-b border-gray-200 pb-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <span className="text-[#0F766E] font-semibold text-xs uppercase tracking-wider bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20">
              Cleanroom ISO 14644 Compliance
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[--color-text-primary] mt-2">
              HVAC &amp; Cleanroom Validation Scope (Testing Protocols)
            </h2>
          </div>
          <p className="text-sm text-[--color-text-secondary] max-w-md">
            Ensuring absolute environmental control and sterile processing conditions for pharmaceutical, biological, and electronic cleanrooms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hvacValidationScope.map((hvac) => (
            <div key={hvac.name} className="bg-white border border-[--color-border] rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#F0FDFA] text-[#0F766E] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">air</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-[--color-text-primary]">
                  {hvac.name}
                </h3>
                <p className="font-body text-sm text-[--color-text-secondary] leading-relaxed">
                  {hvac.detail}
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0F766E]">
                <span>Aerosol Photometer / Particle Counter</span>
                <span className="material-symbols-outlined text-base">verified_user</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
