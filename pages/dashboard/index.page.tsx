import React, { useState, useEffect } from 'react';

import PageTitle from 'components/Typography/PageTitle';
import LoadingPage from 'components/loadingpage';
import AppIndexTop from '@/components/dashboardIndex/top';
import AppIndexFeature from '@/components/dashboardIndex/features';

import { NextSeo } from 'next-seo';

/* REACT - REDUXJS */
import { useSelector } from 'react-redux';
import { RootStore } from '@/redux/index';
import TimeText from 'utils/timeText';
/* REACT - REDUXJS */

function Dashboard() {
  const authState = useSelector((state: RootStore) => state.auth);

  if (!authState.fetched && authState.loading && !authState.message) {
    return <LoadingPage />;
  }

  return (
    <>
      <NextSeo
        title='MTs TechnoNatura Dashboard'
        description='MTs TechnoNatura Indonesia Students Dashboard'
        canonical={process.env.PUBLIC_URL}
        openGraph={{
          url: process.env.PUBLIC_URL,
          title: 'MTs TechnoNatura Students Dashboard',
          description: 'MTs TechnoNatura Indonesia Students Dashboard',
        }}
      />
      <PageTitle>
        {authState.user
          ? `${TimeText()} ${authState.user.name}`
          : `${TimeText()} Stranger`}
      </PageTitle>
      <p className='mb-7 mt-2 text-gray-600 text-2xl font-medium dark:text-cool-gray-400'>
        {authState.user
          ? `Welcome to MTs Technonatura Dashboard ${authState.user.name}, discover your friend creation and
        make a good friend with them! `
          : 'Welcome to MTs Technonatura Dashboard, discover mts-technonatura creations and read some blog posts from them'}
      </p>

      <AppIndexTop />
      {/* {!authState.user && <CTA />} */}

      <AppIndexFeature />

      <section>
        <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200 mt-16 mb-8'>
          Get involved
        </h2>
        <ul className='grid sm:grid-cols-2 gap-6 xl:gap-8'>
          <li>
            <a href='contribute' className='flex items-start space-x-4'>
              <svg
                fill='currentColor'
                className='flex-none text-gray-900 dark:text-gray-50  w-12 h-12'
              >
                <rect width='48' height='48' rx='12'></rect>
                <path
                  d='M23.997 12a12 12 0 00-3.792 23.388c.6.12.816-.264.816-.576l-.012-2.04c-3.336.72-4.044-1.608-4.044-1.608-.552-1.392-1.332-1.764-1.332-1.764-1.08-.744.084-.72.084-.72 1.2.084 1.836 1.236 1.836 1.236 1.08 1.824 2.808 1.296 3.492.996.12-.78.42-1.308.756-1.608-2.664-.3-5.46-1.332-5.46-5.928 0-1.32.468-2.388 1.236-3.228a4.32 4.32 0 01.12-3.168s1.008-.324 3.3 1.224a11.496 11.496 0 016 0c2.292-1.56 3.3-1.224 3.3-1.224.66 1.644.24 2.88.12 3.168.768.84 1.236 1.92 1.236 3.228 0 4.608-2.808 5.616-5.484 5.916.432.372.816 1.104.816 2.22l-.012 3.3c0 .312.216.696.828.576A12 12 0 0023.997 12z'
                  fill='currentColor'
                  className='text-gray-50 dark:text-gray-900'
                ></path>
              </svg>
              <div className='flex-auto'>
                <h3 className='font-bold text-gray-900 dark:text-gray-200'>
                  Contribute
                </h3>
                <p className='dark:text-gray-300'>
                  Get involved into mts-technonatura open source project
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href='/discord' className='flex items-start space-x-4'>
              <svg
                fill='currentColor'
                className='flex-none text-indigo-400 dark:text-indigo-50 w-12 h-12'
              >
                <rect width='48' height='48' rx='12'></rect>
                <path
                  d='M21.637 23.57c-.745 0-1.332.653-1.332 1.45 0 .797.6 1.45 1.332 1.45.744 0 1.332-.653 1.332-1.45.013-.797-.588-1.45-1.332-1.45zm4.767 0c-.744 0-1.332.653-1.332 1.45 0 .797.6 1.45 1.332 1.45.745 0 1.332-.653 1.332-1.45 0-.797-.587-1.45-1.332-1.45z'
                  fill='currentColor'
                  className='text-indigo-50 dark:text-indigo-400'
                ></path>
                <path
                  d='M32.75 12.613H15.248a2.684 2.684 0 00-2.678 2.69v17.66a2.684 2.684 0 002.678 2.69h14.811l-.692-2.416 1.672 1.554 1.58 1.463 2.809 2.482V15.304a2.684 2.684 0 00-2.678-2.69zm-5.042 17.058s-.47-.561-.862-1.058c1.711-.483 2.364-1.554 2.364-1.554-.535.353-1.045.6-1.502.77a8.591 8.591 0 01-1.894.562 9.151 9.151 0 01-3.383-.013 10.964 10.964 0 01-1.92-.561 7.652 7.652 0 01-.953-.445c-.04-.026-.078-.039-.117-.065-.027-.013-.04-.026-.053-.039-.235-.13-.365-.222-.365-.222s.627 1.045 2.285 1.541c-.392.497-.875 1.084-.875 1.084-2.886-.091-3.983-1.985-3.983-1.985 0-4.206 1.88-7.615 1.88-7.615C20.211 18.661 22 18.7 22 18.7l.131.157c-2.35.679-3.435 1.71-3.435 1.71s.287-.156.77-.378c1.398-.614 2.508-.784 2.965-.823.079-.013.144-.026.223-.026a10.647 10.647 0 016.57 1.228s-1.033-.98-3.253-1.66l.183-.208s1.79-.04 3.67 1.371c0 0 1.881 3.41 1.881 7.615 0 0-1.11 1.894-3.997 1.985z'
                  fill='currentColor'
                  className='text-indigo-50 dark:text-indigo-400'
                ></path>
              </svg>
              <div className='flex-auto'>
                <h3 className='font-bold text-gray-900 dark:text-gray-200'>
                  Discord
                </h3>
                <p className='dark:text-gray-200'>
                  Join our Discord group to chat with other MTs TechnoNatura
                  contributors
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href='/discussions' className='flex items-start space-x-4'>
              <svg
                fill='currentColor'
                className='flex-none text-gray-900 dark:text-gray-50 w-12 h-12'
              >
                <rect width='48' height='48' rx='12'></rect>
                <path
                  d='M23.997 12a12 12 0 00-3.792 23.388c.6.12.816-.264.816-.576l-.012-2.04c-3.336.72-4.044-1.608-4.044-1.608-.552-1.392-1.332-1.764-1.332-1.764-1.08-.744.084-.72.084-.72 1.2.084 1.836 1.236 1.836 1.236 1.08 1.824 2.808 1.296 3.492.996.12-.78.42-1.308.756-1.608-2.664-.3-5.46-1.332-5.46-5.928 0-1.32.468-2.388 1.236-3.228a4.32 4.32 0 01.12-3.168s1.008-.324 3.3 1.224a11.496 11.496 0 016 0c2.292-1.56 3.3-1.224 3.3-1.224.66 1.644.24 2.88.12 3.168.768.84 1.236 1.92 1.236 3.228 0 4.608-2.808 5.616-5.484 5.916.432.372.816 1.104.816 2.22l-.012 3.3c0 .312.216.696.828.576A12 12 0 0023.997 12z'
                  fill='currentColor'
                  className='text-gray-50 dark:text-gray-900'
                ></path>
              </svg>
              <div className='flex-auto'>
                <h3 className='font-bold text-gray-900 dark:text-gray-200'>
                  GitHub Discussions
                </h3>
                <p className='dark:text-gray-200'>
                  Connect with members of the MTs TechnoNatura Developers
                  community.
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href='yt' className='flex items-start space-x-4'>
              <svg
                fill='currentColor'
                className='flex-none text-red-500 dark:text-red-50 w-12 h-12'
              >
                <rect width='48' height='48' rx='12'></rect>
                <path
                  d='M36.83 18.556c0-2.285-1.681-4.124-3.758-4.124a184.713 184.713 0 00-8.615-.182h-.914c-2.925 0-5.799.05-8.612.183-2.072 0-3.753 1.848-3.753 4.133A75.6 75.6 0 0011 23.99a78.487 78.487 0 00.173 5.429c0 2.285 1.68 4.139 3.753 4.139 2.955.137 5.987.198 9.07.192 3.087.01 6.11-.054 9.069-.193 2.077 0 3.758-1.853 3.758-4.138.121-1.813.177-3.62.172-5.434a73.982 73.982 0 00-.165-5.428zM21.512 28.97v-9.979l7.363 4.987-7.363 4.992z'
                  fill='currentColor'
                  className='text-red-50 dark:text-red-500'
                ></path>
              </svg>
              <div className='flex-auto'>
                <h3 className='font-bold text-gray-900 dark:text-gray-200'>
                  YouTube
                </h3>
                <p className='dark:text-gray-200'>
                  Watch screencasts and feature tutorials of Tailwind.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </section>

      {/* <PageTitle>Charts</PageTitle> */}
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

export default Dashboard;
