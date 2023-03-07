import { useState, useRef } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

interface Props {
    label: string;
    name: string;
    disabled: boolean;
    errorMessage: string;
    className: string;
    required: boolean;
    value: any;
    setValue: any;
}


const SingleImageInput = ({
    label,
    name,
    disabled,
    errorMessage,
    required,
    value,
    setValue
}: Props) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | StaticImport | null>('');
    const defaultImage = value || 'https://placehold.jp/FAAB78/ffffff/150x150.png?text=Picture'

    const onImageChange = async (event: any) => {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            await setValue(name, event.target.files[0]);
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = () => {
                reader?.result && setImagePreview(reader?.result);
            };
        }
    };

    const handleInputClick = (e: any) => {
        e.preventDefault();
        fileInputRef && fileInputRef.current && fileInputRef.current.click();
    };

    const onClear = () => {
        setImagePreview('')
        setValue(name, '');
    }

    return (
        <div className='flex flex-col mt-3 mx-2'>
            <label htmlFor={`input-${name}`}>{label}</label>
            <div className="group flex flex-col relative w-52 h-52 shadow-sm m-2 bg-white rounded-lg">
                <Image
                    className="rounded-lg object-cover overflow-hidden"
                    height={208}
                    width={208}
                    alt="avatar"
                    src={imagePreview || defaultImage}
                />
                {(imagePreview || value) &&
                    <IoClose className='cursor-pointer absolute top-0 right-0 opacity-100 bg-gray-400 text-white rounded-full m-3' onClick={onClear} size={20} />
                }
                <div className='group-hover:visible group-hover:opacity-100 flex justify-center items-center absolute w-full bottom-0 text-white opacity-0  cursor-pointer rounded-lg rounded-tl-none border-none rounded-tr-none text-sm bg-zinc-500 z-2 h-1/5 transition-all-0.25' onClick={handleInputClick}>
                    Pilih Foto
                </div>
            </div>
            <input
                ref={fileInputRef}
                id={name}
                name={name}
                type="file"
                alt="image"
                accept="image/*"
                onChange={onImageChange}
                className="upload-box"
                disabled={disabled}
                required={required}
                style={{ display: "none" }}
            />
            {errorMessage && (
                <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>
            )}
        </div>
    )
};

export default SingleImageInput
