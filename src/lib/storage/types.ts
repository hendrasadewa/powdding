export interface FileData {
  file: File;
  info: {
    previewURL: string;
    name: string;
    extension: string;
    uploadPath: string;
    humanFileSize: string | undefined;
  };
}

export interface UploadState {
  fileData: FileData;
  isUploading: boolean;
  isCompleted: boolean;
  error: unknown;
}
