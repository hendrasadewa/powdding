import DrawerLayout from '@/components/features/Dashboard';
import { useUser } from '@supabase/auth-helpers-react';

function WishesPage() {
  const user = useUser();

  if (!user) {
    return <div>not allowed...</div>;
  }

  return (
    <DrawerLayout title="Kelola Ucapan Pernikahan">
      Ucapan Pernikahan
    </DrawerLayout>
  );
}

export default WishesPage;
