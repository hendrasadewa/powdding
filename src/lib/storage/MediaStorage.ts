import supabase from '../supabase';

export async function uploadFile(bucket: string, path: string, file: File) {
  return await supabase.storage.from(bucket).upload(path, file, {
    cacheControl: '3600',
    upsert: false,
  });
}

type UploadResponse = Awaited<ReturnType<typeof uploadFile>>;
export type UploadResponseSuccess = UploadResponse['data'];
export type UploadResponseError = UploadResponse['error'];

export function getPublicURL(bucket: string, path: string) {
  return supabase.storage.from(bucket).getPublicUrl(path);
}

type GetPublicURLResponse = Awaited<ReturnType<typeof getPublicURL>>;
export type GetPublicURLResponseSuccess = GetPublicURLResponse['data'];
