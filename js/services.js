/**
 * Lab House - Services & NABL Scope Interactive Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  // ── 1. Main Services Tab Navigation ──
  const tabBtns = document.querySelectorAll(".tab-btn[data-tab]");
  const tabPanes = document.querySelectorAll(".services-tab-pane");

  function switchMainTab(targetTabId) {
    tabBtns.forEach((btn) => {
      if (btn.dataset.tab === targetTabId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    tabPanes.forEach((pane) => {
      if (pane.id === `tab-${targetTabId}`) {
        pane.style.display = "block";
      } else {
        pane.style.display = "none";
      }
    });

    // Update URL hash without jumping
    history.replaceState(null, null, `#${targetTabId}`);
  }

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      switchMainTab(btn.dataset.tab);
    });
  });

  // Handle URL hash on load
  const currentHash = window.location.hash.replace("#", "");
  if (currentHash && ["nabl", "calibration", "thermal", "hvac", "instruments"].includes(currentHash)) {
    switchMainTab(currentHash);
  }

  // ── 2. NABL Scope: Cards Grid vs Official Table Toggle ──
  const viewGridBtn = document.getElementById("view-mode-grid");
  const viewTableBtn = document.getElementById("view-mode-table");
  const gridContainer = document.getElementById("nabl-cards-grid");
  const tableContainer = document.getElementById("nabl-table-section");

  function setNablViewMode(mode) {
    if (mode === "grid") {
      if (viewGridBtn) { viewGridBtn.classList.add("active"); viewGridBtn.classList.remove("inactive"); }
      if (viewTableBtn) { viewTableBtn.classList.remove("active"); viewTableBtn.classList.add("inactive"); }
      if (gridContainer) gridContainer.style.display = "grid";
      if (tableContainer) tableContainer.style.display = "none";
    } else {
      if (viewGridBtn) { viewGridBtn.classList.remove("active"); viewGridBtn.classList.add("inactive"); }
      if (viewTableBtn) { viewTableBtn.classList.add("active"); viewTableBtn.classList.remove("inactive"); }
      if (gridContainer) gridContainer.style.display = "none";
      if (tableContainer) tableContainer.style.display = "block";
    }
  }

  if (viewGridBtn && viewTableBtn) {
    viewGridBtn.addEventListener("click", () => setNablViewMode("grid"));
    viewTableBtn.addEventListener("click", () => setNablViewMode("table"));
  }

  // ── 3. Populate 8 NABL Scope Cards Grid ──
  if (gridContainer && typeof nablServicesScope !== "undefined") {
    gridContainer.innerHTML = nablServicesScope.map((cat) => `
      <div class="bg-white border border-[#D1D5DB] rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between">
        <div class="space-y-4">
          <div class="flex items-center justify-between pb-3 border-b border-gray-100">
            <div class="w-12 h-12 rounded-xl bg-[#F0FDFA] text-[#005c55] flex items-center justify-center font-bold border border-teal-200">
              <span class="material-symbols-outlined text-2xl">${cat.icon}</span>
            </div>
            <span class="bg-[#F0FDFA] text-[#004540] text-xs font-bold px-3 py-1 rounded-full border border-teal-300">
              ${cat.facility}
            </span>
          </div>
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#005c55]">${cat.discipline}</span>
            <h3 class="font-heading font-bold text-xl text-[#121c2a] mt-1">${cat.title}</h3>
          </div>
          <p class="font-body text-sm text-slate-600 leading-relaxed">${cat.description}</p>
          <div class="space-y-2 pt-3 border-t border-gray-200 text-xs">
            <div class="flex items-start gap-2">
              <strong class="text-slate-800 shrink-0 font-semibold">Range:</strong>
              <span class="text-slate-600 font-mono">${cat.range}</span>
            </div>
            <div class="flex items-start gap-2">
              <strong class="text-slate-800 shrink-0 font-semibold">Method:</strong>
              <span class="text-slate-600">${cat.method}</span>
            </div>
            <div class="flex items-start gap-2">
              <strong class="text-slate-800 shrink-0 font-semibold">Standard:</strong>
              <span class="text-slate-600">${cat.masterEquipment}</span>
            </div>
          </div>
        </div>
        <div class="pt-5 mt-5 border-t border-gray-200 flex items-center justify-between">
          <button class="btn-filter-discipline text-xs font-bold text-[#005c55] hover:underline flex items-center gap-1 cursor-pointer" data-discipline="${cat.discipline}">
            <span>View Parameters</span>
            <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
          <a href="contact.html?instrument=${encodeURIComponent(cat.title)}" class="text-xs font-bold text-[#EA580C] hover:text-[#C2410C] flex items-center gap-1">
            <span>Request Quote</span>
            <span class="material-symbols-outlined text-xs">open_in_new</span>
          </a>
        </div>
      </div>
    `).join("");

    // Listen to "View Parameters" clicks inside cards
    gridContainer.querySelectorAll(".btn-filter-discipline").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetDiscipline = btn.dataset.discipline;
        setNablViewMode("table");
        setDisciplineFilter(targetDiscipline);
      });
    });
  }

  // ── 4. Interactive Search & Filtering on Official Scope Table ──
  const searchInput = document.getElementById("table-search-input");
  const facilityFilterBtns = document.querySelectorAll(".facility-filter-btn");
  const disciplinePills = document.querySelectorAll(".discipline-pill");
  const tableBody = document.getElementById("nabl-table-body");
  const countDisplay = document.getElementById("scope-counter");
  const loadMoreBtn = document.getElementById("load-more-btn");

  let currentFacility = "all";
  let currentDiscipline = "all";
  let currentSearch = "";
  let visibleLimit = 15;

  function renderTable() {
    if (!tableBody || typeof nablTableItems === "undefined") return;

    const filtered = nablTableItems.filter((item) => {
      const matchFacility = currentFacility === "all" || item.facility === currentFacility;
      const matchDiscipline = currentDiscipline === "all" || item.discipline.toLowerCase().includes(currentDiscipline.toLowerCase());
      const query = currentSearch.toLowerCase().trim();
      const matchSearch =
        !query ||
        item.measurand.toLowerCase().includes(query) ||
        item.method.toLowerCase().includes(query) ||
        item.range.toLowerCase().includes(query) ||
        item.discipline.toLowerCase().includes(query) ||
        item.cmc.toLowerCase().includes(query);

      return matchFacility && matchDiscipline && matchSearch;
    });

    if (countDisplay) {
      countDisplay.textContent = `Showing ${Math.min(visibleLimit, filtered.length)} of ${filtered.length} parameters`;
    }

    const itemsToShow = filtered.slice(0, visibleLimit);

    if (itemsToShow.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center py-8 text-slate-500">
            <span class="material-symbols-outlined text-3xl mb-2 block text-slate-400">search_off</span>
            No matching calibration parameters found for "${currentSearch}".
          </td>
        </tr>
      `;
    } else {
      tableBody.innerHTML = itemsToShow.map((row) => `
        <tr>
          <td class="font-mono font-bold text-[#005c55] text-center">${row.sNo}</td>
          <td>
            <span class="badge ${row.facility === 'Permanent' ? 'badge-teal' : 'badge-orange'} font-mono text-[11px]">
              ${row.facility}
            </span>
          </td>
          <td class="font-bold text-slate-800 text-xs">${row.discipline}</td>
          <td class="font-semibold text-slate-900">${row.measurand}</td>
          <td class="text-xs text-slate-600">${row.method}</td>
          <td class="font-mono text-xs text-slate-700">${row.range}</td>
          <td class="font-mono text-xs font-bold text-teal-800 bg-teal-50/70 px-2 py-1 rounded border border-teal-200">${row.cmc}</td>
        </tr>
      `).join("");
    }

    if (loadMoreBtn) {
      if (visibleLimit >= filtered.length) {
        loadMoreBtn.style.display = "none";
      } else {
        loadMoreBtn.style.display = "inline-flex";
      }
    }
  }

  function setDisciplineFilter(disp) {
    currentDiscipline = disp;
    visibleLimit = 15;
    disciplinePills.forEach((p) => {
      if (p.dataset.discipline === disp) {
        p.classList.add("active");
      } else {
        p.classList.remove("active");
      }
    });
    renderTable();
  }

  // Facility filter handlers
  facilityFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      facilityFilterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFacility = btn.dataset.facility;
      visibleLimit = 15;
      renderTable();
    });
  });

  // Discipline pills handlers
  disciplinePills.forEach((pill) => {
    pill.addEventListener("click", () => {
      setDisciplineFilter(pill.dataset.discipline);
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      visibleLimit = 15;
      renderTable();
    });
  }

  // Load more button
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      visibleLimit += 20;
      renderTable();
    });
  }

  // Initial table render
  renderTable();
});
