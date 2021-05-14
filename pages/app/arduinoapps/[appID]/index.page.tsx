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
  useToast,
  Input,
  Text,
  Tooltip,
  useClipboard,
  ModalFooter,
  Divider,
  ModalContent,
  ModalCloseButton,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  Modal,
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

import { sensorI, normalResponseT } from 'ts';
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
  const authState = useSelector((state: RootStore) => state.auth);

  const router = useRouter();
  const toast = useToast();

  const [deletingApp, setDeletingApp] = useState<boolean>(false);
  const {
    isOpen: isCreateNewSensorDrawerOpen,
    onOpen: onCreateNewSensorDrawerOpen,
    onClose: onCreateNewSensorDrawerClose,
  } = useDisclosure();
  const {
    isOpen: isModalDeleteOpen,
    onOpen: onModalDeleteOpen,
    onClose: onModalDeleteClose,
  } = useDisclosure();

  const [sensors, setSensors] = useState<sensorsI>({
    fetched: false,
  });
  const [arduinoApp, setArduinoApp] = useState<arduinoI>({
    fetched: false,
  });

  let { hasCopied, onCopy, value: tokenValue } = useClipboard('');

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
      const app = await axios.post<arduinoResponseI>(
        process.env.NEXT_PUBLIC_ARDUINO_APP ||
          'http://localhost:3030/arduino/app',
        { arduinoAppId: router.query.appID, authToken: authState.token },
      );

      if (app.data.app?.token) {
        tokenValue = app.data.app?.token;
      }
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

  async function deleteArduinoApp() {
    let audio;

    setDeletingApp(true);

    try {
      const deletedApp = await axios.post<normalResponseT>(
        process.env.NEXT_PUBLIC_DELETE_ARDUINO_APP
          ? `${process.env.NEXT_PUBLIC_DELETE_ARDUINO_APP}/${router.query.appID}`
          : `http://localhost:3030/arduino/del/${router.query.appID}`,
        { authToken: authState.token },
      );
      audio = new Audio(
        'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962730/sounds/01%20Hero%20Sounds/hero_simple-celebration-03_ai1ky3.wav',
      );
      audio.play();
      toast({
        title: deletedApp.data.message,
        position: 'bottom-right',
        isClosable: false,
        status: deletedApp.data.status,
        duration: 2000,
      });

      if (deletedApp.data.status == 'success') {
        router.push('/app/arduinoapps');
      }
    } catch (err) {
      audio = new Audio(
        'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962764/sounds/04%20Secondary%20System%20Sounds/alert_error-02_h1zyjn.wav',
      );
      audio.play();
      console.log('ERROR WHEN DELETING APP', err);
      toast({
        title: 'ERROR WHEN DELETING APP',
        position: 'bottom-right',
        isClosable: false,
        status: 'error',
        duration: 2000,
      });
    }

    setDeletingApp(false);
  }

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
        {/* Modal Alert Delete */}
        <Modal
          onClose={() => {}}
          isCentered
          isOpen={isModalDeleteOpen}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Arduino App</ModalHeader>

            <ModalBody>Are you sure you want to delete this app?</ModalBody>
            <ModalFooter>
              <Button
                colorScheme='blue'
                mr={3}
                onClick={() => {
                  if (!deletingApp) {
                    const audio = new Audio(
                      'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962759/sounds/04%20Secondary%20System%20Sounds/navigation-cancel_xpftbk.wav',
                    );
                    audio.play();
                    onModalDeleteClose();
                  }
                }}
              >
                Cancel
              </Button>
              <Button
                colorScheme='red'
                isLoading={deletingApp}
                onClick={() => {
                  if (!deletingApp) {
                    deleteArduinoApp();
                  }
                }}
              >
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {/* End of Modal Alert Delete */}

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

            {/* DELETE APP BUTTON */}
            <Tooltip label='Delete App' aria-label='A tooltip'>
              <Button
                ml={4}
                colorScheme='teal'
                bg='red.600'
                _hover={{ bg: 'red.800' }}
                _active={{ bg: 'red.800' }}
                isLoading={deletingApp}
                onClick={() => {
                  const audio = new Audio(
                    'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962738/sounds/02%20Alerts%20and%20Notifications/notification_simple-01_t5n0nr.wav',
                  );
                  audio.play();
                  onModalDeleteOpen();
                }}
              >
                <IoIosTrash size={20} />
              </Button>
            </Tooltip>
            {/* END OF DELETE APP BUTTON */}
          </Box>
        </Flex>
        <Divider mt={5} />

        {/* Arduino App Token */}
        <Text mt={3} className='dark:text-cool-gray-400' fontSize='md'>
          Arduino App Token
        </Text>
        <Flex mb={2} mt={2}>
          <Input
            className='dark:text-gray-400'
            value={arduinoApp.app.token}
            isReadOnly
            placeholder='Welcome'
          />
          <Button onClick={onCopy} ml={2}>
            {hasCopied ? 'Copied' : 'Copy'}
          </Button>
        </Flex>
        {/* End of Arduino App Token */}

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
