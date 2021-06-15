import {
  workingWithFriends,
  aklimatisasi,
  madinah1,
  madinah2,
  madinah3,
  makkah1,
  makkah2,
  makkah3,
} from 'assets/data/Gambar';

export default function AboutPage() {
  return (
    <>
      <div className='relative'>
        <img
          src={workingWithFriends}
          className='absolute inset-0 object-cover w-full h-full'
          alt=''
        />
        <div className='relative bg-opacity-80 bg-green-600'>
          <svg
            style={{ bottom: '-5px' }}
            className='absolute inset-x-0 text-white'
            viewBox='0 0 1160 163'
          >
            <path
              fill='currentColor'
              d='M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z'
            />
          </svg>
          <div className='relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='flex flex-col items-center justify-between xl:flex-row'>
              <div className='w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12'>
                <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
                  About MTs TechnoNatura
                </h2>
                <p className='max-w-xl mb-4 text-base text-gray-200 md:text-lg'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                  quae.
                </p>
              </div>
              <div className='w-full max-w-xl md:h-4 xl:h-96 xl:px-8 xl:w-5/12'></div>
            </div>
          </div>
        </div>
      </div>

      <section className='bg-white'>
        <div className='max-w-5xl px-6 py-16 mx-auto space-y-8 md:flex md:items-center md:space-y-0'>
          <div className='md:w-2/3'>
            <div className='hidden md:flex md:items-center md:space-x-10'>
              <img
                className='object-cover object-center rounded-md shadow w-72 h-72'
                src='https://images.unsplash.com/photo-1614030126544-b79b92e29e98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80'
              />
              <img
                className='object-cover object-center w-64 rounded-md shadow h-96'
                src='https://images.unsplash.com/photo-1618506469810-282bef2b30b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80'
              />
            </div>
            <h2 className='text-3xl font-semibold text-gray-800 md:mt-6'>
              Lorem ipsum dolor{' '}
            </h2>
            <p className='max-w-lg mt-4 text-gray-600'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='md:w-1/3'>
            <img
              className='object-cover object-center w-full rounded-md shadow'
              style={{ height: '700px' }}
              src='https://images.unsplash.com/photo-1593352216840-1aee13f45818?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80'
            />
          </div>
        </div>
      </section>
      <section className='bg-white'>
        <div className='max-w-5xl px-6 py-16 mx-auto'>
          <div className='items-center md:flex md:space-x-6'>
            <div className='md:w-1/2'>
              <h3 className='text-2xl font-semibold text-gray-800'>
                Lorem ipsum dolor sit <br /> amet, consectetur
              </h3>
              <p className='max-w-md mt-4 text-gray-600'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a href='#' className='block mt-8 text-indigo-700 underline'>
                Experienced team
              </a>
            </div>

            <div className='mt-8 md:mt-0 md:w-1/2'>
              <div className='flex items-center justify-center'>
                <div className='max-w-md'>
                  <img
                    className='object-cover object-center w-full rounded-md shadow'
                    style={{ height: '500px' }}
                    src='https://images.unsplash.com/photo-1618346136472-090de27fe8b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=673&amp;q=80'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div className='max-w-5xl px-6 py-16 mx-auto'>
          <div className='md:flex md:justify-between'>
            <h2 className='text-3xl font-semibold text-gray-800'>
              MTs Technonatura <br /> Projects
            </h2>
            <a
              href='#'
              className='block mt-6 text-indigo-700 underline md:mt-0'
            >
              See All
            </a>
          </div>

          <div className='grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3'>
            <div className='px-6 py-8 overflow-hidden bg-white rounded-md shadow-md'>
              <h2 className='text-xl font-medium text-gray-800'>Audio</h2>
              <p className='max-w-md mt-4 text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa.
              </p>
            </div>

            <div className='px-6 py-8 overflow-hidden bg-white rounded-md shadow-md'>
              <h2 className='text-xl font-medium text-gray-800'>Audio</h2>
              <p className='max-w-md mt-4 text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa.
              </p>
            </div>

            <div className='px-6 py-8 overflow-hidden bg-white rounded-md shadow-md'>
              <h2 className='text-xl font-medium text-gray-800'>Audio</h2>
              <p className='max-w-md mt-4 text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
