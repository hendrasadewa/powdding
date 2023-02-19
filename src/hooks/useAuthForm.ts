import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export type AUTH_FORM_TYPE = 'SIGN-IN' | 'SIGN-UP';
export type ROLE = 'SUPER_ADMIN' | 'ADMIN' | 'CUSTOMER';

export default function useAuthForm(formType: AUTH_FORM_TYPE, role: ROLE) {
  const supabase = useSupabaseClient();
  const session = useSession();
  const router = useRouter();

  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    if (session) {
      router.replace('/dashboard');
    }
  }, [session, router]);

  const clearError = () => {
    setError(undefined);
  };

  const submitSignUp = async (email: string, password: string) => {
    const { data: signUpResult, error: signUpError } =
      await supabase.auth.signUp({
        email,
        password,
      });

    if (signUpError || !signUpResult || !signUpResult.user) {
      throw signUpError;
    }

    const { user } = signUpResult;

    const roleQuery = await supabase
      .from('role')
      .select('id')
      .eq('name', role)
      .single();

    if (roleQuery.error) {
      throw roleQuery.error;
    }

    // assign user role
    await supabase
      .from('user_role')
      .upsert({ user_id: user.id, role_id: roleQuery.data.id });

    // prefill user profile
    await supabase.from('profile').insert({ id: user.id });
  };

  const submitSignIn = async (email: string, password: string) => {
    const result = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (result.error) {
      throw result.error;
    }
  };

  const onSubmit = async (email: string, password: string) => {
    try {
      setSubmitting(true);
      switch (formType) {
        case 'SIGN-IN':
          await submitSignIn(email, password);
          break;
        case 'SIGN-UP':
          await submitSignUp(email, password);
          break;
      }
    } catch (error) {
      setError(error);
    } finally {
      setSubmitting(false);
    }
  };

  return { onSubmit, clearError, isSubmitting, error };
}
