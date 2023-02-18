import { v4 } from 'uuid';
import { FileData, UploadState } from '../storage/types';

export function humanizeFileSize(size: number) {
  if (size < 1024) {
    return `${size} bytes`;
  } else if (size >= 1024 && size < 1048576) {
    return `${(size / 1024).toFixed(1)} KB`;
  } else if (size >= 1048576) {
    return `${(size / 1048576).toFixed(1)} MB`;
  }
}

export function convertMBToBytes(size: number) {
  return size * 1048576;
}

export function getFileExtension(file: File) {
  const [_originalName, extension] = file.name.split('.');
  return extension;
}

export function createFilename(file: File) {
  const uuid = v4();
  const [_originalName, extension] = file.name.split('.');
  return `${uuid}.${extension}`;
}

export function createUploadPath(filename: string, mediaType: string) {
  return `${mediaType}/${filename}`;
}

export function composeFileData(files: File[], mediaType: string) {
  return files.map<FileData>((file) => {
    const name = createFilename(file);

    return {
      info: {
        previewURL: URL.createObjectURL(file),
        extension: getFileExtension(file),
        uploadPath: createUploadPath(name, mediaType),
        humanFileSize: humanizeFileSize(file.size),
        name,
      },
      file,
    };
  });
}

export function composeUploadState(fileList: FileData[]) {
  return fileList.map<UploadState>((data) => ({
    error: undefined,
    fileData: data,
    isCompleted: false,
    isUploading: false,
  }));
}

// validators
// -- file size
export function validateFileSize(files: File[], maxFileSizeInMB: number) {
  const bytes = convertMBToBytes(maxFileSizeInMB);
  const filesThatExceedMaxSize = files.filter((file) => file.size > bytes);

  if (filesThatExceedMaxSize.length <= 0) {
    return;
  }

  const names = filesThatExceedMaxSize.map((file) => file.name).join(', ');

  throw new Error(
    `file(s) ${names} size is exceed max file size (${humanizeFileSize(bytes)})`
  );
}

// -- file mime type
export function validateFileType(files: File[], allowedTypes: string) {
  const disallowedFiles = files
    .map((file) => file.type)
    .filter((type) => !allowedTypes.split(',').includes(type));

  if (disallowedFiles.length > 0) {
    throw new Error(`file(s) contains disallowed mime type(s)`);
  }
}
