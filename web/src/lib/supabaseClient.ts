import { SECRET_SUPABASE_URL, SECRET_SUPABASE_KEY } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(SECRET_SUPABASE_URL, SECRET_SUPABASE_KEY);
