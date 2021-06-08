import { Link } from '@chakra-ui/react';

export default function FooterHome(): JSX.Element {
  return (
    <footer>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        {/* Top area: Blocks */}
        <div className='grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200'>
          {/* 1st block */}
          <div className='sm:col-span-12 lg:col-span-3'>
            <div className='mb-2'>
              {/* Logo */}
              <Link href='/' className='inline-block' aria-label='Cruip'>
                <img
                  className='h-12'
                  src='/favicon.ico'
                  alt='MTs TechnoNatura Logo'
                  width='auto'
                />
              </Link>
            </div>
            <div className='text-sm text-gray-600'>
              MTs TechnoNatura Website
            </div>
          </div>

          {/* 2nd block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-gray-800 font-medium mb-2'>Discover</h6>
            <ul className='text-sm'>
              <li className='mb-2'>
                <Link
                  href='/'
                  className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  Home
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/blog'
                  className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  Blog
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/news'
                  className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  News
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/projects'
                  className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  Projects
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/dashboard'
                  className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-gray-800 font-medium mb-2'>About MTs TN</h6>
            <ul className='text-sm'>
              <li className='mb-2'>
                <Link
                  href='#'
                  className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  About us
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='#'
                  className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  Projects
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='#'
                  className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  News
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='#'
                  className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  Developer
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-gray-800 font-medium mb-2'>Resources</h6>
            <ul className='text-sm'>
              <li className='mb-2'>
                <Link
                  href='#'
                  className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  Documentation
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='#'
                  className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  Tutorials & Guides
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/help'
                  className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-3'>
            <h6 className='text-gray-800 font-medium mb-2'>Subscribe</h6>
            <p className='text-sm text-gray-600 mb-4'>
              Get the latest news and articles to your inbox every month.
            </p>
            <form>
              <div className='flex flex-wrap mb-4'>
                <div className='w-full'>
                  <label className='block text-sm sr-only' htmlFor='newsletter'>
                    Email
                  </label>
                  <div className='relative flex items-center max-w-xs'>
                    <input
                      id='newsletter'
                      type='email'
                      className='form-input border-2  border-gray-300 focus:border-gray-800 w-full text-gray-800 px-3 py-2 pr-12 text-sm'
                      placeholder='Your email'
                      required
                      style={{ borderRadius: '5px' }}
                    />
                    <button
                      type='submit'
                      className='absolute inset-0 left-auto'
                      aria-label='Subscribe'
                      style={{ outline: 'none' }}
                    >
                      <span
                        className='absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300'
                        aria-hidden='true'
                      ></span>
                      <svg
                        className='w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z'
                          fillRule='nonzero'
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className='md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200'>
          {/* Social links */}
          <ul className='flex mb-4 md:order-1 md:ml-4 md:mb-0'>
            <li className='ml-4'>
              <Link
                href='https://github.com/mts-technonatura'
                className='flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out'
                aria-label='Github'
              >
                <svg
                  className='w-8 h-8 fill-current'
                  viewBox='0 0 32 32'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z' />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className='text-sm text-gray-600 mr-4'>
            Made by{' '}
            <a
              className='text-blue-600 hover:underline'
              href='https://cruip.com/'
            >
              Aldhaneka
            </a>{' '}
            and{' '}
            <a
              className='text-blue-600 hover:underline'
              href='https://cruip.com/'
            >
              friends
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
