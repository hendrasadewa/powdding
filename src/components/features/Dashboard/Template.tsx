import Head from 'next/head';
import { ReactNode } from 'react';
import Breadcrumbs from '../../global/Breadcrumbs';
import Navbar from './Navbar';

interface Props {
  children: ReactNode;
}

function DashboardTemplate({ children }: Props) {
  return (
    <>
      <Head>
        <title>Powdding / Dashboard</title>
      </Head>
      <header className="sticky top-0 z-30">
        <Navbar />
      </header>
      <main className="min-h-screen p-4">
        <Breadcrumbs />
        {children}
      </main>
    </>
  );
}

export default DashboardTemplate;
