import DrawerLayout from '@/components/features/Dashboard';
import { useUser } from '@supabase/auth-helpers-react';

function DashboardHomePage() {
  const user = useUser();

  if (!user) {
    return <div>not allowed...</div>;
  }

  return <DrawerLayout title="Home">hello</DrawerLayout>;
}

export default DashboardHomePage;
