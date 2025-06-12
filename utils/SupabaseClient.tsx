import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "your-project-url";

const supabaseAnonKey = "your-api-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);