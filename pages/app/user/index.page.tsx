export default function UserPage() {
  return (
    <main className='flex-grow'>
      <div className='p-8 bg-blue-500'>
        <div className='max-w-7xl mx-auto'>
          <div className='lg:flex lg:items-center lg:justify-between'>
            <div className='flex-1 min-w-0 mt-5 lg:mt-0'>
              <div className='flex'>
                <div>
                  <div className='flex lg:mt-0 lg:ml-0'>
                    <span className='inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-400 mt-1'>
                      <img
                        className='rounded-full'
                        src='https://avatars.githubusercontent.com/u/67791514?v=4'
                      />
                    </span>
                  </div>
                </div>

                <div className='ml-4'>
                  <h2 className='text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate'>
                    Aldhanekaa
                  </h2>
                  <div className='text-gray-100'>
                    I design, I develop, I make. I made this entire website
                    ecosystem!
                  </div>
                  <div className='mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap'>
                    <div className='mt-2 flex items-center leading-5 text-gray-300 sm:mr-6'>
                      <svg
                        className='flex-shrink-0 mr-1.5 h-5 w-5 text-white'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        ></path>
                      </svg>
                      @aldhanekaa
                    </div>
                    <div className='mt-2 flex items-center leading-5 text-gray-300 sm:mr-6'>
                      <svg
                        className='flex-shrink-0 mr-1.5 h-5 w-5 text-white'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z'
                          clip-rule='evenodd'
                        ></path>
                        <path d='M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z'></path>
                      </svg>
                      99 projects
                    </div>
                    <div className='mt-2 flex items-center leading-5 text-gray-300 sm:mr-6'>
                      <svg
                        className='flex-shrink-0 mr-1.5 h-5 w-5 text-white'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z'
                          clip-rule='evenodd'
                        ></path>
                        <path d='M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z'></path>
                      </svg>
                      99 Blog Posts
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-5 flex lg:mt-0'></div>
          </div>
        </div>
      </div>
    </main>
  );
}
