import React, { useState, useEffect } from 'react';
import InfoCard from 'components/Cards/InfoCard';
import Link from 'next/link';
/* ======================= UI ======================= */
import {
  Button,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import { CallToActionWithIllustration } from '../index.page';
import Box from '@material-ui/core/Box';
import { IoIosTrash } from 'react-icons/io';
/* ======================= END UI ======================= */

import { useSelector } from 'react-redux';
import { RootStore } from '@/redux/index';
import { useRouter } from 'next/router';
import LoadingPage from 'components/loadingpage';

import { sensorI } from 'ts';
import axios from 'axios';
import _ from 'underscore';
import { NoItemIcon, UnhappyGhost } from 'icons';

interface sensorsResponseI {
  sensors?: sensorI[];
}

interface sensorsI extends sensorsResponseI {
  fetched: boolean;
}

interface arduinoResponseI {
  app?: {
    name: string;
    desc: string;
    own?: string;
    token?: string;
  };
  message?: string;
}

interface arduinoI {
  app?: {
    name: string;
    desc: string;
    own?: string;
    token?: string;
  };
  fetched: boolean;
}

function ArduinoApps() {
  const {
    isOpen: isCreateNewDrawerOpen,
    onOpen: onCreateNewDrawerOpen,
    onClose: onCreateNewDrawerClose,
  } = useDisclosure();

  const router = useRouter();
  const authState = useSelector((state: RootStore) => state.auth);
  const [sensors, setSensors] = useState<sensorsI>({
    fetched: false,
  });
  const [arduinoApp, setArduinoApp] = useState<arduinoI>({
    fetched: false,
  });

  useEffect(() => {
    if (!authState.user && authState.fetched) {
      router.push('/app/arduinoapps');
    }
    if (authState.user && !arduinoApp.fetched) {
      fetchArduinoApp();
    }
  }, [authState.user]);

  async function fetchArduinoApp() {
    try {
      const app = await axios.post<arduinoResponseI>(
        process.env.NEXT_PUBLIC_ARDUINO_APP ||
          'http://localhost:3030/arduino/app',
        { arduinoAppId: router.query.appID, authToken: authState.token },
      );

      setArduinoApp({
        app: app.data.app,
        fetched: true,
      });
    } catch (err) {
      setArduinoApp({
        fetched: true,
      });
    }
  }

  if (!authState.fetched && authState.loading) {
    return <LoadingPage />;
  } else if (!arduinoApp.fetched && authState.user) {
    return <LoadingPage text='Fetching App' />;
  }

  if (arduinoApp.fetched && !arduinoApp.app) {
    return (
      <CallToActionWithIllustration
        Icon={<NoItemIcon mt={{ base: 12, sm: 16 }} />}
        title='App not found'
        desc="Sorry we couldn't find this app"
      />
    );
  }

  return (
    <>
      <Breadcrumb mb={5}>
        <BreadcrumbItem>
          <BreadcrumbLink href='/app'>App</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/app/arduinoapps'>ArduinoApps</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>{router.query.appID}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex>
        <Box p='2' className='flex justify-center items-center'>
          <Heading size='lg' className='dark:text-cool-gray-300 mb-8'>
            {arduinoApp.app?.name} - Arduino App
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Button
            colorScheme='teal'
            bg='purple.600'
            _hover={{ bg: 'purple.700' }}
          >
            Create New Sensor
          </Button>
          <Button
            ml={4}
            colorScheme='teal'
            bg='red.600'
            _hover={{ bg: 'purple.700' }}
          >
            <IoIosTrash size={20}>{arduinoApp}</IoIosTrash>
          </Button>
        </Box>
      </Flex>
    </>
  );
}

export default ArduinoApps;
