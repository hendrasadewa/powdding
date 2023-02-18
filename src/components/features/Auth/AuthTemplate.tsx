import { useSession } from '@supabase/auth-helpers-react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  subtitle: string;
}

function AuthTemplate({ children, title, subtitle }: Props) {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.replace('/dashboard');
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>Auth / {title}</title>
      </Head>
      <main className="flex flex-col gap-4 p-2 min-h-screen items-center justify-center">
        <header className="flex flex-col items-start justify-start w-full max-w-sm">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p>{subtitle}</p>
        </header>
        <div className="w-full max-w-sm">{children}</div>
      </main>
    </>
  );
}

export default AuthTemplate;
