import React, { useState } from 'react';
import { DropdownIcon } from 'icons';
import { Transition } from '@windmill/react-ui';
import _ from 'underscore';

import { UserInterface } from 'ts/index';

import { routesI } from 'routes/sidebar';

import { checkRoles } from 'utils/checkRoles';

import { MenuItem } from './SidebarContent';

function SidebarSubmenu({
  route,
  asPath,
  user,
}: {
  route: routesI;
  asPath: string;
  user?: UserInterface;
}) {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  function handleDropdownMenuClick() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }

  return (
    <li className='relative px-6 py-3' key={route.name}>
      <button
        className='inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'
        onClick={handleDropdownMenuClick}
        aria-haspopup='true'
      >
        <span className='inline-flex items-center'>
          <route.Icon className='w-5 h-5' aria-hidden='true' />
          <span className='ml-4'>{route.name}</span>
        </span>
        <DropdownIcon className='w-4 h-4' aria-hidden='true' />
      </button>
      <Transition
        show={isDropdownMenuOpen}
        enter='transition-all ease-in-out duration-300'
        enterFrom='opacity-25 max-h-0'
        enterTo='opacity-100 max-h-xl'
        leave='transition-all ease-in-out duration-300'
        leaveFrom='opacity-100 max-h-xl'
        leaveTo='opacity-0 max-h-0'
      >
        <ul
          className='p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900'
          aria-label='submenu'
        >
          {route?.routes &&
            route?.routes.map((route) => (
              <>
                {user ? (
                  route.permission ? (
                    checkRoles(user.roles, route.permission) && (
                      <MenuItem
                        key={route.name}
                        asPath={asPath}
                        route={route}
                      />
                    )
                  ) : (
                    <MenuItem key={route.name} asPath={asPath} route={route} />
                  )
                ) : !route.permission ? (
                  <MenuItem key={route.name} asPath={asPath} route={route} />
                ) : (
                  ''
                )}
              </>
            ))}
        </ul>
      </Transition>
    </li>
  );
}

export default SidebarSubmenu;
