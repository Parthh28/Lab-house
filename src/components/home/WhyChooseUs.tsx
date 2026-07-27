import { CardIcon } from "@/components/ui/Card";
import { whyChooseUsItems } from "@/data/whyChooseUs.data";

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#005c55] font-semibold text-sm tracking-wider uppercase bg-[#005c55]/10 px-3 py-1 rounded-full">
            The Lab House Difference
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#121c2a]">
            Why Industry Leaders Choose Lab House
          </h2>
          <p className="font-body text-[#64748B] text-base sm:text-lg">
            We combine rigorous metrological precision with modern digital workflow
            automation to deliver unmatched speed, accuracy, and compliance.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUsItems.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-[#f8f9ff] border border-[#D1D5DB]/80 rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top color bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#005c55] group-hover:bg-[#F97316] transition-colors" />

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <CardIcon icon={pillar.icon} />
                  <span className="text-xs font-bold text-[#F97316] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                    {pillar.highlight}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-[#121c2a]">
                  {pillar.title}
                </h3>

                <p className="font-body text-sm text-[#64748B] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Stat */}
              <div className="mt-6 pt-4 border-t border-[#D1D5DB]/60 flex items-center gap-2 text-xs font-semibold text-[#005c55]">
                <span className="material-symbols-outlined text-base">
                  task_alt
                </span>
                <span>{pillar.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
