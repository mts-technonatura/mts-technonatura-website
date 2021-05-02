import {
  Button,
  Text,
  Stack,
  Input,
  InputRightElement,
  InputGroup,
  useToast,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@/redux/index';
import { AuthSignup } from '@/redux/actions/index';
import _ from 'underscore';
import { useCookies, Cookies } from 'react-cookie';
import ms from 'millisecond';

import React, { Fragment, useState, useEffect } from 'react';
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

function Login() {
  const tokenCookieKey = process.env.JWT_AUTH_TOKEN || 'siodjfoi43r23roimal';
  const [cookies, setCookie] = useCookies([tokenCookieKey]);

  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStore) => state.auth);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

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
  useEffect(() => {
    if (!_.isEmpty(authState.errors)) {
      formik.setErrors(authState.errors);
    }
  }, [authState.errors]);

  useEffect(() => {
    if (_.isString(authState.token) && _.isEmpty(authState.errors)) {
      setCookie(tokenCookieKey, authState.token, { path: '/' });

      toast({
        title: `Account Created`,
        position: 'top-right',
        isClosable: true,
        status: 'success',
      });
      router.push('/app');
    }
  }, [authState.token]);

  return (
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
                  <Text color={`${formik.errors.username && 'red.400'}`}>
                    username
                  </Text>
                  <Input
                    isInvalid={Boolean(formik.errors.username)}
                    type='text'
                    id='username'
                    name='username'
                    errorBorderColor={`${formik.errors.username && 'red.400'}`}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    placeholder='Username anda'
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
                  <Text color={`${formik.errors.name && 'red.400'}`}>name</Text>
                  <Input
                    isInvalid={Boolean(formik.errors.name)}
                    type='text'
                    id='name'
                    name='name'
                    errorBorderColor={`${formik.errors.name && 'red.400'}`}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder='Nama anda'
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
                  <Text color={`${formik.errors.email && 'red.400'}`}>
                    Email
                  </Text>
                  <Input
                    isInvalid={Boolean(formik.errors.email)}
                    type='text'
                    id='email'
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

                {/* <Label className='mt-6' check>
                <Input type='checkbox' />
                <span className='ml-2'>
                  I agree to the{' '}
                  <span className='underline'>privacy policy</span>
                </span>
              </Label> */}
                <a className='text-sm font-medium text-purple-400 dark:text-purple-400 '>
                  by signup you agree to our{' '}
                  <Link href='/page/terms'>
                    <span className='hover:underline text-purple-600'>
                      terms
                    </span>
                  </Link>{' '}
                  and{' '}
                  <Link href='/page/terms'>
                    <span className='hover:underline text-purple-600'>
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
  );
}

export default Login;
