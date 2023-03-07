import { useState } from 'react';
import { useRouter } from 'next/router';
import DrawerLayout from '@/components/features/Dashboard';
import { useUser } from '@supabase/auth-helpers-react';
import { useForm, Controller } from 'react-hook-form';
import FormRender from '@/components/global/FormRender';
import CoverInput from '@/config/coverInput';
import { EVENT_OPTION_DEFAULT } from '@/components/features/Dashboard/constants';

function CoverPage() {
  const router = useRouter();
  const user = useUser();
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      display_name_male: '',
      display_name_female: '',
      display_event_date: '',
      mother_name: '',
      other_information: '',
      ig_username: '',
      profile_pict: '',
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

  const goBack = (error: any) => {
    router.back()
  };


  if (!user) {
    return <div>not allowed...</div>;
  }

  return (
    <DrawerLayout title="Kelola Informasi Cover">
    <div className='flex flex-col lg:flex-row flex-start mt-8'>
    <div className='flex flex-col overscroll-contain overflow-y-scroll mt-3 w-full'>
        {!!CoverInput.length ? (
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            {CoverInput.map((form: any) => {
              const options = form?.name === 'display_event_date' ?  EVENT_OPTION_DEFAULT : [];
              return (
              <div className='mt-5' key={form.label}>
                <Controller
                  key={form.name}
                  name={form.name}
                  control={control}
                  rules={{ required: form?.required ? `${form.label} wajib diisi !` : false }}
                  render={({ field }) => (
                    <FormRender
                      {...field}
                      formType={form?.formType}
                      label={form?.label}
                      name={form?.name}
                      placeholder={form?.placeholder}
                      required={form?.required}
                      items={options}
                      direction="row"
                      setValue={setValue}
                      errorMessage={
                        errorMessage?.[form.name]?.message
                      }
                    />
                  )}
                />
              </div>
            )})}
            <div className='flex flex-row justify-end flex-end mt-8 w-full'>
              <button className='btn mr-4 text-xs capitalize btn-outline py-2 px-8 min-h-8 h-10' onClick={goBack}>Kembali</button>
              <button className='btn text-xs capitalize px-8 min-h-8 h-10' type="submit">Simpan</button>
            </div>
          </form>
        ) : null}
        </div>
      </div>
      </DrawerLayout>
  );
}

export default CoverPage;
