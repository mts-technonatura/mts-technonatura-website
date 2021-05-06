import { SiArduino } from 'react-icons/si';
export default function AppIndexFeature() {
  return (
    <section>
      <h2 className='text-3xl dark:text-cool-gray-200 tracking-tight font-extrabold text-gray-900 mt-16 mb-8'>
        What’s new in MTs-Technonatura Dashboard
      </h2>
      <ul className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 font-semibold text-gray-900 text-center'>
        <li className='flex'>
          <a className='relative dark:ring-cool-gray-700 rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6'>
            <div className='h-auto max-w-full mx-auto mb-1 text-blue-500 text-6xl'>
              <SiArduino className='m-auto' />
            </div>
            <span className='dark:text-cool-gray-300 text-2xl'>Blog</span>
            <span className='block text-cool-gray-500 text-sm dark:text-cool-gray-300'>
              Share your thoughts.
            </span>

            <span className='absolute top-2 right-2 bg-fuchsia-100 text-fuchsia-600 rounded-full text-xs py-0.5 px-2'>
              Coming Soon
            </span>
          </a>
        </li>
        <li className='flex'>
          <a
            className='relative dark:ring-cool-gray-700 rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6'
            href='/docs/ring-width'
          >
            <div className='h-auto max-w-full mx-auto mb-1 text-blue-500 text-6xl'>
              <SiArduino className='m-auto' />
            </div>
            <span className='dark:text-cool-gray-300 text-2xl'>
              Arduino App
            </span>
            <span className='block text-cool-gray-500 text-sm dark:text-cool-gray-300'>
              Free database to store your arduino sensor data
            </span>

            <span className='absolute top-2 right-2 bg-fuchsia-100 text-fuchsia-600 rounded-full text-xs py-0.5 px-2'>
              New
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
}
