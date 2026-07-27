import { z } from "zod";

export const quoteRequestSchema = z.object({
  name: z
    .string()
    .min(2, "Full Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please provide a valid email address"),
  phone: z
    .string()
    .min(1, "Please provide a phone number")
    .max(30, "Phone number is too long"),
  company: z
    .string()
    .min(1, "Please provide your company name")
    .max(120, "Company name is too long"),
  instrument_type: z
    .string()
    .min(1, "Please select an instrument category"),
  message: z
    .string()
    .max(2000, "Message cannot exceed 2000 characters")
    .optional()
    .or(z.literal("")),
});

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;
