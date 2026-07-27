import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site.config";

export default function HeroSection() {
  return (
    <section className="hero-gradient pt-16 pb-20 px-6 md:px-10 relative overflow-hidden text-white">
      {/* Decorative background lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#99F6E4]/10 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Text & CTAs (7 cols) */}
        <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
          <div className="flex flex-wrap gap-3">
            <Badge variant="accent" icon="verified">
              {siteConfig.accreditation}
            </Badge>
            <Badge variant="white" icon="history">
              Excellence Since {siteConfig.establishedYear}
            </Badge>
            <Badge variant="white" icon="bolt">
              2-Hour Emergency Turnaround
            </Badge>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.15]">
            Excellence in Measurement &amp; Validation
          </h1>

          <p className="font-body text-white/90 text-lg sm:text-xl max-w-2xl leading-relaxed">
            {siteConfig.accreditation} for Mechanical, Electro-Technical, and Thermal disciplines. Serving
            Pharmaceutical, Engineering, and Chemical industries across India since {siteConfig.establishedYear}.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="shadow-md"
            >
              Request a Quote
            </Button>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-7 py-3.5 rounded-full border border-white/30 transition-all duration-200"
            >
              <span>Explore Scope &amp; Services</span>
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Quick Trust Highlights */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 max-w-lg text-xs sm:text-sm text-white/80">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#99F6E4]">
                check_circle
              </span>
              <span>NABL &amp; ISO 17025:2017</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#99F6E4]">
                verified_user
              </span>
              <span>ALCOA QMS Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#99F6E4]">
                apartment
              </span>
              <span>{siteConfig.address.street}, {siteConfig.address.district} &amp; PAN India</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Trust Card (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl w-full max-w-md shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#99F6E4] rounded-lg flex items-center justify-center text-[#005c55] font-bold">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-base">
                    Accredited Disciplines
                  </h3>
                  <p className="text-xs text-[#99F6E4]">
                    National &amp; International Traceability
                  </p>
                </div>
              </div>
              <span className="bg-green-500/20 text-green-300 text-xs px-2.5 py-1 rounded-full border border-green-500/30 font-medium">
                Active Lab
              </span>
            </div>

            <div className="space-y-4 text-sm text-white/90">
              <div className="flex justify-between items-center bg-white/5 p-3.5 rounded-lg border border-white/10">
                <span className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#99F6E4] text-base">
                    straighten
                  </span>
                  Mechanical Discipline
                </span>
                <span className="text-[#99F6E4] font-semibold text-xs">
                  Pressure, Dimensions, Weights
                </span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-3.5 rounded-lg border border-white/10">
                <span className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#99F6E4] text-base">
                    thermostat
                  </span>
                  Thermal Discipline
                </span>
                <span className="text-[#99F6E4] font-semibold text-xs">
                  -199.99°C to +1300°C
                </span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-3.5 rounded-lg border border-white/10">
                <span className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#99F6E4] text-base">
                    bolt
                  </span>
                  Electro-Technical
                </span>
                <span className="text-[#99F6E4] font-semibold text-xs">
                  Voltage, Resistance, RPM
                </span>
              </div>
            </div>

            <div className="bg-[#004540]/80 p-4 rounded-xl border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs text-white/70">Need Rush Turnaround?</p>
                <p className="text-sm font-semibold text-white">
                  Get certified in as little as 24h
                </p>
              </div>
              <Link
                href="/contact"
                className="text-xs bg-[#99F6E4] text-[#005c55] font-bold px-3 py-1.5 rounded-full hover:bg-white transition-colors"
              >
                Inquire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
