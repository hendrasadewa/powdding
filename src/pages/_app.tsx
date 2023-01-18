import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';

interface Props {
  initialSession: Session;
}

function MyApp({ Component, pageProps }: AppProps<Props>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}

export default MyApp;
