import { NextSeo, NextSeoProps } from 'next-seo';

interface errorPage {
  children: JSX.Element;
  NextSeoProps?: NextSeoProps;
}
export default function errorPage({
  children,
  NextSeoProps,
}: errorPage): JSX.Element {
  return (
    <>
      <NextSeo {...NextSeoProps} />
      <div className='server-error'>
        <div>{children}</div>
      </div>
    </>
  );
}

// <>
//     <h1>500</h1>
//     <div className='ooo'>
//       <h2>
//         Couldn't Connect To Server |{' '}
//         <a
//           href='https://mts-technonatura.instatus.com/'
//           className='text-gray-600 underline'
//         >
//           Status
//         </a>
//       </h2>
//     </div>
//   </>
