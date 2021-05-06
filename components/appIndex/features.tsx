import { SiArduino } from 'react-icons/si';
import { IconType } from 'react-icons';
import Link from 'next/link';
interface FeatureCardI {
  link?: string;
  title: string;
  desc: string;
  smallText?: string;
  Icon: IconType;
}

function FeatureCard({ link, Icon, title, desc, smallText }: FeatureCardI) {
  return (
    <>
      {link ? (
        <Link href={link}>
          <a className='relative dark:ring-cool-gray-700 rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6'>
            <div className='h-auto max-w-full mx-auto mb-1 text-blue-500 text-6xl'>
              <Icon className='m-auto' />
            </div>
            <span className='dark:text-cool-gray-300 text-2xl'>{title}</span>
            <span className='block text-cool-gray-500 text-sm dark:text-cool-gray-300'>
              {desc}
            </span>

            {smallText && (
              <span className='absolute top-2 right-2 bg-fuchsia-100 text-fuchsia-600 rounded-full text-xs py-0.5 px-2'>
                {smallText}
              </span>
            )}
          </a>
        </Link>
      ) : (
        <a className='relative dark:ring-cool-gray-700 rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6'>
          <div className='h-auto max-w-full mx-auto mb-1 text-blue-500 text-6xl'>
            <Icon className='m-auto' />
          </div>
          <span className='dark:text-cool-gray-300 text-2xl'>{title}</span>
          <span className='block text-cool-gray-500 text-sm dark:text-cool-gray-300'>
            {desc}
          </span>

          {smallText && (
            <span className='absolute top-2 dark:text-cool-gray-300 right-2 bg-fuchsia-100 text-fuchsia-600 rounded-full text-xs py-0.5 px-2'>
              {smallText}
            </span>
          )}
        </a>
      )}
    </>
  );
}

export default function AppIndexFeature() {
  return (
    <section>
      <h2 className='text-3xl dark:text-cool-gray-200 tracking-tight font-extrabold text-gray-900 mt-16 mb-8'>
        MTs-Technonatura Dashboard Features
      </h2>
      <ul className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 font-semibold text-gray-900 text-center'>
        <li className='flex'>
          <FeatureCard
            Icon={SiArduino}
            title='Blog'
            desc='Share your thoughts'
          />
        </li>
        <li className='flex'>
          <FeatureCard
            Icon={SiArduino}
            title='Arduino App'
            desc='Free database to store your arduino sensor data'
            smallText='New'
          />
        </li>
      </ul>
    </section>
  );
}
