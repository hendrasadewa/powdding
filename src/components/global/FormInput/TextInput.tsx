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
  required: boolean,
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
  className,
  onChange,
  required
}: Props) => (
  <div className='flex flex-col mt-3 mx-2'>
    <label htmlFor={`input-${name}`} className='mb-2 text-sm font-semibold'>
      {label}
      {required && <sup className='text-red-400'>*</sup>}
    </label>
    <Input
      id={`input-${name}`}
      name={name}
      color={color || "primary"}
      dataTheme={dataTheme}
      placeholder={placeholder || 'Silahkan diisi'}
      onChange={onChange}
      size={size}
      value={value}
      disabled={disabled}
      bordered={false}
      borderOffset={false}
      className={className || "border-0 active:border-0 h-10 text-sm"}
    />
    {errorMessage && (
      <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>
    )}
  </div>
);

export default TextInput
