import DrawerLayout from '@/components/Dashboard';
import { useUser } from '@supabase/auth-helpers-react';

function RSVPPage() {
  const user = useUser();

  if (!user) {
    return <div>not allowed...</div>;
  }

  return <DrawerLayout title="Kelola Reservasi">Reservasi</DrawerLayout>;
}

export default RSVPPage;
