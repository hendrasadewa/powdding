import { AuthApiError } from '@supabase/supabase-js';
import { useState } from 'react';

import AuthTemplate from '@/components/features/Auth/AuthTemplate';
import CredentialForm from '@/components/features/Auth/CredentialInputForm';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function SignIn() {
  const supabase = useSupabaseClient();
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async (email: string, password: string) => {
    try {
      setSubmitting(true);
      const result = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (result.error) {
        throw result.error;
      }
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
    <AuthTemplate title="Sign In" subtitle="Welcome back">
      <CredentialForm isSubmitting={isSubmitting} onSubmit={handleSubmit} />
      <Link href="/auth/sign-up">Belum punya akun?</Link>
    </AuthTemplate>
  );
}

export default SignIn;
