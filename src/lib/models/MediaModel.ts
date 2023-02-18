import supabase from '../supabase';

export async function insertMedia(url: string) {
  return await supabase.from('media').insert({ url }).select('*').maybeSingle();
}

export type InsertMediaResponse = Awaited<ReturnType<typeof insertMedia>>;
export type InsertMediaSuccess = InsertMediaResponse['data'];
export type InsetMediaError = InsertMediaResponse['error'];

export function getMediaById(id: string) {
  return supabase.from('media').select('*').eq('id', id).single();
}
