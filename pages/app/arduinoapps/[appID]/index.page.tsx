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
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { CallToActionWithIllustration } from '../index.page';
import Box from '@material-ui/core/Box';
import { IoIosTrash } from 'react-icons/io';
import { FaRegEdit } from 'react-icons/fa';
/* ======================= END UI ======================= */
import CreateNewSensorDrawer from '@/components/admin/arduinoapp/createNewSensor';
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
}

interface arduinoI extends arduinoResponseI {
  fetched: boolean;
}

function ArduinoApps() {
  const {
    isOpen: isCreateNewSensorDrawerOpen,
    onOpen: onCreateNewSensorDrawerOpen,
    onClose: onCreateNewSensorDrawerClose,
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
  }, [authState.user]);

  useEffect(() => {
    if (
      router.query.appID &&
      authState.user &&
      authState.fetched &&
      !arduinoApp.fetched
    ) {
      fetchArduinoApp();
      fetchSensors();
    }
  });

  async function fetchArduinoApp() {
    try {
      console.log(router.query.appID);
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

  async function fetchSensors() {
    try {
      const sensors = await axios.post<sensorsResponseI>(
        process.env.NEXT_PUBLIC_ARDUINO_APP_SENSORS ||
          'http://localhost:3030/arduino/sensors',
        { arduinoAppId: router.query.appID, authToken: authState.token },
      );

      setSensors({
        sensors: sensors.data.sensors,
        fetched: true,
      });
    } catch (err) {
      setSensors({
        fetched: true,
      });
    }
  }

  async function deleteArduinoApp() {}

  if (!arduinoApp.fetched && authState.user) {
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

  if (arduinoApp.fetched && arduinoApp.app) {
    return (
      <>
        {typeof router.query.appID == 'string' && (
          <CreateNewSensorDrawer
            token={authState.token}
            isOpen={isCreateNewSensorDrawerOpen}
            onClose={onCreateNewSensorDrawerClose}
            onOpen={onCreateNewSensorDrawerOpen}
            arduinoAppId={router.query.appID}
            asPath={router.asPath}
          />
        )}

        <Breadcrumb mb={5} className='dark:text-cool-gray-400'>
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
          <Box p='2' className=' '>
            <Heading size='lg' className='dark:text-cool-gray-200 mb-3'>
              {arduinoApp.app?.name} - Arduino App
            </Heading>

            <Text className='dark:text-cool-gray-400' fontSize='xl'>
              {arduinoApp.app?.desc}
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Button
              colorScheme='teal'
              bg='purple.600'
              _active={{ bg: 'purple.700' }}
              _hover={{ bg: 'purple.700' }}
              onClick={onCreateNewSensorDrawerOpen}
            >
              Create New Sensor
            </Button>
            <Tooltip label='Edit App' aria-label='A tooltip'>
              <Button
                ml={4}
                colorScheme='teal'
                bg='blue.500'
                _hover={{ bg: 'blue.800' }}
                _active={{ bg: 'blue.800' }}
              >
                <FaRegEdit size={20} />
              </Button>
            </Tooltip>
            <Tooltip label='Delete App' aria-label='A tooltip'>
              <Button
                ml={4}
                colorScheme='teal'
                bg='red.600'
                _hover={{ bg: 'red.800' }}
                _active={{ bg: 'red.800' }}
              >
                <IoIosTrash size={20} />
              </Button>
            </Tooltip>
          </Box>
        </Flex>
        {!sensors.fetched ? (
          <LoadingPage text='Fetching sensors' />
        ) : Array.isArray(sensors.sensors) ? (
          sensors.sensors.length == 0 ? (
            <CallToActionWithIllustration
              title="You Don't Have Any Sensor yet."
              desc='You can create by clicking create new sensor'
            />
          ) : (
            <div className='mt-10 grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4'>
              {sensors.sensors.map((sensor, id) => (
                <InfoCard
                  title={
                    <Link href={`${router.asPath}/${sensor._id}`}>
                      {sensor.name}
                    </Link>
                  }
                  type={1}
                ></InfoCard>
              ))}
            </div>
          )
        ) : (
          <CallToActionWithIllustration
            title='Error Occured When Fetching Sensors'
            desc='Sorry error has occured when fecthing sensors, please contact Aldhan or submit this bug to our github issue'
          />
        )}
      </>
    );
  }

  return <LoadingPage />;
}

export default ArduinoApps;
