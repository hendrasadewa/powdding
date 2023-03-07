import { Select } from 'react-daisyui';

type SIZE = "lg" | "md" | "sm" | "xs" | undefined

interface Props {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  size: SIZE;
  disabled: boolean;
  errorMessage: string;
  onChange: VoidFunction,
  required: boolean,
  dataTheme: string;
  items: any,
}


const FormSelect = ({
  label,
  name,
  placeholder,
  required,
  onChange,
  value,
  size,
  items,
  errorMessage,
  dataTheme,
  disabled
}: Props) => (
  <div className='flex flex-col mt-3 mx-2'>
    <label htmlFor={`input-${name}`} className='mb-2'>
      {label}
      {required && <sup className='text-red-400'>*</sup>}
    </label>
    <Select
      id={`input-${name}`}
      name={name}
      dataTheme={dataTheme}
      placeholder={placeholder || 'Silahkan dipilih'}
      onChange={onChange}
      size={size}
      value={value}
      disabled={disabled}
    >
      {!!items && !!items.length && items?.map((item : any) => (
        <Select.Option key={item?.label} value={item?.value}>{item?.label}</Select.Option>
      ))}
    </Select>
    {errorMessage && (
      <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>
    )}
  </div>
);

export default FormSelect
