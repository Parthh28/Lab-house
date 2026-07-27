export interface ClientCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
  clients: string[];
}

export const clientCategories: ClientCategory[] = [
  {
    id: "pharma",
    name: "Pharmaceutical Companies",
    icon: "medication",
    count: 16,
    clients: [
      "Ipca Laboratories Ltd",
      "Allegro Pharmachem",
      "Aurobindo Pharmaceutical Research Center",
      "Calyx Chemical And Pharmaceutical Limited",
      "Classic Stripes Ltd",
      "Dabur Pharmaceutical Limited",
      "Dales Laboratories Pvt. Ltd",
      "Dales Remedies Pvt. Ltd",
      "Fresenius Kabi Oncology Ltd",
      "Gaylord Pharma System Pvt. Ltd",
      "Hemmo Pharmaceuticals Pvt. Ltd",
      "Indoco Remedies Ltd",
      "Ind-Swift Ltd",
      "Siro Clinpharm Pvt. Ltd",
      "Africure Pharmaceuticals India Pvt. Ltd",
      "Fine Organic Industries Ltd",
    ],
  },
  {
    id: "chemical",
    name: "Chemical Companies",
    icon: "science",
    count: 5,
    clients: [
      "Creek Insulation Chemical Pvt. Ltd",
      "Eastern Petroleum Pvt. Ltd",
      "K. M. Enterprises",
      "Kleanzaids Contamination Cont. Pvt. Ltd",
      "Rajhans Vegetable Oil Refinery Pvt. Ltd",
    ],
  },
  {
    id: "engineering",
    name: "Engineering & Industrial Companies",
    icon: "precision_manufacturing",
    count: 10,
    clients: [
      "Ajas Component (PamGroup)",
      "Kanjur Naturals",
      "Kalisma Steel Pvt. Ltd",
      "Mahindra and Mahindra Ltd",
      "Raptakos, Brett & Co. Ltd",
      "Saksham Technologies Pvt. Ltd",
      "Sky Lab Instruments and Engineers Pvt. Ltd",
      "Siyaram Silk Mills Limited",
      "Suyog Engineers Pvt. Ltd",
      "The Paper Product Ltd",
    ],
  },
  {
    id: "other",
    name: "Other Industries & Institutions",
    icon: "factory",
    count: 12,
    clients: [
      "Shiv-Vani Oil & Gas Exploration Services Ltd",
      "Maker Laboratories Limited",
      "Mac-Chem Products (I) Pvt. Ltd",
      "Pratibha Ind. Ltd",
      "Refrigerated Distributors Pvt. Ltd",
      "REMI Ltd",
      "Unimed India",
      "Huhtamaki PPL Ltd",
      "IVP Limited",
      "Western Railway",
      "L'Oreal India Pvt. Ltd",
      "Lyka Labs Ltd",
    ],
  },
];
