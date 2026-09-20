"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  nablMeta,
  nablServicesScope,
  nablPermanentScope,
  nablSiteScope,
  NablScopeItem,
} from "@/data/nablScope.data";

const INITIAL_VISIBLE_COUNT = 15;
const STEP_COUNT = 20;

export default function NablScopeSection() {
  const [viewMode, setViewMode] = useState<"services" | "official-table">("services");
  const [facilityFilter, setFacilityFilter] = useState<"all" | "Permanent" | "Site">("all");
  const [disciplineFilter, setDisciplineFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_COUNT);

  // Combine permanent & site scope items for table view
  const allTableItems: NablScopeItem[] = useMemo(() => {
    return [...nablPermanentScope, ...nablSiteScope];
  }, []);

  // Filter items dynamically based on search, facility, and discipline
  const filteredTableItems = useMemo(() => {
    return allTableItems.filter((item) => {
      const matchesFacility = facilityFilter === "all" || item.facility === facilityFilter;
      const matchesDiscipline = disciplineFilter === "all" || item.discipline === disciplineFilter;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.measurand.toLowerCase().includes(query) ||
        item.method.toLowerCase().includes(query) ||
        item.range.toLowerCase().includes(query) ||
        item.discipline.toLowerCase().includes(query);

      return matchesFacility && matchesDiscipline && matchesSearch;
    });
  }, [allTableItems, facilityFilter, disciplineFilter, searchQuery]);

  // Paginated visible table items
  const visibleTableItems = useMemo(() => {
    return filteredTableItems.slice(0, visibleCount);
  }, [filteredTableItems, visibleCount]);

  const handleDisciplineSelectFromCard = (discipline: string) => {
    setDisciplineFilter(discipline);
    setViewMode("official-table");
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleFacilityChange = (facility: "all" | "Permanent" | "Site") => {
    setFacilityFilter(facility);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleDisciplineChange = (discipline: string) => {
    setDisciplineFilter(discipline);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  return (
    <section className="py-12 px-6 md:px-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* View Mode Selector Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm w-full sm:w-auto">
            <button
              onClick={() => setViewMode("services")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                viewMode === "services"
                  ? "bg-[#005c55] text-white shadow-sm"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <span className="material-symbols-outlined text-base">grid_view</span>
              <span>1. NABL Scope in Services</span>
            </button>

            <button
              onClick={() => setViewMode("official-table")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                viewMode === "official-table"
                  ? "bg-[#005c55] text-white shadow-sm"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <span className="material-symbols-outlined text-base">table_chart</span>
              <span>2. Official Accredited Scope Table ({allTableItems.length} Parameters)</span>
            </button>
          </div>

          <div className="text-xs text-slate-600 font-medium">
            Showing <strong className="text-slate-900">{viewMode === "services" ? nablServicesScope.length : visibleTableItems.length}</strong> of <strong className="text-slate-900">{viewMode === "services" ? nablServicesScope.length : filteredTableItems.length}</strong> scope parameters
          </div>
        </div>

        {/* VIEW MODE 1: NABL SCOPE IN SERVICES GRID */}
        {viewMode === "services" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nablServicesScope.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-5 group hover:border-[#005c55]/50"
                >
                  <div className="space-y-4">
                    {/* Header: Icon & Facility Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-teal-50 text-[#005c55] border border-teal-200 flex items-center justify-center group-hover:bg-[#005c55] group-hover:text-white transition-colors duration-300 shadow-2xs">
                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-800 px-2.5 py-1 rounded-full border border-slate-200">
                        {item.facility}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-1.5">
                      <h3 className="font-heading font-bold text-lg text-slate-900 leading-snug group-hover:text-[#005c55] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-700 leading-relaxed font-body">
                        {item.description}
                      </p>
                    </div>

                    {/* Structured Range Chips */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-slate-600 uppercase tracking-wider">
                        <span className="material-symbols-outlined text-xs text-[#005c55]">straighten</span>
                        <span>Accredited Measurement Range</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.rangesList && item.rangesList.length > 0 ? (
                          item.rangesList.map((r, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center font-mono text-[11px] font-bold bg-emerald-50 text-emerald-950 border border-emerald-300 px-2.5 py-1 rounded-lg shadow-2xs"
                            >
                              {r}
                            </span>
                          ))
                        ) : (
                          <span className="inline-flex items-center font-mono text-[11px] font-bold bg-emerald-50 text-emerald-950 border border-emerald-300 px-2.5 py-1 rounded-lg shadow-2xs">
                            {item.range}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Footer: Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                    <button
                      onClick={() => handleDisciplineSelectFromCard(item.discipline)}
                      className="text-[#004540] bg-teal-50 hover:bg-teal-100 font-bold px-3.5 py-2 rounded-xl transition-colors flex items-center gap-1.5 text-[11px] border border-teal-300 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-xs">table_view</span>
                      <span>View Parameters</span>
                    </button>

                    <Link
                      href="/contact"
                      className="font-bold text-slate-800 hover:text-[#005c55] flex items-center gap-1 shrink-0 transition-colors"
                    >
                      <span>Inquire</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Banner for Validation Services */}
            <div className="bg-white border border-teal-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-slate-900">
                    Comprehensive Thermal &amp; Cleanroom Validation Compliance
                  </h4>
                  <p className="text-xs text-slate-600 max-w-2xl mt-1">
                    All Thermal &amp; HVAC validation operations follow ALCOA+ data integrity, 21 CFR Part 11 electronic records, and ISO 14644-1 cleanroom compliance with unbroken NABL traceability.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setViewMode("official-table")}
                className="bg-[#0F766E] hover:bg-[#0D6E66] text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-sm flex items-center gap-2 whitespace-nowrap"
              >
                <span>Browse Full Parameter Table</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        )}

        {/* VIEW MODE 2: OFFICIAL ACCREDITED SCOPE TABLE */}
        {viewMode === "official-table" && (
          <div className="space-y-6">
            
            {/* Table Filters & Search Bar */}
            <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Search Bar */}
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Search instrument, gauge, sensor..."
                    className="w-full pl-9 pr-4 py-2 text-xs font-body border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => handleSearchChange("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Facility Filter */}
                <div>
                  <select
                    value={facilityFilter}
                    onChange={(e) => handleFacilityChange(e.target.value as any)}
                    aria-label="Filter by Facility Type"
                    className="w-full py-2 px-3 text-xs font-body border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
                  >
                    <option value="all">All Facilities (Permanent &amp; Site)</option>
                    <option value="Permanent">Permanent Facility Scope ({nablPermanentScope.length} items)</option>
                    <option value="Site">Site Facility Scope ({nablSiteScope.length} items)</option>
                  </select>
                </div>

                {/* Discipline Filter */}
                <div>
                  <select
                    value={disciplineFilter}
                    onChange={(e) => handleDisciplineChange(e.target.value)}
                    aria-label="Filter by Discipline"
                    className="w-full py-2 px-3 text-xs font-body border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
                  >
                    <option value="all">All Disciplines</option>
                    <option value="Electro-Technical">Electro-Technical</option>
                    <option value="Mechanical - Dimension">Mechanical - Dimension</option>
                    <option value="Mechanical - Pressure">Mechanical - Pressure</option>
                    <option value="Thermal - Humidity">Thermal - Humidity</option>
                    <option value="Thermal - Temperature">Thermal - Temperature</option>
                  </select>
                </div>

                {/* Reset Filters */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      handleSearchChange("");
                      handleFacilityChange("all");
                      handleDisciplineChange("all");
                    }}
                    className="w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base">restart_alt</span>
                    <span>Reset Filters</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Official Scope Data Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 border-b border-slate-200 font-heading">
                      <th className="py-3.5 px-4 font-bold w-12 text-center">S.No</th>
                      <th className="py-3.5 px-4 font-bold w-28">Facility</th>
                      <th className="py-3.5 px-4 font-bold w-44">Discipline</th>
                      <th className="py-3.5 px-4 font-bold min-w-[220px]">Measurand / Instrument</th>
                      <th className="py-3.5 px-4 font-bold min-w-[240px]">Calibration Method</th>
                      <th className="py-3.5 px-4 font-bold min-w-[160px]">Measurement Range</th>
                      <th className="py-3.5 px-4 font-bold w-36 text-right">CMC (± Uncertainty)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-body">
                    {visibleTableItems.length > 0 ? (
                      visibleTableItems.map((row, idx) => (
                        <tr key={`${row.facility}-${row.sNo}-${idx}`} className="hover:bg-teal-50/50 transition-colors">
                          <td className="py-3 px-4 text-center font-mono font-semibold text-slate-600">{row.sNo}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                                row.facility === "Permanent"
                                  ? "bg-teal-100 text-teal-900 border border-teal-300"
                                  : "bg-amber-100 text-amber-950 border border-amber-300"
                              }`}
                            >
                              {row.facility}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-semibold text-slate-800">{row.discipline}</td>
                          <td className="py-3 px-4 font-bold text-slate-900">{row.measurand}</td>
                          <td className="py-3 px-4 text-slate-700">{row.method}</td>
                          <td className="py-3 px-4 font-mono font-medium text-slate-900">{row.range}</td>
                          <td className="py-3 px-4 text-right font-mono font-bold text-[#004540]">{row.cmc}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-slate-400">
                          <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-4xl text-slate-400">search_off</span>
                            <p className="font-semibold text-slate-700">No matching scope parameters found</p>
                            <p className="text-xs text-slate-500">Try adjusting your search term or filters.</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Show More / Show Less Action Controls */}
              {filteredTableItems.length > INITIAL_VISIBLE_COUNT && (
                <div className="p-4 bg-slate-50/80 border-t border-slate-200 flex flex-wrap items-center justify-center gap-3">
                  {visibleCount < filteredTableItems.length && (
                    <button
                      onClick={() => setVisibleCount((prev) => prev + STEP_COUNT)}
                      className="bg-[#005c55] hover:bg-[#004540] text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-lg">expand_more</span>
                      <span>Show More ({filteredTableItems.length - visibleCount} Remaining)</span>
                    </button>
                  )}

                  {visibleCount < filteredTableItems.length && (
                    <button
                      onClick={() => setVisibleCount(filteredTableItems.length)}
                      className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-xs px-5 py-2.5 rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-base">unfold_more</span>
                      <span>Show All ({filteredTableItems.length})</span>
                    </button>
                  )}

                  {visibleCount > INITIAL_VISIBLE_COUNT && (
                    <button
                      onClick={() => setVisibleCount(INITIAL_VISIBLE_COUNT)}
                      className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-base">expand_less</span>
                      <span>Show Less</span>
                    </button>
                  )}
                </div>
              )}

              {/* Table Footer Summary */}
              <div className="bg-slate-100 p-4 border-t border-slate-200 flex flex-wrap justify-between items-center text-xs text-slate-600 font-medium">
                <div>
                  Displaying <strong className="text-slate-900">{visibleTableItems.length}</strong> of <strong className="text-slate-900">{filteredTableItems.length}</strong> filtered items ({allTableItems.length} total NABL scope parameters).
                </div>
                <div className="italic text-slate-600">
                  * All CMCs represent expanded uncertainties at ~95% confidence level (k = 2).
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
