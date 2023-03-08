import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


interface Props {
  label: string;
  name: string;
  placeholder: string;
  value: any;
  disabled: boolean;
  errorMessage: string;
  onChange: VoidFunction,
  required: boolean,
}


const SingleDatePicker = ({
  label,
  name,
  required,
  onChange,
  value,
  disabled,
  placeholder,
  errorMessage,
}: Props) => (
  <div className='flex flex-col mt-3 mx-2'>
    <label htmlFor={`input-${name}`}>
      {label}
      {required && <sup style={{ color: 'red' }}>*</sup>}
    </label>
    <DatePicker 
      className='block w-full border-solid border-1 h-10 rounded-lg p-4 hover:cursor-pointe' 
      selected={value} 
      onChange={onChange} 
      disabled={disabled} 
      placeholderText={placeholder} />
    {errorMessage && (
      <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>
    )}
  </div>
);

export default SingleDatePicker;
