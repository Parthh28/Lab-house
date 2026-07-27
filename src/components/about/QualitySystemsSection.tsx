export default function QualitySystemsSection() {
  return (
    <section className="py-10 md:py-12 px-6 md:px-10 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-[#0F766E] font-semibold text-xs uppercase tracking-wider bg-[#F0FDFA] border border-[#0F766E]/20 px-3.5 py-1 rounded-md">
            Quality Assurance Framework
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900">
            Quality Policy &amp; Quantifiable Objectives
          </h2>
          <p className="font-body text-gray-600 text-sm sm:text-base leading-relaxed">
            Operating under ALCOA data integrity guidelines and ISO/IEC 17025:2017 standards, we ensure every calibration certificate meets strict audit and regulatory requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quality Policy Box (7 cols) */}
          <div className="lg:col-span-7 bg-gray-50/70 border border-gray-200 rounded-xl p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0F766E] text-white flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-xl">policy</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-gray-900">
                  Laboratory Quality Policy Statement
                </h3>
                <p className="text-xs text-[#0F766E] font-medium">ISO/IEC 17025:2017 &amp; NABL Compliant</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              {`Lab House is committed to providing reliable, accurate, and impartial calibration services. Our management system enforces strict Standard Working Procedures (SWPs) and ALCOA data principles to eliminate errors and maintain absolute technical integrity.`}
            </p>

            <div className="space-y-2.5">
              <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-gray-500">
                Core Quality Mandates:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">check_circle</span>
                  <span>Full compliance with ISO/IEC 17025:2017 and NABL criteria across all disciplines.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">check_circle</span>
                  <span>Continuous half-yearly training for technical personnel on SWPs and uncertainties.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">check_circle</span>
                  <span>Rigorous risk assessment to protect impartiality and prevent commercial bias.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quality Objectives Table Box (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4">
            <div className="border-b border-gray-100 pb-3">
              <h3 className="font-heading font-bold text-base text-gray-900">
                Tracked Quality Benchmarks
              </h3>
              <p className="text-xs text-gray-500">Key Performance Indicators (KPIs)</p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100">
                <span className="font-medium text-gray-800">Inquiry Response Time</span>
                <span className="font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded border border-[#0F766E]/20">Within 2 Hours</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100">
                <span className="font-medium text-gray-800">Technical Complaint Resolution</span>
                <span className="font-bold text-[#0F766E] bg-[#F0FDFA] px-2 py-0.5 rounded border border-[#0F766E]/20">Within 2 Days</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100">
                <span className="font-medium text-gray-800">SWP &amp; ISO Staff Refresher</span>
                <span className="font-bold text-gray-700 bg-gray-200/60 px-2 py-0.5 rounded">Half-Yearly</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-50/70 border border-emerald-200/60">
                <span className="font-medium text-emerald-900">Min. Customer Satisfaction Score</span>
                <span className="font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-300">80%+ Target</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
