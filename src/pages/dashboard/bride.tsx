import DrawerLayout from '@/components/features/Dashboard';
import { useUser } from '@supabase/auth-helpers-react';

function BridePage() {
  const user = useUser();

  if (!user) {
    return <div>not allowed...</div>;
  }

  return (
    <DrawerLayout title="Kelola Informasi mempelai">
      Informasi mempelai
    </DrawerLayout>
  );
}

export default BridePage;
