export type ProductCategory = {
  id: string;
  title: string;
  description: string;
};

// Placeholder seed data. This module can be replaced by ERPNext-backed fetches via API routes.
export const productCategories: ProductCategory[] = [
  {
    id: "prep-line",
    title: "Preparation Line",
    description: "Work tables, sinks, and prep systems engineered for hygienic workflows.",
  },
  {
    id: "cooking-line",
    title: "Cooking Line",
    description: "Integrated ranges, fryers, and heavy-duty cooking stations for commercial throughput.",
  },
  {
    id: "cold-line",
    title: "Cold Line",
    description: "Refrigeration and controlled storage systems for performance and food safety.",
  },
  {
    id: "air-management",
    title: "Air Management",
    description: "Ventilation and exhaust assemblies tuned for compliance and kitchen efficiency.",
  },
];
