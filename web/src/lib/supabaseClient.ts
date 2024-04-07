import { SECRET_SUPABASE_URL, SECRET_SUPABASE_KEY } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';

export interface SupabaseError {
	message: string;
	status?: number;
	details?: string;
	hint?: string;
	code?: string;
}

export const supabase = createClient(SECRET_SUPABASE_URL, SECRET_SUPABASE_KEY);
