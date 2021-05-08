import {
  Button,
  Text,
  Stack,
  Input,
  InputRightElement,
  InputGroup,
  useToast,
} from '@chakra-ui/react';

import ErrorPage from 'components/500';

import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@/redux/index';
import { AuthSignup } from '@/redux/actions/index';
import * as AuthMethods from '@/redux/actions/index';
import { NextSeo } from 'next-seo';
import { ssr } from '@/ts/index';
import _ from 'underscore';
import { useCookies } from 'react-cookie';
import ms from 'ms';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/router';

const ImageLight = '/assets/img/create-account-office.jpeg';
const ImageDark = '/assets/img/create-account-office-dark.jpeg';

const validationSchema = yup.object({
  username: yup
    .string()
    .trim()
    .matches(RegExp(/^[a-zA-Z0-9]+$/), 'Only Letters and Numbers are allowed')
    .required('username is required'),
  name: yup
    .string()
    .trim()
    .min(8, 'Name should be of minimum 6 characters length')
    .required('name is required'),
  password: yup
    .string()
    .trim()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  email: yup.string().trim().email().required('email is required'),
});

function CreateAccountPage({ message, user }: ssr) {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
      name: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await dispatch(AuthSignup(formik.values));
    },
  });

  const tokenCookieKey =
    process.env.NEXT_PUBLIC_JWT_AUTH_TOKEN || 'jwtAuthToken';
  const [cookies, setCookie] = useCookies([tokenCookieKey]);

  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStore) => state.auth);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    // console.log(authState);
    if (authState.message == 'jwtSuccess') {
      // dispatch(AuthMethods.SavedUserToRedux(user, cookies[tokenCookieKey]));
      router.push('/app');
      return;
    } else if (authState.message == 'server error') {
      toast({
        title: "Couldn't connect to server",
        position: 'bottom-right',
        isClosable: false,
        status: 'error',
        duration: 2000,
      });
    }

    // dispatch(AuthMethods.AuthLogout());
  }, [authState.message]);

  // check JWT
  useEffect(() => {
    if (
      !authState.fetched &&
      authState.message !== 'account created' &&
      authState.message !== 'login successfully'
    ) {
      dispatch(AuthMethods.AuthVerifyJWT(cookies[tokenCookieKey]));
    }
  }, []);

  useEffect(() => {
    if (!_.isEmpty(authState.errors)) {
      formik.setErrors(authState.errors);
    }
  }, [authState.errors]);

  useEffect(() => {
    // console.log(authState);
    if (_.isString(authState.token) && authState.message == 'account created') {
      toast({
        title: `Account Created`,
        position: 'top-right',
        isClosable: true,
        status: 'success',
      });

      setCookie(tokenCookieKey, authState.token, {
        path: '/',
        maxAge: ms('1y'),
      });

      if (_.isBoolean(Boolean(router.query.auth)) && router.query.next) {
        router.push(`/auth/?next=${router.query.next}`);
      } else {
        router.push('/app');
      }
    }
  }, [authState.token]);

  if (authState.loading && !authState.fetched && !authState.errors) {
    return <></>;
  }

  // If failed check the JWT token
  if (authState.message == 'server error') {
    return (
      <ErrorPage
        NextSeoProps={{
          title: '500 Server Error ',
        }}
      >
        <>
          <h1>500</h1>
          <div className='ooo'>
            <h2>
              Couldn't Connect To Server |{' '}
              <a
                href='https://mts-technonatura.instatus.com/'
                className='text-gray-600 underline'
              >
                Status
              </a>
            </h2>
          </div>
        </>
      </ErrorPage>
    );
  }

  return (
    <>
      <NextSeo
        title='Create Account | mts-technonatura-dashboard'
        description='Create mts-technonatura social account'
      />
      <div className='flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900'>
        <div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
          <div className='flex flex-col overflow-y-auto md:flex-row'>
            <div className='h-32 md:h-auto md:w-1/2'>
              <img
                aria-hidden='true'
                className='object-cover w-full h-full dark:hidden'
                src={ImageLight}
                alt='Office'
              />
              <img
                aria-hidden='true'
                className='hidden object-cover w-full h-full dark:block'
                src={ImageDark}
                alt='Office'
              />
            </div>
            <main className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
              <div className='w-full'>
                <h1 className='mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200'>
                  Create account
                </h1>
                <form noValidate onSubmit={formik.handleSubmit}>
                  <Stack mt={4}>
                    <Text
                      className='dark:text-cool-gray-300'
                      color={`${formik.errors.username && 'red.400'}`}
                    >
                      username
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
                      placeholder='i.e. elonmusk'
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
                    <Text
                      className='dark:text-cool-gray-300'
                      color={`${formik.errors.name && 'red.400'}`}
                    >
                      name
                    </Text>
                    <Input
                      isInvalid={Boolean(formik.errors.name)}
                      type='text'
                      id='name'
                      name='name'
                      className=' dark:text-white'
                      errorBorderColor={`${formik.errors.name && 'red.400'}`}
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      placeholder='i.e. Elon Must At Tesla'
                    />
                    <Text
                      mt='8px'
                      fontSize='13px'
                      color={`${formik.errors.name && 'red.400'}`}
                    >
                      {formik.errors.name}
                    </Text>
                  </Stack>
                  <Stack mt={4}>
                    <Text
                      className='dark:text-cool-gray-300'
                      color={`${formik.errors.email && 'red.400'}`}
                    >
                      Email
                    </Text>
                    <Input
                      isInvalid={Boolean(formik.errors.email)}
                      type='text'
                      id='email'
                      className=' dark:text-white'
                      name='email'
                      errorBorderColor={`${formik.errors.email && 'red.400'}`}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      placeholder='Email anda'
                    />
                    <Text
                      mt='8px'
                      fontSize='13px'
                      color={`${formik.errors.email && 'red.400'}`}
                    >
                      {formik.errors.email}
                    </Text>
                  </Stack>

                  <Stack mt={4}>
                    <Text
                      className='dark:text-cool-gray-300'
                      color={`${formik.errors.password && 'red.400'}`}
                    >
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
                        className=' dark:text-white'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
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

                  <a className='text-sm font-medium text-purple-400 dark:text-purple-400 '>
                    by signup you agree to our{' '}
                    <Link href='/page/terms-of-use'>
                      <span className='hover:underline text-purple-600 cursor-pointer	'>
                        terms
                      </span>
                    </Link>{' '}
                    and{' '}
                    <Link href='/page/privacy-policy'>
                      <span className='hover:underline text-purple-600 cursor-pointer	'>
                        privacy policy
                      </span>
                    </Link>
                  </a>
                  <Button
                    isLoading={authState.loading}
                    type='submit'
                    block
                    colorScheme='purple'
                    style={{ outline: 'none', width: '100%' }}
                    className='mt-4'
                  >
                    Signup
                  </Button>
                </form>

                <p className='mt-4'>
                  <Link href='/login'>
                    <a className='text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline'>
                      Already have an account? Login
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

export default CreateAccountPage;
