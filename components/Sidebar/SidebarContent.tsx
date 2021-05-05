import React from 'react';
import { Router, useRouter } from 'next/router';
import routes, { routeI } from '../../routes/sidebar';
import Link from 'next/link';
import SidebarSubmenu from './SidebarSubmenu';
import { Button } from '@windmill/react-ui';
import { useSelector } from 'react-redux';
import { RootStore } from '@/redux/index';
import _ from 'underscore';
import { checkRoles } from 'utils/checkRoles';

function SidebarContent() {
  const authState = useSelector((state: RootStore) => state.auth);

  const { asPath } = useRouter();
  return (
    <div className='flex flex-col justify-between h-full py-4 text-gray-500 dark:text-gray-400'>
      <div>
        <div className='w-full'>
          <Link href='/app'>
            <a className='ml-4 text-xl font-bold text-gray-800 dark:text-gray-200'>
              MTS TN Dashboard
            </a>
          </Link>
        </div>

        <ul className='mt-10'>
          {routes.map((route) =>
            route.routes ? (
              <SidebarSubmenu
                asPath={asPath}
                user={authState.user}
                route={route}
                key={route.name}
              />
            ) : (
              <>
                {authState.user ? (
                  route.permission ? (
                    checkRoles(authState.user.roles, route.permission) && (
                      <MenuItem asPath={asPath} route={route} />
                    )
                  ) : (
                    <MenuItem asPath={asPath} route={route} />
                  )
                ) : !route.permission ? (
                  <MenuItem asPath={asPath} route={route} />
                ) : (
                  ''
                )}
              </>
            ),
          )}
        </ul>
      </div>
      <div className='px-6 my-6'>
        <Button className='flex-col'>
          {/* <img
            src='https://www.tailwind-kit.com/images/landscape/2.jpg'
            className='rounded-lg mb-2'
            alt='Tree'
          /> */}
          Contribute to Project
        </Button>
      </div>
    </div>
  );
}

export function MenuItem({ route, asPath }: { route: routeI; asPath: string }) {
  return (
    <li className='relative px-6 py-3' key={route.name}>
      <Link href={route.path}>
        <a
          className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
            asPath == route.path ? 'dark:text-gray-100 text-gray-800' : ''
          }`}
        >
          {asPath == route.path && (
            <span
              className='absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'
              aria-hidden='true'
            ></span>
          )}

          <route.Icon className='w-5 h-5' aria-hidden='true' />
          <span className='ml-4'>{route.name}</span>
        </a>
      </Link>
    </li>
  );
}

export default SidebarContent;
