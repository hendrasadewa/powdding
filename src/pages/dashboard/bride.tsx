import React, { useState } from 'react';
import { useRouter } from 'next/router';
import DrawerLayout from '@/components/features/Dashboard';
import { useUser } from '@supabase/auth-helpers-react';
import { useForm, Controller } from 'react-hook-form';
import CoupleInput from '@/config/coupleInput';
import FormRender from '@/components/global/FormRender';
import { Button } from 'react-daisyui';

function BridePage() {
  const router = useRouter();
  const user = useUser();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      man_name: '',
      woman_name: '',
    },
  });

  const [errorMessage, setErrorMessage] = useState<any[]>([]);

  if (!user) {
    return <div>not allowed...</div>;
  }

  const onSubmit = (data: any) => {
    console.log(data)
  };
  const onError = (error: any) => {
    setErrorMessage(error);
  };

  return (
    <DrawerLayout title="Kelola Informasi mempelai">
      <div style={{ display: "flex", flexDirection: 'column', overflowY: "scroll", height: "85vh" }}>
        {!!CoupleInput?.length ? (
          <form style={{ display: 'flex', flexDirection: 'column', width: '100%' }} onSubmit={handleSubmit(onSubmit, onError)}>
            {CoupleInput.map((form: any) => (
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: 5 }} key={form.label}>
                <Controller
                  key={form.name}
                  name={form.name}
                  control={control}
                  rules={{ required: form?.required ? `${form.label} wajib diisi !` : false }}
                  render={({ field }: any) => (
                    <FormRender
                      {...field}
                      type={form?.type}
                      label={form?.label}
                      name={form?.name}
                      placeholder={form?.placeholder}
                      items={form?.option}
                      direction="row"
                      errorMessage={
												errorMessage?.[form.name]?.message
											}
                    />
                  )}
                />
              </div>
            ))}
            <div style={{ flexDirection: "row", marginTop: 16, marginLeft: 16, justifyContent: "flex-end" }}>
              <Button
                onClick={() => router.back()}
              >
                Back
              </Button>
              <Button
                style={{ marginLeft: 16 }}
                size="sm"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        ) : null}
      </div>
    </DrawerLayout>
  );
}

export default BridePage;
