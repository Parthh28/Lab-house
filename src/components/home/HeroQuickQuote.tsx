"use client";

import { useState } from "react";
import Link from "next/link";
import { quoteRequestSchema } from "@/lib/validators";
import type { QuoteRequestResponse } from "@/types/forms";

export default function HeroQuickQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    instrument_type: "Calibration Service",
    message: "",
  });

  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic client validation
    const result = quoteRequestSchema.safeParse({
      ...formData,
      company: formData.company || "Direct Client",
      message: formData.message || `Quick Quote Request for ${formData.instrument_type}`,
    });

    if (!result.success) {
      const firstError = result.error.issues[0]?.message || "Please complete all required fields.";
      setErrorMessage(firstError);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/quote-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...result.data,
          website: honeypot,
        }),
      });

      const resData: QuoteRequestResponse = await response.json();

      if (!response.ok || !resData.success) {
        setErrorMessage(resData.error || "Failed to submit. Please try again.");
        return;
      }

      setSubmitted(true);
      if (resData.quote_id) setQuoteId(resData.quote_id);
      if (resData.customer_id) setCustomerId(resData.customer_id);
    } catch (err) {
      console.error("Hero quote submission error:", err);
      setErrorMessage("Network error. Please try again or call directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      instrument_type: "Calibration Service",
      message: "",
    });
    setSubmitted(false);
    setQuoteId("");
    setCustomerId("");
    setErrorMessage(null);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-7 rounded-2xl w-full max-w-md shadow-2xl relative text-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#99F6E4] rounded-lg flex items-center justify-center text-[#003732] font-bold shadow-sm">
            <span className="material-symbols-outlined text-xl">request_quote</span>
          </div>
          <div>
            <h3 className="font-heading font-bold text-white text-base sm:text-lg">
              Quick Calibration Quote
            </h3>
            <p className="text-xs text-teal-200 font-medium">
              Free estimate &amp; rapid turnaround
            </p>
          </div>
        </div>
        <span className="bg-emerald-300 text-emerald-950 text-[11px] px-2.5 py-1 rounded-full font-bold shadow-xs flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-pulse"></span>
          2h Response
        </span>
      </div>

      {submitted ? (
        <div className="py-6 text-center space-y-4 animate-fade-in">
          <div className="w-14 h-14 bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <span className="material-symbols-outlined text-3xl">check_circle</span>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">Quote Request Received!</h4>
            <p className="text-xs text-teal-100 mt-1 leading-relaxed">
              Our metrology specialists will review your requirements and respond within 2 hours.
            </p>
          </div>
          {(customerId || quoteId) && (
            <div className="bg-black/20 rounded-xl p-3 border border-white/10 text-xs">
              {customerId && (
                <div>
                  <span className="text-teal-200">Customer ID:</span>{" "}
                  <span className="font-mono font-bold text-white">{customerId}</span>
                </div>
              )}
              {quoteId && (
                <div className="mt-0.5">
                  <span className="text-teal-200">Quote Ref:</span>{" "}
                  <span className="font-mono font-bold text-white">{quoteId}</span>
                </div>
              )}
            </div>
          )}
          <button
            type="button"
            onClick={handleReset}
            className="w-full bg-[#99F6E4] hover:bg-white text-[#003732] font-bold py-2.5 px-4 rounded-xl text-xs transition-colors duration-200"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5 text-slate-800">
          {/* Honeypot field */}
          <div aria-hidden="true" className="hidden">
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="new-password"
            />
          </div>

          {errorMessage && (
            <div className="bg-red-500/20 border border-red-300/40 text-red-100 p-2.5 rounded-lg text-xs flex items-center gap-2">
              <span className="material-symbols-outlined text-sm shrink-0">error</span>
              <span>{errorMessage}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-white/90 mb-1">
              Your Name / Company *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma / Pharma Ltd"
              className="w-full h-10 px-3.5 rounded-lg bg-white/95 text-slate-900 placeholder:text-slate-400 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#99F6E4] transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-white/90 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full h-10 px-3.5 rounded-lg bg-white/95 text-slate-900 placeholder:text-slate-400 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#99F6E4] transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/90 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full h-10 px-3.5 rounded-lg bg-white/95 text-slate-900 placeholder:text-slate-400 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#99F6E4] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/90 mb-1">
              Calibration Service Discipline *
            </label>
            <select
              name="instrument_type"
              value={formData.instrument_type}
              onChange={handleChange}
              className="w-full h-10 px-3.5 rounded-lg bg-white/95 text-slate-900 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#99F6E4] transition-all cursor-pointer"
            >
              <option value="Mechanical Calibration">Mechanical (Pressure, Dimensions, Weight)</option>
              <option value="Thermal Calibration">Thermal (-199.99°C to +1300°C)</option>
              <option value="Electro-Technical">Electro-Technical (Voltage, RPM, Time)</option>
              <option value="HVAC Validation">HVAC Validation (AHU, Cleanrooms)</option>
              <option value="Thermal Validation">Thermal Validation (Autoclave, Ovens)</option>
              <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-[#EA580C] hover:bg-[#C2410C] active:scale-[0.98] text-white font-bold text-sm py-3 px-4 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined animate-spin text-base">progress_activity</span>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Get Fast Quote</span>
                <span className="material-symbols-outlined text-base">send</span>
              </>
            )}
          </button>

          <div className="pt-2 flex items-center justify-between text-[11px] text-teal-100/90 font-medium">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px] text-teal-300">verified</span>
              ISO 2017 / NABL
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px] text-teal-300">bolt</span>
              Fast Turnaround
            </span>
            <Link href="/contact" className="text-teal-200 underline hover:text-white transition-colors">
              Full Form &rarr;
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}
