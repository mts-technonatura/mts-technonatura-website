import React, { useState, useEffect } from 'react';

import CTA from 'components/CTA';
import InfoCard from 'components/Cards/InfoCard';
import ChartCard from 'components/Chart/ChartCard';
import { Doughnut, Line } from 'react-chartjs-2';
import ChartLegend from 'components/Chart/ChartLegend';
import PageTitle from 'components/Typography/PageTitle';
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../../icons';
import RoundIcon from 'components/RoundIcon';
import response from 'utils/demo/tableData';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import * as AuthMethods from '@/redux/actions/index';
import { RootStore } from '@/redux/index';

function Dashboard() {
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStore) => state.auth);

  const [page, setPage] = useState(1);
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

  return (
    <div className='md:px-8 sm:px-20'>
      <PageTitle>Dashboard</PageTitle>

      <CTA />

      {/* <!-- Cards --> */}
      <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4'>
        <InfoCard title='Total clients' value='6389'>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass='text-orange-500 dark:text-orange-100'
            bgColorClass='bg-orange-100 dark:bg-orange-500'
            className='mr-4'
          />
        </InfoCard>

        <InfoCard title='Account balance' value='$ 46,760.89'>
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

      <PageTitle>Charts</PageTitle>
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
    </div>
  );
}

export default Dashboard;
