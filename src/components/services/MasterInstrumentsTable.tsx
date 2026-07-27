import { masterInstrumentsTable } from "@/data/services.data";

export default function MasterInstrumentsTable() {
  return (
    <section className="py-16 px-6 md:px-10 bg-[--color-bg-section]">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="border-b border-gray-200 pb-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <span className="text-[#0F766E] font-semibold text-xs uppercase tracking-wider bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#0F766E]/20">
              Unbroken Measurement Traceability
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[--color-text-primary] mt-2">
              Master Instruments &amp; Calibration Standards Table
            </h2>
          </div>
          <p className="text-sm text-[--color-text-secondary] max-w-md">
            Below is our comprehensive roster of 37+ master calibrators across 25 primary designations maintained in our Vasai (E) facility.
          </p>
        </div>

        <div className="bg-white border border-[--color-border] rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0F766E] text-white text-xs uppercase tracking-wider font-semibold">
                  <th className="py-4 px-6 border-b border-white/10 w-16 text-center">S.No.</th>
                  <th className="py-4 px-6 border-b border-white/10">Master Instrument / Calibration Standard</th>
                  <th className="py-4 px-6 border-b border-white/10">Range / Specification &amp; Accuracy</th>
                  <th className="py-4 px-6 border-b border-white/10">Calibration Agency / Traceability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {masterInstrumentsTable.map((inst) => (
                  <tr key={inst.sNo} className="hover:bg-[#F0FDFA]/60 transition-colors">
                    <td className="py-3.5 px-6 text-center font-mono font-semibold text-[#0F766E]">
                      {inst.sNo}
                    </td>
                    <td className="py-3.5 px-6 font-semibold text-[--color-text-primary]">
                      {inst.name}
                    </td>
                    <td className="py-3.5 px-6 font-mono text-xs text-[--color-text-secondary]">
                      {inst.range}
                    </td>
                    <td className="py-3.5 px-6 font-medium text-gray-800">
                      <span className="bg-[#F0FDFA] text-[#0F766E] px-2.5 py-1 rounded text-xs border border-[#0F766E]/20 font-semibold">
                        {inst.agency}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
