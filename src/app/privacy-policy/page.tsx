import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name} Calibration Services`,
  description: `Privacy policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information when using our calibration services and website.`,
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 2026";

  return (
    <div className="flex-grow">
      {/* Mini Hero Section */}
      <section className="bg-[#0F766E] text-white py-10 md:py-12 px-6 md:px-10 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-0.5 rounded-full text-xs font-semibold text-[#99F6E4]">
            <span className="material-symbols-outlined text-sm">shield</span>
            <span>Your Privacy Matters</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base font-body text-white/90 max-w-2xl mx-auto leading-relaxed">
            How {siteConfig.name} collects, uses, and protects your personal
            information.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-72 h-72 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent rounded-full translate-x-1/2 translate-y-1/2" />
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8 md:p-12 space-y-10">
          {/* Last Updated */}
          <div className="flex items-center gap-2 text-sm text-gray-500 pb-6 border-b border-gray-100">
            <span className="material-symbols-outlined text-base">
              update
            </span>
            <span>Last Updated: {lastUpdated}</span>
          </div>

          {/* 1. Introduction */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-sm font-bold">
                1
              </span>
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {siteConfig.name} (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;) is committed to protecting the privacy of our
              customers, website visitors, and business partners. This Privacy
              Policy explains how we collect, use, store, and protect your
              personal information when you use our website, submit forms, or
              engage with our {siteConfig.accreditation.toLowerCase()}{" "}
              calibration services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By using our website or submitting your information through our
              forms, you consent to the practices described in this policy.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-sm font-bold">
                2
              </span>
              Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We collect only the information necessary to provide our
              calibration services and respond to your inquiries:
            </p>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-3">
              <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wider">
                Information You Provide Directly
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    <strong>Full Name</strong> — to identify you and address
                    correspondence
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    <strong>Email Address</strong> — to send quote confirmations
                    and service updates
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    <strong>Phone Number</strong> — for direct communication
                    about your calibration needs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    <strong>Company Name</strong> — to associate your request
                    with your organization
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    <strong>Instrument/Service Details</strong> — the type of
                    calibration service you require and any additional notes
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-3">
              <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wider">
                Information Collected Automatically
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                    info
                  </span>
                  <span>
                    <strong>IP Address</strong> — for security and rate-limiting
                    purposes only
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                    info
                  </span>
                  <span>
                    <strong>Browser/Device Information</strong> — basic
                    technical data to ensure our website displays correctly
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-sm font-bold">
                3
              </span>
              How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your personal information is used solely for the following
              purposes:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3 bg-[#F0FDFA] rounded-lg p-4 border border-[#0F766E]/10">
                <span className="material-symbols-outlined text-[#0F766E] shrink-0 mt-0.5">
                  description
                </span>
                <span>
                  <strong>Processing quote requests</strong> — preparing and
                  delivering calibration service quotes
                </span>
              </li>
              <li className="flex items-start gap-3 bg-[#F0FDFA] rounded-lg p-4 border border-[#0F766E]/10">
                <span className="material-symbols-outlined text-[#0F766E] shrink-0 mt-0.5">
                  mail
                </span>
                <span>
                  <strong>Email communication</strong> — sending confirmation
                  emails, service updates, and responding to inquiries
                </span>
              </li>
              <li className="flex items-start gap-3 bg-[#F0FDFA] rounded-lg p-4 border border-[#0F766E]/10">
                <span className="material-symbols-outlined text-[#0F766E] shrink-0 mt-0.5">
                  support_agent
                </span>
                <span>
                  <strong>Customer service</strong> — following up on your
                  requests and ensuring satisfaction with our services
                </span>
              </li>
              <li className="flex items-start gap-3 bg-[#F0FDFA] rounded-lg p-4 border border-[#0F766E]/10">
                <span className="material-symbols-outlined text-[#0F766E] shrink-0 mt-0.5">
                  security
                </span>
                <span>
                  <strong>Security</strong> — preventing spam, abuse, and
                  protecting the integrity of our systems
                </span>
              </li>
            </ul>
            <p className="text-gray-500 text-sm italic">
              We do not use your information for marketing purposes unless you
              explicitly opt in. We never sell, rent, or trade your personal
              information to third parties.
            </p>
          </section>

          {/* 4. Data Storage & Security */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-sm font-bold">
                4
              </span>
              Data Storage & Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We take the security of your data seriously and employ
              industry-standard measures to protect it:
            </p>
            <ul className="space-y-2 text-gray-600 text-sm ml-1">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                  lock
                </span>
                <span>
                  All data is transmitted over <strong>HTTPS</strong> (TLS
                  encryption)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                  database
                </span>
                <span>
                  Data is stored in a secure, managed database with{" "}
                  <strong>Row Level Security</strong> policies
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                  verified_user
                </span>
                <span>
                  Access to customer data is restricted to{" "}
                  <strong>authorized personnel only</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                  backup
                </span>
                <span>
                  Automatic <strong>daily backups</strong> ensure data recovery
                  in case of system failure
                </span>
              </li>
            </ul>
          </section>

          {/* 5. Data Retention */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-sm font-bold">
                5
              </span>
              Data Retention
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information only as long as necessary to
              fulfill the purposes described in this policy:
            </p>
            <ul className="space-y-2 text-gray-600 text-sm ml-1">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                  schedule
                </span>
                <span>
                  Quote requests and contact submissions are retained for up to{" "}
                  <strong>2 years</strong> after the last interaction
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                  delete_sweep
                </span>
                <span>
                  Closed requests with no follow-up are anonymized or deleted
                  after the retention period
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                  history
                </span>
                <span>
                  Calibration service records may be retained longer as required
                  by ISO quality management standards
                </span>
              </li>
            </ul>
          </section>

          {/* 6. Third-Party Services */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-sm font-bold">
                6
              </span>
              Third-Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use the following trusted third-party services to operate our
              website:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="font-semibold text-gray-800 text-sm">
                  Hosting & Deployment
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Vercel — website hosting and content delivery
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="font-semibold text-gray-800 text-sm">
                  Database
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Supabase — secure data storage with encryption at rest
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="font-semibold text-gray-800 text-sm">
                  Email Service
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Resend — transactional email delivery
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="font-semibold text-gray-800 text-sm">
                  Fonts
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Google Fonts — typography (no tracking cookies)
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              Each third-party service has its own privacy policy governing the
              data they process. We do not share your personal data with any
              other third parties.
            </p>
          </section>

          {/* 7. Your Rights */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-sm font-bold">
                7
              </span>
              Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You have the following rights regarding your personal information:
            </p>
            <ul className="space-y-2 text-gray-600 text-sm ml-1">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                  visibility
                </span>
                <span>
                  <strong>Right to Access</strong> — request a copy of the
                  personal data we hold about you
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                  edit
                </span>
                <span>
                  <strong>Right to Rectification</strong> — request correction
                  of inaccurate or incomplete data
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                  delete
                </span>
                <span>
                  <strong>Right to Deletion</strong> — request deletion of your
                  personal data (subject to legal obligations)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0F766E] text-base shrink-0 mt-0.5">
                  block
                </span>
                <span>
                  <strong>Right to Object</strong> — object to specific uses of
                  your personal data
                </span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              To exercise any of these rights, please contact us using the
              details below.
            </p>
          </section>

          {/* 8. Cookies */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-sm font-bold">
                8
              </span>
              Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our website uses only essential cookies required for the website
              to function properly (e.g., session management). We do not use
              tracking cookies, advertising cookies, or any third-party
              analytics that track individual users.
            </p>
          </section>

          {/* 9. Changes to This Policy */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-sm font-bold">
                9
              </span>
              Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. Any updates will
              be posted on this page with the revised &quot;Last Updated&quot;
              date. We encourage you to review this page periodically.
            </p>
          </section>

          {/* 10. Contact Us */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-sm font-bold">
                10
              </span>
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, wish to
              exercise your rights, or have concerns about how your data is
              handled, please contact us:
            </p>
            <div className="bg-[#F0FDFA] rounded-xl p-6 border border-[#0F766E]/10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#0F766E]">
                  business
                </span>
                <span className="font-semibold text-gray-800">
                  {siteConfig.name} Calibration Services
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#0F766E]">
                  mail
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#0F766E] hover:underline font-medium"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#0F766E]">
                  call
                </span>
                <a
                  href={`tel:${siteConfig.telephone[0].replace(/\s+/g, "")}`}
                  className="text-gray-700 hover:text-[#0F766E] font-medium"
                >
                  {siteConfig.telephone[0]}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#0F766E] mt-0.5">
                  location_on
                </span>
                <span className="text-gray-700">
                  205, Tirupati Trade Centre, Navghar Road,{" "}
                  {siteConfig.address.street}, District:{" "}
                  {siteConfig.address.district} – {siteConfig.address.pincode},{" "}
                  {siteConfig.address.state}, India
                </span>
              </div>
            </div>
          </section>

          {/* Back to Home Link */}
          <div className="pt-6 border-t border-gray-100 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#0F766E] hover:text-[#0d625b] font-medium transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_back
              </span>
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
