import React, { createRef } from 'react';
import { TextInput, SingleImageInput } from '../FormInput';

const templates = [
	{
		key: 'textInput',
		children: TextInput,
	},
	{
		key: 'singleImageInput',
		children: SingleImageInput,
	},
];

export default function FormRender(props: any) {
	const type = props.type || 'input';
	const ref = createRef();
	return (
		<>
			{
				templates.filter((template) => template.key === type).map((component) => (
					<component.children key={component.key} {...props} ref={ref} />
				))
			}
		</>
	);
}
