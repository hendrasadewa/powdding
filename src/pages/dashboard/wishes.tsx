import DrawerLayout from '@/components/Dashboard';
import { useUser } from '@supabase/auth-helpers-react';

function WishesPage() {
  const user = useUser();

  if (!user) {
    return <div>not allowed...</div>;
  }

  return (
    <DrawerLayout>
      Ucapan Pernikahan
    </DrawerLayout>
  );
}

export default WishesPage;
