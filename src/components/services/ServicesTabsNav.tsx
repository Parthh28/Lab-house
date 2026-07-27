interface ServicesTabsNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function ServicesTabsNav({ activeTab, setActiveTab }: ServicesTabsNavProps) {
  return (
    <section className="bg-white border-b border-gray-200 sticky top-16 z-40 shadow-sm px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 py-3 justify-center md:justify-start">
        <button
          onClick={() => setActiveTab("calibration")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-semibold text-sm transition-all cursor-pointer ${
            activeTab === "calibration"
              ? "bg-[#0F766E] text-white shadow"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <span className="material-symbols-outlined text-base">straighten</span>
          <span>1. Calibration Scope (Parameters)</span>
        </button>

        <button
          onClick={() => setActiveTab("thermal")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-semibold text-sm transition-all cursor-pointer ${
            activeTab === "thermal"
              ? "bg-[#0F766E] text-white shadow"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <span className="material-symbols-outlined text-base">thermostat</span>
          <span>2. Thermal Validation (Environments)</span>
        </button>

        <button
          onClick={() => setActiveTab("hvac")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-semibold text-sm transition-all cursor-pointer ${
            activeTab === "hvac"
              ? "bg-[#0F766E] text-white shadow"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <span className="material-symbols-outlined text-base">air</span>
          <span>3. HVAC Validation (Protocols)</span>
        </button>

        <button
          onClick={() => setActiveTab("instruments")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-semibold text-sm transition-all cursor-pointer ${
            activeTab === "instruments"
              ? "bg-[#0F766E] text-white shadow"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <span className="material-symbols-outlined text-base">precision_manufacturing</span>
          <span>4. Master Instruments Table (Standards)</span>
        </button>
      </div>
    </section>
  );
}
