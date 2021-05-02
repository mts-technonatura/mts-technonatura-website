import React, { useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import { Button, Text, Stack, Input, useToast } from '@chakra-ui/react';

const ImageLight = '/assets/img/forgot-password-office.jpeg';
const ImageDark = '/assets/img/forgot-password-office-dark.jpeg';

const validationSchema = yup.object({
  email: yup.string().trim().email().required('username is required'),
});

function ForgotPassword() {
  const [submitting, setSubmit] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      email: '',
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
                Forgot password
              </h1>

              <form noValidate onSubmit={formik.handleSubmit}>
                <Stack>
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
                    placeholder='Your Email'
                  />
                  <Text
                    mt='8px'
                    fontSize='13px'
                    color={`${formik.errors.email && 'red.400'}`}
                  >
                    {formik.errors.email}
                  </Text>
                </Stack>

                <Button
                  block
                  type='submit'
                  style={{ outline: 'none', width: '100%' }}
                  className='mt-4'
                  colorScheme='purple'
                >
                  Recover password
                </Button>

                <Link href='/'>
                  <Text mt='8px' fontSize='13px'>
                    Returrn to Home
                  </Text>
                </Link>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
