import Link from 'next/link';

import AuthTemplate from '@/components/features/Auth/AuthTemplate';
import CredentialForm from '@/components/features/Auth/CredentialInputForm';
import useAuthForm from '@/hooks/useAuthForm';

function SignUp() {
  const { error, isSubmitting, onSubmit, clearError } = useAuthForm(
    'SIGN-UP',
    'CUSTOMER'
  );

  return (
    <AuthTemplate
      title="Sign Up"
      subtitle="Register to enjoy our services"
      error={error}
      clearError={clearError}
    >
      <CredentialForm isSubmitting={isSubmitting} onSubmit={onSubmit} />
      <Link href="/auth/sign-in">Sudah punya akun?</Link>
    </AuthTemplate>
  );
}

export default SignUp;
