import { Button, Text, Stack, Input, useToast } from '@chakra-ui/react';

import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const validationSchema = yup.object({
  name: yup.string().trim().min(4, 'Too Short').required('name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('email is required'),
  message: yup
    .string()
    .min(10, 'min 10 characters')
    .max(500, '500 characters is too long dude')
    .required('message is required'),
});
import React, { Fragment, useState } from 'react';
import { NextSeo } from 'next-seo';

function contactPage() {
  const toast = useToast();
  console.log(process.env.contactURL);
  const [submitting, setSubmit] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setSubmit(true);
      await axios({
        method: 'POST',
        data: {
          message: formik.values.message,
          email: formik.values.email,
          name: formik.values.name,
        },

        url:
          process.env.NEXT_PUBLIC_CONTACT_URL ||
          'http://localhost:3030/contact',
        withCredentials: true,
      })
        .then((res) => {
          toast({
            title: `Successfully Submit`,
            status: 'success',
            isClosable: true,
          });
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: `Error occured on the server. Please submit this issue if necessary`,
            status: 'error',
            isClosable: true,
          });
        });
      // console.log("response", response);
      setSubmit(false);
    },
  });
  return (
    <Fragment>
      <NextSeo
        title='Contact | MTs TechnoNatura'
        description='Contact MTs TechnoNatura member to get more information about us.'
        canonical={process.env.PUBLIC_URL}
        openGraph={{
          url: process.env.PUBLIC_URL,
          title: 'Halaman Kontak - MTs TechnoNatura',
          description:
            'Contact MTs TechnoNatura member to get more information about us.',
        }}
      />
      <section className='text-gray-600 body-font relative'>
        <div className='container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap'>
          <div className='lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
            <iframe
              width='100%'
              height='100%'
              className='absolute inset-0'
              frameBorder='0'
              title='map'
              marginHeight={0}
              marginWidth={0}
              scrolling='no'
              src='https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed'
              style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
            ></iframe>
            <div className='bg-white relative flex flex-wrap py-6 rounded shadow-md'>
              <div className='lg:w-1/2 px-6'>
                <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
                  ADDRESS
                </h2>
                <p className='mt-1'>
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
                  EMAIL
                </h2>
                <a className='text-indigo-500 leading-relaxed'>
                  aldhaneka.contact@email.com
                </a>
                <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs mt-4'>
                  PHONE
                </h2>
                <p className='leading-relaxed'>123-456-7890</p>
              </div>
            </div>
          </div>
          <form
            noValidate
            onSubmit={formik.handleSubmit}
            className='lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'
          >
            <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
              Contact
            </h2>
            <p className='leading-relaxed mb-5 text-gray-600'>
              Want to know more about MTs TechnoNatura? Contact us!
            </p>
            <Stack>
              <Text color={`${formik.errors.name && 'red.400'}`}>Name</Text>
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
            <Stack mb={3} mt={3}>
              <Text color={`${formik.errors.email && 'red.400'}`}>Email</Text>
              <Input
                id='email'
                name='email'
                isInvalid={Boolean(formik.errors.email)}
                type='text'
                value={formik.values.email}
                errorBorderColor={`${formik.errors.email && 'red.400'}`}
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
            <div className='relative mb-4'>
              <label
                htmlFor='message'
                className={`leading-7 text-sm ${
                  !formik.errors.message ? 'text-gray-600' : 'text-red-600'
                }`}
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formik.values.message}
                onChange={formik.handleChange}
                className={`w-full bg-white rounded border ${
                  !formik.errors.message ? 'border-gray-300' : 'border-red-600'
                } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
              ></textarea>
              <Text className='text-red-600' fontSize='xs'>
                {formik.errors.message}
              </Text>
            </div>
            <Button
              isLoading={submitting}
              type='submit'
              colorScheme='teal'
              variant='solid'
            >
              Send
            </Button>

            <p className='text-xs text-gray-500 mt-3'>
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </form>
        </div>
      </section>
    </Fragment>
  );
}

export default contactPage;
