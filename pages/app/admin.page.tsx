import React, { useState, useEffect } from 'react';

import CTA from 'components/CTA';
import InfoCard from 'components/Cards/InfoCard';
import ChartCard from 'components/Chart/ChartCard';
import { Doughnut, Line } from 'react-chartjs-2';
import ChartLegend from 'components/Chart/ChartLegend';
import PageTitle from 'components/Typography/PageTitle';
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../../icons';
import RoundIcon from 'components/RoundIcon';
import {
  Button,
  Alert,
  AlertIcon,
  Flex,
  Stack,
  SimpleGrid,
  useColorModeValue,
  useBreakpointValue,
  Spinner,
} from '@chakra-ui/react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import * as AuthMethods from '@/redux/actions/index';
import { RootStore } from '@/redux/index';
import TimeText from 'utils/timeText';
import { useRouter } from 'next/router';

function Dashboard() {
  const router = useRouter();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStore) => state.auth);

  const tokenCookieKey =
    process.env.NEXT_PUBLIC_JWT_AUTH_TOKEN || 'jwtAuthToken';
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    if (
      !authState.fetched &&
      authState.message !== 'account created' &&
      authState.message !== 'login successfully'
    ) {
      dispatch(AuthMethods.AuthVerifyJWT(cookies[tokenCookieKey]));
    }
  }, []);
  useEffect(() => {
    if (authState.fetched && !authState.user) {
      router.push('/app');
    }
  }, [authState.fetched]);

  if (
    (!authState.fetched && !authState.user) ||
    (authState.fetched && !authState.user)
  ) {
    return (
      <div className='h-screen flex flex-row justify-center items-center'>
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <>
      <PageTitle>
        {authState.user
          ? `${TimeText()} ${authState.user.name}`
          : `${TimeText()} Stranger`}
      </PageTitle>
      <p className='mb-7 mt-2 text-gray-600 font-medium dark:text-cool-gray-400'>
        {authState.user
          ? `Welcome to MTs Technonatura Dashboard ${authState.user.name}, discover your friend creation and
        make a good friend with them! `
          : 'Welcome to MTs Technonatura Dashboard, discover mts-technonatura creations and read some blog posts from them'}
      </p>
      {/* <CTA /> */}

      {/* <!-- Cards --> */}
      {authState.user && !authState.user?.isAccountVerified ? (
        <Alert status='error'>
          <AlertIcon />
          Your account isn't verified yet, some features are not accessibble for
          you.
        </Alert>
      ) : (
        <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4'>
          <InfoCard title='Followers' value='6389'>
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass='text-orange-500 dark:text-orange-100'
              bgColorClass='bg-orange-100 dark:bg-orange-500'
              className='mr-4'
            />
          </InfoCard>

          <InfoCard title='Blog Posts' value='$ 46,760.89'>
            <RoundIcon
              icon={MoneyIcon}
              iconColorClass='text-green-500 dark:text-green-100'
              bgColorClass='bg-green-100 dark:bg-green-500'
              className='mr-4'
            />
          </InfoCard>

          <InfoCard title='New sales' value='376'>
            <RoundIcon
              icon={CartIcon}
              iconColorClass='text-blue-500 dark:text-blue-100'
              bgColorClass='bg-blue-100 dark:bg-blue-500'
              className='mr-4'
            />
          </InfoCard>

          <InfoCard title='Pending contacts' value='35'>
            <RoundIcon
              icon={ChatIcon}
              iconColorClass='text-teal-500 dark:text-teal-100'
              bgColorClass='bg-teal-100 dark:bg-teal-500'
              className='mr-4'
            />
          </InfoCard>
        </div>
      )}

      <PageTitle>Unverified User</PageTitle>
      <UserReuqestToVerify />
      {/* <div className='grid gap-6 mb-8 md:grid-cols-2'>
        <ChartCard title='Revenue'>
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title='Traffic'>
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div> */}
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
        {data.map((person, pid) => {
          return (
            <>
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, sm: 3 }}
                w={{ base: 100, sm: 'full' }}
                textTransform='uppercase'
                bg={useColorModeValue('gray.100', 'gray.700')}
                py={{ base: 1, sm: 4 }}
                px={{ base: 2, sm: 10 }}
                fontSize='sm'
                fontWeight='hairline'
              >
                <span>Name</span>
                <span>Email</span>
                <span>Actions</span>
              </SimpleGrid>

              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, sm: 3 }}
                w='full'
                py={2}
                px={10}
                fontWeight='hairline'
              >
                <span>{person.name}</span>
                <span>{person.email}</span>
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
