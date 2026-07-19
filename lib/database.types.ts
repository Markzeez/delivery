export type UserRole = "SENDER" | "RECEIVER" | "ADMIN" | "RIDER";
export type PackageStatus =
  | "PENDING"
  | "PICKED_UP"
  | "IN_TRANSIT"
  | "DELIVERED"
  | "CANCELLED"
  | "LOST";

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          password: string;
          role: UserRole;
          created_at: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          email: string;
          password: string;
          role?: UserRole;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["users"]["Insert"]>;
      };
      packages: {
        Row: {
          id: string;
          tracking_number: string;
          item_name: string;
          description: string | null;
          weight: number;
          delivery_fee: number;
          status: PackageStatus;
          sender_name: string;
          sender_phone: string;
          sender_address: string;
          sender_lga: string;
          sender_state: string;
          receiver_name: string;
          receiver_phone: string;
          receiver_address: string;
          receiver_lga: string;
          receiver_state: string;
          current_lga: string | null;
          current_state: string | null;
          sender_id: string | null;
          receiver_id: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          tracking_number: string;
          item_name: string;
          description?: string | null;
          weight: number;
          delivery_fee?: number;
          status?: PackageStatus;
          sender_name: string;
          sender_phone?: string;
          sender_address?: string;
          sender_lga?: string;
          sender_state?: string;
          receiver_name: string;
          receiver_phone?: string;
          receiver_address?: string;
          receiver_lga?: string;
          receiver_state?: string;
          current_lga?: string | null;
          current_state?: string | null;
          sender_id?: string | null;
          receiver_id?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["packages"]["Insert"]>;
      };
      tracking_updates: {
        Row: {
          id: string;
          status: string;
          note: string | null;
          state: string | null;
          lga: string | null;
          package_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          status: string;
          note?: string | null;
          state?: string | null;
          lga?: string | null;
          package_id: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["tracking_updates"]["Insert"]>;
      };
      contacts: {
        Row: {
          id: string;
          name: string;
          email: string;
          message: string;
          read: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          message: string;
          read?: boolean;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["contacts"]["Insert"]>;
      };
    };
    Enums: {
      user_role: UserRole;
      package_status: PackageStatus;
    };
  };
}
