import { Link } from '@chakra-ui/layout';
import styled from '@emotion/styled';

const FeatureCard = styled.section`
  &:hover {
    transform: translate(0, -5px);
  }
`;

export default function AppIndexTop() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8'>
      <FeatureCard className='flex duration-300	cursor-pointer'>
        <div className='w-full hover:translate-y-6 relative text-white overflow-hidden rounded-3xl flex shadow-lg'>
          <div className='w-full flex md:flex-col bg-gradient-to-br from-purple-500 to-indigo-500'>
            <div className='sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8'>
              <h2 className='text-xl font-semibold mb-2 text-shadow'>
                Discover this social media
              </h2>
              <p className='font-medium text-violet-100 text-shadow mb-4'>
                Discover other mts-technonatura students and make a good friend!
              </p>
              <a
                className='mt-auto bg-violet-800 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex'
                href='/docs/installation'
              >
                Start learning
              </a>
            </div>
            <div className='docs_image__1HDuG relative md:pl-6 xl:pl-8 hidden sm:block'>
              <svg
                width='352'
                height='232'
                fill='none'
                viewBox='0 0 352 232'
                className='absolute top-6 left-6 md:static overflow-visible'
              >
                <g opacity='0.8'>
                  <g filter='url(#guides_svg__filter0_dd)'>
                    <rect width='352' height='232' fill='#fff' rx='12'></rect>
                  </g>
                  <path fill='#DDD6FE' d='M107 27h208v1H107z'></path>
                  <path
                    fill='#A78BFA'
                    fill-rule='evenodd'
                    d='M46 8c-2.4 0-3.9 1.212-4.5 3.637.9-1.213 1.95-1.667 3.15-1.364.685.173 1.174.675 1.716 1.23.882.905 1.903 1.952 4.134 1.952 2.4 0 3.9-1.212 4.5-3.637-.9 1.213-1.95 1.667-3.15 1.364-.685-.173-1.174-.675-1.716-1.23C49.252 9.047 48.231 8 46 8zm-4.5 5.456c-2.4 0-3.9 1.212-4.5 3.636.9-1.212 1.95-1.666 3.15-1.363.685.173 1.174.674 1.716 1.23.882.905 1.903 1.952 4.134 1.952 2.4 0 3.9-1.212 4.5-3.637-.9 1.212-1.95 1.667-3.15 1.364-.685-.173-1.174-.675-1.716-1.23-.882-.905-1.903-1.952-4.134-1.952z'
                    clip-rule='evenodd'
                  ></path>
                  <rect
                    width='25'
                    height='4'
                    x='48'
                    y='43'
                    fill='#C4B5FD'
                    rx='2'
                  ></rect>
                  <rect
                    width='25'
                    height='4'
                    x='255'
                    y='43'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='32'
                    height='4'
                    x='255'
                    y='51'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='24'
                    height='4'
                    x='255'
                    y='59'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='35'
                    height='4'
                    x='255'
                    y='67'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='22'
                    height='4'
                    x='255'
                    y='75'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='57'
                    height='8'
                    x='107'
                    y='42'
                    fill='#A78BFA'
                    rx='4'
                  ></rect>
                  <rect
                    width='121'
                    height='4'
                    x='107'
                    y='54'
                    fill='#C4B5FD'
                    rx='2'
                  ></rect>
                  <rect
                    width='49'
                    height='4'
                    x='121'
                    y='11'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='11'
                    height='4'
                    x='292'
                    y='11'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='129'
                    height='4'
                    x='107'
                    y='70'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='129'
                    height='4'
                    x='107'
                    y='177'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='137'
                    height='4'
                    x='107'
                    y='129'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='137'
                    height='4'
                    x='107'
                    y='137'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='129'
                    height='4'
                    x='107'
                    y='211'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='129'
                    height='4'
                    x='107'
                    y='78'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='121'
                    height='4'
                    x='107'
                    y='185'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='121'
                    height='4'
                    x='107'
                    y='219'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='121'
                    height='4'
                    x='107'
                    y='86'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='121'
                    height='4'
                    x='107'
                    y='94'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='129'
                    height='4'
                    x='107'
                    y='102'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='57'
                    height='6'
                    x='107'
                    y='118'
                    fill='#A78BFA'
                    rx='3'
                  ></rect>
                  <rect
                    width='57'
                    height='6'
                    x='107'
                    y='201'
                    fill='#A78BFA'
                    rx='3'
                  ></rect>
                  <rect
                    width='21'
                    height='4'
                    x='48'
                    y='53'
                    fill='#C4B5FD'
                    rx='2'
                  ></rect>
                  <rect
                    width='18'
                    height='4'
                    x='48'
                    y='63'
                    fill='#C4B5FD'
                    rx='2'
                  ></rect>
                  <rect
                    width='13'
                    height='4'
                    x='48'
                    y='73'
                    fill='#C4B5FD'
                    rx='2'
                  ></rect>
                  <rect
                    width='19'
                    height='4'
                    x='48'
                    y='83'
                    fill='#C4B5FD'
                    rx='2'
                  ></rect>
                  <rect
                    width='23'
                    height='4'
                    x='48'
                    y='93'
                    fill='#C4B5FD'
                    rx='2'
                  ></rect>
                  <rect
                    width='23'
                    height='3'
                    x='37'
                    y='112'
                    fill='#A78BFA'
                    rx='1.5'
                  ></rect>
                  <rect
                    width='23'
                    height='3'
                    x='37'
                    y='180'
                    fill='#A78BFA'
                    rx='1.5'
                  ></rect>
                  <rect
                    width='18'
                    height='4'
                    x='37'
                    y='120'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='18'
                    height='4'
                    x='37'
                    y='188'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='18'
                    height='4'
                    x='37'
                    y='128'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='18'
                    height='4'
                    x='37'
                    y='196'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='21'
                    height='4'
                    x='37'
                    y='136'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='21'
                    height='4'
                    x='37'
                    y='204'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='21'
                    height='4'
                    x='37'
                    y='144'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='21'
                    height='4'
                    x='37'
                    y='212'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='30'
                    height='4'
                    x='37'
                    y='152'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='30'
                    height='4'
                    x='37'
                    y='220'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='30'
                    height='4'
                    x='37'
                    y='160'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <rect
                    width='24'
                    height='4'
                    x='37'
                    y='168'
                    fill='#DDD6FE'
                    rx='2'
                  ></rect>
                  <circle cx='40' cy='45' r='3' fill='#A78BFA'></circle>
                  <circle cx='312' cy='13' r='3' fill='#DDD6FE'></circle>
                  <circle cx='40' cy='55' r='3' fill='#A78BFA'></circle>
                  <circle cx='40' cy='65' r='3' fill='#A78BFA'></circle>
                  <circle cx='40' cy='75' r='3' fill='#A78BFA'></circle>
                  <circle cx='40' cy='85' r='3' fill='#A78BFA'></circle>
                  <circle cx='40' cy='95' r='3' fill='#A78BFA'></circle>
                  <path
                    stroke='#C4B5FD'
                    d='M115 17.5l-2.379-2.379m0 0a3 3 0 10-4.242-4.243 3 3 0 004.242 4.243z'
                  ></path>
                  <rect
                    width='132'
                    height='23'
                    x='107'
                    y='147'
                    fill='#A78BFA'
                    rx='4'
                  ></rect>
                </g>
                <defs>
                  <filter
                    id='guides_svg__filter0_dd'
                    width='382'
                    height='262'
                    x='-15'
                    y='-7'
                    color-interpolation-filters='sRGB'
                    filterUnits='userSpaceOnUse'
                  >
                    <feFlood
                      flood-opacity='0'
                      result='BackgroundImageFix'
                    ></feFlood>
                    <feColorMatrix
                      in='SourceAlpha'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    ></feColorMatrix>
                    <feOffset dy='3'></feOffset>
                    <feGaussianBlur stdDeviation='3'></feGaussianBlur>
                    <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'></feColorMatrix>
                    <feBlend
                      in2='BackgroundImageFix'
                      result='effect1_dropShadow'
                    ></feBlend>
                    <feColorMatrix
                      in='SourceAlpha'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    ></feColorMatrix>
                    <feOffset dy='8'></feOffset>
                    <feGaussianBlur stdDeviation='7.5'></feGaussianBlur>
                    <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'></feColorMatrix>
                    <feBlend
                      in2='effect1_dropShadow'
                      result='effect2_dropShadow'
                    ></feBlend>
                    <feBlend
                      in='SourceGraphic'
                      in2='effect2_dropShadow'
                      result='shape'
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div
            className='absolute bottom-0 left-0 right-0 h-20 hidden sm:block'
            style={{
              background:
                'linear-gradient(to top, rgb(135, 94, 245), rgba(135, 94, 245, 0))',
            }}
          ></div>
        </div>
      </FeatureCard>
      <FeatureCard className='flex duration-300	cursor-pointer'>
        <div className='w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg'>
          <div className='w-full flex md:flex-col bg-gradient-to-br from-pink-500 to-rose-500'>
            <div className='sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8'>
              <h2 className='text-xl font-semibold mb-2 text-shadow'>
                Try Our Free APIs
              </h2>
              <p className='font-medium text-rose-100 text-shadow mb-4'>
                Test our mts-technonatura-api in our graphql playground
              </p>
              <a
                href='https://play.tailwindcss.com/'
                className='mt-auto bg-rose-900 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex'
              >
                Start building
              </a>
            </div>
            <div className='docs_image__1HDuG relative md:pl-6 xl:pl-8 hidden sm:block'>
              <svg
                width='352'
                height='232'
                fill='none'
                className='absolute top-6 left-6 md:static overflow-visible'
              >
                <g opacity='0.8'>
                  <g filter='url(#play_svg__filter0_dd)'>
                    <rect width='352' height='232' fill='#fff' rx='12'></rect>
                  </g>
                  <rect
                    width='8'
                    height='6'
                    x='307.5'
                    y='10.5'
                    stroke='#FDA4AF'
                    rx='0.5'
                  ></rect>
                  <path
                    fill='#FECDD3'
                    d='M265 11a1 1 0 011-1h4v7h-4a1 1 0 01-1-1v-5z'
                  ></path>
                  <rect
                    width='8'
                    height='6'
                    x='265.5'
                    y='10.5'
                    stroke='#FDA4AF'
                    rx='0.5'
                  ></rect>
                  <path fill='#FDA4AF' d='M269 10h1v7h-1z'></path>
                  <path
                    fill='#FECDD3'
                    d='M286 11a1 1 0 011-1h7a1 1 0 011 1v3h-9v-3z'
                  ></path>
                  <rect
                    width='8'
                    height='6'
                    x='286.5'
                    y='10.5'
                    stroke='#FDA4AF'
                    rx='0.5'
                  ></rect>
                  <path fill='#FDA4AF' d='M286 13h9v1h-9z'></path>
                  <path
                    fill='#FDA4AF'
                    fill-rule='evenodd'
                    d='M335 10h-5v1h1a1 1 0 011 1v4h3v-6zm-4 6v-4h-3v4h3zm-2-5h-1a1 1 0 00-1 1v4a1 1 0 001 1h7a1 1 0 001-1v-6a1 1 0 00-1-1h-5a1 1 0 00-1 1v1z'
                    clip-rule='evenodd'
                  ></path>
                  <circle cx='10' cy='54' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='62' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='70' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='78' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='86' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='94' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='102' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='110' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='118' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='126' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='134' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='142' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='150' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='158' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='166' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='174' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='182' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='190' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='198' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='206' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='214' r='2' fill='#FDA4AF'></circle>
                  <circle cx='10' cy='222' r='2' fill='#FDA4AF'></circle>
                  <path
                    fill='#FB7185'
                    fill-rule='evenodd'
                    d='M17 8c-2.4 0-3.9 1.212-4.5 3.637.9-1.213 1.95-1.667 3.15-1.364.685.173 1.174.675 1.716 1.23.882.905 1.903 1.952 4.134 1.952 2.4 0 3.9-1.212 4.5-3.637-.9 1.213-1.95 1.667-3.15 1.364-.685-.173-1.174-.675-1.716-1.23C20.252 9.047 19.231 8 17 8zm-4.5 5.456c-2.4 0-3.9 1.212-4.5 3.636.9-1.212 1.95-1.666 3.15-1.363.685.173 1.174.674 1.716 1.23.882.905 1.903 1.952 4.134 1.952 2.4 0 3.9-1.212 4.5-3.637-.9 1.212-1.95 1.667-3.15 1.364-.685-.173-1.174-.675-1.716-1.23-.882-.905-1.903-1.952-4.134-1.952z'
                    clip-rule='evenodd'
                  ></path>
                  <path
                    fill='#FFF1F2'
                    d='M177 29h175v191c0 6.627-5.373 12-12 12H177V29z'
                  ></path>
                  <path fill='#FECDD3' d='M0 27h352v2H0zm0 16h176v1H0z'></path>
                  <path fill='#FECDD3' d='M175 29h2v203h-2z'></path>
                  <rect
                    width='31'
                    height='4'
                    x='20'
                    y='52'
                    fill='#FB7185'
                    rx='2'
                  ></rect>
                  <rect
                    width='15'
                    height='4'
                    x='8'
                    y='34'
                    fill='#FB7185'
                    rx='2'
                  ></rect>
                  <rect
                    width='15'
                    height='4'
                    x='27'
                    y='34'
                    fill='#FECDD3'
                    rx='2'
                  ></rect>
                  <rect
                    width='15'
                    height='4'
                    x='46'
                    y='34'
                    fill='#FECDD3'
                    rx='2'
                  ></rect>
                  <rect
                    width='87'
                    height='4'
                    x='28'
                    y='60'
                    fill='#FB7185'
                    rx='2'
                  ></rect>
                  <rect
                    width='95'
                    height='4'
                    x='36'
                    y='68'
                    fill='#FB7185'
                    rx='2'
                  ></rect>
                  <rect
                    width='87'
                    height='4'
                    x='36'
                    y='76'
                    fill='#FB7185'
                    rx='2'
                  ></rect>
                  <rect
                    width='15'
                    height='4'
                    x='36'
                    y='84'
                    fill='#FB7185'
                    rx='2'
                  ></rect>
                  <rect
                    width='15'
                    height='4'
                    x='28'
                    y='92'
                    fill='#FB7185'
                    rx='2'
                  ></rect>
                  <rect
                    width='15'
                    height='4'
                    x='20'
                    y='100'
                    fill='#FB7185'
                    rx='2'
                  ></rect>
                  <rect
                    width='39'
                    height='4'
                    x='20'
                    y='108'
                    fill='#FB7185'
                    rx='2'
                  ></rect>
                  <rect
                    width='63'
                    height='4'
                    x='28'
                    y='116'
                    fill='#FB7185'
                    rx='2'
                  ></rect>
                  <rect
                    width='87'
                    height='4'
                    x='36'
                    y='124'
                    fill='#FB7185'
                    rx='2'
                  ></rect>
                  <rect
                    width='15'
                    height='4'
                    x='36'
                    y='164'
                    fill='#FB7185'
                    rx='2'
                  ></rect>
                  <rect
                    width='15'
                    height='4'
                    x='36'
                    y='172'
                    fill='#FB7185'
                    rx='2'
                  ></rect>
                  <path
                    fill='#FB7185'
                    d='M44 134a2 2 0 012-2h129v4H46a2 2 0 01-2-2zm8 8a2 2 0 012-2h121v4H54a2 2 0 01-2-2zm0 8a2 2 0 012-2h121v4H54a2 2 0 01-2-2zm-8 8a2 2 0 012-2h59a2 2 0 110 4H46a2 2 0 01-2-2zm0 24a2 2 0 012-2h19a2 2 0 110 4H46a2 2 0 01-2-2zm8 8a2 2 0 012-2h51a2 2 0 110 4H54a2 2 0 01-2-2zm0 24a2 2 0 012-2h51a2 2 0 110 4H54a2 2 0 01-2-2zm-8 8a2 2 0 012-2h35a2 2 0 110 4H46a2 2 0 01-2-2zm16-24a2 2 0 012-2h113v4H62a2 2 0 01-2-2zm0 8a2 2 0 012-2h113v4H62a2 2 0 01-2-2z'
                  ></path>
                  <rect
                    width='64'
                    height='64'
                    x='232'
                    y='99'
                    fill='#fff'
                    rx='8'
                  ></rect>
                  <rect
                    width='48'
                    height='4'
                    x='240'
                    y='115'
                    fill='#FB7185'
                    rx='2'
                  ></rect>
                  <rect
                    width='40'
                    height='4'
                    x='244'
                    y='123'
                    fill='#FB7185'
                    rx='2'
                  ></rect>
                  <rect
                    width='24'
                    height='2'
                    x='252'
                    y='135'
                    fill='#FECDD3'
                    rx='1'
                  ></rect>
                  <rect
                    width='48'
                    height='10'
                    x='240'
                    y='145'
                    fill='#FB7185'
                    rx='5'
                  ></rect>
                  <circle cx='264' cy='99' r='8' fill='#FECDD3'></circle>
                </g>
                <defs>
                  <filter
                    id='play_svg__filter0_dd'
                    width='382'
                    height='262'
                    x='-15'
                    y='-7'
                    color-interpolation-filters='sRGB'
                    filterUnits='userSpaceOnUse'
                  >
                    <feFlood
                      flood-opacity='0'
                      result='BackgroundImageFix'
                    ></feFlood>
                    <feColorMatrix
                      in='SourceAlpha'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    ></feColorMatrix>
                    <feOffset dy='3'></feOffset>
                    <feGaussianBlur stdDeviation='3'></feGaussianBlur>
                    <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'></feColorMatrix>
                    <feBlend
                      in2='BackgroundImageFix'
                      result='effect1_dropShadow'
                    ></feBlend>
                    <feColorMatrix
                      in='SourceAlpha'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    ></feColorMatrix>
                    <feOffset dy='8'></feOffset>
                    <feGaussianBlur stdDeviation='7.5'></feGaussianBlur>
                    <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'></feColorMatrix>
                    <feBlend
                      in2='effect1_dropShadow'
                      result='effect2_dropShadow'
                    ></feBlend>
                    <feBlend
                      in='SourceGraphic'
                      in2='effect2_dropShadow'
                      result='shape'
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-rose-500 hidden sm:block'></div>
        </div>
      </FeatureCard>
      <FeatureCard className='flex duration-300	cursor-pointer'>
        <div className='w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg'>
          <div className='w-full flex md:flex-col bg-gradient-to-br from-yellow-400 to-orange-500'>
            <div className='sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8'>
              <h2 className='text-xl font-semibold mb-2 text-shadow'>
                Need Help?
              </h2>
              <p className='font-medium text-amber-100 text-shadow mb-4'>
                Learn more about mts-technonatura-dashboard directly from our
                help page
              </p>
              <Link href='/help'>
                <a className='mt-auto bg-amber-900 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex'>
                  Learn More
                </a>
              </Link>
            </div>
            <div className='docs_image__1HDuG relative hidden sm:block'>
              <div className='absolute left-2 bottom-3 xl:bottom-5'>
                <svg
                  width='420'
                  height='204'
                  fill='none'
                  className='overflow-visible'
                >
                  <g opacity='0.8'>
                    <g filter='url(#screencasts_svg__filter0_d)'>
                      <rect
                        width='96'
                        height='60'
                        x='324'
                        fill='#FFFBEB'
                        rx='9'
                      ></rect>
                    </g>
                    <path
                      fill='#FCD34D'
                      d='M324 49.5h96V51a9 9 0 01-9 9h-78a9 9 0 01-9-9v-1.5z'
                    ></path>
                    <path fill='#FBBF24' d='M324 46.502h96v3h-96v-3z'></path>
                    <path fill='#F59E0B' d='M324 46.502h36.75v3H324v-3z'></path>
                    <circle
                      cx='371.25'
                      cy='23.25'
                      r='11.25'
                      fill='#FCD34D'
                    ></circle>
                    <path
                      fill='#F59E0B'
                      fill-rule='evenodd'
                      d='M369.042 18.927a1.5 1.5 0 011.54.075l4.5 3a1.5 1.5 0 010 2.496l-4.5 3a1.5 1.5 0 01-2.332-1.248v-6a1.5 1.5 0 01.792-1.323z'
                      clip-rule='evenodd'
                    ></path>
                    <g filter='url(#screencasts_svg__filter1_d)'>
                      <rect
                        width='96'
                        height='60'
                        x='216'
                        fill='#FFFBEB'
                        rx='9'
                      ></rect>
                    </g>
                    <path
                      fill='#FCD34D'
                      d='M216 49.5h96V51a9 9 0 01-9 9h-78a9 9 0 01-9-9v-1.5z'
                    ></path>
                    <path fill='#FBBF24' d='M216 46.502h96v3h-96v-3z'></path>
                    <path fill='#F59E0B' d='M216 46.502h36.75v3H216v-3z'></path>
                    <circle
                      cx='263.25'
                      cy='23.25'
                      r='11.25'
                      fill='#FCD34D'
                    ></circle>
                    <path
                      fill='#F59E0B'
                      fill-rule='evenodd'
                      d='M261.042 18.927a1.5 1.5 0 011.54.075l4.5 3a1.5 1.5 0 010 2.496l-4.5 3a1.5 1.5 0 01-2.332-1.248v-6a1.5 1.5 0 01.792-1.323z'
                      clip-rule='evenodd'
                    ></path>
                    <g filter='url(#screencasts_svg__filter2_d)'>
                      <rect
                        width='96'
                        height='60'
                        x='270'
                        y='72'
                        fill='#FFFBEB'
                        rx='9'
                      ></rect>
                    </g>
                    <path
                      fill='#FCD34D'
                      d='M270 121.5h96v1.5a9 9 0 01-9 9h-78a9 9 0 01-9-9v-1.5z'
                    ></path>
                    <path fill='#FBBF24' d='M270 118.502h96v3h-96v-3z'></path>
                    <path
                      fill='#F59E0B'
                      d='M270 118.502h44.75v3H270v-3z'
                    ></path>
                    <circle
                      cx='317.25'
                      cy='95.25'
                      r='11.25'
                      fill='#FCD34D'
                    ></circle>
                    <path
                      fill='#F59E0B'
                      fill-rule='evenodd'
                      d='M315.042 90.927a1.5 1.5 0 011.54.075l4.5 3a1.5 1.5 0 010 2.496l-4.5 3a1.5 1.5 0 01-2.332-1.248v-6a1.5 1.5 0 01.792-1.323z'
                      clip-rule='evenodd'
                    ></path>
                    <rect
                      width='96'
                      height='60'
                      x='216'
                      y='143.998'
                      fill='#FFFBEB'
                      rx='9'
                    ></rect>
                    <path
                      fill='#FCD34D'
                      d='M216 193.5h96v1.5a9 9 0 01-9 9h-78a9 9 0 01-9-9v-1.5z'
                    ></path>
                    <path fill='#FBBF24' d='M216 190.5h96v3h-96v-3z'></path>
                    <path fill='#F59E0B' d='M216 190.5h36.75v3H216v-3z'></path>
                    <circle
                      cx='263.254'
                      cy='167.25'
                      r='11.25'
                      fill='#FCD34D'
                    ></circle>
                    <path
                      fill='#F59E0B'
                      fill-rule='evenodd'
                      d='M261.046 162.927a1.5 1.5 0 011.54.075l4.5 3a1.5 1.5 0 010 2.496l-4.5 3a1.5 1.5 0 01-2.332-1.248v-6c0-.553.304-1.061.792-1.323z'
                      clip-rule='evenodd'
                    ></path>
                    <g filter='url(#screencasts_svg__filter3_d)'>
                      <rect
                        width='96'
                        height='60'
                        x='162'
                        y='72.002'
                        fill='#FFFBEB'
                        rx='9'
                      ></rect>
                    </g>
                    <path
                      fill='#FCD34D'
                      d='M162 121.502h96v1.5a9 9 0 01-9 9h-78a9 9 0 01-9-9v-1.5z'
                    ></path>
                    <path fill='#FBBF24' d='M162 118.502h96v3h-96v-3z'></path>
                    <path
                      fill='#F59E0B'
                      d='M162 118.502h20.75v3H162v-3z'
                    ></path>
                    <circle
                      cx='209.254'
                      cy='95.252'
                      r='11.25'
                      fill='#FCD34D'
                    ></circle>
                    <path
                      fill='#F59E0B'
                      fill-rule='evenodd'
                      d='M207.046 90.93a1.5 1.5 0 011.54.074l4.5 3a1.5 1.5 0 010 2.496l-4.5 3a1.5 1.5 0 01-2.332-1.248v-6a1.5 1.5 0 01.792-1.323z'
                      clip-rule='evenodd'
                    ></path>
                    <g filter='url(#screencasts_svg__filter4_d)'>
                      <rect
                        width='96'
                        height='60'
                        x='54'
                        y='72.002'
                        fill='#FFFBEB'
                        rx='9'
                      ></rect>
                    </g>
                    <path
                      fill='#FCD34D'
                      d='M54 121.502h96v1.5a9 9 0 01-9 9H63a9 9 0 01-9-9v-1.5z'
                    ></path>
                    <path fill='#FBBF24' d='M54 118.502h96v3H54v-3z'></path>
                    <path fill='#F59E0B' d='M54 118.502h52.75v3H54v-3z'></path>
                    <circle
                      cx='101.25'
                      cy='95.252'
                      r='11.25'
                      fill='#FCD34D'
                    ></circle>
                    <path
                      fill='#F59E0B'
                      fill-rule='evenodd'
                      d='M99.042 90.93a1.5 1.5 0 011.54.074l4.5 3a1.5 1.5 0 010 2.496l-4.5 3a1.5 1.5 0 01-2.332-1.248v-6a1.5 1.5 0 01.792-1.323z'
                      clip-rule='evenodd'
                    ></path>
                    <rect
                      width='96'
                      height='60'
                      x='108'
                      y='144.002'
                      fill='#FFFBEB'
                      rx='9'
                    ></rect>
                    <path
                      fill='#FCD34D'
                      d='M108 193.5h96v1.5a9 9 0 01-9 9h-78a9 9 0 01-9-9v-1.5z'
                    ></path>
                    <path fill='#FBBF24' d='M108 190.502h96v3h-96v-3z'></path>
                    <path
                      fill='#F59E0B'
                      d='M108 190.502h36.75v3H108v-3z'
                    ></path>
                    <circle
                      cx='155.25'
                      cy='167.252'
                      r='11.25'
                      fill='#FCD34D'
                    ></circle>
                    <path
                      fill='#F59E0B'
                      fill-rule='evenodd'
                      d='M153.046 162.927a1.5 1.5 0 011.54.075l4.5 3a1.5 1.5 0 010 2.496l-4.5 3a1.5 1.5 0 01-2.332-1.248v-6c0-.553.304-1.061.792-1.323z'
                      clip-rule='evenodd'
                    ></path>
                    <rect
                      width='96'
                      height='60'
                      y='144.002'
                      fill='#FFFBEB'
                      rx='9'
                    ></rect>
                    <path
                      fill='#FCD34D'
                      d='M0 193.502h96v1.5a9 9 0 01-9 9H9a9 9 0 01-9-9v-1.5z'
                    ></path>
                    <path fill='#FBBF24' d='M0 190.502h96v3H0v-3z'></path>
                    <path fill='#F59E0B' d='M0 190.502h36.75v3H0v-3z'></path>
                    <circle
                      cx='47.25'
                      cy='167.252'
                      r='11.25'
                      fill='#FCD34D'
                    ></circle>
                    <path
                      fill='#F59E0B'
                      fill-rule='evenodd'
                      d='M45.042 162.929a1.5 1.5 0 011.54.075l4.5 3a1.499 1.499 0 010 2.496l-4.5 3a1.5 1.5 0 01-2.332-1.248v-6a1.5 1.5 0 01.792-1.323z'
                      clip-rule='evenodd'
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id='screencasts_svg__filter0_d'
                      width='105'
                      height='69'
                      x='319.5'
                      y='-2.25'
                      color-interpolation-filters='sRGB'
                      filterUnits='userSpaceOnUse'
                    >
                      <feFlood
                        flood-opacity='0'
                        result='BackgroundImageFix'
                      ></feFlood>
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      ></feColorMatrix>
                      <feOffset dy='2.25'></feOffset>
                      <feGaussianBlur stdDeviation='2.25'></feGaussianBlur>
                      <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'></feColorMatrix>
                      <feBlend
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow'
                      ></feBlend>
                      <feBlend
                        in='SourceGraphic'
                        in2='effect1_dropShadow'
                        result='shape'
                      ></feBlend>
                    </filter>
                    <filter
                      id='screencasts_svg__filter1_d'
                      width='105'
                      height='69'
                      x='211.5'
                      y='-2.25'
                      color-interpolation-filters='sRGB'
                      filterUnits='userSpaceOnUse'
                    >
                      <feFlood
                        flood-opacity='0'
                        result='BackgroundImageFix'
                      ></feFlood>
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      ></feColorMatrix>
                      <feOffset dy='2.25'></feOffset>
                      <feGaussianBlur stdDeviation='2.25'></feGaussianBlur>
                      <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'></feColorMatrix>
                      <feBlend
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow'
                      ></feBlend>
                      <feBlend
                        in='SourceGraphic'
                        in2='effect1_dropShadow'
                        result='shape'
                      ></feBlend>
                    </filter>
                    <filter
                      id='screencasts_svg__filter2_d'
                      width='105'
                      height='69'
                      x='265.5'
                      y='69.75'
                      color-interpolation-filters='sRGB'
                      filterUnits='userSpaceOnUse'
                    >
                      <feFlood
                        flood-opacity='0'
                        result='BackgroundImageFix'
                      ></feFlood>
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      ></feColorMatrix>
                      <feOffset dy='2.25'></feOffset>
                      <feGaussianBlur stdDeviation='2.25'></feGaussianBlur>
                      <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'></feColorMatrix>
                      <feBlend
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow'
                      ></feBlend>
                      <feBlend
                        in='SourceGraphic'
                        in2='effect1_dropShadow'
                        result='shape'
                      ></feBlend>
                    </filter>
                    <filter
                      id='screencasts_svg__filter3_d'
                      width='105'
                      height='69'
                      x='157.5'
                      y='69.752'
                      color-interpolation-filters='sRGB'
                      filterUnits='userSpaceOnUse'
                    >
                      <feFlood
                        flood-opacity='0'
                        result='BackgroundImageFix'
                      ></feFlood>
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      ></feColorMatrix>
                      <feOffset dy='2.25'></feOffset>
                      <feGaussianBlur stdDeviation='2.25'></feGaussianBlur>
                      <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'></feColorMatrix>
                      <feBlend
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow'
                      ></feBlend>
                      <feBlend
                        in='SourceGraphic'
                        in2='effect1_dropShadow'
                        result='shape'
                      ></feBlend>
                    </filter>
                    <filter
                      id='screencasts_svg__filter4_d'
                      width='105'
                      height='69'
                      x='49.5'
                      y='69.752'
                      color-interpolation-filters='sRGB'
                      filterUnits='userSpaceOnUse'
                    >
                      <feFlood
                        flood-opacity='0'
                        result='BackgroundImageFix'
                      ></feFlood>
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      ></feColorMatrix>
                      <feOffset dy='2.25'></feOffset>
                      <feGaussianBlur stdDeviation='2.25'></feGaussianBlur>
                      <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'></feColorMatrix>
                      <feBlend
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow'
                      ></feBlend>
                      <feBlend
                        in='SourceGraphic'
                        in2='effect1_dropShadow'
                        result='shape'
                      ></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-orange-500 hidden sm:block'></div>
        </div>
      </FeatureCard>
    </div>
  );
}
