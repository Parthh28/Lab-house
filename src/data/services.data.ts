import { CalibrationParameter } from "@/types/site";

export const calibrationParameters: CalibrationParameter[] = [
  {
    title: "Pressure & Vacuum Calibration",
    icon: "speed",
    range: "-1 to 700 bar",
    accuracy: "High Precision Pneumatic & Hydraulic",
    desc: "Calibration of pressure gauges, vacuum sensors, differential pressure transmitters, and low pressure indicators using National Traceable Master Low Pressure Calibrators and Indicating Pressure Gauges.",
  },
  {
    title: "Temperature & Thermal Calibration",
    icon: "thermostat",
    range: "-199.99°C to +1300°C",
    accuracy: "±0.01°C to ±0.5°C Traceability",
    desc: "NABL & ISO/IEC 17025 accredited calibration for RTD Pt-100 sensors, S-Type thermocouples, digital thermometers, dry block calibrators, and deep freezers (-80°C to 50°C).",
  },
  {
    title: "Relative Humidity (RH) Calibration",
    icon: "water_drop",
    range: "10% to 95% RH (0°C to 60°C)",
    accuracy: "ERTL (W) / International Traceable",
    desc: "High-stability calibration for digital thermo-hygrometers, humidity indicators, stability chamber sensors, and cleanroom monitoring probes.",
  },
  {
    title: "Dimensional & Mechanical Calibration",
    icon: "straighten",
    range: "Up to 600 mm (L.C. 0.001 mm)",
    accuracy: "'0' Grade Master Traceability",
    desc: "Precision verification of Vernier calipers, micrometers, height/depth gauges, dial indicators, and test plugs using Caliper Checkers, '0' Grade Gauge Blocks, and Granite Surface Plates.",
  },
  {
    title: "Weights & Weighing Scales Calibration",
    icon: "scale",
    range: "1 mg to 15 kg (E2 & F1 Class)",
    accuracy: "National NPL/NABL Traceability",
    desc: "Calibration of analytical balances, precision industrial weighing scales, and mass comparators using calibrated E2 and F1 class standard stainless steel weights.",
  },
  {
    title: "Electrical & Electro-Technical Calibration",
    icon: "bolt",
    range: "DC/AC Voltage, Current, Resistance, Frequency",
    accuracy: "IDEMI / International Traceability",
    desc: "Multi-parameter calibration for Digital Multimeters (DMMs), clamp meters, decade resistance boxes (0.01 Ω to 11.11 MΩ), power supplies, and process calibrators.",
  },
  {
    title: "pH & Conductivity Calibration",
    icon: "science",
    range: "0 to 14 pH / 0 to 200 mS/cm",
    accuracy: "Traceable Buffer Solutions",
    desc: "Calibration and verification of benchtop and portable pH meters, conductivity meters, and TDS analyzers used in water purification and pharmaceutical quality control.",
  },
  {
    title: "RPM & Tachometer Calibration",
    icon: "autorenew",
    range: "6 to 99,999 RPM",
    accuracy: "Contact & Non-Contact Verification",
    desc: "Accurate speed calibration for optical and mechanical tachometers, centrifuges, stirrers, and industrial rotating machinery.",
  },
  {
    title: "Time & Timer Calibration",
    icon: "timer",
    range: "Precision Stopwatches & Timers",
    accuracy: "Atomic / National Clock Traceability",
    desc: "Calibration of laboratory digital stopwatches, process controllers, and duration timers ensuring exact process interval logging.",
  },
];

export interface ThermalValidationItem {
  name: string;
  spec: string;
}

export const thermalValidationScope: ThermalValidationItem[] = [
  { name: "Area & Warehouse Temperature Mapping", spec: "Multi-point 3D spatial mapping across large storage facilities" },
  { name: "Walk-in type Stability Chamber Validation", spec: "0°C to 70°C and 0% to 100% RH loaded/unloaded qualification" },
  { name: "Incubators & Refrigerators Validation", spec: "Uniformity and recovery testing for biological storage units" },
  { name: "Cold Chamber / Cold Room Validation", spec: "Extended duration temperature distribution and door-open recovery studies" },
  { name: "Autoclaves Steam Sterilizer Validation", spec: "Heat penetration and heat distribution studies with F0 lethality calculation" },
  { name: "Ovens & Furnaces Thermal Profiling", spec: "High-temperature qualification for curing, drying, and annealing units" },
  { name: "Dry Heat Sterilizer Validation", spec: "Depyrogenation tunnel and dry heat sterilization cycle verification" },
  { name: "Sterilization Tunnels Profiling", spec: "Conveyor heat profile validation for pharmaceutical vial washing lines" },
];

export interface HvacValidationItem {
  name: string;
  detail: string;
}

export const hvacValidationScope: HvacValidationItem[] = [
  { name: "Airborne Particle Count (APC) Testing", detail: "Cleanroom classification and monitoring as per ISO 14644-1 standards using calibrated particle counters." },
  { name: "Filter Integrity Test (HEPA / ULPA)", detail: "PAO / DOP aerosol photometer testing to detect bypass, pinhole leaks, and filter efficiency in cleanrooms and biosafety cabinets." },
  { name: "Air Velocity & Uniformity Testing", detail: "Measurement of laminar flow speed across filters to verify face velocity and ensure contamination barrier integrity." },
  { name: "Air Flow Pattern & Visualization Studies", detail: "Smoke generation and video profiling to confirm laminar airflow direction and absence of stagnant turbulence pockets." },
  { name: "Air Balancing & ACH Calculation", detail: "Air Changes per Hour (ACH) verification and room differential pressure balancing across cascading containment zones." },
  { name: "LAF / RLAF Workstation Validation", detail: "Complete qualification of Laminar Air Flow and Reverse Laminar Air Flow dispensing booths and sampling hoods." },
];

export interface MasterInstrumentItem {
  sNo: string;
  name: string;
  range: string;
  agency: string;
}

export const masterInstrumentsTable: MasterInstrumentItem[] = [
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
  { sNo: "25", name: "Wireless & Wired Data Loggers (21 CFR 11)", range: "-80°C to +1200°C / 0 to 100% RH", agency: "National Traceable (±0.5°C)" },
];
