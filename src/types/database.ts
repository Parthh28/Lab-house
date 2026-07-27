export interface Database {
  public: {
    Tables: {
      quote_requests: {
        Row: {
          id: string;
          customer_id: string;
          name: string;
          email: string;
          phone: string | null;
          company: string | null;
          instrument_type: string;
          message: string | null;
          status: "pending" | "contacted" | "quoted" | "closed";
          created_at: string;
          ip_address: string | null;
        };
        Insert: {
          id?: string;
          customer_id: string;
          name: string;
          email: string;
          phone?: string | null;
          company?: string | null;
          instrument_type: string;
          message?: string | null;
          status?: "pending" | "contacted" | "quoted" | "closed";
          created_at?: string;
          ip_address?: string | null;
        };
        Update: {
          status?: "pending" | "contacted" | "quoted" | "closed";
        };
      };
      email_logs: {
        Row: {
          id: string;
          quote_id: string | null;
          customer_id: string | null;
          to_email: string;
          subject: string;
          status: "sent" | "failed";
          error_message: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          quote_id?: string | null;
          customer_id?: string | null;
          to_email: string;
          subject: string;
          status: "sent" | "failed";
          error_message?: string | null;
          created_at?: string;
        };
        Update: {
          status?: "sent" | "failed";
          error_message?: string | null;
        };
      };
    };
  };
}
