import DrawerLayout from '@/components/Dashboard';
import { useUser } from '@supabase/auth-helpers-react';

function EventPage() {
  const user = useUser();

  if (!user) {
    return <div>not allowed...</div>;
  }

  return (
    <DrawerLayout title="Kelola Informasi Acara">Informasi Acara</DrawerLayout>
  );
}

export default EventPage;
