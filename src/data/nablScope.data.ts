export interface NablScopeItem {
  sNo: number;
  facility: "Permanent" | "Site";
  discipline: "Electro-Technical" | "Mechanical - Dimension" | "Mechanical - Pressure" | "Thermal - Humidity" | "Thermal - Temperature";
  measurand: string;
  method: string;
  range: string;
  cmc: string;
}

export interface NablServiceScopeCategory {
  id: string;
  title: string;
  discipline: string;
  icon: string;
  facility: string;
  range: string;
  rangesList: string[];
  method: string;
  masterEquipment: string;
  description: string;
}

export const nablMeta = {
  labName: "LAB HOUSE",
  address: "TIRUPATI TRADE CENTRE, GALA NO. 205, 2ND FLOOR, NAVGHAR, VASAI (EAST), VASAI, PALGHAR, MAHARASHTRA, INDIA",
  standard: "ISO 2017",
  certificateNumber: "CC-4341",
  validity: "26/03/2025 to 25/03/2029",
  totalPages: 18,
  confidenceNote: "CMCs represent expanded uncertainties expressed at approximately the 95% level of confidence, using a coverage factor of k = 2.",
};

export const nablServicesScope: NablServiceScopeCategory[] = [
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
    description: "NABL accredited calibration for DC Voltage, DC Current, Resistance (2 & 4 wire), RTD PT-100, and J/K Type Thermocouple simulation with low uncertainty.",
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
    description: "Accredited verification of Vernier calipers, micrometers, height/depth gauges, dial indicators, bore gauges, pin/plug gauges, master foils, and granite surface plates.",
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
    description: "High-precision calibration of dial & digital pressure gauges, low pressure indicators, vacuum sensors, and pressure transmitters with & without indicators.",
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
    description: "NABL certified calibration for thermohygrometers, wireless data loggers, humidity sensors, and single-position environmental chambers.",
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
    description: "Thermal calibration of incubators, BOD chambers, autoclaves, ovens, refrigerators, deep freezers, furnaces, RTD sensors, thermocouples, and temperature transmitters.",
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
    description: "Precision calibration of analytical balances, precision industrial scales, micro-balances, and mass comparators.",
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
    description: "Complete qualification & spatial temperature profiling for warehouses, walk-in stability chambers, cold rooms, autoclaves, dry heat sterilizers, and depyrogenation tunnels.",
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
    description: "Airborne Particle Counting (APC), HEPA filter leak testing, air velocity profiling, airflow visualization smoke studies, air balancing (ACH), and LAF/RLAF qualification.",
  },
];

export const nablPermanentScope: NablScopeItem[] = [
  // Electro-Technical
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

  // Mechanical - Dimension
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

  // Mechanical - Pressure
  { sNo: 41, facility: "Permanent", discipline: "Mechanical - Pressure", measurand: "Hydraulic: Pressure Gauge (Dial/ Digital)", method: "Using Digital Pressure Gauge, Comparator by Comparison Method as per DKD-R-6-1", range: "0 to 300 bar", cmc: "0.43 bar" },
  { sNo: 42, facility: "Permanent", discipline: "Mechanical - Pressure", measurand: "Hydraulic: Pressure Gauge (Dial/ Digital)", method: "Using Digital Pressure Gauge, Comparator by Comparison Method as per DKD-R-6-1", range: "0 to 690 bar", cmc: "4.14 bar" },
  { sNo: 43, facility: "Permanent", discipline: "Mechanical - Pressure", measurand: "Low Pressure Gauge (Dial/ Digital)", method: "Using Digital Low Pressure Gauge, Comparator by Comparison Method as per DKD-R-6-1", range: "0 to 100 mbar", cmc: "1.32 mbar" },
  { sNo: 44, facility: "Permanent", discipline: "Mechanical - Pressure", measurand: "Pneumatic: Pressure Transmitter with & without Indicator", method: "Using Digital Pressure Gauge, 6½ Digit Multimeter by Comparison Method as per DKD-R-6-1", range: "(-) 0.9 bar to 0 bar", cmc: "0.009 bar" },
  { sNo: 45, facility: "Permanent", discipline: "Mechanical - Pressure", measurand: "Pneumatic: Pressure Transmitter with & without Indicator", method: "Using Digital Pressure Gauge & 6½ Digit Multimeter by Comparison Method as per DKD-R-6-1", range: "0 bar to 10 bar", cmc: "0.1 bar" },
  { sNo: 46, facility: "Permanent", discipline: "Mechanical - Pressure", measurand: "Pneumatic: Pressure Gauge (Dial/ Digital)", method: "Using Digital Pressure Gauge & Comparator by Comparison Method as per DKD-R-6-1", range: "0 to 20 bar", cmc: "0.1 bar" },
  { sNo: 47, facility: "Permanent", discipline: "Mechanical - Pressure", measurand: "Vacuum Gauge (Dial / Digital)", method: "Using Digital Pressure Gauge by Comparison Method as per DKD-R-6-1", range: "(-) 1 bar to 0 bar", cmc: "0.009 bar" },

  // Thermal - Specific Heat & Humidity
  { sNo: 48, facility: "Permanent", discipline: "Thermal - Humidity", measurand: "Indicator with sensor of Humidity / Environmental Chamber (Single Position)", method: "Using Digital Thermohygrometer by Comparison Method", range: "15 °C to 45 °C @ 50 %rh", cmc: "1.6 °C" },
  { sNo: 49, facility: "Permanent", discipline: "Thermal - Humidity", measurand: "Indicator with sensor of Humidity / Environmental Chamber (Single Position)", method: "Using Digital Thermohygrometer by Comparison Method", range: "35 %rh to 75 %rh @ 25°C", cmc: "3.47 %rh" },
  { sNo: 50, facility: "Permanent", discipline: "Thermal - Humidity", measurand: "Thermohygrometer, Wireless Data Logger, Temp & RH Sensor with Indicator", method: "Using Digital Thermohygrometer, Humidity Chamber by Comparison Method", range: "15 °C to 45 °C @ 50 %rh", cmc: "1.7 °C" },
  { sNo: 51, facility: "Permanent", discipline: "Thermal - Humidity", measurand: "Thermohygrometer, Wireless Data Logger, Temp & RH Sensor with Indicator", method: "Using Digital Thermohygrometer, Humidity Chamber by Comparison Method", range: "35 %rh to 75 %rh @ 25 °C", cmc: "3.47 %rh" },

  // Thermal - Temperature
  { sNo: 52, facility: "Permanent", discipline: "Thermal - Temperature", measurand: "Incubator, BOD, Autoclave, Oven, Refrigerator, Deep Freezer, Furnace, Environmental Chambers (Multi Position)", method: "Using Multiple Channel Data Logger PT-100 (Minimum 9 sensor) by Comparison Method", range: "(-) 10 °C to 400 °C", cmc: "3.03 °C" },
  { sNo: 53, facility: "Permanent", discipline: "Thermal - Temperature", measurand: "RTD Sensor / Thermocouple Sensor", method: "Using Temp Sensor with Indicator (PT-100), 6½ Digit Multimeter & Dry Block Calibrator by Comparison Method", range: "(-) 10 °C to 60 °C", cmc: "0.78 °C" },
  { sNo: 54, facility: "Permanent", discipline: "Thermal - Temperature", measurand: "RTD Sensor / Thermocouple Sensor / Temperature Transmitter", method: "Using Temp Sensor with Indicator (PT-100), 6½ Digit Multimeter & Dry Block Calibrator by Comparison Method", range: "50 °C to 400 °C", cmc: "1.44 °C" },
  { sNo: 55, facility: "Permanent", discipline: "Thermal - Temperature", measurand: "RTD Sensor / Thermocouple Sensor with Indicator / Digital Thermometer / Data Logger", method: "Using Temp Sensor with Indicator (PT-100), Multifunction Calibrator & Dry Block Calibrator by Comparison Method", range: "(-) 10 °C to 60 °C", cmc: "0.78 °C" },
  { sNo: 56, facility: "Permanent", discipline: "Thermal - Temperature", measurand: "RTD Sensor / Thermocouple Sensor with Indicator / Digital Thermometer / Data Logger", method: "Using Temp Sensor with Indicator (PT-100), Multifunction Calibrator & Dry Block Calibrator by Comparison Method", range: "50 °C to 400 °C", cmc: "1.2 °C" },
  { sNo: 57, facility: "Permanent", discipline: "Thermal - Temperature", measurand: "Temperature Indicator with sensor of Incubator, BOD, Autoclave, Oven, Refrigerator, Deep Freezer, Furnace (Single Position)", method: "Using Temperature Sensor with Indicator (PT-100) by Comparison Method", range: "(-) 10 °C to 400 °C", cmc: "1.45 °C" },
];

export const nablSiteScope: NablScopeItem[] = [
  // Electro-Technical (Site)
  { sNo: 1, facility: "Site", discipline: "Electro-Technical", measurand: "DC Current (Measure)", method: "Using 6½ Multimeter by Direct Method", range: "0.1 mA to 19.999 mA", cmc: "0.06 mA" },
  { sNo: 2, facility: "Site", discipline: "Electro-Technical", measurand: "DC Voltage (Measure)", method: "Using 6½ Multimeter by Direct Method", range: "1 mV to 199.99 mV", cmc: "0.855 mV" },
  { sNo: 3, facility: "Site", discipline: "Electro-Technical", measurand: "DC Voltage (Source)", method: "Using Multifunction Calibrator by Direct Method", range: "1 mV to 199.99 mV", cmc: "0.086 mV" },
  { sNo: 4, facility: "Site", discipline: "Electro-Technical", measurand: "Direct Current (Source)", method: "Using Multifunctional Calibrator by Direct Method", range: "0.1 mA to 19.999 mA", cmc: "0.09 mA" },
  { sNo: 5, facility: "Site", discipline: "Electro-Technical", measurand: "Resistance (2 Wire) (Measure)", method: "Using 6½ Multimeter By Direct Method", range: "1 Ohm to 400 Ohm", cmc: "0.145 Ohm" },
  { sNo: 6, facility: "Site", discipline: "Electro-Technical", measurand: "RTD (PT-100) (Measure)", method: "Using 6½ Multimeter By Direct Method", range: "(-) 100 °C to 600 °C", cmc: "0.6 °C" },
  { sNo: 7, facility: "Site", discipline: "Electro-Technical", measurand: "J Type Thermocouple (Source)", method: "Using Multifunction Calibrator by Direct Method", range: "0 °C to 750 °C", cmc: "1.8 °C" },
  { sNo: 8, facility: "Site", discipline: "Electro-Technical", measurand: "K Type Thermocouple (Source)", method: "Using Multifunction Calibrator by Direct Method", range: "(-) 100 °C to 1300 °C", cmc: "2.2 °C" },
  { sNo: 9, facility: "Site", discipline: "Electro-Technical", measurand: "Resistance (4 wire) (Source)", method: "Using Multifunction Calibrator by Simulation Method", range: "1 Ohm to 400 Ohm", cmc: "0.578 Ohm" },
  { sNo: 10, facility: "Site", discipline: "Electro-Technical", measurand: "RTD (PT-100) (Source)", method: "Using Multifunction Calibrator by Direct Method", range: "(-) 100 °C to 400 °C", cmc: "1.55 °C" },

  // Mechanical - Dimension, Pressure & Thermal (Site)
  { sNo: 11, facility: "Site", discipline: "Mechanical - Dimension", measurand: "Surface Plate", method: "Using Precision Level Block by Comparison Method", range: "Up to 1000 mm × 1000 mm", cmc: "2.36 µm (2.217 × SQRT(L+W)/150 µm)" },
  { sNo: 12, facility: "Site", discipline: "Mechanical - Pressure", measurand: "Hydraulic: Pressure Gauge (Dial/ Digital)", method: "Using Digital Pressure Gauge, Comparator by Comparison Method as per DKD-R-6-1", range: "0 to 300 bar", cmc: "0.43 bar" },
  { sNo: 13, facility: "Site", discipline: "Mechanical - Pressure", measurand: "Hydraulic: Pressure Gauge (Dial/ Digital)", method: "Using Digital Pressure Gauge, Comparator by Comparison Method as per DKD-R-6-1", range: "0 to 690 bar", cmc: "4.14 bar" },
  { sNo: 14, facility: "Site", discipline: "Mechanical - Pressure", measurand: "Low Pressure Gauge (Dial/ Digital)", method: "Using Digital Low Pressure Gauge, Comparator by Comparison Method as per DKD-R-6-1", range: "0 to 100 mbar", cmc: "1.32 mbar" },
  { sNo: 15, facility: "Site", discipline: "Mechanical - Pressure", measurand: "Pneumatic: Pressure Transmitter with & without Indicator", method: "Using Digital Pressure Gauge, 6½ Digit Multimeter by Comparison Method as per DKD-R-6-1", range: "(-) 0.9 bar to 0 bar", cmc: "0.009 bar" },
  { sNo: 16, facility: "Site", discipline: "Mechanical - Pressure", measurand: "Pneumatic: Pressure Transmitter with & without Indicator", method: "Using Digital Pressure Gauge & 6½ Digit Multimeter by Comparison Method as per DKD-R-6-1", range: "0 bar to 10 bar", cmc: "0.1 bar" },
  { sNo: 17, facility: "Site", discipline: "Mechanical - Pressure", measurand: "Pneumatic: Pressure Gauge (Dial/ Digital)", method: "Using Digital Pressure Gauge & Comparator by Comparison Method as per DKD-R-6-1", range: "0 to 20 bar", cmc: "0.1 bar" },
  { sNo: 18, facility: "Site", discipline: "Mechanical - Pressure", measurand: "Vacuum Gauge (Dial / Digital)", method: "Using Digital Pressure Gauge by Comparison Method as per DKD-R-6-1", range: "(-) 1 bar to 0 bar", cmc: "0.009 bar" },
  { sNo: 19, facility: "Site", discipline: "Thermal - Humidity", measurand: "Indicator with sensor of Humidity / Environmental Chamber (Single Position)", method: "Using Digital Thermohygrometer by Comparison Method", range: "15 °C to 45 °C @ 50 %rh", cmc: "1.6 °C" },
  { sNo: 20, facility: "Site", discipline: "Thermal - Humidity", measurand: "Indicator with sensor of Humidity / Environmental Chamber (Single Position)", method: "Using Digital Thermohygrometer by Comparison Method", range: "35 %rh to 75 %rh @ 25°C", cmc: "3.47 %rh" },
  { sNo: 21, facility: "Site", discipline: "Thermal - Temperature", measurand: "Incubator, BOD, Autoclave, Oven, Refrigerator, Deep Freezer, Furnace, Environmental Chambers (Multi Position)", method: "Using Multiple Channel Data Logger PT-100 (Minimum 9 sensor) by Comparison Method", range: "(-) 10 °C to 400 °C", cmc: "3.03 °C" },
  { sNo: 22, facility: "Site", discipline: "Thermal - Temperature", measurand: "RTD Sensor / Thermocouple Sensor", method: "Using Temp Sensor with Indicator (PT-100), 6½ Digit Multimeter & Dry Block Calibrator by Comparison Method", range: "(-) 10 °C to 60 °C", cmc: "0.78 °C" },
  { sNo: 23, facility: "Site", discipline: "Thermal - Temperature", measurand: "RTD Sensor / Thermocouple Sensor / Temperature Transmitter", method: "Using Temp Sensor with Indicator (PT-100), 6½ Digit Multimeter & Dry Block Calibrator by Comparison Method", range: "50 °C to 400 °C", cmc: "1.44 °C" },
  { sNo: 24, facility: "Site", discipline: "Thermal - Temperature", measurand: "RTD Sensor / Thermocouple Sensor with Indicator / Digital Thermometer / Data Logger", method: "Using Temp Sensor with Indicator (PT-100), Multifunction Calibrator & Dry Block Calibrator by Comparison Method", range: "(-) 10 °C to 60 °C", cmc: "0.78 °C" },
  { sNo: 25, facility: "Site", discipline: "Thermal - Temperature", measurand: "RTD Sensor / Thermocouple Sensor with Indicator / Digital Thermometer / Data Logger", method: "Using Temp Sensor with Indicator (PT-100), Multifunction Calibrator & Dry Block Calibrator by Comparison Method", range: "50 °C to 400 °C", cmc: "1.2 °C" },
  { sNo: 26, facility: "Site", discipline: "Thermal - Temperature", measurand: "Temperature Indicator with sensor of Incubator, BOD, Autoclave, Oven, Refrigerator, Deep Freezer, Furnace (Single Position)", method: "Using Temperature Sensor with Indicator (PT-100) by Comparison Method", range: "(-) 10 °C to 400 °C", cmc: "1.45 °C" },
];
