import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { io } from 'socket.io-client';

import Link from 'next/link';
import Router from 'next/router';
import { useRouter } from 'next/router';

import axios from 'axios';
import _ from 'underscore';

import { Parser } from 'json2csv';
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
  Spinner,
  ModalHeader,
  ModalBody,
  Modal,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from '@chakra-ui/react';

// material UI
import Box from '@material-ui/core/Box';
// end material UI

// costum components
import CallToActionWithIllustration from '@/components/CallToActionWithIllustration';

import InfoCard from 'components/Cards/InfoCard';
import LoadingPage from 'components/loadingpage';
// end custom components

//#icons
import { IoIosTrash } from 'react-icons/io';
import { FaRegEdit } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { GrDocumentCsv } from 'react-icons/gr';
import { VscJson } from 'react-icons/vsc';
//#endicons

/* ======================= END UI ======================= */

import { RootStore } from '@/redux/index';
import {
  normalResponseT,
  sensorI,
  arduinoResponseI,
  sensorsStateI,
  sensorsResponseI,
  arduinoAppStateI,
} from 'ts';
import { NoItemIcon, UnhappyGhost } from 'icons';

interface sensorResponseI {
  sensor?: sensorI;
}

interface sensorStateI extends sensorResponseI {
  fetched: boolean;
}

const socket = io(
  process.env.NEXT_PUBLIC_ARDUINO_SOCKET ||
    'http://localhost:3030/websocket/arduino',
  {
    transports: ['websocket'],
  },
);
function ArduinoAppSensorPage() {
  const authState = useSelector((state: RootStore) => state.auth);

  const [datasCard, setDatasCard] = useState<{
    realtime_data: {
      previous?: number;
      current?: number;
      dateAdded?: number;
      loading: boolean;
      error: boolean;
    };
  }>({
    realtime_data: {
      loading: true,
      error: false,
    },
  });

  const router = useRouter();
  const toast = useToast();

  const [deletingSensor, setDeletingSensor] = useState<boolean>(false);
  const {
    isOpen: isModalDeleteOpen,
    onOpen: onModalDeleteOpen,
    onClose: onModalDeleteClose,
  } = useDisclosure();

  const [sensor, setSensor] = useState<sensorStateI>({
    fetched: false,
  });

  useEffect(() => {
    if (!authState.user && authState.fetched) {
      router.push('/dashboard/arduinoapps');
    }
  }, [authState.user]);

  useEffect(() => {
    if (router.query.sensorId && authState.user && !sensor.fetched) {
      fetchSensor();
    }
  }, [router.query.sensorId]);

  socket.on(
    'arduino.sensor.realtimedata',
    (data: {
      sensorId: string;
      data: number;
      dateAdded: number;
      id: string;
    }) => {
      console.log('arduino.sensor.realtimedata', data);

      if (
        sensor.sensor &&
        sensor.sensor.data &&
        sensor.sensor.data[sensor.sensor.data.length - 1] &&
        sensor.sensor?._id == data.sensorId &&
        sensor.sensor.data[sensor.sensor.data.length - 1].date != data.dateAdded
      ) {
        const copyOfState = { ...sensor };

        const isThere =
          // @ts-ignore
          copyOfState.sensor.data.find(
            (sensorData) => sensorData.date == data.dateAdded,
          );

        if (!isThere) {
          copyOfState.sensor?.data?.push({
            _id: data.id,
            data: data.data,
            date: data.dateAdded,
          });
          setSensor((state) => {
            return copyOfState;
          });
        }

        console.log('state realtimedata');
        console.log('state realtimedata', data.dateAdded);
      }
    },
  );

  socket.on(
    'arduino.sensor.realtimeData',
    (data: { sensorId: string; data: number; dateAdded: number }) => {
      console.log(
        data,
        sensor.sensor?._id == data.sensorId,
        datasCard.realtime_data.dateAdded != data.dateAdded,
      );
      setDatasCard((state) => {
        if (
          sensor.sensor?._id == data.sensorId &&
          state.realtime_data.dateAdded != data.dateAdded
        ) {
          console.log('state', state);
          return {
            realtime_data: {
              loading: false,
              error: false,
              dateAdded: data.dateAdded,
              previous: state.realtime_data.current,
              current: data.data,
            },
          };
        }
        if (
          sensor.sensor?._id == data.sensorId &&
          state.realtime_data.loading
        ) {
          return {
            realtime_data: {
              loading: false,
              error: false,
            },
          };
        }
        return state;
      });
    },
  );

  async function fetchSensor() {
    try {
      setDatasCard({
        realtime_data: {
          loading: true,
          error: false,
        },
      });
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

      socket.emit(
        'arduino.subscribe.sensor.realtimeData',
        app.data.sensor?._id,
      );
      socket.emit(
        'arduino.subscribe.sensor.realtimedata',
        app.data.sensor?._id,
      );

      socket.emit('arduino.sensor.get.realtimeData', app.data.sensor?._id);
      socket.emit('arduino.sensor.get.realtimedata', app.data.sensor?._id);
    } catch (err) {
      console.log('error occured!', err);
      setSensor({
        fetched: true,
      });
      setDatasCard({
        realtime_data: {
          loading: false,
          error: true,
        },
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
    let currentRealtimeDataToPreviousRealtimeDataPrecentage: number | undefined;
    let currentRealtimedataToPreviousRealtimedataPrecentage: number | undefined;

    if (datasCard?.realtime_data.current && datasCard?.realtime_data.previous) {
      // console.log(
      //   datasCard?.realtime_data.current,
      //   datasCard?.realtime_data.previous,
      //   datasCard?.realtime_data.current - datasCard?.realtime_data.previous,
      // );

      currentRealtimeDataToPreviousRealtimeDataPrecentage = Math.floor(
        ((datasCard?.realtime_data.current -
          datasCard?.realtime_data.previous) /
          datasCard?.realtime_data.previous) *
          100,
      );
    }
    if (
      sensor.sensor &&
      sensor.sensor.data &&
      sensor.sensor.data[sensor.sensor.data.length - 1] &&
      sensor.sensor.data[sensor.sensor.data.length - 2]
    ) {
      currentRealtimedataToPreviousRealtimedataPrecentage = Math.floor(
        ((sensor.sensor.data[sensor.sensor.data.length - 1].data -
          sensor.sensor.data[sensor.sensor.data.length - 2].data) /
          sensor.sensor.data[sensor.sensor.data.length - 2].data) *
          100,
      );
    }
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

        <div className='grid mt-5 bg-white divide-y divide-gray-100 rounded shadow-sm sm:divide-x lg:divide-y-0 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='p-5 lg:px-8 '>
            <div className='text-base text-gray-400 '>
              Previous Realtime Data
            </div>
            <div className='flex items-center pt-1'>
              {datasCard?.realtime_data.loading ? (
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='lg'
                />
              ) : !isNaN(Number(datasCard?.realtime_data.previous)) ? (
                <div className='text-2xl font-bold text-gray-900 '>
                  {datasCard?.realtime_data.previous}
                </div>
              ) : (
                <div className='text-2xl font-bold text-gray-900 '>
                  You Don't Have yet
                </div>
              )}
            </div>
          </div>
          <div className='p-5 lg:px-8 '>
            <div className='text-base text-gray-400 '>
              Current Realtime Data
            </div>
            <div className='flex items-center pt-1'>
              {datasCard?.realtime_data.loading ? (
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='lg'
                />
              ) : !isNaN(Number(datasCard?.realtime_data.current)) ? (
                <>
                  <div className='text-2xl font-bold text-gray-900 '>
                    {datasCard?.realtime_data.current}
                  </div>
                  {currentRealtimeDataToPreviousRealtimeDataPrecentage != 0 &&
                    currentRealtimeDataToPreviousRealtimeDataPrecentage && (
                      <span
                        className={`flex items-center px-2 py-0.5 mx-2 text-sm ${
                          currentRealtimeDataToPreviousRealtimeDataPrecentage >=
                          0
                            ? 'text-green-600 bg-green-100'
                            : 'text-red-600 bg-red-100'
                        } rounded-full`}
                      >
                        {/* text-green-600 bg-green-100 */}
                        {currentRealtimeDataToPreviousRealtimeDataPrecentage >=
                        0 ? (
                          <svg
                            className='w-4 h-4'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M18 15L12 9L6 15'
                              stroke='currentColor'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            className='w-4 h-4'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6 9L12 15L18 9'
                              stroke='currentColor'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                          </svg>
                        )}

                        <span>
                          {currentRealtimeDataToPreviousRealtimeDataPrecentage}{' '}
                          %
                        </span>
                      </span>
                    )}
                </>
              ) : (
                <div className='text-2xl font-bold text-gray-900 '>
                  You Don't Have yet
                </div>
              )}
            </div>
          </div>
          <div className='p-5 lg:px-8 '>
            <div className='text-base text-gray-400 '>Previous Data</div>
            <div className='flex items-center pt-1'>
              {!sensor.fetched ? (
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='lg'
                />
              ) : sensor.sensor &&
                sensor.sensor.data &&
                sensor.sensor.data[sensor.sensor.data.length - 2] &&
                !isNaN(
                  Number(
                    sensor.sensor.data[sensor.sensor.data.length - 2].data,
                  ),
                ) ? (
                <>
                  <div className='text-2xl font-bold text-gray-900 '>
                    {sensor.sensor.data[sensor.sensor.data.length - 2].data}
                  </div>
                </>
              ) : (
                <div className='text-2xl font-bold text-gray-900 '>
                  You Don't Have yet
                </div>
              )}
            </div>
          </div>
          <div className='p-5 lg:px-8 '>
            <div className='text-base text-gray-400 '>Current Data</div>
            <div className='flex items-center pt-1'>
              {!sensor.fetched ? (
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='lg'
                />
              ) : sensor.sensor &&
                sensor.sensor.data &&
                sensor.sensor.data[sensor.sensor.data.length - 1] &&
                !isNaN(
                  Number(
                    sensor.sensor.data[sensor.sensor.data.length - 1].data,
                  ),
                ) ? (
                <>
                  <div className='text-2xl font-bold text-gray-900 '>
                    {sensor.sensor.data[sensor.sensor.data.length - 1].data}
                  </div>
                  {currentRealtimedataToPreviousRealtimedataPrecentage != 0 &&
                    currentRealtimedataToPreviousRealtimedataPrecentage && (
                      <span
                        className={`flex items-center px-2 py-0.5 mx-2 text-sm ${
                          currentRealtimedataToPreviousRealtimedataPrecentage >=
                          0
                            ? 'text-green-600 bg-green-100'
                            : 'text-red-600 bg-red-100'
                        } rounded-full`}
                      >
                        {/* text-green-600 bg-green-100 */}
                        {currentRealtimedataToPreviousRealtimedataPrecentage >=
                        0 ? (
                          <svg
                            className='w-4 h-4'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M18 15L12 9L6 15'
                              stroke='currentColor'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            className='w-4 h-4'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6 9L12 15L18 9'
                              stroke='currentColor'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                          </svg>
                        )}

                        <span>
                          {currentRealtimedataToPreviousRealtimedataPrecentage}{' '}
                          %
                        </span>
                      </span>
                    )}
                </>
              ) : (
                <div className='text-2xl font-bold text-gray-900 '>
                  You Don't Have yet
                </div>
              )}
            </div>
          </div>
        </div>

        <Divider mt={5} />

        <Flex flexWrap='wrap' justifyContent='space-between' mt={5}>
          <Box p='2' className=' '>
            <Heading size='md' className='dark:text-cool-gray-200 mb-3'>
              Data You Have Added
            </Heading>
          </Box>
          <Box>
            <Menu>
              <MenuButton as={Button} aria-label='Options' variant='outline'>
                <CgMenuRight />
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    if (sensor.sensor?.data) {
                      const copyOfSensorData = [...sensor.sensor?.data];
                      copyOfSensorData.forEach((sensorData, i) => {
                        sensorData.id = i;
                      });
                      const json2csvParser = new Parser();
                      const csv = json2csvParser.parse(sensor.sensor?.data);
                      let csvContent = 'data:text/csv;charset=utf-8,' + csv;

                      // console.log(csvContent);
                      var encodedUri = encodeURI(csvContent);
                      var link = document.createElement('a');
                      link.setAttribute('href', encodedUri);
                      link.setAttribute(
                        'download',
                        `${sensor.sensor.name}_data.csv`,
                      );
                      document.body.appendChild(link); // Required for FF

                      link.click(); // This will download the data file named "my_data.csv".
                    }
                  }}
                >
                  <GrDocumentCsv style={{ marginRight: '5px' }} /> Export to CSV
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    if (sensor.sensor?.data) {
                      let csvContent =
                        'data:text/json;charset=utf-8,' +
                        JSON.stringify(sensor.sensor?.data);

                      // console.log(csvContent);
                      var encodedUri = encodeURI(csvContent);
                      var link = document.createElement('a');
                      link.setAttribute('href', encodedUri);
                      link.setAttribute(
                        'download',
                        `${sensor.sensor.name}_data.json`,
                      );
                      document.body.appendChild(link); // Required for FF

                      link.click(); // This will download the data file named "my_data.csv".
                    }
                  }}
                >
                  <VscJson style={{ marginRight: '5px' }} /> Export to JSON
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <IoIosTrash style={{ marginRight: '5px' }} /> Delete All Data
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>

        {!sensor.fetched ? (
          <LoadingPage text='Fetching sensors' />
        ) : Array.isArray(sensor.sensor.data) ? (
          sensor.sensor.data.length == 0 ? (
            <CallToActionWithIllustration
              title="You Don't Have Any Data yet."
              desc='Upload the your sensor data through your arduino'
            />
          ) : (
            <div className='mt-5 grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4'>
              {sensor.sensor.data.map((sensor, id) => (
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

export default ArduinoAppSensorPage;
