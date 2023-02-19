import Alert from '@/components/global/Alert';
import { isAuthApiError } from '@supabase/supabase-js';
import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  subtitle: string;
  error: unknown;
  clearError: () => void;
}

function AuthTemplate({ children, title, subtitle, error, clearError }: Props) {
  const [alertMessage, setAlertMessage] = useState<string>();

  useEffect(() => {
    if (!error) {
      setAlertMessage(undefined);
      return;
    }

    if (isAuthApiError(error) || error instanceof Error) {
      setAlertMessage(error.message);
      return;
    }

    setAlertMessage('Unknown error');
  }, [error]);

  return (
    <>
      <Head>
        <title>Auth / {title}</title>
      </Head>
      <main className="grid grid-cols-6 lg:grid-cols-12 grid-rows-3 min-h-screen">
        <header className="col-start-2 col-end-6 lg:col-start-6 lg:col-end-9 self-end">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p>{subtitle}</p>
        </header>
        <div className="col-start-2 col-end-6 lg:col-start-6 lg:col-end-9">
          {children}
        </div>
        <div className="col-start-2 col-end-6 lg:col-start-6 lg:col-end-9">
          <Alert type="error" message={alertMessage} onClick={clearError} />
        </div>
      </main>
    </>
  );
}

export default AuthTemplate;
