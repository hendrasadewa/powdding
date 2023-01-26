/* eslint-disable camelcase */
import FormRender from '../FormRender';

interface Props {
    styles: any;
    data: any;
    keyInput: string;
    Controller: any;
    control: any;
}

function FormGenerator({
    styles,
    data,
    keyInput,
    Controller,
    control,
}: Props) {
    return (
        <div style={styles || { padding: '10px', display: 'block' }}>
            {data[keyInput].map((input: any) => (
                <div key={input.name} style={{ display: 'block', padding: '10px 0' }}>
                    <Controller
                        name={input.name}
                        control={control}
                        render={({ field }: any) => (
                            <FormRender
                                {...field}
                                type={input.type}
                                items={input.option}
                                name={input.name}
                                label={input.label}
                            />
                        )}
                    />
                </div>
            ))}
        </div>
    );
}

export default FormGenerator;
