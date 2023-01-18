import { useUser } from '@supabase/auth-helpers-react'
import Link from 'next/link';

function DashboardPage() {
  const user = useUser();

  if (!user) {
    return <div>not allowed...</div>
  }

  return (
    <div>
      welcome {user.email}
      <Link href="/auth/signout">sign out</Link>
    </div>
  )
}

export default DashboardPage;
