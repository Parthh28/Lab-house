interface ServicesTabsNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function ServicesTabsNav({ activeTab, setActiveTab }: ServicesTabsNavProps) {
  return (
    <section className="bg-white border-b border-gray-200 sticky top-16 z-40 shadow-sm px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-2.5 py-3 justify-center md:justify-start">
        <button
          onClick={() => setActiveTab("nabl")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-heading font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
            activeTab === "nabl"
              ? "bg-[#005c55] text-white shadow"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200"
          }`}
        >
          <span className="material-symbols-outlined text-base">verified</span>
          <span>1. NABL Scope in Services</span>
        </button>

        <button
          onClick={() => setActiveTab("calibration")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-heading font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
            activeTab === "calibration"
              ? "bg-[#005c55] text-white shadow"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200"
          }`}
        >
          <span className="material-symbols-outlined text-base">straighten</span>
          <span>2. Calibration Parameters</span>
        </button>

        <button
          onClick={() => setActiveTab("thermal")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-heading font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
            activeTab === "thermal"
              ? "bg-[#005c55] text-white shadow"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200"
          }`}
        >
          <span className="material-symbols-outlined text-base">thermostat</span>
          <span>3. Thermal Validation</span>
        </button>

        <button
          onClick={() => setActiveTab("hvac")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-heading font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
            activeTab === "hvac"
              ? "bg-[#005c55] text-white shadow"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200"
          }`}
        >
          <span className="material-symbols-outlined text-base">air</span>
          <span>4. HVAC Cleanroom</span>
        </button>

        <button
          onClick={() => setActiveTab("instruments")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-heading font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
            activeTab === "instruments"
              ? "bg-[#005c55] text-white shadow"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200"
          }`}
        >
          <span className="material-symbols-outlined text-base">precision_manufacturing</span>
          <span>5. Master Standards Table</span>
        </button>
      </div>
    </section>
  );
}
