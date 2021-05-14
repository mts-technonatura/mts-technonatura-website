import React, { useState, useEffect } from 'react';
import InfoCard from 'components/Cards/InfoCard';
import Link from 'next/link';
/* ======================= UI ======================= */
import {
  Button,
  Flex,
  Stack,
  Container,
  Heading,
  Text,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import Box from '@material-ui/core/Box';
/* ======================= END UI ======================= */

import { useSelector } from 'react-redux';
import { RootStore } from '@/redux/index';
import { useRouter } from 'next/router';
import LoadingPage from 'components/loadingpage';
import CreateNewArduinoAppDrawer from '@/components/admin/arduinoapp/createNewArduinoApp';

import { arduinoAppI } from 'ts';
import axios from 'axios';
import _ from 'underscore';
import { NoItemIcon, UnhappyGhost } from 'icons';

interface arduinoAppsResponse {
  apps?: arduinoAppI[];
}

interface arduinoAppsI extends arduinoAppsResponse {
  fetched: boolean;
}

function ArduinoApps() {
  const {
    isOpen: isCreateNewDrawerOpen,
    onOpen: onCreateNewDrawerOpen,
    onClose: onCreateNewDrawerClose,
  } = useDisclosure();

  //   const [allData, setAllData] = useState<Readonly<AlldataI[]>>();
  const router = useRouter();
  const authState = useSelector((state: RootStore) => state.auth);
  const [arduinoApps, setArduinoApps] = useState<arduinoAppsI>({
    fetched: false,
  });

  useEffect(() => {
    if (authState.token && authState.user) fetchArduinoApps();
  }, [authState.token]);

  async function fetchArduinoApps() {
    let audio;

    try {
      const apps = await axios.post<arduinoAppsResponse>(
        process.env.NEXT_PUBLIC_ARDUINO_APPS ||
          'http://localhost:3030/arduino/apps',
        { authToken: authState.token },
      );

      setArduinoApps({
        apps: apps.data.apps,
        fetched: true,
      });
    } catch (err) {
      setArduinoApps({
        apps: [],
        fetched: true,
      });
    }
  }
  if (!authState.fetched && authState.loading) {
    return <LoadingPage />;
  } else if (!arduinoApps.fetched && authState.user) {
    return <LoadingPage text='Fetching Apps' />;
  }

  if (!authState.user || !authState.user.isAccountVerified) {
    return (
      <CallToActionWithIllustration
        Icon={<UnhappyGhost mt={{ base: 12, sm: 16 }} />}
        title="You Don't Have an Access To This Feature"
        desc='This Feature is only accessible for verified users'
        Buttons={
          <>
            {!authState.user ? (
              <>
                <Link href='/login'>
                  <Button
                    rounded={'full'}
                    px={6}
                    colorScheme={'purple'}
                    bg='purple.600'
                    _hover={{ bg: 'purple.700' }}
                  >
                    Login
                  </Button>
                </Link>
                <Link href='/create-account'>
                  <Button
                    className='dark:bg-cool-gray-300'
                    rounded={'full'}
                    px={6}
                  >
                    Create an Account
                  </Button>
                </Link>
              </>
            ) : (
              <Link href='https://t.me/aldhaneka'>
                <Button
                  rounded={'full'}
                  px={6}
                  colorScheme={'purple'}
                  bg='purple.600'
                  _hover={{ bg: 'purple.700' }}
                >
                  Request To Verify
                </Button>
              </Link>
            )}
          </>
        }
      />
    );
  }

  return (
    <>
      {authState.user && arduinoApps?.apps && Array.isArray(arduinoApps?.apps) && (
        <>
          {authState.user.isAccountVerified && arduinoApps?.apps.length == 0 ? (
            <CallToActionWithIllustration
              title="You Don't Have Arduino App yet"
              Icon={<NoItemIcon mt={{ base: 12, sm: 16 }} />}
              desc="You don't have any arduino app yet, create a new one!"
              Buttons={
                <>
                  <Button
                    rounded={'full'}
                    px={6}
                    colorScheme={'purple'}
                    bg='purple.600'
                    _hover={{ bg: 'purple.700' }}
                  >
                    Get started
                  </Button>

                  <Button
                    onClick={onCreateNewDrawerOpen}
                    rounded={'full'}
                    px={6}
                  >
                    Create New
                  </Button>
                </>
              }
            />
          ) : (
            authState.user.isAccountVerified && (
              <>
                <Flex>
                  <Box p='2' className='flex justify-center items-center'>
                    <Heading size='lg' className='dark:text-cool-gray-300 mb-8'>
                      Arduino Apps
                    </Heading>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button
                      colorScheme='teal'
                      bg='purple.600'
                      onClick={onCreateNewDrawerOpen}
                      _hover={{ bg: 'purple.700' }}
                    >
                      Create New App
                    </Button>
                  </Box>
                </Flex>
                <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4'>
                  {arduinoApps?.apps.map((app, id) => (
                    <InfoCard
                      title={
                        <Link href={`/app/arduinoapps/${app._id}`}>
                          {app.name}
                        </Link>
                      }
                      type={1}
                      value={app.desc}
                    ></InfoCard>
                  ))}
                </div>
              </>
            )
          )}

          <CreateNewArduinoAppDrawer
            token={authState.token}
            isOpen={isCreateNewDrawerOpen}
            onClose={onCreateNewDrawerClose}
            onOpen={onCreateNewDrawerOpen}
          />
        </>
      )}
    </>
  );
}

interface CallToActionWithIllustrationI {
  title: string;
  desc: string;
  Buttons?: JSX.Element | JSX.Element[];
  Icon?: JSX.Element;
}
export function CallToActionWithIllustration({
  Buttons,
  title,
  desc,
  Icon,
}: CallToActionWithIllustrationI) {
  return (
    <>
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Flex w={'full'} justifyContent='center'>
            {Icon}
          </Flex>
          <Heading
            className='dark:text-cool-gray-300'
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '4xl' }}
          >
            {title}
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            {desc}
          </Text>
          <Stack spacing={6} direction={'row'}>
            {Buttons}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default ArduinoApps;
