import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rixbazyypsswmrcmxqam.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpeGJhenl5cHNzd21yY214cWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyMzc1MjksImV4cCI6MjA0MTgxMzUyOX0.aAK4GpKGOi6sVPuijgrLUFww1SnwNn8S9cDeevaRh98'
export const supabase = createClient(supabaseUrl, supabaseKey)