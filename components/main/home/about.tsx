import { FC } from 'react';
import Image from 'next/image';
import {
  aklimatisasi,
  madinah1,
  madinah2,
  madinah3,
  makkah1,
  makkah2,
  makkah3,
} from 'assets/data/Gambar';

export default function AboutSection(): JSX.Element {
  return (
    <section className='py-12 md:py-20'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-lg mx-auto mb-12 text-center'>
          {/* <span className="inline-block py-1 px-3 text-xs font-semibold bg-green-100 text-green-600 rounded-xl">
            About MTs TechnoNatura
          </span> */}
          <h2 className='text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading'>
            About MTs TechnoNatura
          </h2>
          <p className='text-blueGray-400 leading-loose'>
            do you know? and blablabla bla, and MTs TechnoNatura is blabla bla
          </p>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap lg:items-center max-w-lg lg:max-w-full mx-auto'>
          <div className='w-full lg:w-1/4 p-3'>
            <img
              className='rounded object-cover mx-auto'
              src={madinah2}
              alt=''
            />
          </div>
          <div className='w-full lg:w-2/4 flex flex-col'>
            <div className='flex items-end'>
              <div className='w-2/3 p-3'>
                <img className='rounded object-cover' src={madinah1} alt='' />
              </div>
              <div className='w-1/3 p-3'>
                <img
                  className='h-48 w-full lg:h-32 rounded object-cover'
                  src={madinah3}
                  alt=''
                />
              </div>
            </div>
            <div className='flex items-start'>
              <div className='w-1/3 p-3'>
                <img
                  className='h-48 lg:h-32 rounded object-cover'
                  src={makkah1}
                  alt=''
                />
              </div>
              <div className='w-2/3 p-3'>
                <img className='rounded object-cover' src={makkah2} alt='' />
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/4 p-3'>
            <img
              className='rounded object-cover mx-auto'
              src={makkah3}
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export const Team: FC = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
        <div className='relative lg:w-1/2'>
          <img
            src={aklimatisasi}
            alt='MTs TechnoNatura Team Image'
            className='object-cover w-full lg:absolute h-80 lg:h-full'
          />
          <svg
            className='absolute top-0 right-0 hidden h-full text-white lg:inline-block'
            viewBox='0 0 20 104'
            fill='currentColor'
          >
            <polygon points='17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104' />
          </svg>
        </div>
        <div className='flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
          <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl text-gray-700'>
            See the MTs Students
          </h5>
          <p className='mb-5 text-gray-800 text-blueGray-500'>
            There are many students in{' '}
            <span className='font-bold '>MTs Technonatura</span> from 1st Junior
            High School through the 3rd Junior High School. Each student have
            their own interest. Want to find out more? Check the link below!
          </p>
          <div className='flex items-center'>
            <button
              type='submit'
              className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-600 hover:bg-green-700 focus:shadow-outline focus:outline-none'
            >
              Get started
            </button>
            <a
              href='/'
              aria-label=''
              className='inline-flex items-center font-semibold transition-colors duration-200 text-blueGray-600 hover:text-blueGray-800'
            >
              Learn More
              <svg
                className='inline-block w-3 ml-2'
                fill='currentColor'
                viewBox='0 0 12 12'
              >
                <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
