import { create } from 'zustand';

import { insertMedia } from '@/lib/models/MediaModel';
import supabase from '@/lib/supabase';
import type { Database } from '@/lib/supabase/types';
import { createFilename, createUploadPath } from '@/lib/utils/file';

interface UploadStore {
  isUploading: boolean;
  isCompleted: boolean;
  error: unknown;
  publicUrl?: string;
  files: File[];
  media?: Media | null;
  // reducers actions
  setFiles: (files: FileList | null) => void;
  clearFiles: () => void;
  // async actions
  uploadFile: (bucket: string, directory: string, file: File) => Promise<void>;
}

type Media = Database['public']['Tables']['media']['Row'];

export const useMediaStore = create<UploadStore>()((set) => ({
  // states
  isUploading: false,
  isCompleted: false,
  error: undefined,
  publicUrl: undefined,
  files: [],
  media: undefined,

  // reducers
  setFiles: (files: FileList | null) => {
    if (files) {
      set({ files: Array.from(files) });
    }
  },
  clearFiles: () => set({ files: [] }),

  // async actions
  uploadFile: async (bucket: string, directory: string, file: File) => {
    set({ isUploading: true, publicUrl: undefined, error: undefined });

    const filename = createFilename(file);
    const uploadPath = createUploadPath(filename, directory);

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(uploadPath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      return set({ error, isUploading: false });
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from(bucket).getPublicUrl(data.path);

    const { data: insertedMedia, error: insertError } = await insertMedia(
      publicUrl
    );

    if (insertError) {
      set({ error: insertError, isUploading: false });
      return;
    }

    set({
      isCompleted: true,
      isUploading: false,
      publicUrl,
      media: insertedMedia,
    });
  },
}));
