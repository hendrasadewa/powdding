import React, { useState } from 'react';
import DrawerLayout from '@/components/features/Dashboard';
import dynamic from 'next/dynamic';
import { useUser } from '@supabase/auth-helpers-react';
import { useForm } from 'react-hook-form';
import { Button, Card } from 'react-daisyui';
import { IoAdd, IoCalendar } from "react-icons/io5";
import EventInput from '@/config/eventInput';

const ModalEditEvent = dynamic(() => import('@/components/features/Dashboard/Event/ModalEditEvent'));

function EventPage() {
  const user = useUser();
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      event_name: '',
      event_date: '',
      start_date: '',
      end_date: '',
      is_untill_finish: null,
      zone_time: '',
      event_place: '',
      event_address: '',
      location_url: '',
      is_main_event: false,
      is_hidden_event: false,
    },
  });

  const [visible, setVisible] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<any[]>([]);

  const toggleVisible = () => {
    setVisible(!visible)
  }

  const onSubmit = (data: any) => {
    console.log(data)
  };

  const onError = (error: any) => {
    setErrorMessage(error);
  };

  if (!user) {
    return <div>not allowed...</div>;
  }

  return (
    <DrawerLayout title="Kelola Informasi Acara">
      <div className="flex flex-col justify-start items-center h-full mx-8">
        <div className="flex flex-row justify-between align-center mb-3 w-full mt-4 mx-4">
          <h5 className="font-bold text-lg">Acara</h5>
          <Button 
            className="text-xs uppercase px-4 min-h-8 h-10" 
            startIcon={<IoAdd />} 
            size='xs'
            onClick={toggleVisible}
          >Tambah</Button>
        </div>
        <Card className="flex flex-col justify-center align-start w-full h-2/4 rounded overflow-hidden shadow-lg mt-4">
          <div className="flex flex-row justify-center align-middle">
            <IoCalendar className='text-center mt-3 align-center' size={50} color='#FD8A8A' />
          </div>
          <Card.Body className="items-start text-center">
            <Card.Title tag="h2" className='mt-10 font-bold text-ellipsis'>Belum Ada Acara</Card.Title>
            <p className="text-gray-700 text-base mt-3">Tambah acara yang akan di selenggarakan</p>
            <Card.Actions className="justify-end mt-5">
              <Button 
                className="text-xs uppercase px-4 min-h-8 h-10" 
                startIcon={<IoAdd />} 
                size='xs'
                onClick={toggleVisible}
              >Tambah</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
      <ModalEditEvent
        control={control}
        setValue={setValue}
        visible={visible}
        eventInput={EventInput}
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        onError={onError}
        toggleVisible={toggleVisible}
      />
    </DrawerLayout>
  );
}

export default EventPage;
