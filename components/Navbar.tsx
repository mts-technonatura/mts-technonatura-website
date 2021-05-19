import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import NavFoot from 'components/main/navfoot';
import { SidebarContext } from 'context/SidebarContext';
import { BellIcon } from '@chakra-ui/icons';
import {
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '@/redux/index';
import * as AuthMethods from '@/redux/actions/index';
import { useCookies } from 'react-cookie';

export default function NavbarComponent({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const router = useRouter();
  const tokenCookieKey =
    process.env.NEXT_PUBLIC_JWT_AUTH_TOKEN || 'jwtAuthToken';
  const [cookies, setCookie] = useCookies();
  const dispatch = useDispatch();

  const authState = useSelector((state: RootStore) => state.auth);

  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  useEffect(() => {
    console.log(router);
    if (authState.loading) {
      dispatch(AuthMethods.AuthVerifyJWT(cookies[tokenCookieKey]));
    }
  }, []);
  useEffect(() => {
    closeSidebar();
  }, [router.asPath]);

  const { asPath } = useRouter();
  if (asPath.includes('/app')) {
    return (
      <>
        <div
          className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
            isSidebarOpen && 'overflow-hidden'
          }`}
        >
          <Sidebar />
          <div className='flex  flex-col flex-1 w-full overflow-y-auto	pb-20'>
            {authState.user && !authState.user.isAccountVerified && (
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                justifyContent='center'
                alignItems='center'
                py='3'
                px={{ base: '3', md: '6', lg: '8' }}
                color='white'
                bg={useColorModeValue('red.600', 'red.400')}
              >
                <HStack spacing='3'>
                  <Icon as={BellIcon} fontSize='2xl' h='10' />
                  <Text fontWeight='medium' marginEnd='2'>
                    Your account isn't verified yet, some{' '}
                    <Link href='/page/unverified-account'>
                      <a className='underline'>features</a>
                    </Link>{' '}
                    are not accessibble for you.
                  </Text>
                </HStack>
                <Link href='https://t.me/aldhaneka'>
                  <Button
                    as='div'
                    colorScheme='red'
                    variant='solid'
                    className='cursor-pointer	'
                    flexShrink={0}
                  >
                    Send Request
                  </Button>
                </Link>
              </Stack>
            )}
            <Header pathname={router.pathname} />
            <div className='app-content md:px-8 sm:px-20 pt-10'>{children}</div>
          </div>
        </div>
      </>
    );
  }
  return <NavFoot page={router.route}>{children}</NavFoot>;
}
