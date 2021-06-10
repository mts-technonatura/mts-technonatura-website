import React, { useContext, useState } from 'react';

import { SidebarContext } from 'context/SidebarContext';

import { WindmillContext } from '@windmill/react-ui';
import {
  Button,
  ButtonGroup,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
  MenuDivider,
  Heading,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@/redux/index';
import { AuthLogout } from '@/redux/actions';

import Cookie from 'js-cookie';

import Link from 'next/link';

import { MoonIcon, SunIcon, BellIcon, MenuIcon } from 'icons';
import { BiLogOut, BiUser, BiCog } from 'react-icons/bi';

interface HeaderI {
  pathname: string;
}

function Header({ pathname }: HeaderI) {
  const tokenCookieKey =
    process.env.NEXT_PUBLIC_JWT_AUTH_TOKEN || 'jwtAuthToken';
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStore) => state.auth);

  const { mode, toggleMode } = useContext(WindmillContext);

  const { toggleSidebar } = useContext(SidebarContext);
  async function logout() {
    Cookie.remove(tokenCookieKey);
    dispatch(AuthLogout());
  }
  // console.log(authState.user);

  return (
    <>
      <header className='sticky top-0 z-20 py-4 bg-white shadow-bottom dark:bg-gray-800'>
        <div className=' flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300'>
          {/* <!-- Mobile hamburger --> */}
          <button
            className='p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple'
            onClick={toggleSidebar}
            aria-label='Menu'
          >
            <MenuIcon className='w-6 h-6' aria-hidden='true' />
          </button>
          {/* <!-- Search input --> */}
          <div className='justify-items-start flex-1 hidden md:flex'>
            <div className='relative w-full max-w-xl text-cool-gray-800 dark:text-cool-gray-200 focus-within:text-purple-500'>
              <Heading size='md'>mts-technonatura dashboard</Heading>
            </div>
          </div>
          <ul className='flex items-center flex-shrink-0 space-x-6 dark:text-gray-300 text-gray-600'>
            {/* <!-- Theme toggler --> */}
            <li className='flex'>
              <button
                className='rounded-md focus:outline-none focus:shadow-outline-purple'
                onClick={toggleMode}
                aria-label='Toggle color mode'
              >
                {mode === 'dark' ? (
                  <SunIcon className='w-5 h-5' aria-hidden='true' />
                ) : (
                  <MoonIcon className='w-5 h-5' aria-hidden='true' />
                )}
              </button>
            </li>
            {/* <!-- Notifications menu --> */}
            <li className='relative'>
              <button
                className='relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple'
                aria-label='Notifications'
                aria-haspopup='true'
              >
                <BellIcon className='w-5 h-5' aria-hidden='true' />
                {/* <!-- Notification badge --> */}
                <span
                  aria-hidden='true'
                  className='absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800'
                ></span>
              </button>
            </li>
            {/* <!-- Profile menu --> */}
            <li className='relative '>
              {authState.fetched ? (
                authState.user ? (
                  <Menu>
                    <MenuButton aria-label='Options' variant='outline'>
                      <Avatar
                        className='align-middle'
                        src=''
                        name={authState.user?.username}
                      />
                    </MenuButton>

                    <MenuList className='dark:bg-gray-800'>
                      <MenuItem
                        className='dark:hover:bg-gray-600'
                        icon={<BiUser size='20px' />}
                        command='⌘+'
                      >
                        Profile
                      </MenuItem>
                      <Link href={`/dashboard/settings`}>
                        <MenuItem
                          className='dark:hover:bg-gray-600'
                          icon={<BiCog size='20px' />}
                          command='⌘N'
                        >
                          Account Settings
                        </MenuItem>
                      </Link>
                      <MenuDivider />
                      <MenuItem
                        className='dark:hover:bg-gray-600'
                        onClick={logout}
                        icon={<BiLogOut size='20px' />}
                        command='⌘←'
                      >
                        Logout
                      </MenuItem>
                    </MenuList>
                  </Menu>
                ) : (
                  <Link href='/login'>
                    <Button
                      bg='blue.400'
                      color='gray.50'
                      _hover={{ bg: 'blue.500' }}
                      _active={{ bg: 'blue.600' }}
                    >
                      Login
                    </Button>
                  </Link>
                )
              ) : (
                <Button
                  isLoading
                  bg='blue.400'
                  color='gray.50'
                  _hover={{ bg: 'blue.500' }}
                  _active={{ bg: 'blue.600' }}
                >
                  Login
                </Button>
              )}
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
