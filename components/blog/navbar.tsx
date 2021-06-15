import Link from 'next/link';
export default function NavbarBlog() {
  return (
    <nav className='bg-white shadow dark:bg-gray-800 mb-20'>
      <div className='container px-6 py-3 mx-auto md:flex justify-between'>
        <div className='flex items-center justify-between'>
          <p className='text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'>
            <Link href='/'>
              <a className='hover:text-cool-gray-600 hover:underline'>
                MTs TechnoNatura
              </a>
            </Link>{' '}
            |{' '}
            <Link href='/blog'>
              <a className='hover:text-cool-gray-600 hover:underline'>Blog</a>
            </Link>
          </p>

          <div className='flex md:hidden'>
            <button
              type='button'
              className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
              aria-label='toggle menu'
            >
              <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
                <path
                  fill-rule='evenodd'
                  d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className='md:flex md:items-center md:justify-between'>
          <div className='relative mt-3'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
              <svg
                className='w-5 h-5 text-gray-400'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </span>

            <input
              type='text'
              className='w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              placeholder='Search'
            />
          </div>
        </div>
      </div>
      <div className='container px-6 py-1 mx-auto'>
        <div className='py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden'>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            News
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            Articles
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            Videos
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            Tricks
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            PHP
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            Laravel
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            Vue
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            React
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            Tailwindcss
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            Meraki UI
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            CPP
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            JavaScript
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            Ruby
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            Mysql
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            Pest
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            PHPUnit
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            Netlify
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            VS Code
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            PHPStorm
          </a>
          <a
            className='mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0'
            href='#'
          >
            Sublime
          </a>
        </div>
      </div>
    </nav>
  );
}
