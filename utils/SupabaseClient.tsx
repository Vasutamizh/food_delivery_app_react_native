import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://btrsthabvteesqjogcww.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0cnN0aGFidnRlZXNxam9nY3d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NzAxNTksImV4cCI6MjA2NTI0NjE1OX0.xudukhBNXlHIhbSegGZjYcMlW0PMa6wXh71L70OWG9o";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);