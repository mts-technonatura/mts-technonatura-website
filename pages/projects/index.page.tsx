export default function ProjectsPage() {
  return (
    <>
      <section>
        <nav className='relative py-8 px-4 xl:px-10 bg-blue-800'>
          <div className='flex justify-between items-center'>
            <a className='text-xl text-white font-semibold' href='#'>
              <img
                className='h-7'
                src='bendis-assets/logos/bendis-light.svg'
                alt=''
                width='auto'
              />
            </a>
            <div className='lg:hidden'>
              <button className='navbar-burger flex items-center p-3 rounded'>
                <svg
                  className='text-white block h-4 w-4'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                >
                  <title>Mobile menu</title>
                  <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
                </svg>
              </button>
            </div>
            <ul className='hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:w-auto lg:space-x-10'>
              <li>
                <a
                  className='text-white font-semibold hover:text-blue-50'
                  href='#'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className='text-white font-semibold hover:text-blue-50'
                  href='#'
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  className='text-white font-semibold hover:text-blue-50'
                  href='#'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className='text-white font-semibold hover:text-blue-50'
                  href='#'
                >
                  Testimonials
                </a>
              </li>
            </ul>
            <div className='hidden lg:block'>
              <a
                className='inline-block px-8 text-white hover:text-blue-50 font-semibold'
                href='#'
              >
                Sign in
              </a>
              <a
                className='inline-block py-3 px-8 text-sm text-white hover:text-blue-50 uppercase font-semibold border-2 border-white'
                href='#'
              >
                Sign up
              </a>
            </div>
          </div>
        </nav>
        <div
          className='relative py-32 text-center bg-cover overflow-hidden'
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')",
          }}
        >
          <div className='relative max-w-4xl mx-auto px-4'>
            {/* <span className='text-lg text-white font-semibold uppercase'>
            Showcase your
          </span> */}
            <h2 className='mt-8 mb-8 text-white text-4xl lg:text-6xl font-bold uppercase'>
              MTs TechnoNatura Projects
            </h2>
            <a
              className='inline-block w-full md:w-auto px-8 py-5 text-sm font-bold uppercase bg-yellow-500 hover:bg-yellow-400 transition duration-200'
              href='#'
            >
              Discover
            </a>
          </div>
        </div>

        <div className='hidden navbar-menu relative z-50'>
          <div className='navbar-backdrop fixed inset-0 bg-blue-800 opacity-90'></div>
          <nav className='fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-8 bg-white border-r overflow-y-auto'>
            <div className='flex items-center mb-16 pr-6'>
              <a
                className='ml-16 mr-auto text-xl text-blue-800 font-semibold leading-none'
                href='#'
              >
                asd
              </a>
            </div>
            <div>
              <ul>
                <li className='mb-1'>
                  <a
                    className='block pl-16 py-5 font-semibold text-blue-800 hover:bg-blue-50 rounded'
                    href='#'
                  >
                    About
                  </a>
                </li>
                <li className='mb-1'>
                  <a
                    className='block pl-16 py-5 font-semibold text-blue-800 hover:bg-blue-50 rounded'
                    href='#'
                  >
                    Company
                  </a>
                </li>
                <li className='mb-1'>
                  <a
                    className='block pl-16 py-5 font-semibold text-blue-800 hover:bg-blue-50 rounded'
                    href='#'
                  >
                    Services
                  </a>
                </li>
                <li className='mb-1'>
                  <a
                    className='block pl-16 py-5 font-semibold text-blue-800 hover:bg-blue-50 rounded'
                    href='#'
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div className='mt-auto px-10'>
              <div className='pt-6'>
                <a
                  className='block mb-2 py-4 text-center text-blue-800 font-semibold'
                  href='#'
                >
                  Sign in
                </a>
                <a
                  className='block py-4 text-center text-blue-800 leading-normal uppercase border-2 border-blue-800 hover:bg-blue-50 font-semibold'
                  href='#'
                >
                  Sign Up
                </a>
              </div>
              <p className='mt-6 mb-4 text-sm text-center text-blue-400'>
                <span>
                  © 2021 All rights reserved © Wireframes Corporation 2021
                </span>
              </p>
            </div>
          </nav>
        </div>
      </section>
      <div className=' flex flex-col items-center'>
        <div className='container flex flex-col justify-center'>
          <footer className='text-blueGray-700 bg-white'>
            <div className='flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row'>
              <a href='/' className='pr-2 lg:pr-8 lg:px-6 focus:outline-none'>
                <div className='inline-flex items-center'>
                  <div className='w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600'></div>
                  <h2 className='block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8'>
                    {' '}
                    wickedblocks{' '}
                  </h2>
                </div>
              </a>
              <nav className='flex flex-wrap items-center justify-center mx-auto text-base md:ml-auto md:mr-auto'>
                <a
                  href='#'
                  className='px-4 py-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black '
                >
                  Pricing
                </a>
                <a
                  href='#'
                  className='px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black '
                >
                  Contact
                </a>
                <a
                  href='#'
                  className='px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black '
                >
                  Services
                </a>
                <a
                  href='#'
                  className='px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black '
                >
                  Water
                </a>
                <a
                  href='#'
                  className='px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black '
                >
                  Now
                </a>
              </nav>
              <span className='inline-flex justify-center mt-2 mr-2 sm:ml-auto sm:mt-0 sm:justify-start'>
                <a className='text-blue-500 hover:text-black'>
                  <svg
                    fill='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                  </svg>
                </a>
                <a className='ml-3 text-blue-500 hover:text-black'>
                  <svg
                    fill='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                  </svg>
                </a>
                <a className='ml-3 text-blue-500 hover:text-black'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <rect
                      width='20'
                      height='20'
                      x='2'
                      y='2'
                      rx='5'
                      ry='5'
                    ></rect>
                    <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                  </svg>
                </a>
                <a className='ml-3 text-blue-500 hover:text-black'>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='0'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path
                      stroke='none'
                      d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                    ></path>
                    <circle cx='4' cy='4' r='2' stroke='none'></circle>
                  </svg>
                </a>
              </span>
            </div>
          </footer>
        </div>
        <footer className='w-full px-8 mt-4 rounded-b-lg bg-gray-100'>
          <div className='container inline-flex flex-col flex-wrap items-center px-5 py-6 mx-auto sm:flex-row'>
            <h2 className='mx-auto mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font'>
              {' '}
              The world's best teams use Wickedtemplates to state theire
              presence.{' '}
            </h2>
          </div>
        </footer>
      </div>
    </>
  );
}
