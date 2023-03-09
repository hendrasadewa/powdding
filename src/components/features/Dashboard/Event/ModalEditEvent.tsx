import FormRender from '@/components/global/FormRender';
import { Controller } from 'react-hook-form';
import { IoClose } from "react-icons/io5";
import Modal from 'react-modal';
import { ZONE_TIME } from '../constants';

interface Props {
  control: any;
  visible: boolean;
  eventInput: any[];
  errorMessage: any;
  handleSubmit: any;
  toggleVisible: any;
  setValue: any;
  onSubmit: any;
  onError: any;
}

const ModalEditEvent = ({ 
  control, 
  visible, 
  eventInput, 
  errorMessage, 
  handleSubmit, 
  onSubmit, 
  onError, 
  toggleVisible, 
  setValue 
}: Props) => {
  return (
    <Modal
      isOpen={visible}
      onRequestClose={toggleVisible}
      className="content top-1/2 left-1/2 right-auto bottom-auto -mr-1/2 translate-x-2/3 translate-y-20 w-1/2 h-4/5 overflow-y-scroll bg-white border-transparent rounded-lg  py-4 px-4 shadow-lg"
    >
      <div className="flex flex-row font-bold justify-between pl-4" >
        <div className='flex flex-row'>
          <p>
            Informasi Acara
          </p>
        </div>
        <IoClose onClick={toggleVisible} className='cursor-pointer' size={24} />
      </div>
      <div className='flex flex-col overscroll-contain overflow-y-scroll mt-3'>
        {!!eventInput.length ? (
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            { eventInput.map((form: any) => {
              const options = form?.name === 'zone_time' ?  ZONE_TIME : [];
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
                      type={form?.type}
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
            <div className='flex flex-row justify-end align-middle mt-8'>
              <button className='btn mr-4 text-xs capitalize btn-outline py-2 px-8 min-h-8 h-10' onClick={toggleVisible}>Batal</button>
              <button className='btn text-xs capitalize px-8 min-h-8 h-10' type="submit">Simpan</button>
            </div>
          </form>
        ) : null}
      </div>
    </Modal>
  );
}

export default ModalEditEvent;
