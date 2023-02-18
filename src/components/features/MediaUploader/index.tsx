import { ChangeEvent, FormEvent } from 'react';

import { useMediaStore } from '@/hooks/useMediaStore';

import MediaPreview from './MediaPreview';

interface Props {
  bucket: string;
  directory: string;
  accept?: string;
  onUploadSuccess: (mediaId: string, publicURL: string) => void;
}

export default function MediaUploader({
  bucket,
  directory,
  accept = 'image/jpg,image/jpeg,image/png',
  onUploadSuccess,
}: Props) {
  // actions
  const uploadFile = useMediaStore((state) => state.uploadFile);
  const setFile = useMediaStore((state) => state.setFiles);

  // states selectors
  const state = useMediaStore((state) => ({
    isUploading: state.isUploading,
    files: state.files,
    media: state.media,
  }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    uploadFile(bucket, directory, state.files[0]).then(() => {
      if (state.media && state.media.url) {
        onUploadSuccess(state.media.id, state.media.url);
      }
    });
  };

  const handleFileChanged = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFile(e.target.files);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="form-control w-full">
        <input
          accept={accept}
          onChange={handleFileChanged}
          type="file"
          className="file-input file-input-bordered w-full"
        />
      </div>
      {state.isUploading && <progress className="progress w-full" />}
      {state.files.map((file) => (
        <MediaPreview file={file} key={file.name} />
      ))}
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
