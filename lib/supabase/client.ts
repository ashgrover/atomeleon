import { createBrowserClient } from '@supabase/ssr'


export function createSupabaseBrowserClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";

    return createBrowserClient(supabaseUrl, supabaseAnonKey);
}