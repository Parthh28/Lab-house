import Link from "next/link";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site.config";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = "Ready to Calibrate & Validate Your Critical Instruments?",
  subtitle = `Get a detailed quote within 2 hours or speak directly with our ${siteConfig.accreditation} metrology specialists today.`,
  buttonText = "Request a Calibration Quote",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-[#005c55] py-20 px-6 md:px-10 text-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(153,246,228,0.12),transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <span className="inline-flex items-center gap-2 bg-white/10 text-[#99F6E4] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full border border-white/20">
          <span className="material-symbols-outlined text-[16px]">
            verified_user
          </span>
          <span>{siteConfig.accreditation}</span>
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          {title}
        </h2>

        <p className="font-body text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button
            href={buttonHref}
            variant="primary"
            size="lg"
            className="shadow-xl"
          >
            {buttonText}
          </Button>
          <Link
            href={`tel:${siteConfig.telephone[0].replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-7 py-3.5 rounded-full border border-white/30 transition-all duration-200"
          >
            <span className="material-symbols-outlined text-lg">call</span>
            <span>Call Direct: {siteConfig.telephone.join(" / ")}</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-white/15 flex flex-wrap justify-center gap-8 text-xs sm:text-sm text-white/80">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#99F6E4] text-base">
              timer
            </span>
            <span>2-Hour Quote Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#99F6E4] text-base">
              local_shipping
            </span>
            <span>Free Instrument Pickup & Return Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#99F6E4] text-base">
              verified
            </span>
            <span>Complete Audit Readiness</span>
          </div>
        </div>
      </div>
    </section>
  );
}
