export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      assignments: {
        Row: {
          course_id: string | null
          created_at: string | null
          description: string | null
          due_date: string | null
          id: string
          max_score: number | null
          title: string
        }
        Insert: {
          course_id?: string | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          max_score?: number | null
          title: string
        }
        Update: {
          course_id?: string | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          max_score?: number | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "assignments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      attendance: {
        Row: {
          class_date: string
          created_at: string | null
          id: string
          marked_at: string | null
          marked_by: string | null
          notes: string | null
          status: string
          student_id: string
        }
        Insert: {
          class_date: string
          created_at?: string | null
          id?: string
          marked_at?: string | null
          marked_by?: string | null
          notes?: string | null
          status: string
          student_id: string
        }
        Update: {
          class_date?: string
          created_at?: string | null
          id?: string
          marked_at?: string | null
          marked_by?: string | null
          notes?: string | null
          status?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "attendance_marked_by_fkey"
            columns: ["marked_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      class_assignments: {
        Row: {
          academic_session: string
          class_level: string
          created_at: string | null
          id: string
          is_class_teacher: boolean | null
          subject: string
          teacher_id: string
        }
        Insert: {
          academic_session: string
          class_level: string
          created_at?: string | null
          id?: string
          is_class_teacher?: boolean | null
          subject: string
          teacher_id: string
        }
        Update: {
          academic_session?: string
          class_level?: string
          created_at?: string | null
          id?: string
          is_class_teacher?: boolean | null
          subject?: string
          teacher_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "class_assignments_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      content_items: {
        Row: {
          author_id: string | null
          content: string
          content_type: Database["public"]["Enums"]["content_type"]
          created_at: string | null
          excerpt: string | null
          featured: boolean | null
          id: string
          image_url: string | null
          published: boolean | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author_id?: string | null
          content: string
          content_type: Database["public"]["Enums"]["content_type"]
          created_at?: string | null
          excerpt?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          published?: boolean | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author_id?: string | null
          content?: string
          content_type?: Database["public"]["Enums"]["content_type"]
          created_at?: string | null
          excerpt?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          published?: boolean | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "content_items_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          class_level: string
          code: string
          created_at: string | null
          description: string | null
          id: string
          name: string
          teacher_id: string | null
        }
        Insert: {
          class_level: string
          code: string
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          teacher_id?: string | null
        }
        Update: {
          class_level?: string
          code?: string
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          teacher_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "courses_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      fee_payments: {
        Row: {
          amount_due: number
          amount_paid: number | null
          created_at: string | null
          due_date: string | null
          id: string
          payment_date: string | null
          payment_method: string | null
          payment_status: string | null
          receipt_number: string | null
          session: string
          student_id: string
          term: string
          updated_at: string | null
        }
        Insert: {
          amount_due: number
          amount_paid?: number | null
          created_at?: string | null
          due_date?: string | null
          id?: string
          payment_date?: string | null
          payment_method?: string | null
          payment_status?: string | null
          receipt_number?: string | null
          session: string
          student_id: string
          term: string
          updated_at?: string | null
        }
        Update: {
          amount_due?: number
          amount_paid?: number | null
          created_at?: string | null
          due_date?: string | null
          id?: string
          payment_date?: string | null
          payment_method?: string | null
          payment_status?: string | null
          receipt_number?: string | null
          session?: string
          student_id?: string
          term?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      gallery: {
        Row: {
          alt_text: string | null
          created_at: string
          id: string
          image_url: string
          title: string
          updated_at: string
          uploaded_by: string | null
        }
        Insert: {
          alt_text?: string | null
          created_at?: string
          id?: string
          image_url: string
          title: string
          updated_at?: string
          uploaded_by?: string | null
        }
        Update: {
          alt_text?: string | null
          created_at?: string
          id?: string
          image_url?: string
          title?: string
          updated_at?: string
          uploaded_by?: string | null
        }
        Relationships: []
      }
      learning_materials: {
        Row: {
          class_level: string | null
          created_at: string | null
          description: string | null
          file_type: string | null
          file_url: string | null
          id: string
          is_public: boolean | null
          subject: string | null
          title: string
          updated_at: string | null
          uploaded_by: string | null
        }
        Insert: {
          class_level?: string | null
          created_at?: string | null
          description?: string | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          is_public?: boolean | null
          subject?: string | null
          title: string
          updated_at?: string | null
          uploaded_by?: string | null
        }
        Update: {
          class_level?: string | null
          created_at?: string | null
          description?: string | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          is_public?: boolean | null
          subject?: string | null
          title?: string
          updated_at?: string | null
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "learning_materials_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          is_read: boolean | null
          recipient_id: string
          replied_to_id: string | null
          sender_id: string
          subject: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          recipient_id: string
          replied_to_id?: string | null
          sender_id: string
          subject: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          recipient_id?: string
          replied_to_id?: string | null
          sender_id?: string
          subject?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "messages_replied_to_id_fkey"
            columns: ["replied_to_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          is_read: boolean | null
          message: string
          priority: string | null
          sent_by: string | null
          target_role: string | null
          target_user_id: string | null
          title: string
          type: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          priority?: string | null
          sent_by?: string | null
          target_role?: string | null
          target_user_id?: string | null
          title: string
          type?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          priority?: string | null
          sent_by?: string | null
          target_role?: string | null
          target_user_id?: string | null
          title?: string
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_sent_by_fkey"
            columns: ["sent_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "notifications_target_user_id_fkey"
            columns: ["target_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string
          id: string
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name: string
          id?: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string
          id?: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      results: {
        Row: {
          ca_score: number | null
          course_id: string | null
          created_at: string | null
          exam_score: number | null
          grade: string | null
          id: string
          position: number | null
          session: string
          student_id: string | null
          term: string
          total_score: number | null
        }
        Insert: {
          ca_score?: number | null
          course_id?: string | null
          created_at?: string | null
          exam_score?: number | null
          grade?: string | null
          id?: string
          position?: number | null
          session: string
          student_id?: string | null
          term: string
          total_score?: number | null
        }
        Update: {
          ca_score?: number | null
          course_id?: string | null
          created_at?: string | null
          exam_score?: number | null
          grade?: string | null
          id?: string
          position?: number | null
          session?: string
          student_id?: string | null
          term?: string
          total_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "results_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "results_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      student_applications: {
        Row: {
          address: string
          admin_notes: string | null
          birth_date: string | null
          class_applying_for: string
          email: string
          id: string
          parent_name: string
          phone: string
          previous_school: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          status: Database["public"]["Enums"]["application_status"] | null
          student_name: string
          submitted_at: string | null
        }
        Insert: {
          address: string
          admin_notes?: string | null
          birth_date?: string | null
          class_applying_for: string
          email: string
          id?: string
          parent_name: string
          phone: string
          previous_school?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: Database["public"]["Enums"]["application_status"] | null
          student_name: string
          submitted_at?: string | null
        }
        Update: {
          address?: string
          admin_notes?: string | null
          birth_date?: string | null
          class_applying_for?: string
          email?: string
          id?: string
          parent_name?: string
          phone?: string
          previous_school?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: Database["public"]["Enums"]["application_status"] | null
          student_name?: string
          submitted_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "student_applications_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      student_assignments: {
        Row: {
          assignment_id: string | null
          feedback: string | null
          id: string
          score: number | null
          status: string | null
          student_id: string | null
          submitted_at: string | null
        }
        Insert: {
          assignment_id?: string | null
          feedback?: string | null
          id?: string
          score?: number | null
          status?: string | null
          student_id?: string | null
          submitted_at?: string | null
        }
        Update: {
          assignment_id?: string | null
          feedback?: string | null
          id?: string
          score?: number | null
          status?: string | null
          student_id?: string | null
          submitted_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "student_assignments_assignment_id_fkey"
            columns: ["assignment_id"]
            isOneToOne: false
            referencedRelation: "assignments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_assignments_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      students: {
        Row: {
          address: string | null
          birth_date: string | null
          class: string
          created_at: string | null
          enrollment_date: string | null
          full_name: string
          id: string
          parent_name: string | null
          parent_phone: string | null
          student_id: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          address?: string | null
          birth_date?: string | null
          class: string
          created_at?: string | null
          enrollment_date?: string | null
          full_name: string
          id?: string
          parent_name?: string | null
          parent_phone?: string | null
          student_id: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          address?: string | null
          birth_date?: string | null
          class?: string
          created_at?: string | null
          enrollment_date?: string | null
          full_name?: string
          id?: string
          parent_name?: string | null
          parent_phone?: string | null
          student_id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      timetable: {
        Row: {
          class_level: string
          created_at: string | null
          day_of_week: number
          end_time: string
          id: string
          room: string | null
          start_time: string
          subject: string
          teacher_id: string | null
        }
        Insert: {
          class_level: string
          created_at?: string | null
          day_of_week: number
          end_time: string
          id?: string
          room?: string | null
          start_time: string
          subject: string
          teacher_id?: string | null
        }
        Update: {
          class_level?: string
          created_at?: string | null
          day_of_week?: number
          end_time?: string
          id?: string
          room?: string | null
          start_time?: string
          subject?: string
          teacher_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "timetable_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_current_user_role: {
        Args: Record<PropertyKey, never>
        Returns: Database["public"]["Enums"]["user_role"]
      }
      get_user_role: {
        Args: Record<PropertyKey, never>
        Returns: Database["public"]["Enums"]["user_role"]
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      application_status: "pending" | "reviewing" | "accepted" | "rejected"
      content_type: "announcement" | "news" | "event" | "gallery_item"
      user_role: "admin" | "teacher" | "student" | "parent" | "superadmin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      application_status: ["pending", "reviewing", "accepted", "rejected"],
      content_type: ["announcement", "news", "event", "gallery_item"],
      user_role: ["admin", "teacher", "student", "parent", "superadmin"],
    },
  },
} as const
