import Head from 'next/head';
import { ReactNode } from 'react';

import Breadcrumbs from '../../global/Breadcrumbs';

import Navbar from './Navbar';
import { DRAWER_ID, MENU } from './constants';
import DrawerSide from './DrawerSide';
import RightSide from './RightSide';

interface Props {
  children: ReactNode;
  title: string;
}

function DrawerLayout({ children, title = 'dashboard' }: Props) {
  return (
    <>
      <Head>
        <title>Powdding | Dashboard / {title}</title>
      </Head>
      <div className="drawer drawer-mobile bg-slate-100">
        <input id={DRAWER_ID} type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="lg:hidden">
            <Navbar />
          </div>
          <div className="flex items-start">
            <div className="w-full px-8 py-4 max-h-screen h-screen">
              <div className="bg-base-100 flex flex-col h-full rounded-lg p-4">
                <Breadcrumbs />
                <header className="py-4">
                  <h1 className="text-xl font-bold">{title}</h1>
                </header>
                {children}
              </div>
            </div>
            <RightSide />
          </div>
        </div>
        <DrawerSide menu={MENU} />
      </div>
    </>
  );
}

export default DrawerLayout;
