// import css files
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import { Windmill } from '@windmill/react-ui';

import { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextCookieProvider } from 'next-universal-cookie';
import { NextSeo } from 'next-seo';

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { ChakraProvider } from '@chakra-ui/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';

import ProgressLoad from 'components/ProgressLoad';
import { SidebarProvider } from 'context/SidebarContext';
import Navbar from 'components/Navbar';

import store from '../redux_file/';

import ChakraUICustomTheme from '../theme';

import * as gtag from 'utils/gtag';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />

        <meta
          name='google-site-verification'
          content='xRNstet5q-SVVhkd1O7UKYcdANWA4jD1PbFQ17RHP0k'
        />
        <meta name='yandex-verification' content='356dad746d43cc34' />

        <meta name='theme-color' content='#f0efeb' />

        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' href='/favicon.png'></link>

        <title>MTs Technonatura Website</title>
        <meta name='description' content='Windmill Dashboard for nextjs' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/all.css'
        />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css'
          integrity='sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X'
          crossOrigin='anonymous'
        />
         <script src="https://cdn.rawgit.com/Ademking/CoolConsole/23c8707c/CoolConsole.min.js"></script>
        
        <script dangerouslySetInnerHTML={{
              __html: `
                  cc_icon(icon_github, "https://github.com/Aldhanekaa", "Follow the project leader!");

                  cc_icon(icon_github, "https://github.com/mts-technonatura/mts-technonatura-website", "Interested to contribute? Check this website source code!");

              `
            }}/>
         
      </Head>
      <style jsx global>{`
        html {
          font-family: 'Roboto', sans-serif;
          scroll-behavior: smooth;
          scroll-behavior: smooth;
        }
      `}</style>
      <NextSeo
        title='MTs TechnoNatura Website'
        description='Official MTs TechnoNatura Indonesia Website'
        canonical={process.env.PUBLIC_URL}
        openGraph={{
          url: process.env.PUBLIC_URL,
          title: 'MTs TechnoNatura Home Page',
          description: 'MTs TechnoNatura Indonesia Website',
        }}
      />
      <NextCookieProvider cookie={pageProps.cookie}>
        {/* <CssBaseline /> */}
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ChakraProvider theme={ChakraUICustomTheme}>
              <SidebarProvider>
                <Windmill usePreferences={true}>
                  <Navbar>
                    <ProgressLoad />
                    <Component {...pageProps} />
                  </Navbar>
                </Windmill>
              </SidebarProvider>
            </ChakraProvider>
          </ThemeProvider>
        </Provider>
      </NextCookieProvider>
    </>
  );
}

export default MyApp;
