import Link from 'next/link';

import AuthTemplate from '@/components/features/Auth/AuthTemplate';
import CredentialForm from '@/components/features/Auth/CredentialInputForm';
import useAuthForm from '@/hooks/useAuthForm';

function SignIn() {
  const { isSubmitting, error, onSubmit, clearError } = useAuthForm(
    'SIGN-IN',
    'CUSTOMER'
  );

  return (
    <AuthTemplate
      title="Sign In"
      subtitle="Welcome back"
      error={error}
      clearError={clearError}
    >
      <CredentialForm isSubmitting={isSubmitting} onSubmit={onSubmit} />
      <Link href="/auth/sign-up">Belum punya akun?</Link>
    </AuthTemplate>
  );
}

export default SignIn;
