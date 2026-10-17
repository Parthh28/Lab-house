/**
 * Lab House - Home Page Logic (Exact replica of TestimonialSection.tsx)
 */

document.addEventListener("DOMContentLoaded", () => {
  const tabsContainer = document.getElementById("client-tabs-container");
  const clientHeaderIcon = document.getElementById("client-category-icon");
  const clientHeaderTitle = document.getElementById("client-category-title");
  const clientGrid = document.getElementById("client-category-grid");

  if (!tabsContainer || !clientGrid || typeof clientCategories === "undefined") return;

  let currentCategory = clientCategories[0]; // Default to 'pharma'

  function renderCategory(cat) {
    currentCategory = cat;

    // Update tab active state
    tabsContainer.querySelectorAll(".client-tab-btn").forEach((btn) => {
      const isSelected = btn.dataset.id === cat.id;
      if (isSelected) {
        btn.className = "client-tab-btn flex items-center gap-2 px-5 py-3 rounded-full font-heading font-medium text-sm transition-all duration-200 cursor-pointer bg-[#005c55] text-white shadow-md scale-105";
        btn.querySelector(".cat-count-badge").className = "cat-count-badge text-xs px-2 py-0.5 rounded-full font-bold bg-white/20 text-white";
      } else {
        btn.className = "client-tab-btn flex items-center gap-2 px-5 py-3 rounded-full font-heading font-medium text-sm transition-all duration-200 cursor-pointer bg-white text-slate-700 hover:bg-gray-100 border border-[#D1D5DB]";
        btn.querySelector(".cat-count-badge").className = "cat-count-badge text-xs px-2 py-0.5 rounded-full font-bold bg-gray-200 text-gray-800";
      }
    });

    // Update Header
    if (clientHeaderIcon) clientHeaderIcon.textContent = cat.icon;
    if (clientHeaderTitle) clientHeaderTitle.textContent = cat.name;

    // Render clients grid
    clientGrid.innerHTML = cat.clients.map((clientName) => `
      <div class="bg-[#F0FDFA]/50 hover:bg-[#F0FDFA] border border-[#0F766E]/20 hover:border-[#0F766E]/50 p-4 rounded-xl flex items-center gap-3 transition-all duration-200 group">
        <div class="w-8 h-8 rounded-lg bg-[#0F766E]/10 group-hover:bg-[#0F766E] text-[#0F766E] group-hover:text-white flex items-center justify-center font-bold text-xs shrink-0 transition-colors">
          <span class="material-symbols-outlined text-base">verified</span>
        </div>
        <span class="font-body text-sm font-medium text-[#121c2a] leading-snug">
          ${clientName}
        </span>
      </div>
    `).join("");
  }

  // Populate Tab Buttons
  tabsContainer.innerHTML = clientCategories.map((cat, idx) => `
    <button
      type="button"
      data-id="${cat.id}"
      class="client-tab-btn flex items-center gap-2 px-5 py-3 rounded-full font-heading font-medium text-sm transition-all duration-200 cursor-pointer ${
        idx === 0
          ? 'bg-[#005c55] text-white shadow-md scale-105'
          : 'bg-white text-slate-700 hover:bg-gray-100 border border-[#D1D5DB]'
      }"
    >
      <span class="material-symbols-outlined text-lg">${cat.icon}</span>
      <span>${cat.name}</span>
      <span class="cat-count-badge text-xs px-2 py-0.5 rounded-full font-bold ${
        idx === 0 ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-800'
      }">
        ${cat.count}
      </span>
    </button>
  `).join("");

  tabsContainer.querySelectorAll(".client-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = clientCategories.find((c) => c.id === btn.dataset.id);
      if (cat) renderCategory(cat);
    });
  });

  // Initial render
  renderCategory(clientCategories[0]);
});
