# Lab House — Precision Calibration Services

**ISO 2017 NABL Accredited Laboratory (Certificate CC-4341)**  
Mechanical, Electro-Technical & Thermal Disciplines

Established in 1999 by Mr. Hitesh P. Mehta. Providing excellence in Calibration, Thermal Validation & HVAC Cleanroom Validation across India.

---

## 🚀 Technology Stack

This website is built with **Pure HTML5, Vanilla CSS, and Modern JavaScript** with zero external frontend build dependencies or runtime lock-in.

- **Structure**: Semantic HTML5 with JSON-LD LocalBusiness SEO schema
- **Design System**: Vanilla CSS (`css/style.css`) with custom CSS custom properties, responsive flexbox/grid, glassmorphism, and smooth micro-animations
- **Typography**: Google Fonts (*Google Sans Flex* & *Red Hat Display*), Material Symbols Outlined
- **Logic & Interactions**: Modern Vanilla JavaScript (`js/`)
  - `data.js`: Centralized metrology data (NABL scopes, parameters, master standards)
  - `main.js`: Global sticky header, mobile drawer menu, splash screen, active navigation
  - `services.js`: 5-tab services switching, NABL search & facility/discipline filtering, pagination
  - `home.js`: Dynamic client directory & sector filters
  - `quote.js`: Interactive quote request form with client-side validation & honeypot anti-spam

---

## 📂 Project Structure

```
lab-house/
├── index.html              # Home page with hero, stats, services overview & clients
├── services.html           # 5-Tab Services & NABL accredited scope directory
├── about.html              # Company history, laboratory facts, quality policy & ethics
├── contact.html            # Quote request form & Vasai laboratory contact details
├── login.html              # Client portal preview
├── privacy-policy.html     # Comprehensive privacy & data retention policy
├── css/
│   └── style.css           # Vanilla CSS design system
├── js/
│   ├── data.js             # Metrology data & site configuration
│   ├── main.js             # Global navigation & splash screen
│   ├── services.js         # Interactive tabs & scope table filters
│   ├── home.js             # Client directory filtering
│   └── quote.js            # Quote form validation & confirmation
└── assets/
    └── images/             # Images, logos, and icons
```

---

## 💻 Running Locally

### Option 1: Direct File Opening
Double click any `.html` file (e.g. `index.html`) in your browser.

### Option 2: Local HTTP Server
Run with npm:
```bash
npm start
# or
npm run dev
```
Or with Python:
```bash
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
