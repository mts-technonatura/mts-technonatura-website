import { useRouter } from 'next/router';
import React, { useContext, Suspense, useEffect, lazy } from 'react';

import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import { SidebarContext } from 'context/SidebarContext';

export default function NavbarComponent({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useRouter();

  useEffect(() => {
    closeSidebar();
  }, [location.asPath]);

  const { asPath } = useRouter();
  if (asPath.includes('/app')) {
    return (
      <div
        className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
          isSidebarOpen && 'overflow-hidden'
        }`}
      >
        <Sidebar />
        <div className='flex flex-col flex-1 w-full overflow-y-auto	'>
          <Header />
          <div className='app-content md:px-8 sm:px-20'>{children}</div>
        </div>
      </div>
    );
  }
  return <>{children}</>;
}
