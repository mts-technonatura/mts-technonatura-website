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
    </>
  );
}
