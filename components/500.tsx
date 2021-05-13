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
