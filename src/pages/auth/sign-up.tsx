import { AuthApiError } from '@supabase/supabase-js';
import { useState } from 'react';

import AuthTemplate from '@/components/features/Auth/AuthTemplate';
import CredentialForm from '@/components/features/Auth/CredentialInputForm';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Link from 'next/link';

function SignUp() {
  const supabase = useSupabaseClient();
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async (email: string, password: string) => {
    try {
      setSubmitting(true);
      const result = await supabase.auth.signUp({
        email,
        password,
      });

      if (result.error || !result.data || !result.data.user) {
        throw result.error;
      }

      const roleQuery = await supabase
        .from('role')
        .select('id')
        .eq('name', 'CUSTOMER')
        .limit(1)
        .single();

      if (roleQuery.error) {
        throw roleQuery.error;
      }

      // assign user role
      await supabase
        .from('userRole')
        .upsert({ userId: result.data.user.id, roleId: roleQuery.data.id });
      
      // prefill user profile
      await supabase.from('profile').insert({ id: result.data.user.id });
    } catch (error) {
      if (error instanceof AuthApiError) {
        alert(error.message);
      }
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthTemplate title="Sign Up" subtitle="Register to enjoy our services">
      <CredentialForm isSubmitting={isSubmitting} onSubmit={handleSubmit} />
      <Link href="/auth/sign-in">Sudah punya akun?</Link>
    </AuthTemplate>
  );
}

export default SignUp;
