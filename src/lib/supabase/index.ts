import { createClient, PostgrestSingleResponse } from '@supabase/supabase-js';
import { Database } from './types';

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON || ''
);

export function getQueryResult<Payload = any>(
  response: PostgrestSingleResponse<Payload>
) {
  const { error, status, data } = response;

  if (error && status !== 406) {
    throw error;
  }

  return data;
}

export default supabase;
