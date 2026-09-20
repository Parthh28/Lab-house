export default function QualitySystemsSection() {
  return (
    <section id="quality-systems" className="py-16 md:py-20 px-6 md:px-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-[#004540] font-bold text-xs uppercase tracking-wider bg-teal-50 border border-teal-300 px-3.5 py-1.5 rounded-full inline-block">
            Quality Assurance Framework
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Quality Policy &amp; Quantifiable Objectives
          </h2>
          <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
            Operating under ALCOA data integrity guidelines and ISO 2017 standards, we ensure every calibration certificate meets strict audit and regulatory requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Quality Policy Box (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-3.5 border-b border-slate-200 pb-4">
                <div className="w-11 h-11 rounded-xl bg-[#005c55] text-white flex items-center justify-center font-bold shrink-0">
                  <span className="material-symbols-outlined text-xl">policy</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">
                    Laboratory Quality Policy Statement
                  </h3>
                  <p className="text-xs text-[#005c55] font-semibold">ISO 2017 &amp; NABL Compliant</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-body">
                Lab House is committed to providing reliable, accurate, and impartial calibration services. Our management system enforces strict Standard Working Procedures (SWPs) and ALCOA data principles to eliminate errors and maintain absolute technical integrity.
              </p>

              <div className="space-y-3">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-700">
                  Core Quality Mandates:
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#005c55] text-lg shrink-0 mt-0.5">check_circle</span>
                    <span>Full compliance with ISO 2017 and NABL criteria across all disciplines.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#005c55] text-lg shrink-0 mt-0.5">check_circle</span>
                    <span>Continuous half-yearly training for technical personnel on SWPs and uncertainties.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#005c55] text-lg shrink-0 mt-0.5">check_circle</span>
                    <span>Rigorous risk assessment to protect impartiality and prevent commercial bias.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quality Objectives Table Box (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Tracked Quality Benchmarks
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">Key Performance Indicators (KPIs)</p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm font-body">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-medium text-slate-800">Inquiry Response Time</span>
                  <span className="font-bold text-[#004540] bg-teal-50 px-2.5 py-1 rounded-md border border-teal-300">Within 2 Hours</span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-medium text-slate-800">Technical Complaint Resolution</span>
                  <span className="font-bold text-[#004540] bg-teal-50 px-2.5 py-1 rounded-md border border-teal-300">Within 2 Days</span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-medium text-slate-800">SWP &amp; ISO Staff Refresher</span>
                  <span className="font-bold text-slate-800 bg-slate-200 px-2.5 py-1 rounded-md">Half-Yearly</span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200">
                  <span className="font-medium text-emerald-950">Min. Customer Satisfaction Score</span>
                  <span className="font-bold text-emerald-900 bg-white px-2.5 py-1 rounded-md border border-emerald-300">90%+ Target</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
