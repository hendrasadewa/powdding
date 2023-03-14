import { Textarea } from 'react-daisyui';

type COLORS = "primary" | "secondary" | "accent" | "ghost" | "info" | "success" | "warning" | "error" | undefined

interface Props {
  label: string;
  name: string;
  color: COLORS;
  placeholder: string;
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


const TextArea = ({
  label,
  name,
  color,
  placeholder,
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
    <Textarea
      id={`input-${name}`}
      name={name}
      color={color || "primary"}
      dataTheme={dataTheme}
      placeholder={placeholder || 'Silahkan diisi'}
      onChange={onChange}
      value={value}
      disabled={disabled}
      bordered={false}
      borderOffset={false}
      className={className || "border-0 active:border-0 h-24 p-4 text-sm rounded-lg"}
    />
    {errorMessage && (
      <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>
    )}
  </div>
);

export default TextArea
