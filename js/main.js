/**
 * Lab House - Main Global Application Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  // ── 1. Splash Screen Logic (Home Page Entry & Reload Only) ──
  const splashScreen = document.getElementById("splash-screen");
  if (splashScreen) {
    const navEntry = performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
    const isReload = navEntry ? navEntry.type === "reload" : (performance.navigation && performance.navigation.type === 1);
    const isInternalNav = document.referrer && document.referrer.includes(window.location.host);

    // If navigating to Home from another page within the site (and not reloading), destroy immediately
    if (isInternalNav && !isReload) {
      splashScreen.remove();
      return;
    }

    const dismissSplash = () => {
      splashScreen.classList.add("fade-out");
      setTimeout(() => {
        splashScreen.remove();
      }, 400);
    };

    // Snappy reveal (1.1s) + brief hold (0.4s) = 1.5s, then fade out
    const splashTimer = setTimeout(dismissSplash, 1500);

    // Click anywhere to dismiss immediately
    splashScreen.addEventListener("click", () => {
      clearTimeout(splashTimer);
      dismissSplash();
    });
  }

  // ── 2. Sticky Header Elevation on Scroll ──
  const siteHeader = document.querySelector(".site-header");
  if (siteHeader) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    }, { passive: true });
  }

  // ── 3. Mobile Navigation Drawer ──
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const mobileMenuIcon = document.getElementById("mobile-menu-icon");

  if (mobileMenuBtn && mobileDrawer) {
    const closeDrawer = () => {
      mobileDrawer.classList.remove("open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      if (mobileMenuIcon) mobileMenuIcon.textContent = "menu";
    };

    const openDrawer = () => {
      mobileDrawer.classList.add("open");
      mobileMenuBtn.setAttribute("aria-expanded", "true");
      if (mobileMenuIcon) mobileMenuIcon.textContent = "close";
    };

    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = mobileDrawer.classList.contains("open");
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    // Close on link click
    mobileDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeDrawer();
      });
    });

    // Close when tapping/clicking outside the drawer
    document.addEventListener("click", (e) => {
      if (
        mobileDrawer.classList.contains("open") &&
        !mobileDrawer.contains(e.target) &&
        !mobileMenuBtn.contains(e.target)
      ) {
        closeDrawer();
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileDrawer.classList.contains("open")) {
        closeDrawer();
      }
    });

    // Close on window resize to desktop breakpoint (>= 768px)
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768 && mobileDrawer.classList.contains("open")) {
        closeDrawer();
      }
    }, { passive: true });
  }

  // ── 4. Active Navigation Highlight ──
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const targetFile = href.split("/").pop();

    if (
      (currentPath === "" || currentPath === "index.html") &&
      (targetFile === "index.html" || targetFile === "" || href === "/")
    ) {
      link.classList.add("active");
    } else if (targetFile && currentPath.includes(targetFile) && targetFile !== "index.html") {
      link.classList.add("active");
    }
  });

  // ── 5. Smooth Scroll for Anchor Links ──
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
