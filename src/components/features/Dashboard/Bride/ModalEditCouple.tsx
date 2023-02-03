import { Modal } from 'react-daisyui';
import FormRender from '@/components/global/FormRender';
import { Controller } from 'react-hook-form';
import { IoClose } from "react-icons/io5";

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

const  ModalEditCouple = ({ control, gender, visible, coupleInput, errorMessage, handleSubmit, onSubmit, onError, toggleVisible }: Props) => {
  return (
    <Modal open={false}>
      <Modal.Header className="font-bold">
        <div className='flex flex-row justify-between'>
        <p>
        { gender === 'male' ? 'Edit Informasi Mempelai Pria' : 'Edit Informasi Mempelai Wanita'}
        </p>
        <IoClose onClick={toggleVisible} className='cursor-pointer' />
        </div>
      </Modal.Header>
      <Modal.Body>
      { !!coupleInput.length  ? (
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
      </Modal.Body>
    </Modal>
  );
}

export default ModalEditCouple;
