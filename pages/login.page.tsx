import { Button, Text, Stack, Input, useToast } from '@chakra-ui/react';

import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

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

export default function loginPage() {
  const toast = useToast();

  const [submitting, setSubmit] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {},
  });

  return (
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
                    errorBorderColor={`${formik.errors.username && 'red.400'}`}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    placeholder='Nama anda'
                  />
                  <Text
                    mt='8px'
                    fontSize='13px'
                    color={`${formik.errors.username && 'red.400'}`}
                  >
                    {formik.errors.username}
                  </Text>
                </Stack>

                <Stack mt={3}>
                  <Text color={`${formik.errors.password && 'red.400'}`}>
                    Password
                  </Text>
                  <Input
                    isInvalid={Boolean(formik.errors.password)}
                    type='text'
                    id='password'
                    name='password'
                    errorBorderColor={`${formik.errors.password && 'red.400'}`}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder='*********'
                  />
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
  );
}
