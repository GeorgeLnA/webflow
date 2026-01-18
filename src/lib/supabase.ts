import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pvlraozeyijcottvyqvr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2bHJhb3pleWlqY290dHZ5cXZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyMzAxMzIsImV4cCI6MjA2ODgwNjEzMn0.kKHKdDM77Aixo39rbNik6qXwCqwGQsSpsdGACamvqaY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript
export interface FormSubmission {
  id?: string
  form_type: 'hero' | 'contact'
  name: string
  email: string
  phone?: string
  location?: string
  project_description?: string
  created_at?: string
  updated_at?: string
}
