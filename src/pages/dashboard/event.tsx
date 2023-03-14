import React, { useState } from 'react';
import DrawerLayout from '@/components/features/Dashboard';
import dynamic from 'next/dynamic';
import { useUser } from '@supabase/auth-helpers-react';
import { useForm } from 'react-hook-form';
import { Button, Card } from 'react-daisyui';
import { IoAdd, IoCalendar, IoTrash, IoPencil } from "react-icons/io5";
import EventInput from '@/config/eventInput';
import dashboardStores from '@/stores/stores';

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

  const [events, setEvents] = dashboardStores(
    (state: any) => [state.events, state.setEvents],
  );

  const [visible, setVisible] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<any[]>([]);
  const [listEvent, setListEvent] = useState([]);

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
        {events.length === 1 ?
          <Card className="flex flex-col justify-between align-start w-full h-1/4 rounded-xl overflow-hidden shadow-lg mt-4 p-4">
            <Card.Body className="items-start p-3">
              <div className="flex flex-row justify-between align-start">
                <div className="flex flex-row justify-start align-start mt-2">
                  <div className="flex flex-col justify-start align-start mt-1">
                    <IoCalendar className='text-center align-center' size={30} color='#FD8A8A' />
                  </div>
                  <div className="flex flex-col justify-start align-start ml-3">
                    <p className="text-base font-bold text-left">Resepsi <sup className="bg-pastel-yellow rounded-full px-3 py-1 text-xs opacity-80">Utama</sup></p>
                    <p className=" text-sm text-left">11 Maret 2023</p>
                    <p className=" text-sm text-left">Gedung Pertemuan</p>
                  </div>
                </div>
                <div className="flex flex-col justify-start align-start mt-2">
                  <p className="text-sm font-bold text-center">Waktu</p>
                  <p className=" text-sm text-left">09.00 - selesai</p>
                </div>
              </div>
            </Card.Body>
            <Card.Actions className="flex flex-row justify-end align-end">
              <Button
                className="text-md uppercase px-3 min-h-6 h-8"
                startIcon={<IoTrash />}
                size='xs'
                variant='outline'
                onClick={toggleVisible}
              />
              <Button
                className="text-md uppercase px-3 min-h-6 h-8 ml-3"
                startIcon={<IoPencil />}
                size='xs'
                onClick={toggleVisible}
              />
            </Card.Actions>
          </Card>
          :
          <Card className="flex flex-col justify-center align-start w-full h-2/4 rounded-xl overflow-hidden shadow-lg mt-4">
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
        }
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
