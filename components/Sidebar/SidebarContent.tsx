import React from 'react';
import { useSelector } from 'react-redux';

import { Router, useRouter } from 'next/router';
import Link from 'next/link';

import _ from 'underscore';

import { Image, Tooltip, Divider } from '@chakra-ui/react';

import routes, { routeI, checkOnPage } from '../../routes/sidebar';
import SidebarSubmenu from './SidebarSubmenu';
import { checkRoles } from 'utils/checkRoles';

import { RootStore } from '@/redux/index';

function SidebarContent() {
  const authState = useSelector((state: RootStore) => state.auth);

  const { route: router, asPath } = useRouter();
  return (
    <div className='flex flex-col justify-between h-full  text-gray-500 dark:text-gray-400'>
      <div>
        <Link href='/dashboard'>
          <a className='ml-4 font-bold text-gray-800 dark:text-gray-200'>
            <Image
              className='ml-2'
              boxSize='50px'
              objectFit='cover'
              src='/favicon.ico'
            />
          </a>
        </Link>

        {/* <Divider mt={2} /> */}

        <ul className='mt-10'>
          {routes.map(
            (route) =>
              route.type == 'up' &&
              (route.routes ? (
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
                        <MenuItem
                          key={route.name}
                          asPath={router}
                          route={route}
                        />
                      )
                    ) : (
                      <MenuItem
                        key={route.name}
                        asPath={router}
                        route={route}
                      />
                    )
                  ) : !route.permission ? (
                    <MenuItem key={route.name} asPath={router} route={route} />
                  ) : (
                    ''
                  )}
                </>
              )),
          )}
        </ul>
      </div>

      <div>
        <ul className='mt-10'>
          {routes.map(
            (route) =>
              route.type == 'down' && (
                <>
                  {authState.user ? (
                    route.permission ? (
                      checkRoles(authState.user.roles, route.permission) && (
                        <MenuItem
                          key={route.name}
                          asPath={router}
                          route={route}
                          down
                        />
                      )
                    ) : (
                      <MenuItem
                        key={route.name}
                        asPath={router}
                        route={route}
                        down
                      />
                    )
                  ) : !route.permission ? (
                    <MenuItem
                      key={route.name}
                      down
                      asPath={router}
                      route={route}
                    />
                  ) : (
                    ''
                  )}
                </>
              ),
          )}
        </ul>
      </div>

      {/* <div className='px-6 my-6'>
        <Button className='flex-col'>
          
          Contribute to Project
        </Button>
      </div> */}
    </div>
  );
}

export function MenuItem({
  route,
  asPath,
  down,
}: {
  route: routeI;
  asPath: string;
  down?: boolean;
}) {
  return (
    <Tooltip
      hasArrow
      label={route.name}
      placement='right'
      bg='gray.300'
      color='black'
    >
      <li
        className='relative px-6 py-3 cursor-pointer dark:hover:text-gray-200 hover:text-gray-800'
        key={route.name}
      >
        <Link href={route.path}>
          <a
            className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 ${
              asPath == route.path ||
              (route.onPage && checkOnPage(asPath, route.onPage))
                ? 'dark:text-gray-100 text-gray-800'
                : 'dark:text-gray-400 hover:dark:text-gray-200'
            }`}
          >
            {!down &&
              (route.onPage
                ? checkOnPage(asPath, route.onPage) && (
                    <span
                      className='absolute inset-y-0 left-0 w-1 bg-blue-500 rounded-tr-lg rounded-br-lg'
                      aria-hidden='true'
                    ></span>
                  )
                : asPath == route.path && (
                    <span
                      className='absolute inset-y-0 left-0 w-1 bg-blue-500 rounded-tr-lg rounded-br-lg'
                      aria-hidden='true'
                    ></span>
                  ))}

            <route.Icon className='w-5 h-5 ' aria-hidden='true' />
            <span className='ml-4 lg:hidden'>{route.name}</span>
          </a>
        </Link>
      </li>
    </Tooltip>
  );
}

export default SidebarContent;
