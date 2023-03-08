import React, { createRef } from 'react';
import { TextInput, SingleImageInput, FormSelect, SingleDatePicker } from '../FormInput';

const templates = [
  {
    key: 'textInput',
    children: TextInput,
  },
  {
    key: 'singleImageInput',
    children: SingleImageInput,
  },
  {
    key: 'select',
    children: FormSelect,
  },
  {
		key: 'date',
		children: SingleDatePicker,
	},
];

export default function FormRender(props: any) {
  const formType = props.formType || 'textInput';
  const ref = createRef();
  return (
    <>
      {
        templates.filter((template) => template.key === formType).map((component) => (
          <component.children key={component.key} {...props} ref={ref} />
        ))
      }
    </>
  );
}
