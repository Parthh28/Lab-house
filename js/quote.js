/**
 * Lab House - Quote Request Form & Validation Logic
 * Matches the original QuoteForm.tsx behavior and modal popup
 */

document.addEventListener("DOMContentLoaded", () => {
  const quoteForm = document.getElementById("quote-form");
  const modal = document.getElementById("quote-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalCustomerId = document.getElementById("modal-customer-id");
  const generalError = document.getElementById("general-error");
  const generalErrorText = document.getElementById("general-error-text");

  // Pre-fill instrument if passed in query string (?instrument=...)
  const urlParams = new URLSearchParams(window.location.search);
  const paramInstrument = urlParams.get("instrument");
  const instrumentSelect = document.getElementById("instrument_type");
  if (paramInstrument && instrumentSelect) {
    let found = false;
    for (let opt of instrumentSelect.options) {
      if (opt.value.toLowerCase() === paramInstrument.toLowerCase()) {
        opt.selected = true;
        found = true;
        break;
      }
    }
    if (!found) {
      const newOption = new Option(paramInstrument, paramInstrument, true, true);
      instrumentSelect.add(newOption);
    }
  }

  if (!quoteForm) return;

  function clearErrors() {
    if (generalError) generalError.classList.add("hidden");
    const errorIds = ["name", "company", "email", "phone", "instrument"];
    errorIds.forEach((id) => {
      const errEl = document.getElementById(`${id}-error`);
      const inputEl = document.getElementById(id === "instrument" ? "instrument_type" : id);
      if (errEl) {
        errEl.textContent = "";
        errEl.classList.add("hidden");
      }
      if (inputEl) {
        inputEl.classList.remove("border-red-400", "bg-red-50/30");
        inputEl.classList.add("border-gray-200");
      }
    });
  }

  function setFieldError(fieldId, errorMsg) {
    const inputEl = document.getElementById(fieldId === "instrument" ? "instrument_type" : fieldId);
    const errEl = document.getElementById(`${fieldId}-error`);
    if (inputEl) {
      inputEl.classList.remove("border-gray-200");
      inputEl.classList.add("border-red-400", "bg-red-50/30");
    }
    if (errEl) {
      errEl.textContent = errorMsg;
      errEl.classList.remove("hidden");
    }
  }

  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    const name = document.getElementById("name").value.trim();
    const company = document.getElementById("company").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const instrumentType = document.getElementById("instrument_type").value;
    const honeypot = document.getElementById("website").value.trim();

    let hasErrors = false;

    if (!name || name.length < 2) {
      setFieldError("name", "Full Name must be at least 2 characters.");
      hasErrors = true;
    }

    if (!company || company.length < 2) {
      setFieldError("company", "Company name is required.");
      hasErrors = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setFieldError("email", "Please provide a valid business email address.");
      hasErrors = true;
    }

    if (!phone || phone.length < 6) {
      setFieldError("phone", "Please provide a valid contact phone number.");
      hasErrors = true;
    }

    if (!instrumentType) {
      setFieldError("instrument", "Please select an instrument category.");
      hasErrors = true;
    }

    if (hasErrors) {
      if (generalError) {
        generalError.classList.remove("hidden");
        generalError.classList.add("flex");
        if (generalErrorText) generalErrorText.textContent = "Please complete all required fields correctly.";
      }
      return;
    }

    // Bot honeypot detection
    if (honeypot) {
      console.warn("Spam bot detected via honeypot field.");
    }

    // Loading state on button
    const submitBtn = document.getElementById("submit-btn");
    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="material-symbols-outlined animate-spin text-lg">progress_activity</span>
      <span>Submitting...</span>
    `;

    // Generate Customer ID and show modal
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const customerId = `CUST-${randomSuffix}`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;

      if (modalCustomerId) {
        modalCustomerId.textContent = customerId;
      }

      if (modal) {
        modal.classList.remove("hidden");
      }

      quoteForm.reset();
    }, 600);
  });

  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  }
});
