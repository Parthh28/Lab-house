import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/home/CTASection";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: `${siteConfig.name} Calibration Services | ${siteConfig.accreditation}`,
  description:
    `${siteConfig.accreditation} for Mechanical, Electro-Technical & Thermal Discipline. Providing excellence in Calibration, Thermal Validation & HVAC Validation since ${siteConfig.establishedYear} across India.`,
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description:
      `${siteConfig.accreditation} for Mechanical, Electro-Technical & Thermal Discipline. Established in ${siteConfig.establishedYear} by ${siteConfig.proprietor}.`,
    image: "https://labhouse.net/og-image.jpg",
    "@id": "https://labhouse.net/#laboratory",
    url: "https://labhouse.net",
    telephone: siteConfig.telephone[0].replace(/\s+/g, ""),
    email: siteConfig.email,
    founder: {
      "@type": "Person",
      name: `${siteConfig.proprietor} (M.Sc.)`,
      jobTitle: "Chief Executive / Technical Head",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "207, Tirupati Trade Centre, Navghar Road",
      addressLocality: `${siteConfig.address.street}, Dist: ${siteConfig.address.district}`,
      addressRegion: siteConfig.address.state,
      postalCode: "401210",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.3919,
      longitude: 72.8397,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Quick Stats Bar */}
      <section className="bg-surface-teal py-xl border-y border-border-gray">
        <div className="max-w-7xl mx-auto px-lg md:px-xxl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
            <div className="bg-white p-lg rounded-xl border border-border-gray shadow-[0_1px_3px_rgba(0,0,0,0.08)] flex items-center gap-md">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary-container shrink-0">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  history
                </span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Since {siteConfig.establishedYear}
                </div>
                <div className="font-body-sm text-text-secondary text-xs">
                  25+ Years of Metrology Excellence
                </div>
              </div>
            </div>

            <div className="bg-white p-lg rounded-xl border border-border-gray shadow-[0_1px_3px_rgba(0,0,0,0.08)] flex items-center gap-md">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary-container shrink-0">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  ISO/IEC 17025
                </div>
                <div className="font-body-sm text-text-secondary text-xs">
                  NABL Accredited Laboratory
                </div>
              </div>
            </div>

            <div className="bg-white p-lg rounded-xl border border-border-gray shadow-[0_1px_3px_rgba(0,0,0,0.08)] flex items-center gap-md">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary-container shrink-0">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  precision_manufacturing
                </span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  37+ Master
                </div>
                <div className="font-body-sm text-text-secondary text-xs">
                  Calibrated Standards &amp; Instruments
                </div>
              </div>
            </div>

            <div className="bg-white p-lg rounded-xl border border-border-gray shadow-[0_1px_3px_rgba(0,0,0,0.08)] flex items-center gap-md">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary-container shrink-0">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  timer
                </span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  2-Hour
                </div>
                <div className="font-body-sm text-text-secondary text-xs">
                  Complaint &amp; Quote Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <ServicesOverview />

      {/* Why Choose Us & ALCOA */}
      <WhyChooseUs />

      {/* Client List & Code of Ethics */}
      <TestimonialSection />

      {/* CTA Section */}
      <CTASection
        title="Ready to Calibrate & Validate Your Critical Instruments?"
        subtitle={`Contact our ${siteConfig.address.street} laboratory or speak with our ${siteConfig.accreditation} specialists directly. Full ALCOA compliance guaranteed.`}
        buttonText="Request Calibration Quote"
        buttonHref="/contact"
      />
    </div>
  );
}
