import React, { useState, useEffect } from 'react';

import InfoCard from 'components/Cards/InfoCard';
import PageTitle from 'components/Typography/PageTitle';
import { ChatIcon, PeopleIcon } from '../../icons';
import RoundIcon from 'components/RoundIcon';
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
  Divider,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootStore } from '@/redux/index';
import TimeText from 'utils/timeText';
import { useRouter } from 'next/router';
import { GoUnverified, GoVerified } from 'react-icons/go';
import { RiPagesLine, RiSensorFill, RiToolsFill } from 'react-icons/ri';
import UnverifiedUsers from 'components/admin/unverifiedusers';
import LoadingPage from 'components/loadingpage';
import { SiArduino } from 'react-icons/si';
import { IconType } from 'react-icons';
import axios from 'axios';
import _ from 'underscore';

interface AlldataI {
  title: string;
  data: number;
}
interface AlldatasI {
  data: AlldataI[];
}

const AllData: {
  title: string;
  Icon: IconType | typeof PeopleIcon;
  bg: string;
  color: string;
}[] = [
  {
    title: 'Total Users',
    Icon: PeopleIcon,
    color: 'blue-500',
    bg: 'blue-100',
  },
  {
    title: 'Total Verified Users',
    Icon: GoVerified,
    color: 'blue-500',
    bg: 'blue-100',
  },
  {
    title: 'Total Unverified Users',
    Icon: GoUnverified,
    color: 'orange-500',
    bg: 'orange-100',
  },
  {
    title: 'Total Arduino Apps',
    Icon: SiArduino,
    color: 'teal-500',
    bg: 'teal-100',
  },
  {
    title: 'Total Sensors',
    Icon: RiToolsFill,
    color: 'teal-500',
    bg: 'teal-100',
  },
  {
    title: 'Blog Posts',
    Icon: RiPagesLine,
    color: 'green-500',
    bg: 'green-100',
  },
];

function Dashboard() {
  const [allData, setAllData] = useState<Readonly<AlldataI[]>>();
  const router = useRouter();
  const authState = useSelector((state: RootStore) => state.auth);

  const FetchAllDataAPI_ROUTE =
    process.env.NEXT_PUBLIC_ALL_DATA_API || 'http://localhost:3030/allData';
  console.log(
    process.env.NEXT_PUBLIC_ALL_DATA_API,
    process.env.NEXT_PUBLIC_UNVERIFIED_USERS,
    process.env.NEXT_PUBLIC_DELETE_USER,
  );
  useEffect(() => {
    if (authState.fetched && !authState.user) {
      router.push('/app');
    }
  }, [authState.message]);

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const Alldata = (await axios.get)<AlldatasI>(FetchAllDataAPI_ROUTE);
    setAllData((await Alldata).data.data);
  }

  if (
    (!authState.fetched && !authState.user) ||
    (authState.fetched && !authState.user)
  ) {
    return <LoadingPage />;
  }
  return (
    <>
      <PageTitle>
        {authState.user
          ? `${TimeText()} ${authState.user.name}`
          : `${TimeText()} Stranger`}
      </PageTitle>
      <p className='mb-7 mt-2  text-gray-600 font-medium dark:text-cool-gray-400'>
        {authState.user
          ? `Welcome to MTs Technonatura Dashboard ${authState.user.name}, discover your friend creation and
        make a good friend with them! `
          : 'Welcome to MTs Technonatura Dashboard, discover mts-technonatura creations and read some blog posts from them'}
      </p>
      {/* <CTA /> */}

      {/* <!-- Cards --> */}
      <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4'>
        {allData &&
          allData.map((data) => {
            const Isthere = _.findWhere(AllData, { title: data.title });
            if (Isthere) {
              return (
                <InfoCard title={data.title} value={data.data}>
                  <RoundIcon
                    icon={Isthere.Icon}
                    iconColorClass={`text-${Isthere.color} dark:text-${Isthere.bg}`}
                    bgColorClass={`bg-${Isthere.bg} dark:bg-${Isthere.color}`}
                    className='mr-4'
                  />
                </InfoCard>
              );
            }
          })}
      </div>

      <Divider />
      <div className='mt-10'></div>

      <UnverifiedUsers
        fetchAllData={fetchAllData}
        authToken={authState.token}
      />
      <div className='mt-10'></div>

      <Tabs>
        <TabList>
          <Tab>User Roles</Tab>
          <Tab>User Badges</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <UserReuqestToVerify />
          </TabPanel>
          <TabPanel>
            <UserReuqestToVerify />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <div className='mt-20'></div>
      <hr />
    </>
  );
}

function UserReuqestToVerify() {
  const data = [
    { name: 'John Covv', email: 'contato@johncovv.com' },
    { name: 'Michael Jackson', email: 'm_jackson@mail.com' },
    { name: 'Julia', email: 'julia@mail.com' },
    { name: 'Martin Madrazo', email: 'martin.madrazo@mail.com' },
  ];
  return (
    <Flex mt={3} w='full' alignItems='center' justifyContent='center'>
      <Stack
        direction={{ base: 'column' }}
        w='full'
        bg={{ sm: useColorModeValue('white', 'gray.800') }}
        shadow='lg'
      >
        <SimpleGrid
          spacingY={3}
          columns={{ base: 1, sm: 3 }}
          w={{ base: 100, sm: 'full' }}
          textTransform='uppercase'
          bg={useColorModeValue('gray.100', 'gray.700')}
          py={{ base: 1, sm: 4 }}
          px={{ base: 2, sm: 10 }}
          fontSize='sm'
          fontWeight='medium'
        >
          <span>Name</span>
          <span>Email</span>
          <span>Actions</span>
        </SimpleGrid>
        {data.map((person, pid) => {
          return (
            <>
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, sm: 3 }}
                w='full'
                py={2}
                px={10}
                fontWeight='medium'
              >
                <span className='font-medium'>{person.name}</span>
                <span className='font-medium'>{person.email}</span>
                <span>
                  <Button variant='solid' colorScheme='red' size='sm'>
                    Delete
                  </Button>
                  <Button ml={2} variant='solid' colorScheme='green' size='sm'>
                    Accept
                  </Button>
                </span>
              </SimpleGrid>
            </>
          );
        })}
      </Stack>
    </Flex>
  );
}

export default Dashboard;
