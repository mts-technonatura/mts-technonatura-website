import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Link from 'next/link';

import axios from 'axios';
import _ from 'underscore';

/* ======================= UI ======================= */
import { Button, Flex, Heading, Spacer, useDisclosure } from '@chakra-ui/react';
import Box from '@material-ui/core/Box';

import LoadingPage from 'components/loadingpage';
import CreateNewArduinoAppDrawer from '@/components/admin/arduinoapp/createNewArduinoApp';
import CallToActionWithIllustration from '@/components/CallToActionWithIllustration';
import InfoCard from 'components/Cards/InfoCard';
/* ======================= END UI ======================= */
import { RootStore } from '@/redux/index';
import { arduinoAppI } from 'ts';
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
      // console.log(apps);

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

  // if the website checking the jwt token
  if (!authState.fetched && authState.loading) {
    return <LoadingPage />;
  } else if (!arduinoApps.fetched && authState.user) {
    // when fetching user's arduino apps
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

  if (
    authState.user.isAccountVerified &&
    Array.isArray(arduinoApps?.apps) &&
    arduinoApps?.apps.length == 0
  ) {
    return (
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

            <Button onClick={() => {
              console.log("onCreateNewDrawerOpen");
              onCreateNewDrawerOpen();
              console.log(isCreateNewDrawerOpen);
              }} rounded={'full'} px={6}>
              Create New
            </Button>
          </>
        }
      />
    );
  }

  return (
    <>
      {authState.user && arduinoApps?.apps && Array.isArray(arduinoApps?.apps) && (
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
                bg='blue.400'
                color='gray.50'
                onClick={onCreateNewDrawerOpen}
                _hover={{ bg: 'blue.500' }}
                _active={{ bg: 'blue.600' }}
              >
                Create New App
              </Button>
            </Box>
          </Flex>
          <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4'>
            {arduinoApps?.apps.map((app, id) => (
              <InfoCard
                title={
                  <Link href={`/dashboard/arduinoapps/${app._id}`}>
                    {app.name}
                  </Link>
                }
                type={1}
                value={app.desc}
              ></InfoCard>
            ))}
          </div>

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

export default ArduinoApps;
