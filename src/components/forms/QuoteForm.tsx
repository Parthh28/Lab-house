"use client";

import { useState } from "react";
import { quoteRequestSchema } from "@/lib/validators";
import type { QuoteRequestFormData, QuoteRequestResponse } from "@/types/forms";

interface QuoteFormProps {
  initialInstrument?: string;
}

export default function QuoteForm({ initialInstrument = "" }: QuoteFormProps) {
  const [formData, setFormData] = useState<QuoteRequestFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    instrument_type: initialInstrument || "Calibration Service",
    message: "",
  });

  // Honeypot field — bots auto-fill this, real users never see it
  const [honeypot, setHoneypot] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [quoteId, setQuoteId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);
    setFieldErrors({});

    const result = quoteRequestSchema.safeParse(formData);
    if (!result.success) {
      console.warn("[QuoteForm Client] Validation failed:", result.error.issues);
      const errors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        if (issue.path[0]) {
          errors[issue.path[0].toString()] = issue.message;
        }
      }
      setFieldErrors(errors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/quote-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...result.data,
          website: honeypot, // Honeypot field — sent to server for bot detection
        }),
      });

      const resData: QuoteRequestResponse = await response.json();

      if (!response.ok || !resData.success) {
        if (resData.fieldErrors) {
          setFieldErrors(resData.fieldErrors);
        }
        setGeneralError(
          resData.error || "Failed to submit request. Please try again."
        );
        return;
      }

      setSubmitted(true);
      setSuccessMessage(
        resData.message ||
          "Submitted successfully! Our metrology team will contact you within 2 hours with a detailed quote."
      );
      if (resData.quote_id) {
        setQuoteId(resData.quote_id);
      }
      if (resData.customer_id) {
        setCustomerId(resData.customer_id);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setGeneralError(
        "Network connection error. Please verify your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      instrument_type: "Calibration Service",
      message: "",
    });
    setSubmitted(false);
    setSuccessMessage("");
    setQuoteId("");
    setCustomerId("");
    setGeneralError(null);
    setFieldErrors({});
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 relative overflow-hidden">
      {/* Decorative top bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0F766E] to-[#99F6E4]"></div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 pb-6 border-b border-gray-100 mt-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Request a Calibration Quote
          </h2>
          <p className="text-sm text-slate-600 mt-1.5">Please provide your details below and we'll respond promptly.</p>
        </div>
        <span className="bg-teal-50 text-[#004540] font-bold text-sm px-4 py-2 rounded-full flex items-center gap-2 self-start sm:self-auto border border-teal-300">
          <span className="material-symbols-outlined text-[18px]">schedule</span>
          2-Hour Response
        </span>
      </div>

      {generalError && (
        <div className="bg-red-50 border border-red-100 text-red-700 p-4 rounded-xl text-sm flex items-start gap-3 mb-6">
          <span className="material-symbols-outlined text-lg shrink-0 mt-0.5">error</span>
          <div>{generalError}</div>
        </div>
      )}

      {submitted && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative border border-gray-100">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-50 mb-6 border border-emerald-100">
              <span className="material-symbols-outlined text-emerald-600 text-4xl">check_circle</span>
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-3 tracking-tight">Request Submitted!</h3>
            <p className="text-center text-gray-600 mb-6 leading-relaxed text-[15px]">
              {successMessage}
            </p>
            {customerId && (
              <div className="bg-gray-50/80 rounded-xl p-4 mb-8 text-center border border-gray-100">
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold block mb-1">Customer ID</span>
                <span className="font-mono font-bold text-[#0F766E] text-lg">{customerId}</span>
              </div>
            )}
            <button
              type="button"
              onClick={resetForm}
              className="w-full bg-[#0F766E] hover:bg-[#005c55] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 hover:shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field — hidden from real users, bots auto-fill it */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
        >
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="new-password"
            data-lpignore="true"
            data-form-type="other"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className={`w-full h-[44px] px-4 border rounded-xl bg-gray-50/50 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none transition-all text-sm ${
                fieldErrors.name ? "border-red-400 bg-red-50/30" : "border-gray-200"
              }`}
            />
            {fieldErrors.name && <p className="text-xs text-red-500 mt-1.5">{fieldErrors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company *
            </label>
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Laboratories"
              className={`w-full h-[44px] px-4 border rounded-xl bg-gray-50/50 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none transition-all text-sm ${
                fieldErrors.company ? "border-red-400 bg-red-50/30" : "border-gray-200"
              }`}
            />
            {fieldErrors.company && <p className="text-xs text-red-500 mt-1.5">{fieldErrors.company}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              className={`w-full h-[44px] px-4 border rounded-xl bg-gray-50/50 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none transition-all text-sm ${
                fieldErrors.email ? "border-red-400 bg-red-50/30" : "border-gray-200"
              }`}
            />
            {fieldErrors.email && <p className="text-xs text-red-500 mt-1.5">{fieldErrors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className={`w-full h-[44px] px-4 border rounded-xl bg-gray-50/50 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none transition-all text-sm ${
                fieldErrors.phone ? "border-red-400 bg-red-50/30" : "border-gray-200"
              }`}
            />
            {fieldErrors.phone && <p className="text-xs text-red-500 mt-1.5">{fieldErrors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Instrument Category *
            </label>
            <select
              name="instrument_type"
              value={formData.instrument_type}
              onChange={handleChange}
              className="w-full h-[44px] px-4 border border-gray-200 rounded-xl bg-gray-50/50 text-gray-900 focus:bg-white focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none transition-all text-sm appearance-none"
              style={{ backgroundImage: "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e')", backgroundPosition: "right 1rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em" }}
            >
              <option value="Calibration Service">Calibration Service</option>
              <option value="HVAC">HVAC</option>
              <option value="AMC">AMC</option>
              <option value="Temperature Mapping">Temperature Mapping</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Scope &amp; Equipment Details
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please describe the instruments, model numbers, and any specific calibration tolerances..."
            className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50/50 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none transition-all text-sm min-h-[120px] resize-y"
          />
        </div>

        <div className="pt-4 mt-2">
          <button
            type="submit"
            disabled={loading || submitted}
            className="bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:transform-none cursor-pointer"
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined animate-spin text-lg">
                  progress_activity
                </span>
                <span>Submitting...</span>
              </>
            ) : (
              <span>Submit Request</span>
            )}
          </button>

        </div>
      </form>
    </div>
  );
}
