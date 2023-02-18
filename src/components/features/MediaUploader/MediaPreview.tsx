import { humanizeFileSize } from '@/lib/utils/file';
import Image from 'next/image';

interface Props {
  file: File;
}

export default function MediaPreview({ file }: Props) {
  if (!file) {
    return (
      <div>
        <p>Selected file will visible in this section</p>
      </div>
    );
  }

  const src = URL.createObjectURL(file);

  // for more info, please see visit this link below:
  // -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
  // only for images
  if (file.type.startsWith('image/')) {
    return (
      <div className="w-40 font-mono text-center">
        <Image
          src={src}
          width={300}
          height={300}
          alt="preview"
          className="rounded"
        />
        <p>{file.name}</p>
        <p>{humanizeFileSize(file.size)}</p>
      </div>
    );
  }

  return <div>File preview is not supported.</div>;
}
