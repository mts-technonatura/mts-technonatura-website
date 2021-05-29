// --jsx
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import { ChakraProvider } from '@chakra-ui/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import ProgressLoad from 'components/ProgressLoad';
import React, { useEffect } from 'react';
import { SidebarProvider } from 'context/SidebarContext';
import { Provider } from 'react-redux';
import store from '../redux_file/';

import Navbar from 'components/Navbar';

import { Windmill } from '@windmill/react-ui';
import { NextCookieProvider } from 'next-universal-cookie';
import { NextSeo } from 'next-seo';

import ChakraUICustomTheme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  console.log(pageProps, Component.contextTypes);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        {/* <meta
          name='google-site-verification'
          content={
            gtag.GOOGLE_VERIF || '-yo'
          }
        /> */}

        <meta name='yandex-verification' content='356dad746d43cc34' />

        <meta name='theme-color' content='#f0efeb' />

        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' href='/favicon.png'></link>

        <title>Nextjs Windmill Dashboard</title>
        <meta name='description' content='Windmill Dashboard for nextjs' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/all.css'
        />
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
