import React, { useState } from 'react';
import { useRouter } from 'next/router';
import DrawerLayout from '@/components/features/Dashboard';
import { useUser } from '@supabase/auth-helpers-react';
import { useForm, Controller } from 'react-hook-form';
import { Avatar, Button, Card } from 'react-daisyui';
import { IoMale, IoFemale, IoPencil } from "react-icons/io5";


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

  return (
    <DrawerLayout title="Kelola Informasi mempelai">
      <div className='flex flex-row justify-center mt-10'>
        <Card className="flex flex-col justify-center align-middle  w-1/3 max-w-240 rounded overflow-hidden shadow-lg" >
          <Avatar
            src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
            shape='circle'
            size='lg'
            className='justify-center'
          />
          <Card.Body className="items-center text-center">
            <Card.Title tag="h2" className='mt-10 font-bold text-ellipsis'>Name</Card.Title>
            <div className='flex flex-row justify-center'>
              <IoMale className='text-center mt-3'size={22}/>
            </div>
            <p className="text-gray-700 text-base mt-3">Calon Mempelai Pria</p>
            <Card.Actions className="justify-end mt-3">
              <Button onClick={toggleVisible} startIcon={<IoPencil/>} size='xs'>Edit</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
        <Card className="flex flex-col p-16 ml-16 justify-center align-middle w-1/3 max-w-240 rounded overflow-hidden shadow-lg">
          <Avatar
            src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
            shape='circle'
            size='lg'
            className='justify-center'
          />
          <Card.Body className="items-center text-center">
            <Card.Title tag="h2" className='mt-10 font-bold text-ellipsis'>Name</Card.Title>
            <div className='flex flex-row justify-center'>
              <IoFemale className='text-center mt-3'size={22}/>
            </div>
            <p className="text-gray-700 text-base mt-3">Calon Mempelai Wanita</p>
            <Card.Actions className="justify-end mt-3">
              <Button onClick={toggleVisible} startIcon={<IoPencil/>} size='xs'>Edit</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </DrawerLayout>
  );
}

export default BridePage;
