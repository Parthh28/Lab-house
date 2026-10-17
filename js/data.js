/**
 * Lab House - Calibration & Validation Metrology Data
 */

const siteConfig = {
  name: "Lab House",
  tagline: "ISO 2017 NABL Accredited Laboratory",
  accreditation: "ISO 2017 NABL Accredited Laboratory",
  certificateNumber: "CC-4341",
  validity: "26/03/2025 to 25/03/2029",
  establishedYear: 1999,
  proprietor: "Mr. Hitesh P. Mehta",
  telephone: ["+91 9326050186", "+91 9225211221"],
  email: "contact@labhouse.net",
  address: {
    street: "Vasai (E)",
    city: "Palghar",
    district: "Palghar",
    state: "Maharashtra",
    pincode: "401208",
    fullAddress: "205, Tirupati Trade Centre, Navghar Road, Vasai (E), Dist: Palghar – 401208, Maharashtra, India"
  }
};

const coreServices = [
  {
    id: "calibration",
    title: "Calibration Services",
    icon: "straighten",
    badge: "ISO 2017 & NABL",
    description: "Precision accredited calibration for 10 core industrial measurement parameters using 37 specialized master instruments with unbroken chain of national & international traceability.",
    turnaround: "Standard & Express Turnaround",
    features: [
      "Pressure & Vacuum (-1 to 700 bar)",
      "Temperature (-199.99°C to +1300°C) & Relative Humidity",
      "Dimensions (Calipers, Micrometers, Gauge Blocks)",
      "pH / Conductivity & Decade Resistance",
      "Electrical, Electro-Technical & Power Supply",
      "Weights / Weighing Scales (1 mg to 15 kg)",
      "RPM Tachometers & Precision Time/Timers"
    ]
  },
  {
    id: "thermal-validation",
    title: "Thermal Validation Services",
    icon: "thermostat",
    badge: "21 CFR Part 11 Compliant",
    description: "Comprehensive multi-point thermal mapping and qualification across controlled environments using high-accuracy wireless and wired data loggers traceable to national standards.",
    turnaround: "On-Site & In-House Facility",
    features: [
      "Area & Warehouse Temperature Mapping",
      "Walk-in type Stability Chambers (0 to 70°C, 0-100% RH)",
      "Incubators, Refrigerators & Cold Rooms/Chambers",
      "Autoclaves & Dry Heat Sterilizers",
      "Industrial Ovens, Furnaces & Sterilization Tunnels",
      "In-House Deep Freezer (-80 to 50°C) & Dry Block Calibrators"
    ]
  },
  {
    id: "hvac-validation",
    title: "HVAC Validation Services",
    icon: "air",
    badge: "Cleanroom ISO 14644",
    description: "Rigorous cleanroom, laminar flow, and HVAC validation protocols utilizing calibrated Aerosol Photometers and air flow instrumentation ensuring sterile processing conditions.",
    turnaround: "On-Site Specialist Team",
    features: [
      "Airborne Particle Count (APC) Testing",
      "Filter Integrity Test (PAO / DOP Aerosol Photometer)",
      "Air Velocity & Uniformity Testing",
      "Air Flow Pattern & Visualization Studies",
      "Comprehensive Air Balancing & ACH Calculation",
      "Laminar Air Flow (LAF) & Reverse LAF (RLAF) Validation"
    ]
  }
];

const calibrationParameters = [
  {
    title: "Pressure & Vacuum Calibration",
    icon: "speed",
    range: "-1 to 700 bar",
    accuracy: "High Precision Pneumatic & Hydraulic",
    desc: "Calibration of pressure gauges, vacuum sensors, differential pressure transmitters, and low pressure indicators using National Traceable Master Low Pressure Calibrators and Indicating Pressure Gauges."
  },
  {
    title: "Temperature & Thermal Calibration",
    icon: "thermostat",
    range: "-199.99°C to +1300°C",
    accuracy: "±0.01°C to ±0.5°C Traceability",
    desc: "NABL & ISO accredited calibration for RTD Pt-100 sensors, S-Type thermocouples, digital thermometers, dry block calibrators, and deep freezers (-80°C to 50°C)."
  },
  {
    title: "Dimensional & Mechanical Calibration",
    icon: "straighten",
    range: "Up to 600 mm (L.C. 0.001 mm)",
    accuracy: "'0' Grade Master Traceability",
    desc: "Precision verification of Vernier calipers, micrometers, height/depth gauges, dial indicators, and test plugs using Caliper Checkers, '0' Grade Gauge Blocks, and Granite Surface Plates."
  },
  {
    title: "Weights & Weighing Scales Calibration",
    icon: "scale",
    range: "1 mg to 15 kg (E2 & F1 Class)",
    accuracy: "National NPL Traceability",
    desc: "Calibration of analytical balances, precision industrial weighing scales, and mass comparators using calibrated E2 and F1 class standard stainless steel weights."
  },
  {
    title: "Electrical & Electro-Technical Calibration",
    icon: "bolt",
    range: "DC/AC Voltage, Current, Resistance, Frequency",
    accuracy: "IDEMI / National Traceability",
    desc: "Multi-parameter calibration for Digital Multimeters (DMMs), clamp meters, decade resistance boxes (0.01 Ω to 11.11 MΩ), power supplies, and process calibrators."
  },
  {
    title: "pH & Conductivity Calibration",
    icon: "science",
    range: "0 to 14 pH / 0 to 200 mS/cm",
    accuracy: "Traceable Buffer Solutions",
    desc: "Calibration and verification of benchtop and portable pH meters, conductivity meters, and TDS analyzers used in water purification and pharmaceutical quality control."
  },
  {
    title: "RPM & Tachometer Calibration",
    icon: "autorenew",
    range: "6 to 99,999 RPM",
    accuracy: "Contact & Non-Contact Verification",
    desc: "Accurate speed calibration for optical and mechanical tachometers, centrifuges, stirrers, and industrial rotating machinery."
  },
  {
    title: "Time & Timer Calibration",
    icon: "timer",
    range: "Precision Stopwatches & Timers",
    accuracy: "Atomic / National Clock Traceability",
    desc: "Calibration of laboratory digital stopwatches, process controllers, and duration timers ensuring exact process interval logging."
  }
];

const thermalValidationScope = [
  { name: "Area & Warehouse Temperature Mapping", spec: "Multi-point 3D spatial mapping across large storage facilities" },
  { name: "Walk-in type Stability Chamber Validation", spec: "0°C to 70°C and 0% to 100% RH loaded/unloaded qualification" },
  { name: "Incubators & Refrigerators Validation", spec: "Uniformity and recovery testing for biological storage units" },
  { name: "Cold Chamber / Cold Room Validation", spec: "Extended duration temperature distribution and door-open recovery studies" },
  { name: "Autoclaves Steam Sterilizer Validation", spec: "Heat penetration and heat distribution studies with F0 lethality calculation" },
  { name: "Ovens & Furnaces Thermal Profiling", spec: "High-temperature qualification for curing, drying, and annealing units" },
  { name: "Dry Heat Sterilizer Validation", spec: "Depyrogenation tunnel and dry heat sterilization cycle verification" },
  { name: "Sterilization Tunnels Profiling", spec: "Conveyor heat profile validation for pharmaceutical vial washing lines" }
];

const hvacValidationScope = [
  { name: "Airborne Particle Count (APC) Testing", detail: "Cleanroom classification and monitoring as per ISO 14644-1 standards using calibrated particle counters." },
  { name: "Filter Integrity Test (HEPA / ULPA)", detail: "PAO / DOP aerosol photometer testing to detect bypass, pinhole leaks, and filter efficiency in cleanrooms and biosafety cabinets." },
  { name: "Air Velocity & Uniformity Testing", detail: "Measurement of laminar flow speed across filters to verify face velocity and ensure contamination barrier integrity." },
  { name: "Air Flow Pattern & Visualization Studies", detail: "Smoke generation and video profiling to confirm laminar airflow direction and absence of stagnant turbulence pockets." },
  { name: "Air Balancing & ACH Calculation", detail: "Air Changes per Hour (ACH) verification and room differential pressure balancing across cascading containment zones." },
  { name: "LAF / RLAF Workstation Validation", detail: "Complete qualification of Laminar Air Flow and Reverse Laminar Air Flow dispensing booths and sampling hoods." }
];

const masterInstrumentsTable = [
  { sNo: "01", name: "Low Pressure Calibrator / Indicating Gauge", range: "-1 to 40 bar / 0 to 700 bar", agency: "National Traceable" },
  { sNo: "02", name: "Low Pressure Calibrator", range: "-1 to 20 bar", agency: "National Traceable" },
  { sNo: "03", name: "Indicating Pressure Gauge", range: "0 to 700 bar", agency: "National Traceable" },
  { sNo: "04", name: "Vacuum Gauge Standard", range: "-1 to 0 bar", agency: "National Traceable" },
  { sNo: "05", name: "Digital Thermometer with RTD Pt-100", range: "-199.99°C to 199.99°C / -200°C to 850°C", agency: "International Traceable / ERTL (W)" },
  { sNo: "06", name: "Temperature Master Sensors", range: "-80°C to 300°C", agency: "International Traceable" },
  { sNo: "07", name: "RTD Pt-100 Sensor (3-Wire / 4-Wire)", range: "-80°C to 300°C", agency: "National Traceable" },
  { sNo: "08", name: "S Type Thermocouples with Indicator", range: "0°C to 1300°C", agency: "National Traceable" },
  { sNo: "09", name: "Dry Block Temperature Calibrator", range: "-35 to 123°C / 50 to 650°C", agency: "National Traceable" },
  { sNo: "10", name: "Deep Freezer Facility", range: "-80°C to 50°C", agency: "In-House Calibration Facility" },
  { sNo: "11", name: "Decade Resistance Box", range: "0.01 Ω to 11.11 MΩ", agency: "National Traceable / ERTL (W)" },
  { sNo: "12", name: "Digital Multimeter (6.5 Digit)", range: "DC/AC Voltage, Current, Resistance, Frequency", agency: "International Traceable / IDEMI" },
  { sNo: "13", name: "Digital Tachometer Master", range: "6 to 99,999 RPM", agency: "National Traceable" },
  { sNo: "14", name: "Digital Temperature & Humidity Indicator", range: "10% to 95% RH, 0°C to 60°C", agency: "International Traceable / ERTL (W)" },
  { sNo: "15", name: "Digital Stopwatch / Timer Standard", range: "Process Duration Verification", agency: "National Traceable" },
  { sNo: "16", name: "Caliper Checker Master", range: "Up to 600 mm", agency: "National Traceable" },
  { sNo: "17", name: "Gauge Blocks ('0' Grade)", range: "0.5 to 100 mm", agency: "National Traceable" },
  { sNo: "18", name: "Granite Surface Plate ('0' Grade)", range: "630 x 630 mm Flatness Standard", agency: "National Traceable" },
  { sNo: "19", name: "Digital Vernier Caliper Standard", range: "0 to 300 mm (L.C. 0.01 mm)", agency: "National Traceable" },
  { sNo: "20", name: "Digital Micrometer Standard", range: "0 to 25 mm (L.C. 0.001 mm)", agency: "National Traceable" },
  { sNo: "21", name: "Dial Calibration Tester", range: "0 to 25 mm (L.C. 0.001 mm)", agency: "National Traceable" },
  { sNo: "22", name: "Standard Weights (E2 & F1 Class)", range: "1 mg to 15 kg (Analytical & Industrial)", agency: "National Traceable" },
  { sNo: "23", name: "pH Meter & Conductivity Standards", range: "0-14 pH / 0-200 mS/cm Buffer Traceability", agency: "National Traceable" },
  { sNo: "24", name: "Aerosol Photometer (PAO / DOP)", range: "HEPA / ULPA Filter Integrity Verification", agency: "National Traceable" },
  { sNo: "25", name: "Wireless & Wired Data Loggers (21 CFR 11)", range: "-80°C to +1200°C / 0 to 100% RH", agency: "National Traceable (±0.5°C)" }
];

const clientCategories = [
  {
    id: "pharma",
    name: "Pharmaceutical Companies",
    icon: "medication",
    count: 16,
    clients: [
      "Ipca Laboratories Ltd", "Allegro Pharmachem", "Aurobindo Pharmaceutical Research Center",
      "Calyx Chemical And Pharmaceutical Limited", "Classic Stripes Ltd", "Dabur Pharmaceutical Limited",
      "Dales Laboratories Pvt. Ltd", "Dales Remedies Pvt. Ltd", "Fresenius Kabi Oncology Ltd",
      "Gaylord Pharma System Pvt. Ltd", "Hemmo Pharmaceuticals Pvt. Ltd", "Indoco Remedies Ltd",
      "Ind-Swift Ltd", "Siro Clinpharm Pvt. Ltd", "Africure Pharmaceuticals India Pvt. Ltd",
      "Fine Organic Industries Ltd"
    ]
  },
  {
    id: "chemical",
    name: "Chemical Companies",
    icon: "science",
    count: 5,
    clients: [
      "Creek Insulation Chemical Pvt. Ltd", "Eastern Petroleum Pvt. Ltd", "K. M. Enterprises",
      "Kleanzaids Contamination Cont. Pvt. Ltd", "Rajhans Vegetable Oil Refinery Pvt. Ltd"
    ]
  },
  {
    id: "engineering",
    name: "Engineering & Industrial",
    icon: "precision_manufacturing",
    count: 10,
    clients: [
      "Ajas Component (PamGroup)", "Kanjur Naturals", "Kalisma Steel Pvt. Ltd",
      "Mahindra and Mahindra Ltd", "Raptakos, Brett & Co. Ltd", "Saksham Technologies Pvt. Ltd",
      "Sky Lab Instruments and Engineers Pvt. Ltd", "Siyaram Silk Mills Limited",
      "Suyog Engineers Pvt. Ltd", "The Paper Product Ltd"
    ]
  },
  {
    id: "other",
    name: "Other Industries & Institutions",
    icon: "factory",
    count: 12,
    clients: [
      "Shiv-Vani Oil & Gas Exploration Services Ltd", "Maker Laboratories Limited",
      "Mac-Chem Products (I) Pvt. Ltd", "Pratibha Ind. Ltd", "Refrigerated Distributors Pvt. Ltd",
      "REMI Ltd", "Unimed India", "Huhtamaki PPL Ltd", "IVP Limited", "Western Railway",
      "L'Oreal India Pvt. Ltd", "Lyka Labs Ltd"
    ]
  }
];

const nablServicesScope = [
  {
    id: "electro-tech",
    title: "Electro-Technical Calibration Services",
    discipline: "Electro-Technical",
    icon: "bolt",
    facility: "Permanent & Site Facility",
    range: "1 mV to 199.99 mV / 0.1 mA to 19.999 mA / -100°C to 1300°C",
    rangesList: ["1 mV to 199.99 mV", "0.1 mA to 19.999 mA", "-100°C to 1300°C"],
    method: "Direct & Simulation Method via 6½ Multimeter & Calibrator",
    masterEquipment: "6½ Digit DMM, Multifunction Calibrator, Decade Resistance Box",
    description: "NABL accredited calibration for DC Voltage, DC Current, Resistance (2 & 4 wire), RTD PT-100, and J/K Type Thermocouple simulation with low uncertainty."
  },
  {
    id: "mech-dim",
    title: "Mechanical - Dimensional Calibration Services",
    discipline: "Mechanical - Dimension",
    icon: "straighten",
    facility: "Permanent & Site Facility",
    range: "0 to 600 mm (L.C. down to 0.001 mm / 0.1 µm)",
    rangesList: ["0 to 600 mm", "L.C. down to 0.001 mm", "Master Foils 10 to 1890 µm"],
    method: "Comparison using Gauge Block Sets, Electronic Dials & Precision Level Blocks",
    masterEquipment: "'0' Grade Gauge Blocks, Caliper Checker, Surface Plate, Dial Tester",
    description: "Accredited verification of Vernier calipers, micrometers, height/depth gauges, dial indicators, bore gauges, pin/plug gauges, master foils, and granite surface plates."
  },
  {
    id: "mech-press",
    title: "Mechanical - Pressure & Vacuum Calibration Services",
    discipline: "Mechanical - Pressure",
    icon: "speed",
    facility: "Permanent & Site Facility",
    range: "-1 bar to 690 bar (Hydraulic & Pneumatic), 0 to 100 mbar (Low Pressure)",
    rangesList: ["-1 to 690 bar (Hyd. & Pneu.)", "0 to 100 mbar (Low Pressure)", "-1 to 0 bar (Vacuum)"],
    method: "Comparison Method as per DKD-R-6-1 Guidelines",
    masterEquipment: "Digital Pressure Gauges, Low Pressure Calibrators, Vacuum Masters",
    description: "High-precision calibration of dial & digital pressure gauges, low pressure indicators, vacuum sensors, and pressure transmitters with & without indicators."
  },
  {
    id: "thermal-hum",
    title: "Thermal & Humidity Calibration Services",
    discipline: "Thermal - Humidity",
    icon: "water_drop",
    facility: "Permanent & Site Facility",
    range: "15 °C to 45 °C @ 50 %rh / 35 %rh to 75 %rh @ 25 °C",
    rangesList: ["15 °C to 45 °C @ 50 %rh", "35 %rh to 75 %rh @ 25 °C"],
    method: "Comparison Method using Master Thermohygrometer & Humidity Chamber",
    masterEquipment: "Digital Master Thermohygrometer, Humidity Test Chamber",
    description: "NABL certified calibration for thermohygrometers, wireless data loggers, humidity sensors, and single-position environmental chambers."
  },
  {
    id: "thermal-temp",
    title: "Thermal - Temperature Equipment Calibration",
    discipline: "Thermal - Temperature",
    icon: "thermostat",
    facility: "Permanent & Site Facility",
    range: "-10 °C to 400 °C (Enclosures) / -100 °C to 1300 °C (Sensors)",
    rangesList: ["-10 °C to 400 °C (Enclosures)", "-100 °C to 1300 °C (Sensors)"],
    method: "Multi-channel sensor comparison (Min. 9 sensors) & Dry Block method",
    masterEquipment: "Multi-Channel PT-100 Logger, Dry Block Calibrator, Master Sensors",
    description: "Thermal calibration of incubators, BOD chambers, autoclaves, ovens, refrigerators, deep freezers, furnaces, RTD sensors, thermocouples, and temperature transmitters."
  },
  {
    id: "mass-weighing",
    title: "Mass & Weighing Calibration Scope",
    discipline: "Mechanical - Mass",
    icon: "scale",
    facility: "Permanent Facility",
    range: "1 mg to 15 kg (E2 & F1 Class Standards)",
    rangesList: ["1 mg to 15 kg", "E2 & F1 Class Standards"],
    method: "Direct Comparison with Calibrated Reference Weights",
    masterEquipment: "E2 & F1 Class Stainless Steel Standard Mass Weights",
    description: "Precision calibration of analytical balances, precision industrial scales, micro-balances, and mass comparators."
  },
  {
    id: "thermal-val",
    title: "Thermal Validation & Spatial Mapping Services",
    discipline: "Thermal Validation",
    icon: "grid_view",
    facility: "Field & On-Site Operations",
    range: "-80 °C to 1200 °C (21 CFR Part 11 Compliant Loggers)",
    rangesList: ["-80 °C to 1200 °C", "21 CFR Part 11 Compliant"],
    method: "cGMP / USFDA Compliant 3D Mapping & F0 Lethality Studies",
    masterEquipment: "Wireless & Wired 21 CFR Part 11 Data Loggers, Thermocouple Arrays",
    description: "Complete qualification & spatial temperature profiling for warehouses, walk-in stability chambers, cold rooms, autoclaves, dry heat sterilizers, and depyrogenation tunnels."
  },
  {
    id: "hvac-val",
    title: "HVAC & Cleanroom Validation Services",
    discipline: "HVAC Cleanroom Validation",
    icon: "air",
    facility: "Field & On-Site Operations",
    range: "ISO Class 5 to Class 8 (ISO 14644-1/2/3 Standards)",
    rangesList: ["ISO Class 5 to Class 8", "ISO 14644-1/2/3 Standards"],
    method: "Laser Particle Counting, DOP/PAO Photometer Integrity, Velocity Profiling",
    masterEquipment: "Laser Particle Counter, Aerosol Photometer (PAO/DOP), Anemometer",
    description: "Airborne Particle Counting (APC), HEPA filter leak testing, air velocity profiling, airflow visualization smoke studies, air balancing (ACH), and LAF/RLAF qualification."
  }
];

// All NABL Official Accredited Items (Permanent & Site)
const nablTableItems = [
  // Electro-Technical Permanent
  { sNo: 1, facility: "Permanent", discipline: "Electro-Technical", measurand: "DC Current (Measure)", method: "Using 6½ Multimeter by Direct Method", range: "0.1 mA to 19.999 mA", cmc: "0.06 mA" },
  { sNo: 2, facility: "Permanent", discipline: "Electro-Technical", measurand: "DC Voltage (Measure)", method: "Using 6½ Multimeter by Direct Method", range: "1 mV to 199.99 mV", cmc: "0.855 mV" },
  { sNo: 3, facility: "Permanent", discipline: "Electro-Technical", measurand: "DC Voltage (Source)", method: "Using Multifunction Calibrator by Direct Method", range: "1 mV to 199.99 mV", cmc: "0.086 mV" },
  { sNo: 4, facility: "Permanent", discipline: "Electro-Technical", measurand: "Direct Current (Source)", method: "Using Multifunction Calibrator by Direct Method", range: "0.1 mA to 19.999 mA", cmc: "0.09 mA" },
  { sNo: 5, facility: "Permanent", discipline: "Electro-Technical", measurand: "Resistance (2 Wire) (Measure)", method: "Using 6½ Multimeter By Direct Method", range: "1 Ohm to 400 Ohm", cmc: "0.145 Ohm" },
  { sNo: 6, facility: "Permanent", discipline: "Electro-Technical", measurand: "RTD (PT-100) (Measure)", method: "Using 6½ Multimeter By Direct Method", range: "(-) 100 °C to 600 °C", cmc: "0.6 °C" },
  { sNo: 7, facility: "Permanent", discipline: "Electro-Technical", measurand: "J Type Thermocouple (Source)", method: "Using Multifunction Calibrator by Direct Method", range: "0 °C to 750 °C", cmc: "1.8 °C" },
  { sNo: 8, facility: "Permanent", discipline: "Electro-Technical", measurand: "K Type Thermocouple (Source)", method: "Using Multifunction Calibrator by Direct Method", range: "(-) 100 °C to 1300 °C", cmc: "2.2 °C" },
  { sNo: 9, facility: "Permanent", discipline: "Electro-Technical", measurand: "Resistance (4 wire) (Source)", method: "Using Multifunction Calibrator by Simulation Method", range: "1 Ohm to 400 Ohm", cmc: "0.578 Ohm" },
  { sNo: 10, facility: "Permanent", discipline: "Electro-Technical", measurand: "RTD (PT-100) (Source)", method: "Using Multifunction Calibrator by Direct Method", range: "(-) 100 °C to 400 °C", cmc: "1.55 °C" },

  // Mechanical - Dimension Permanent
  { sNo: 11, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Bore Gauge (L.C.: 0.001 mm)", method: "Using Electronic Dial Calibration Tester by Comparison Method", range: "0 to 2 mm", cmc: "2.6 µm" },
  { sNo: 12, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Bore Gauge with Dial (L.C.: 0.001 mm)", method: "Using Electronic Dial Calibration Tester by Comparison Method", range: "0 to 1 mm", cmc: "3.6 µm" },
  { sNo: 13, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Coating Thickness (L.C.: 0.1 µm and Coarser)", method: "Using Master Foil by Comparison Method", range: "10 µm to 745 µm", cmc: "1.6 µm" },
  { sNo: 14, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Depth Micrometer (L.C.: 0.01 mm)", method: "Using Gauge Block Set and Surface Plate by Comparison Method", range: "0 to 150 mm", cmc: "8.2 µm" },
  { sNo: 15, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Depth Vernier (L.C.: 0.01 mm)", method: "Using Gauge Block Set and Surface Plate by Comparison Method", range: "0 to 300 mm", cmc: "8.2 µm" },
  { sNo: 16, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Dial Thickness Gauge (L.C.: 0.001 mm)", method: "Using Gauge Block Set by Comparison Method", range: "0 to 10 mm", cmc: "2.5 µm" },
  { sNo: 17, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Dial Thickness Gauge (L.C.: 0.01 mm)", method: "Using Gauge Block Set by Comparison Method", range: "0 to 20 mm", cmc: "8 µm" },
  { sNo: 18, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "External Micrometer (L.C.: 0.001 mm)", method: "Using Gauge Block Set by Comparison Method", range: "0 to 100 mm", cmc: "2.6 µm" },
  { sNo: 19, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "External Micrometer (L.C.: 0.01 mm)", method: "Using Gauge Block Set by Comparison Method", range: "100 mm to 300 mm", cmc: "6.4 µm" },
  { sNo: 20, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "External Micrometer (L.C.: 0.01 mm)", method: "Using Gauge Block Set by Comparison Method", range: "300 mm to 600 mm", cmc: "7.9 µm" },
  { sNo: 21, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Feeler Gauge", method: "Using Digital Micrometer by Comparison Method", range: "0.03 mm to 1 mm", cmc: "3.8 µm" },
  { sNo: 22, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Height Gauge - Dial / Digital / Analogue (L.C.: 0.01 mm)", method: "Using Caliper Checker and Surface Plate by Comparison Method", range: "0 to 300 mm", cmc: "13.8 µm" },
  { sNo: 23, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Height Gauge - Dial / Digital / Analogue (L.C.: 0.01 mm)", method: "Using Caliper Checker by Comparison Method", range: "0 to 600 mm", cmc: "13.0 µm" },
  { sNo: 24, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Internal Micrometer (Extension Rod)", method: "Using Gauge Block Set and Electronic Dial by Comparison Method", range: "25 mm to 500 mm", cmc: "3.6 µm" },
  { sNo: 25, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Internal Micrometer - Head (L.C.: 0.01 mm)", method: "Using Gauge Block Set and Electronic Dial by Comparison Method", range: "25 mm to 100 mm", cmc: "3.1 µm" },
  { sNo: 26, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Lever Dial Gauge (L.C.: 0.001 mm)", method: "Using Electronic Dial Calibration Tester by Comparison Method", range: "0 to 0.14 mm", cmc: "2.9 µm" },
  { sNo: 27, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Lever Dial Gauge (L.C.: 0.002 mm)", method: "Using Electronic Dial Calibration Tester by Comparison Method", range: "0 to 0.2 mm", cmc: "2.5 µm" },
  { sNo: 28, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Lever Dial Gauge (L.C.: 0.01 mm)", method: "Using Electronic Dial Calibration Tester by Comparison Method", range: "0 to 0.8 mm", cmc: "6 µm" },
  { sNo: 29, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Master Foils", method: "Using Electronic Dial Calibration Tester by Comparison Method", range: "10 µm to 745 µm", cmc: "2.9 µm" },
  { sNo: 30, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Master Foils", method: "Using Electronic Dial Calibration Tester by Comparison Method", range: "946 µm, 1290 µm, 1890 µm", cmc: "2.9 µm" },
  { sNo: 31, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Measuring Pin Gauge", method: "Using Gauge Block Set and Electronic Dial by Comparison Method", range: "1 mm to 20 mm", cmc: "2.9 µm" },
  { sNo: 32, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Micrometer Setting Standard", method: "Using Gauge Block Set and Electronic Dial by Comparison Method", range: "25 mm to 300 mm", cmc: "3.6 µm" },
  { sNo: 33, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Micrometer Setting Standard", method: "Using Gauge Block Set and Electronic Dial by Comparison Method", range: "300 mm to 600 mm", cmc: "3.9 µm" },
  { sNo: 34, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Pistol Caliper (L.C.: 0.1 mm)", method: "Using Gauge Block Set by Comparison Method", range: "0 to 60 mm", cmc: "70.3 µm" },
  { sNo: 35, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Plain Plug Gauge", method: "Using Gauge Block Set and Electronic Dial by Comparison Method", range: "2 mm to 100 mm", cmc: "2.9 µm" },
  { sNo: 36, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Plunger Dial Gauge (L.C.: 0.001 mm)", method: "Using Electronic Dial Calibration Tester by Comparison Method", range: "0 to 25 mm", cmc: "2.8 µm" },
  { sNo: 37, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Snap Gauge", method: "Using Gauge Block Set by Comparison Method", range: "3 mm to 100 mm", cmc: "1.6 µm" },
  { sNo: 38, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Ultrasonic Thickness Gauge", method: "Using Gauge Block Set by Comparison Method", range: "0 to 250 mm", cmc: "80.7 µm" },
  { sNo: 39, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Vernier Caliper - Dial / Digital / Analogue (L.C.: 0.01 mm)", method: "Using Caliper Checker By Comparison Method", range: "0 to 600 mm", cmc: "14.7 µm" },
  { sNo: 40, facility: "Permanent", discipline: "Mechanical - Dimension", measurand: "Vernier Caliper - Dial / Digital / Analogue (L.C.: 0.01 mm)", method: "Using Caliper Checker by Comparison Method", range: "0 to 300 mm", cmc: "13.0 µm" },

  // Mechanical - Pressure Permanent
  { sNo: 41, facility: "Permanent", discipline: "Mechanical - Pressure", measurand: "Hydraulic: Pressure Gauge (Dial/ Digital)", method: "Using Digital Pressure Gauge, Comparator by Comparison Method as per DKD-R-6-1", range: "0 to 300 bar", cmc: "0.43 bar" },
  { sNo: 42, facility: "Permanent", discipline: "Mechanical - Pressure", measurand: "Hydraulic: Pressure Gauge (Dial/ Digital)", method: "Using Digital Pressure Gauge, Comparator by Comparison Method as per DKD-R-6-1", range: "0 to 690 bar", cmc: "4.14 bar" },
  { sNo: 43, facility: "Permanent", discipline: "Mechanical - Pressure", measurand: "Low Pressure Gauge (Dial/ Digital)", method: "Using Digital Low Pressure Gauge, Comparator by Comparison Method as per DKD-R-6-1", range: "0 to 100 mbar", cmc: "1.32 mbar" },
  { sNo: 44, facility: "Permanent", discipline: "Mechanical - Pressure", measurand: "Pneumatic: Pressure Transmitter with & without Indicator", method: "Using Digital Pressure Gauge, 6½ Digit Multimeter by Comparison Method as per DKD-R-6-1", range: "(-) 0.9 bar to 0 bar", cmc: "0.009 bar" },
  { sNo: 45, facility: "Permanent", discipline: "Mechanical - Pressure", measurand: "Pneumatic: Pressure Transmitter with & without Indicator", method: "Using Digital Pressure Gauge & 6½ Digit Multimeter by Comparison Method as per DKD-R-6-1", range: "0 bar to 10 bar", cmc: "0.1 bar" },
  { sNo: 46, facility: "Permanent", discipline: "Mechanical - Pressure", measurand: "Pneumatic: Pressure Gauge (Dial/ Digital)", method: "Using Digital Pressure Gauge & Comparator by Comparison Method as per DKD-R-6-1", range: "0 to 20 bar", cmc: "0.1 bar" },
  { sNo: 47, facility: "Permanent", discipline: "Mechanical - Pressure", measurand: "Vacuum Gauge (Dial / Digital)", method: "Using Digital Pressure Gauge by Comparison Method as per DKD-R-6-1", range: "(-) 1 bar to 0 bar", cmc: "0.009 bar" },

  // Thermal - Humidity & Temperature Permanent
  { sNo: 48, facility: "Permanent", discipline: "Thermal - Humidity", measurand: "Indicator with sensor of Humidity / Environmental Chamber (Single Position)", method: "Using Digital Thermohygrometer by Comparison Method", range: "15 °C to 45 °C @ 50 %rh", cmc: "1.6 °C" },
  { sNo: 49, facility: "Permanent", discipline: "Thermal - Humidity", measurand: "Indicator with sensor of Humidity / Environmental Chamber (Single Position)", method: "Using Digital Thermohygrometer by Comparison Method", range: "35 %rh to 75 %rh @ 25°C", cmc: "3.47 %rh" },
  { sNo: 50, facility: "Permanent", discipline: "Thermal - Humidity", measurand: "Thermohygrometer, Wireless Data Logger, Temp & RH Sensor with Indicator", method: "Using Digital Thermohygrometer, Humidity Chamber by Comparison Method", range: "15 °C to 45 °C @ 50 %rh", cmc: "1.7 °C" },
  { sNo: 51, facility: "Permanent", discipline: "Thermal - Humidity", measurand: "Thermohygrometer, Wireless Data Logger, Temp & RH Sensor with Indicator", method: "Using Digital Thermohygrometer, Humidity Chamber by Comparison Method", range: "35 %rh to 75 %rh @ 25 °C", cmc: "3.47 %rh" },
  { sNo: 52, facility: "Permanent", discipline: "Thermal - Temperature", measurand: "Incubator, BOD, Autoclave, Oven, Refrigerator, Deep Freezer, Furnace (Multi Position)", method: "Using Multiple Channel Data Logger PT-100 (Minimum 9 sensor) by Comparison Method", range: "(-) 10 °C to 400 °C", cmc: "3.03 °C" },
  { sNo: 53, facility: "Permanent", discipline: "Thermal - Temperature", measurand: "RTD Sensor / Thermocouple Sensor", method: "Using Temp Sensor with Indicator (PT-100), 6½ Digit Multimeter & Dry Block Calibrator by Comparison Method", range: "(-) 10 °C to 60 °C", cmc: "0.78 °C" },
  { sNo: 54, facility: "Permanent", discipline: "Thermal - Temperature", measurand: "RTD Sensor / Thermocouple Sensor / Temperature Transmitter", method: "Using Temp Sensor with Indicator (PT-100), 6½ Digit Multimeter & Dry Block Calibrator by Comparison Method", range: "50 °C to 400 °C", cmc: "1.44 °C" },
  { sNo: 55, facility: "Permanent", discipline: "Thermal - Temperature", measurand: "Digital Thermometer / Data Logger", method: "Using Temp Sensor with Indicator (PT-100), Multifunction Calibrator & Dry Block Calibrator by Comparison Method", range: "(-) 10 °C to 60 °C", cmc: "0.78 °C" },
  { sNo: 56, facility: "Permanent", discipline: "Thermal - Temperature", measurand: "Digital Thermometer / Data Logger", method: "Using Temp Sensor with Indicator (PT-100), Multifunction Calibrator & Dry Block Calibrator by Comparison Method", range: "50 °C to 400 °C", cmc: "1.2 °C" },
  { sNo: 57, facility: "Permanent", discipline: "Thermal - Temperature", measurand: "Single Position Temperature Indicator", method: "Using Temperature Sensor with Indicator (PT-100) by Comparison Method", range: "(-) 10 °C to 400 °C", cmc: "1.45 °C" },

  // Site Facility Scope
  { sNo: 58, facility: "Site", discipline: "Electro-Technical", measurand: "DC Current (Measure)", method: "Using 6½ Multimeter by Direct Method", range: "0.1 mA to 19.999 mA", cmc: "0.06 mA" },
  { sNo: 59, facility: "Site", discipline: "Electro-Technical", measurand: "DC Voltage (Measure)", method: "Using 6½ Multimeter by Direct Method", range: "1 mV to 199.99 mV", cmc: "0.855 mV" },
  { sNo: 60, facility: "Site", discipline: "Electro-Technical", measurand: "DC Voltage (Source)", method: "Using Multifunction Calibrator by Direct Method", range: "1 mV to 199.99 mV", cmc: "0.086 mV" },
  { sNo: 61, facility: "Site", discipline: "Electro-Technical", measurand: "Direct Current (Source)", method: "Using Multifunctional Calibrator by Direct Method", range: "0.1 mA to 19.999 mA", cmc: "0.09 mA" },
  { sNo: 62, facility: "Site", discipline: "Electro-Technical", measurand: "Resistance (2 Wire) (Measure)", method: "Using 6½ Multimeter By Direct Method", range: "1 Ohm to 400 Ohm", cmc: "0.145 Ohm" },
  { sNo: 63, facility: "Site", discipline: "Electro-Technical", measurand: "RTD (PT-100) (Measure)", method: "Using 6½ Multimeter By Direct Method", range: "(-) 100 °C to 600 °C", cmc: "0.6 °C" },
  { sNo: 64, facility: "Site", discipline: "Electro-Technical", measurand: "J Type Thermocouple (Source)", method: "Using Multifunction Calibrator by Direct Method", range: "0 °C to 750 °C", cmc: "1.8 °C" },
  { sNo: 65, facility: "Site", discipline: "Electro-Technical", measurand: "K Type Thermocouple (Source)", method: "Using Multifunction Calibrator by Direct Method", range: "(-) 100 °C to 1300 °C", cmc: "2.2 °C" },
  { sNo: 66, facility: "Site", discipline: "Mechanical - Dimension", measurand: "Granite Surface Plate", method: "Using Precision Level Block by Comparison Method", range: "Up to 1000 mm × 1000 mm", cmc: "2.36 µm" },
  { sNo: 67, facility: "Site", discipline: "Mechanical - Pressure", measurand: "Hydraulic: Pressure Gauge", method: "Using Digital Pressure Gauge & Comparator as per DKD-R-6-1", range: "0 to 300 bar", cmc: "0.43 bar" },
  { sNo: 68, facility: "Site", discipline: "Mechanical - Pressure", measurand: "Hydraulic: Pressure Gauge", method: "Using Digital Pressure Gauge & Comparator as per DKD-R-6-1", range: "0 to 690 bar", cmc: "4.14 bar" },
  { sNo: 69, facility: "Site", discipline: "Mechanical - Pressure", measurand: "Low Pressure Gauge", method: "Using Digital Low Pressure Gauge as per DKD-R-6-1", range: "0 to 100 mbar", cmc: "1.32 mbar" },
  { sNo: 70, facility: "Site", discipline: "Mechanical - Pressure", measurand: "Pneumatic Pressure Transmitter", method: "Using Digital Pressure Gauge & 6½ Multimeter as per DKD-R-6-1", range: "0 to 10 bar", cmc: "0.1 bar" },
  { sNo: 71, facility: "Site", discipline: "Mechanical - Pressure", measurand: "Vacuum Gauge Standard", method: "Using Digital Pressure Gauge as per DKD-R-6-1", range: "(-) 1 bar to 0 bar", cmc: "0.009 bar" },
  { sNo: 72, facility: "Site", discipline: "Thermal - Humidity", measurand: "Environmental Chamber (Site)", method: "Using Digital Thermohygrometer by Comparison Method", range: "15 °C to 45 °C @ 50 %rh", cmc: "1.6 °C" },
  { sNo: 73, facility: "Site", discipline: "Thermal - Temperature", measurand: "Site Incubators, Autoclaves, Ovens, Freezers", method: "Using Multiple Channel Data Logger PT-100 (Min. 9 sensors)", range: "(-) 10 °C to 400 °C", cmc: "3.03 °C" }
];
