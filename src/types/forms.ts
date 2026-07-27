export interface QuoteRequestFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  instrument_type: string;
  message?: string;
}

export interface QuoteRequestResponse {
  success?: boolean;
  message?: string;
  quote_id?: string;
  customer_id?: string;
  error?: string;
  fieldErrors?: Record<string, string>;
}
