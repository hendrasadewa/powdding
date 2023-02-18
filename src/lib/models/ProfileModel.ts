import supabase from '../supabase';

export async function createEmptyProfile(userId: string) {
  return await supabase.from('profile').insert({
    id: userId,
  });
}

interface EditProfilePayload {
  phone: string;
  fullname: string;
}

export async function updateProfile(id: string, payload: EditProfilePayload) {
  return await supabase
    .from('profile')
    .update({ fullname: payload.fullname, phone: payload.phone })
    .eq('id', id);
}
