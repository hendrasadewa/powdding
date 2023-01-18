export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      event: {
        Row: {
          createdAt: string | null
          endDate: string | null
          id: string
          isDeleted: boolean | null
          isPublished: boolean | null
          maxGuests: number | null
          name: string | null
          ownerId: string | null
          publishedAt: string | null
          startDate: string | null
        }
        Insert: {
          createdAt?: string | null
          endDate?: string | null
          id?: string
          isDeleted?: boolean | null
          isPublished?: boolean | null
          maxGuests?: number | null
          name?: string | null
          ownerId?: string | null
          publishedAt?: string | null
          startDate?: string | null
        }
        Update: {
          createdAt?: string | null
          endDate?: string | null
          id?: string
          isDeleted?: boolean | null
          isPublished?: boolean | null
          maxGuests?: number | null
          name?: string | null
          ownerId?: string | null
          publishedAt?: string | null
          startDate?: string | null
        }
      }
      guestbook: {
        Row: {
          createdAt: string | null
          id: string
          message: string | null
          reservationStatusId: string | null
          sender: string | null
        }
        Insert: {
          createdAt?: string | null
          id?: string
          message?: string | null
          reservationStatusId?: string | null
          sender?: string | null
        }
        Update: {
          createdAt?: string | null
          id?: string
          message?: string | null
          reservationStatusId?: string | null
          sender?: string | null
        }
      }
      profile: {
        Row: {
          avatarUrl: string | null
          createdAt: string | null
          email: string | null
          fullname: string | null
          id: string
          phone: string | null
          userId: string | null
        }
        Insert: {
          avatarUrl?: string | null
          createdAt?: string | null
          email?: string | null
          fullname?: string | null
          id?: string
          phone?: string | null
          userId?: string | null
        }
        Update: {
          avatarUrl?: string | null
          createdAt?: string | null
          email?: string | null
          fullname?: string | null
          id?: string
          phone?: string | null
          userId?: string | null
        }
      }
      reservationStatus: {
        Row: {
          createdAt: string | null
          id: string
          name: string | null
        }
        Insert: {
          createdAt?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          createdAt?: string | null
          id?: string
          name?: string | null
        }
      }
      role: {
        Row: {
          createdAt: string | null
          id: string
          name: string | null
        }
        Insert: {
          createdAt?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          createdAt?: string | null
          id?: string
          name?: string | null
        }
      }
      userRole: {
        Row: {
          createdAt: string | null
          id: string
          roleId: string | null
          userId: string | null
        }
        Insert: {
          createdAt?: string | null
          id?: string
          roleId?: string | null
          userId?: string | null
        }
        Update: {
          createdAt?: string | null
          id?: string
          roleId?: string | null
          userId?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
