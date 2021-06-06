import { useRouter } from 'next/router';
import Link from 'next/link';
import { useCookie } from 'next-universal-cookie';

import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ms from 'ms';

import styled from '@emotion/styled';
import { BellIcon } from '@chakra-ui/icons';
import {
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
  Link as ChakraLink,
  Container,
  chakra,
} from '@chakra-ui/react';

import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import NavFoot from 'components/main/navfoot';

import { SidebarContext } from 'context/SidebarContext';

import { RootStore } from '@/redux/index';
import * as AuthMethods from '@/redux/actions/index';

const CookieBanner = styled(Alert)`
  width: 100%;

  @media screen and (min-width: 800px) {
    width: 40%;
  }
`;

export default function NavbarComponent({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const router = useRouter();
  const tokenCookieKey =
    process.env.NEXT_PUBLIC_JWT_AUTH_TOKEN || 'jwtAuthToken';
  const [cookies, setCookie] = useCookie(['cookieConsentBanner']);
  const dispatch = useDispatch();

  const authState = useSelector((state: RootStore) => state.auth);

  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  useEffect(() => {
    // console.log(router);
    if (authState.loading) {
      dispatch(AuthMethods.AuthVerifyJWT(cookies[tokenCookieKey]));
    }
  }, []);
  useEffect(() => {
    console.log(cookies['cookieConsentBanner']);
    closeSidebar();
  }, [router.asPath]);

  function closeCookieBanner() {
    // console.log(tokenCookieKey);
    setCookie('cookieConsentBanner', true, {
      path: '/',
      maxAge: ms('10y'),
    });
  }

  const { asPath } = useRouter();
  if (asPath.includes('/dashboard')) {
    return (
      <>
        <div
          className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
            isSidebarOpen && 'overflow-hidden'
          }`}
        >
          {'cookieConsentBanner' in cookies ? (
            ''
          ) : (
            <CookieBanner
              status='warning'
              bottom='0'
              zIndex={9999}
              right='0'
              position='fixed'
            >
              <Box display='flex' alignItems='start'>
                <AlertIcon mt={1} />
                <Box flex='1'>
                  <AlertTitle>Cookies Consent 🍪</AlertTitle>
                  <AlertDescription display='block'>
                    This website use cookies for offer you a better experience,
                    you can read more in{' '}
                    <ChakraLink
                      style={{ textDecoration: 'underline' }}
                      href='/page/cookies-policy'
                    >
                      Cookie Policy
                    </ChakraLink>
                    . You can disable some cookies in{' '}
                    <ChakraLink
                      style={{ textDecoration: 'underline' }}
                      href='/settings/cookies'
                    >
                      cookies settings
                    </ChakraLink>
                  </AlertDescription>
                </Box>

                <CloseButton
                  onClick={closeCookieBanner}
                  position='absolute'
                  right='8px'
                  top='8px'
                />
              </Box>
            </CookieBanner>
          )}

          <Sidebar />
          <div className='flex  flex-col flex-1 w-full overflow-y-auto	pb-5'>
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
            <Box pt={100}>
              <Container
                as={Stack}
                maxW={'6xl'}
                direction={{ base: 'column', md: 'row' }}
                justify={{ base: 'center' }}
                align={{ base: 'center', md: 'center' }}
              >
                <Text className='text-gray-400 dark:text-cool-gray-500'>
                  © 2021 MTs TechnoNatura Contributors, all rights reserved.
                  Made with 💖 by{' '}
                  <chakra.a
                    href='https://aldhanekaa.github.io'
                    style={{ textDecoration: 'underline' }}
                  >
                    Aldhan
                  </chakra.a>
                </Text>
              </Container>
            </Box>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {!cookies['cookieConsentBanner'] && (
        <CookieBanner
          status='warning'
          position='fixed'
          bottom='0'
          zIndex={9999}
          display='flex'
          alignItems='start'
          right='0'
        >
          <AlertIcon mt={1} />
          <Box flex='1'>
            <AlertTitle>Cookies Consent 🍪</AlertTitle>
            <AlertDescription display='block'>
              This website use cookies for offer you a better experience, you
              can read more in{' '}
              <ChakraLink
                style={{ textDecoration: 'underline' }}
                href='/page/cookies-policy'
              >
                Cookie Policy
              </ChakraLink>
              . You can disable some cookies in{' '}
              <ChakraLink
                style={{ textDecoration: 'underline' }}
                href='/settings/cookies'
              >
                cookies settings
              </ChakraLink>
            </AlertDescription>
          </Box>

          <CloseButton
            onClick={closeCookieBanner}
            position='absolute'
            right='8px'
            top='8px'
          />
        </CookieBanner>
      )}
      <NavFoot page={router.route}>{children}</NavFoot>
    </>
  );
}
