import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export const metadata = {
  title: `Client Portal - Coming Soon | ${siteConfig.name}`,
  description: "Our client portal is currently under development and will be available soon.",
};

export default function LoginPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-10 text-center border border-gray-100">
        <div className="w-20 h-20 bg-[#0F766E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-[#0F766E] text-4xl">
            construction
          </span>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Coming Soon
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          We are working hard to bring you a brand new client portal. You'll soon be able to track your quotes, manage services, and communicate directly with our metrology team.
        </p>
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#0F766E] hover:bg-[#0d625b] text-white px-6 py-3 rounded-full font-medium transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">
            arrow_back
          </span>
          Return to Home
        </Link>
      </div>
    </div>
  );
}
