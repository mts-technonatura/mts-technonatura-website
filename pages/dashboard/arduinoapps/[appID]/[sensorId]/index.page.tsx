import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Link from 'next/link';
import { useRouter } from 'next/router';

import axios from 'axios';
import _ from 'underscore';
/* ======================= UI ======================= */
import {
  Button,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  useDisclosure,
  useToast,
  Tooltip,
  Divider,
  ModalContent,
  ModalOverlay,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Modal,
} from '@chakra-ui/react';

// material UI
import Box from '@material-ui/core/Box';
// end material UI

// costum components
import CallToActionWithIllustration from '@/components/CallToActionWithIllustration';
import CreateNewSensorDrawer from '@/components/admin/arduinoapp/createNewSensor';

import InfoCard from 'components/Cards/InfoCard';
import LoadingPage from 'components/loadingpage';
// end custom components

//#icons
import { IoIosTrash } from 'react-icons/io';
import { FaRegEdit } from 'react-icons/fa';
//#endicons

/* ======================= END UI ======================= */

import { RootStore } from '@/redux/index';
import { sensorI, normalResponseT } from 'ts';
import { NoItemIcon, UnhappyGhost } from 'icons';

interface sensorsResponseI {
  sensors?: sensorI[];
}

interface sensorsI extends sensorsResponseI {
  fetched: boolean;
}

interface sensorsDataInterface {
  date: number;
  data: number;
}

interface sensorResponseI {
  sensor?: {
    name: string;
    appID: string;
    own: string;
    data?: Array<sensorsDataInterface>;
  };
}

interface arduinoI extends sensorResponseI {
  fetched: boolean;
}

function ArduinoApps() {
  const authState = useSelector((state: RootStore) => state.auth);

  const router = useRouter();
  const toast = useToast();

  const [deletingSensor, setDeletingSensor] = useState<boolean>(false);
  const {
    isOpen: isModalDeleteOpen,
    onOpen: onModalDeleteOpen,
    onClose: onModalDeleteClose,
  } = useDisclosure();

  const [sensor, setSensor] = useState<arduinoI>({
    fetched: false,
  });

  useEffect(() => {
    if (!authState.user && authState.fetched) {
      router.push('/app/arduinoapps');
    }
  }, [authState.user]);

  useEffect(() => {
    if (router.query.sensorId && authState.user && !sensor.fetched) {
      fetchSensor();
    }
  });

  async function fetchSensor() {
    try {
      const app = await axios.post<sensorResponseI>(
        process.env.NEXT_PUBLIC_ARDUINO_SENSOR ||
          'http://localhost:3030/arduino/sensor',
        {
          appId: router.query.appID,
          sensorId: router.query.sensorId,
          authToken: authState.token,
        },
      );
      // console.log(app, router.query);
      setSensor({
        sensor: app.data.sensor,
        fetched: true,
      });
    } catch (err) {
      setSensor({
        fetched: true,
      });
    }
  }

  async function deleteSensor() {
    let audio;

    setDeletingSensor(true);

    try {
      const deletedApp = await axios.post<normalResponseT>(
        process.env.NEXT_PUBLIC_DELETE_ARDUINO_SENSOR
          ? `${process.env.NEXT_PUBLIC_DELETE_ARDUINO_SENSOR}/${router.query.sensorId}`
          : `http://localhost:3030/arduino/del/sensor/${router.query.sensorId}`,
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
        router.push(`/dashboard/arduinoapps/${router.query.appID}`);
      }
    } catch (err) {
      audio = new Audio(
        'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962764/sounds/04%20Secondary%20System%20Sounds/alert_error-02_h1zyjn.wav',
      );
      audio.play();
      // console.log('ERROR WHEN DELETING SENSOR', err);
      toast({
        title: 'ERROR WHEN DELETING APP',
        position: 'bottom-right',
        isClosable: false,
        status: 'error',
        duration: 2000,
      });
    }

    setDeletingSensor(false);
  }

  if (!sensor.fetched && authState.user) {
    return <LoadingPage text='Fetching Sensor' />;
  }

  if (sensor.fetched && !sensor.sensor) {
    return (
      <CallToActionWithIllustration
        Icon={<NoItemIcon mt={{ base: 12, sm: 16 }} />}
        title='Sensor not found'
        desc="Sorry we couldn't find sensor "
      />
    );
  }

  if (sensor.fetched && sensor.sensor) {
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
            <ModalHeader>Delete Sensor </ModalHeader>

            <ModalBody>Are you sure you want to delete this sensor?</ModalBody>
            <ModalFooter>
              <Button
                colorScheme='blue'
                mr={3}
                onClick={() => {
                  if (!deletingSensor) {
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
                isLoading={deletingSensor}
                onClick={() => {
                  if (!deletingSensor) {
                    deleteSensor();
                  }
                }}
              >
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {/* End of Modal Alert Delete */}

        <Breadcrumb mb={5} className='dark:text-cool-gray-400'>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href='/dashboard'>Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href='/dashboard/arduinoapps'>ArduinoApps</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href={`/dashboard/arduinoapps/${router.query.appID}`}>
                {router.query.appID}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>{router.query.sensorId}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex flexWrap='wrap' justifyContent='space-between'>
          <Box p='2' className=' '>
            <Heading size='lg' className='dark:text-cool-gray-200 mb-3'>
              {sensor.sensor?.name} - Sensor
            </Heading>
          </Box>
          <Box>
            <Button
              ml={4}
              colorScheme='teal'
              bg='blue.500'
              _hover={{ bg: 'blue.800' }}
              _active={{ bg: 'blue.800' }}
              rightIcon={<FaRegEdit size={20} />}
            >
              Modify Sensor
            </Button>

            {/* DELETE SENSOR BUTTON */}
            <Tooltip label='Delete Sensor' aria-label='A tooltip'>
              <Button
                ml={4}
                colorScheme='teal'
                bg='red.600'
                _hover={{ bg: 'red.800' }}
                _active={{ bg: 'red.800' }}
                isLoading={deletingSensor}
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

        {!sensor.fetched ? (
          <LoadingPage text='Fetching sensors' />
        ) : Array.isArray(sensor.sensor.data) ? (
          sensor.sensor.data.length == 0 ? (
            <CallToActionWithIllustration
              title="You Don't Have Any Data yet."
              desc='Upload the your sensor data through your arduino'
            />
          ) : (
            <div className='mt-10 grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4'>
              {sensor.sensor.data.reverse().map((sensor, id) => (
                <InfoCard
                  value={String(new Date(sensor.date))}
                  title={String(sensor.data)}
                  type={1}
                ></InfoCard>
              ))}
            </div>
          )
        ) : (
          <CallToActionWithIllustration
            title='Error Occured When Fetching Sensor'
            desc='Sorry error has occured when fecthing sensor, please contact Aldhan or submit this bug to our github issue'
          />
        )}
      </>
    );
  }

  return <LoadingPage />;
}

export default ArduinoApps;
