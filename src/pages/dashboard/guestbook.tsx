import DrawerLayout from '@/components/Dashboard';
import { useUser } from '@supabase/auth-helpers-react';

function GuestbookPage() {
  const user = useUser();

  if (!user) {
    return <div>not allowed...</div>;
  }

  return (
    <DrawerLayout>
      Buku Tamu
    </DrawerLayout>
  );
}

export default GuestbookPage;
