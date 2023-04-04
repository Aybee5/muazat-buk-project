export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Assignments: {
        Row: {
          category: string | null;
          content: string | null;
          created_at: string | null;
          due_date: string | null;
          has_attachement: boolean | null;
          id: number;
          priority: string | null;
          status: string | null;
          title: string | null;
          user_id: string | null;
        };
        Insert: {
          category?: string | null;
          content?: string | null;
          created_at?: string | null;
          due_date?: Date | string | null;
          has_attachement?: boolean | null;
          id?: number;
          priority?: string | null;
          status?: string | null;
          title?: string | null;
          user_id?: string | null;
        };
        Update: {
          category?: string | null;
          content?: string | null;
          created_at?: string | null;
          due_date?: string | null;
          has_attachement?: boolean | null;
          id?: number;
          priority?: string | null;
          status?: string | null;
          title?: string | null;
          user_id?: string | null;
        };
      };
      Credentials: {
        Row: {
          created_at: string | null;
          has_attachment: boolean | null;
          id: number;
          title: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          has_attachment?: boolean | null;
          id?: number;
          title?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          has_attachment?: boolean | null;
          id?: number;
          title?: string | null;
          user_id?: string | null;
        };
      };
      "Lecturer's classes": {
        Row: {
          course_name: string;
          created_at: string | null;
          description: string | null;
          id: number;
          shared_code: string | null;
        };
        Insert: {
          course_name: string;
          created_at?: string | null;
          description?: string | null;
          id?: number;
          shared_code?: string | null;
        };
        Update: {
          course_name?: string;
          created_at?: string | null;
          description?: string | null;
          id?: number;
          shared_code?: string | null;
        };
      };
      Notes: {
        Row: {
          category: string | null;
          created_at: string | null;
          description: string | null;
          has_attachment: boolean | null;
          id: number;
          title: string | null;
          user_id: string | null;
        };
        Insert: {
          category?: string | null;
          created_at?: string | null;
          description?: string | null;
          has_attachment?: boolean | null;
          id?: number;
          title?: string | null;
          user_id?: string | null;
        };
        Update: {
          category?: string | null;
          created_at?: string | null;
          description?: string | null;
          has_attachment?: boolean | null;
          id?: number;
          title?: string | null;
          user_id?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
