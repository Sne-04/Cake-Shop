import { createClient } from '@supabase/supabase-js';

// Temporary placeholder values until user connects to Supabase
const supabaseUrl = 'https://placeholder.supabase.co';
const supabaseAnonKey = 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
