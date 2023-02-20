import FormRender from '@/components/global/FormRender';
import { Controller } from 'react-hook-form';
import { IoClose } from "react-icons/io5";
import Modal from 'react-modal';

interface Props {
  control: any;
  gender: string;
  visible: boolean;
  coupleInput: any[];
  errorMessage: any;
  handleSubmit: any;
  toggleVisible: any;
  onSubmit: any;
  onError: any;
}

const ModalEditCouple = ({ control, gender, visible, coupleInput, errorMessage, handleSubmit, onSubmit, onError, toggleVisible }: Props) => {
  return (
    <Modal 
      isOpen={visible}
      onRequestClose={toggleVisible}
      // style={customStyles}
      className="content top-1/2 left-1/2 right-auto bottom-auto -mr-1/2 translate-x-2/3 translate-y-20 w-1/2 h-3/4 overflow-y-scroll bg-white border-transparent rounded-lg  py-4 px-4 shadow-lg"
    >
      <div className="flex flex-row font-bold justify-between pl-4" >
        <div className='flex flex-row'>
          <p>
            {gender === 'male' ? 'Edit Informasi Mempelai Pria' : 'Edit Informasi Mempelai Wanita'}
          </p>
          </div>
          <IoClose onClick={toggleVisible} className='cursor-pointer' size={24}/>
      </div>
      <div className='flex flex-col overscroll-contain overflow-y-scroll mt-3'>
        {!!coupleInput.length ? (
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            {coupleInput.map((form: any) => (
              <div className='mt-5' key={form.label}>
                <Controller
                  key={form.name}
                  name={form.name}
                  control={control}
                  rules={{ required: form?.required ? `${form.label} wajib diisi !` : false }}
                  render={({ field }) => (
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
          </form>
        ) : null}
      </div>
      <div className='flex flex-row justify-end align-middle mt-8'>
      <button className='btn mr-4 text-xs capitalize btn-outline py-2 px-8 min-h-8 h-10' onClick={toggleVisible}>Batal</button>
      <button className='btn text-xs capitalize px-8 min-h-8 h-10'>Simpan</button>
      </div>
    </Modal>
  );
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right:'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '80%',
    borderRadius: 8,
    padding: 16,
  },
};

export default ModalEditCouple;
