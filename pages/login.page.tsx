import {
  Button,
  Text,
  Stack,
  Input,
  useToast,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { ssr } from '@/ts/index';
import { GetServerSideProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import * as AuthMethods from '@/redux/actions/index';
import { RootStore } from '@/redux/index';
import ms from 'ms';
import _ from 'underscore';
import { NextSeo } from 'next-seo';

const validationSchema = yup.object({
  username: yup
    .string()
    .trim()
    .matches(RegExp(/^[a-zA-Z0-9]+$/), 'Only Letters and Numbers are allowed')
    .required('username is required'),
  password: yup
    .string()
    .trim()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function LoginPage({ message, user }: Readonly<ssr>) {
  const tokenCookieKey =
    process.env.NEXT_PUBLIC_JWT_AUTH_TOKEN || 'jwtAuthToken';
  const toast = useToast();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStore) => state.auth);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [cookies, setCookie] = useCookies([tokenCookieKey]);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await dispatch(AuthMethods.AuthLogin(formik.values));
    },
  });

  useEffect(() => {
    if (_.isString(authState.token) && _.isEmpty(authState.errors)) {
      if (router)
        toast({
          title: `Login successfully`,
          position: 'top-right',
          isClosable: true,
          status: 'success',
        });

      if (_.isBoolean(Boolean(router.query.auth)) && router.query.next) {
        router.push(`/auth/?next=${router.query.next}`);
      } else {
        setCookie(tokenCookieKey, authState.token, {
          path: '/',
          maxAge: ms('1y'),
        });

        router.push('/app');
      }
    }
  }, [authState.token]);

  useEffect(() => {
    if (!_.isEmpty(authState.errors)) {
      formik.setErrors(authState.errors);
    }
  }, [authState.errors]);

  useEffect(() => {
    console.log(message, user);
    if (!authState.fetched) {
      if (message == 'success') {
        dispatch(AuthMethods.SavedUserToRedux(user, cookies[tokenCookieKey]));
        router.push('/app');
        return;
      } else if (message == 'server error') {
        toast({
          title: "Couldn't connect to server",
          position: 'bottom-right',
          isClosable: false,
          status: 'error',
          duration: 2000,
        });
      }

      dispatch(AuthMethods.AuthLogout());
    }
  }, []);

  return (
    <>
      <NextSeo
        title='Login | mts-technonatura-dashboard'
        description='Recover your mts-technonatura social account password'
      />
      <div className='flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900'>
        <div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
          <div className='flex flex-col overflow-y-auto md:flex-row'>
            <div className='h-32 md:h-auto md:w-1/2'>
              <img
                aria-hidden='true'
                className='object-cover w-full h-full dark:hidden'
                src='/assets/img/login-office.jpeg'
                alt='Office'
              />
              <img
                aria-hidden='true'
                className='hidden object-cover w-full h-full dark:block'
                src='assets/img/login-office-dark.jpeg'
                alt='Office'
              />
            </div>
            <main className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
              <div className='w-full'>
                <h1 className='mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200'>
                  Login
                </h1>
                <form noValidate onSubmit={formik.handleSubmit}>
                  <Stack>
                    <Text color={`${formik.errors.username && 'red.400'}`}>
                      Username
                    </Text>
                    <Input
                      isInvalid={Boolean(formik.errors.username)}
                      type='text'
                      id='username'
                      name='username'
                      errorBorderColor={`${
                        formik.errors.username && 'red.400'
                      }`}
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      placeholder='Nama anda'
                      className=' dark:text-white'
                    />
                    <Text
                      mt='8px'
                      fontSize='13px'
                      color={`${formik.errors.username && 'red.400'}`}
                    >
                      {formik.errors.username}
                    </Text>
                  </Stack>

                  <Stack mt={4}>
                    <Text color={`${formik.errors.password && 'red.400'}`}>
                      password
                    </Text>

                    <InputGroup size='md'>
                      <Input
                        isInvalid={Boolean(formik.errors.password)}
                        id='password'
                        name='password'
                        errorBorderColor={`${
                          formik.errors.password && 'red.400'
                        }`}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        className=' dark:text-white'
                      />
                      <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                          {show ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <Text
                      mt='8px'
                      fontSize='13px'
                      color={`${formik.errors.password && 'red.400'}`}
                    >
                      {formik.errors.password}
                    </Text>
                  </Stack>

                  <Button
                    colorScheme='purple'
                    type='submit'
                    className='mt-4'
                    isLoading={authState.loading}
                    style={{ width: '100%', outline: 'none' }}
                  >
                    Log in
                  </Button>
                </form>

                <p className='mt-4'>
                  <Link href='/forgot-password'>
                    <a className='text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline'>
                      Forgot your password?
                    </a>
                  </Link>
                </p>
                <p className='mt-1'>
                  <Link href='/create-account'>
                    <a className='text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline'>
                      Create account
                    </a>
                  </Link>
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  Readonly<Partial<ssr>>
> = async (ctx) => {
  const tokenCookieKey =
    process.env.NEXT_PUBLIC_JWT_AUTH_TOKEN || 'jwtAuthToken';
  const token = ctx.req.cookies[tokenCookieKey];

  if (token) {
    try {
      const user = await axios.post<ssr>(
        process.env.NEXT_PUBLIC_CHECKJWT ||
          'http://localhost:3030/auth/checkJWT',
        {
          token: token,
        },
      );

      return {
        props: {
          ...user.data,
        },
      };
    } catch (err) {
      return {
        props: {
          message: err,
          token,
        },
      };
    }
  }

  return {
    props: {
      message: 'no token',
    },
  };
};
