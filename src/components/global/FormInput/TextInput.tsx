import { Input } from 'react-daisyui';

type COLORS = "primary" | "secondary" | "accent" | "ghost" | "info" | "success" | "warning" | "error" | undefined
type SIZE = "lg" | "md" | "sm" | "xs" | undefined

interface Props {
    label: string;
    name: string;
    color: COLORS;
    placeholder: string;
    size: SIZE;
    value: string;
    disabled: boolean;
    errorMessage: string;
    dataTheme: string;
    bordered: boolean;
    borderOffset: boolean;
    className: string;
    onChange: VoidFunction,
}


const TextInput = ({
    label,
    name,
    color,
    placeholder,
    size,
    value,
    disabled,
    errorMessage,
    dataTheme,
    bordered,
    borderOffset,
    className,
    onChange,
}: Props) => (
    <div className='flex flex-col mt-3 mx-2'>
        <label className=' font-     ' htmlFor={`input-${name}`}>{label}</label>
        <Input
            id={`input-${name}`}
            name={name}
            color={color}
            dataTheme={dataTheme}
            placeholder={placeholder || 'Silahkan diisi'}
            onChange={onChange}
            size={size}
            value={value}
            disabled={disabled}
            bordered={bordered || true}
            borderOffset={borderOffset}
            className={className}
        />
        {errorMessage && (
            <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>
        )}
    </div>
);

export default TextInput