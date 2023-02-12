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
      bank: {
        Row: {
          archived_at: string | null
          created_at: string | null
          id: string
          is_archived: boolean | null
          is_published: boolean | null
          name: string | null
          published_at: string | null
        }
        Insert: {
          archived_at?: string | null
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
        }
        Update: {
          archived_at?: string | null
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
        }
      }
      countdown: {
        Row: {
          created_at: string | null
          description: string | null
          ends_at: string | null
          event_id: string | null
          id: string
          name: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          ends_at?: string | null
          event_id?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          ends_at?: string | null
          event_id?: string | null
          id?: string
          name?: string | null
        }
      }
      event: {
        Row: {
          archived_at: string | null
          created_at: string | null
          date: string | null
          event_type_id: string | null
          id: string
          is_archived: boolean | null
          is_published: boolean | null
          name: string | null
          owner_id: string | null
          published_at: string | null
        }
        Insert: {
          archived_at?: string | null
          created_at?: string | null
          date?: string | null
          event_type_id?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          owner_id?: string | null
          published_at?: string | null
        }
        Update: {
          archived_at?: string | null
          created_at?: string | null
          date?: string | null
          event_type_id?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          owner_id?: string | null
          published_at?: string | null
        }
      }
      event_config: {
        Row: {
          created_at: string | null
          event_id: string | null
          id: string
          template_id: string | null
          template_variant_id: string | null
        }
        Insert: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          template_id?: string | null
          template_variant_id?: string | null
        }
        Update: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          template_id?: string | null
          template_variant_id?: string | null
        }
      }
      event_rundown: {
        Row: {
          address: string | null
          created_at: string | null
          end_at: string | null
          event_id: string | null
          id: string
          location: string | null
          map_url: string | null
          name: string | null
          start_at: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          end_at?: string | null
          event_id?: string | null
          id?: string
          location?: string | null
          map_url?: string | null
          name?: string | null
          start_at?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          end_at?: string | null
          event_id?: string | null
          id?: string
          location?: string | null
          map_url?: string | null
          name?: string | null
          start_at?: string | null
        }
      }
      event_type: {
        Row: {
          archived_at: string | null
          created_at: string | null
          id: string
          is_archived: boolean | null
          is_published: boolean | null
          name: string | null
          published_at: string | null
        }
        Insert: {
          archived_at?: string | null
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
        }
        Update: {
          archived_at?: string | null
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
        }
      }
      gallery: {
        Row: {
          created_at: string | null
          descriptions: string | null
          event_id: string | null
          id: string
          name: string | null
        }
        Insert: {
          created_at?: string | null
          descriptions?: string | null
          event_id?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          created_at?: string | null
          descriptions?: string | null
          event_id?: string | null
          id?: string
          name?: string | null
        }
      }
      gallery_media: {
        Row: {
          caption: string | null
          created_at: string | null
          gallery_id: string | null
          id: number
          media_id: string | null
        }
        Insert: {
          caption?: string | null
          created_at?: string | null
          gallery_id?: string | null
          id?: number
          media_id?: string | null
        }
        Update: {
          caption?: string | null
          created_at?: string | null
          gallery_id?: string | null
          id?: number
          media_id?: string | null
        }
      }
      gift: {
        Row: {
          created_at: string | null
          event_id: string | null
          id: string
          label: string | null
          title: string | null
        }
        Insert: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          label?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          label?: string | null
          title?: string | null
        }
      }
      gift_bank_account: {
        Row: {
          bank_id: string | null
          created_at: string | null
          fullname: string | null
          gift_id: string | null
          id: string
          number: string | null
        }
        Insert: {
          bank_id?: string | null
          created_at?: string | null
          fullname?: string | null
          gift_id?: string | null
          id?: string
          number?: string | null
        }
        Update: {
          bank_id?: string | null
          created_at?: string | null
          fullname?: string | null
          gift_id?: string | null
          id?: string
          number?: string | null
        }
      }
      guest: {
        Row: {
          created_at: string | null
          email: string | null
          fullname: string | null
          id: string
          owner_id: string | null
          phone: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          fullname?: string | null
          id?: string
          owner_id?: string | null
          phone?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          fullname?: string | null
          id?: string
          owner_id?: string | null
          phone?: string | null
        }
      }
      guestbook: {
        Row: {
          created_at: string | null
          event_id: string | null
          guest_id: string | null
          id: string
        }
        Insert: {
          created_at?: string | null
          event_id?: string | null
          guest_id?: string | null
          id?: string
        }
        Update: {
          created_at?: string | null
          event_id?: string | null
          guest_id?: string | null
          id?: string
        }
      }
      guestbook_config: {
        Row: {
          created_at: string | null
          event_id: string | null
          id: string
          message_provider_id: string | null
          message_template_id: string | null
        }
        Insert: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          message_provider_id?: string | null
          message_template_id?: string | null
        }
        Update: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          message_provider_id?: string | null
          message_template_id?: string | null
        }
      }
      guestbook_message_provider: {
        Row: {
          archived_at: string | null
          created_at: string | null
          id: string
          is_archived: boolean | null
          is_published: boolean | null
          name: string | null
          published_at: string | null
        }
        Insert: {
          archived_at?: string | null
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
        }
        Update: {
          archived_at?: string | null
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
        }
      }
      guestbook_message_template: {
        Row: {
          archived_at: string | null
          content: string | null
          created_at: string | null
          event_type_id: string | null
          id: string
          is_archived: boolean | null
          is_published: boolean | null
          name: string | null
          published_at: string | null
        }
        Insert: {
          archived_at?: string | null
          content?: string | null
          created_at?: string | null
          event_type_id?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
        }
        Update: {
          archived_at?: string | null
          content?: string | null
          created_at?: string | null
          event_type_id?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
        }
      }
      media: {
        Row: {
          created_at: string | null
          id: string
          media_type_id: string | null
          name: string | null
          source: string | null
          url: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          media_type_id?: string | null
          name?: string | null
          source?: string | null
          url?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          media_type_id?: string | null
          name?: string | null
          source?: string | null
          url?: string | null
        }
      }
      media_source: {
        Row: {
          archived_at: string | null
          created_at: string | null
          id: string
          is_archived: boolean | null
          is_published: boolean | null
          name: string | null
          published_at: string | null
          url: string | null
        }
        Insert: {
          archived_at?: string | null
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
          url?: string | null
        }
        Update: {
          archived_at?: string | null
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
          url?: string | null
        }
      }
      media_type: {
        Row: {
          archived_at: string | null
          created_at: string | null
          id: string
          is_archived: boolean | null
          is_published: boolean | null
          name: string | null
          published_at: string | null
        }
        Insert: {
          archived_at?: string | null
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
        }
        Update: {
          archived_at?: string | null
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
        }
      }
      person: {
        Row: {
          created_at: string | null
          event_id: string | null
          id: string
          person_profile_id: string | null
          type: string | null
        }
        Insert: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          person_profile_id?: string | null
          type?: string | null
        }
        Update: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          person_profile_id?: string | null
          type?: string | null
        }
      }
      person_profile: {
        Row: {
          created_at: string | null
          descriptions: string | null
          id: string
          name: string | null
          owner_id: string | null
        }
        Insert: {
          created_at?: string | null
          descriptions?: string | null
          id?: string
          name?: string | null
          owner_id?: string | null
        }
        Update: {
          created_at?: string | null
          descriptions?: string | null
          id?: string
          name?: string | null
          owner_id?: string | null
        }
      }
      person_social: {
        Row: {
          created_at: string | null
          id: string
          person_id: string | null
          social_provider_id: string | null
          username: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          person_id?: string | null
          social_provider_id?: string | null
          username?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          person_id?: string | null
          social_provider_id?: string | null
          username?: string | null
        }
      }
      profile: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          fullname: string | null
          id: string
          phone: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          fullname?: string | null
          id: string
          phone?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          fullname?: string | null
          id?: string
          phone?: string | null
        }
      }
      quote: {
        Row: {
          content: string | null
          created_at: string | null
          id: string
          source: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: string
          source?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: string
          source?: string | null
        }
      }
      quote_event: {
        Row: {
          created_at: string | null
          event_id: string | null
          id: string
          quote_id: string | null
        }
        Insert: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          quote_id?: string | null
        }
        Update: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          quote_id?: string | null
        }
      }
      reservation: {
        Row: {
          created_at: string | null
          event_id: string | null
          id: string
          status: string | null
          title: string | null
          total_guests: number | null
        }
        Insert: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          status?: string | null
          title?: string | null
          total_guests?: number | null
        }
        Update: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          status?: string | null
          title?: string | null
          total_guests?: number | null
        }
      }
      role: {
        Row: {
          created_at: string | null
          id: string
          name: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string | null
        }
      }
      social_provider: {
        Row: {
          archived_at: string | null
          created_at: string | null
          id: string
          is_archived: boolean | null
          is_published: boolean | null
          name: string | null
          published_at: string | null
          url: string | null
        }
        Insert: {
          archived_at?: string | null
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
          url?: string | null
        }
        Update: {
          archived_at?: string | null
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
          url?: string | null
        }
      }
      template: {
        Row: {
          archived_at: string | null
          created_at: string | null
          id: string
          is_archived: boolean | null
          is_published: boolean | null
          name: string | null
          published_at: string | null
        }
        Insert: {
          archived_at?: string | null
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
        }
        Update: {
          archived_at?: string | null
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
        }
      }
      template_variant: {
        Row: {
          archived_at: string | null
          created_at: string | null
          id: string
          is_archived: boolean | null
          is_published: boolean | null
          name: string | null
          published_at: string | null
          template_id: string | null
        }
        Insert: {
          archived_at?: string | null
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
          template_id?: string | null
        }
        Update: {
          archived_at?: string | null
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_published?: boolean | null
          name?: string | null
          published_at?: string | null
          template_id?: string | null
        }
      }
      user_role: {
        Row: {
          created_at: string | null
          id: string
          role_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          role_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          role_id?: string | null
          user_id?: string | null
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
