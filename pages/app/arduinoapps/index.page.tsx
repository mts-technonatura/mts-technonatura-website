import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import {
  Button,
  Alert,
  AlertIcon,
  Flex,
  Stack,
  SimpleGrid,
  useColorModeValue,
  Spinner,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Container,
  Heading,
  Text,
  Icon,
  IconProps,
  Divider,
  useDisclosure,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootStore } from '@/redux/index';
import { useRouter } from 'next/router';
import LoadingPage from 'components/loadingpage';
import CreateNewArduinoAppDrawer from '@/components/admin/arduinoapp/createNewArduinoApp';

import { EuiCard, EuiIcon, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { arduinoAppI } from 'ts';
import axios from 'axios';
import _ from 'underscore';
import { NoItemIcon, UnhappyGhost } from 'icons';

interface arduinoAppsResponse {
  apps: arduinoAppI[];
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
  const [arduinoApps, setArduinoApps] = useState<arduinoAppsResponse>();

  useEffect(() => {
    fetchArduinoApps();
  }, [authState.token]);

  async function fetchArduinoApps() {
    try {
      const apps = await axios.post<arduinoAppsResponse>(
        process.env.NEXT_PUBLIC_ARDUINO_APPS ||
          'http://localhost:3030/arduino/apps',
        { authToken: authState.token },
        { withCredentials: true },
      );
      setArduinoApps(apps.data);
    } catch (err) {}
  }
  const FetchAllDataAPI_ROUTE =
    process.env.NEXT_PUBLIC_ALL_DATA_API || 'http://localhost:3030/allData';
  console.log(
    process.env.NEXT_PUBLIC_ALL_DATA_API,
    process.env.NEXT_PUBLIC_UNVERIFIED_USERS,
    process.env.NEXT_PUBLIC_DELETE_USER,
  );

  if (!authState.fetched && !authState.user) {
    return <LoadingPage />;
  }

  return (
    <>
      {authState.user && arduinoApps?.apps && Array.isArray(arduinoApps?.apps) && (
        <>
          {arduinoApps?.apps.length == 0 ? (
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
            <EuiFlexGroup gutterSize='l'>
              {arduinoApps?.apps.map((app) => (
                <Link href={`/app/arduinoapp/${app._id}`}>
                  <EuiFlexItem>
                    <EuiCard
                      layout='horizontal'
                      title={app.name}
                      description={app.desc}
                      href='#'
                    />
                  </EuiFlexItem>
                </Link>
              ))}
            </EuiFlexGroup>
          )}

          <CreateNewArduinoAppDrawer
            token={authState.token}
            isOpen={isCreateNewDrawerOpen}
            onClose={onCreateNewDrawerClose}
            onOpen={onCreateNewDrawerOpen}
          />
        </>
      )}

      {!authState.user && (
        <CallToActionWithIllustration
          Icon={<UnhappyGhost mt={{ base: 12, sm: 16 }} />}
          title="You Don't Have an Access To This Feature"
          desc='This Feature is only accessible for verified users'
          Buttons={
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
                <Button rounded={'full'} px={6}>
                  Create an Account
                </Button>
              </Link>
            </>
          }
        />
      )}
    </>
  );
}

interface CallToActionWithIllustrationI {
  title: string;
  desc: string;
  Buttons: JSX.Element | JSX.Element[];
  Icon: JSX.Element;
}
function CallToActionWithIllustration({
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
            className='text-cool-gray-300'
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
