import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function SignOutPage() {
  const supabase = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.signOut().then(() => {
      router.replace('/auth/sign-in');
    });
  }, [supabase, router]);

  return <div>sign out...</div>;
}

export default SignOutPage;
