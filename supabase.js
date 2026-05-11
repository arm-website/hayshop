import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rulyfpgjujoevvfuolml.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1bHlmcGdqdWpvZXZ2ZnVvbG1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0ODE2MDUsImV4cCI6MjA5NDA1NzYwNX0._JoE2HYtZDxH8o9livkXS-DQAOLz1ea0qJ-XcGr0wlw'
export const supabase = createClient(supabaseUrl, supabaseKey)