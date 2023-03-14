import { Toggle } from 'react-daisyui';

type SIZE = "lg" | "md" | "sm" | "xs" | undefined
type COLORS = "primary" | "secondary" | "accent" | "ghost" | "info" | "success" | "warning" | "error" | undefined

interface Props {
  label: string;
  name: string;
  value: string;
  size: SIZE;
  disabled: boolean;
  errorMessage: string;
  onChange: VoidFunction,
  required: boolean,
  dataTheme: string;
  color: COLORS;
}


const FormToggle = ({
  label,
  name,
  value,
  size,
  disabled,
  errorMessage,
  onChange,
  required,
  dataTheme,
  color,
}: Props) => (
  <div className='flex flex-col mt-3'>
    <div className='flex flex-row justify-between align-middle'>
      <label htmlFor={`input-${name}`} className='ml-3 text-sm font-semibold'>
        {label}
        {required && <sup className='text-red-400'>*</sup>}
      </label>
      <Toggle
        id={`input-${name}`}
        name={name}
        dataTheme={dataTheme}
        onChange={onChange}
        size={size}
        value={value}
        disabled={disabled}
        color={color}
        className="rounded-full"
      />
    </div>
    {errorMessage && (
      <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>
    )}
  </div>
);

export default FormToggle
