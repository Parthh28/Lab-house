import { codeOfEthics } from "@/data/about.data";

export default function CodeOfEthicsGrid() {
  const categories = [
    {
      title: "Impartiality & Objectivity",
      icon: "balance",
      description: "Maintaining strict independence and unbiased technical evaluations across all calibration jobs.",
      items: codeOfEthics.slice(0, 3),
    },
    {
      title: "Risk Management & Quality Control",
      icon: "shield",
      description: "Systematic identification and mitigation of metrological risks and operational hazards.",
      items: codeOfEthics.slice(3, 6),
    },
    {
      title: "Data Integrity & Confidentiality",
      icon: "lock",
      description: "Strict adherence to ALCOA principles and non-disclosure of client calibration records.",
      items: codeOfEthics.slice(6, 10),
    },
    {
      title: "Governance & Professional Conduct",
      icon: "gavel",
      description: "Resolving conflicts of interest and maintaining public confidence in technical competence.",
      items: codeOfEthics.slice(10, 12),
    },
  ];

  return (
    <section className="py-10 md:py-12 px-6 md:px-10 bg-gray-50/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-[#0F766E] font-semibold text-xs uppercase tracking-wider bg-[#F0FDFA] border border-[#0F766E]/20 px-3.5 py-1 rounded-md">
            Professional Governance
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900">
            Code of Ethics &amp; Compliance Standards
          </h2>
          <p className="font-body text-gray-600 text-sm sm:text-base leading-relaxed">
            Our operational framework strictly enforces impartiality, client confidentiality, and technical integrity in compliance with NABL and ISO/IEC 17025:2017 mandates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                <div className="w-10 h-10 rounded-lg bg-[#F0FDFA] text-[#0F766E] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-gray-900">{cat.title}</h3>
                  <p className="text-xs text-gray-500">{cat.description}</p>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-gray-700">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">check</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
