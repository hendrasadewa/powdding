import React, { useState } from 'react';
import { useRouter } from 'next/router';
import DrawerLayout from '@/components/features/Dashboard';
import { useUser } from '@supabase/auth-helpers-react';
import { useForm, Controller } from 'react-hook-form';
import { Avatar, Button, Card } from 'react-daisyui';
import { IoMale, IoFemale, IoPencil } from "react-icons/io5";
import CoupleInput from '@/config/coupleInput';
import ModalEditCouple from '@/components/features/Dashboard/Bride/ModalEditCouple';


function BridePage() {
  const router = useRouter();
  const user = useUser();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      man_name: '',
      woman_name: '',
    },
  });

  const [visible, setVisible] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<any[]>([]);
  const [gender, setGender] = useState<string>('');

  if (!user) {
    return <div>not allowed...</div>;
  }

  const toggleVisible = () => {
    setVisible(!visible)
  }
  
  const onSubmit = (data: any) => {
    console.log(data)
  };

  const onError = (error: any) => {
    setErrorMessage(error);
  };

  const onClickEdit = (gen : any) => {
    setGender(gen)
    toggleVisible()
  }

  return (
    <DrawerLayout title="Kelola Informasi mempelai">
      <div className='flex flex-col lg:flex-row justify-center mt-8'>
        <Card className="flex flex-col justify-center align-middle w-full h-2/5 py-8 lg:w-1/3 lg:h-fit lg:mr-8 rounded overflow-hidden shadow-lg mb-10">
          <Avatar
            src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
            shape='circle'
            size='lg'
            className='justify-center'
          />
          <Card.Body className="items-center text-center">
            <Card.Title tag="h2" className='mt-10 font-bold text-ellipsis'>Name</Card.Title>
            <div className='flex flex-row justify-center'>
              <IoMale className='text-center mt-3'size={22} color='#1572A1'/>
            </div>
            <p className="text-gray-700 text-base mt-3">Calon Mempelai Pria</p>
            <Card.Actions className="justify-end mt-5">
              <Button onClick={() => onClickEdit('male')} startIcon={<IoPencil/>} size='xs'>Edit</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
        <Card className="flex flex-col justify-center align-middle w-full h-2/5 py-8 lg:w-1/3 lg:h-fit lg:mr-8 rounded overflow-hidden shadow-lg mb-10">
          <Avatar
            src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
            shape='circle'
            size='lg'
            className='justify-center'
          />
          <Card.Body className="items-center text-center">
            <Card.Title tag="h2" className='mt-10 font-bold text-ellipsis'>Name</Card.Title>
            <div className='flex flex-row justify-center'>
              <IoFemale className='text-center mt-3'size={22} color='#FF8AAE'/>
            </div>
            <p className="text-gray-700 text-base mt-3">Calon Mempelai Wanita</p>
            <Card.Actions className="justify-end mt-5">
              <Button onClick={() => onClickEdit('female')} startIcon={<IoPencil/>}  size='xs'>Edit</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
      <ModalEditCouple
        control={control}
        gender={gender}
        visible={visible}
        coupleInput={CoupleInput}
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        onError={onError}
        toggleVisible={toggleVisible}
      />
    </DrawerLayout>
  );
}

export default BridePage;
