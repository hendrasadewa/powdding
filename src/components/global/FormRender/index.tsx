import React, { createRef } from 'react';
import { TextInput, SingleImageInput, FormSelect, SingleDatePicker, FormCheckbox, FormToggle, TextArea } from '../FormInput';

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
  {
    key: 'checkbox',
    children: FormCheckbox,
  },
  {
    key: 'toggle',
    children: FormToggle,
  },
  {
    key: 'textArea',
    children: TextArea,
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
