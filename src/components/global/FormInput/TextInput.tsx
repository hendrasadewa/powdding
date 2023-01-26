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
    <div style={{ display: "block", marginTop: 16}}>
        <label htmlFor={`input-${name}`}>{label}</label>
        <Input
            id={`input-${name}`}
            name={name}
            color={color}
            dataTheme={dataTheme}
            placeholder={placeholder || 'Silahkan diisi'}
            onChange={onChange}
            size={size}
            width={'10rem'}
            value={value}
            disabled={disabled}
            bordered={bordered || true}
            borderOffset={borderOffset}
            className={className || 'w-full max-w-xs'}
        />
        {errorMessage && (
            <span style={{color: 'red', fontSize: '14px'}}>{errorMessage}</span>
        )}
    </div>
);

export default TextInput
