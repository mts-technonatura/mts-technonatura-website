import {
  Button,
  ButtonGroup,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  chakra,
  useColorModeValue,
  Box,
  Stack,
  Select,
  Input,
  useToast,
  InputRightElement,
  Textarea,
  FormHelperText,
  Flex,
  Radio,
  SimpleGrid,
  Heading,
  Text,
  RadioGroup,
  FormControl,
  InputLeftAddon,
  InputGroup,
  Checkbox,
  GridItem,
  VisuallyHidden,
  Icon,
  FormLabel,
} from '@chakra-ui/react';
import React, { useState, ChangeEventHandler } from 'react';
import { IoWarning } from 'react-icons/io5';

import { useFormik } from 'formik';
import * as yup from 'yup';

import axios from 'axios';
import { statusMessage } from 'ts/index';

/* REACT - REDUXJS */
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@/redux/index';
import { Auth_INIT } from '@/redux/actions/types/AuthActionTypes.d';
/* REACT - REDUXJS */

import { useCookie } from 'next-universal-cookie';

const validationSchema = yup.object({
  currentPasswordDeleteAccount: yup
    .string()
    .trim()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function deleteAccount() {
  const tokenCookieKey =
    process.env.NEXT_PUBLIC_JWT_AUTH_TOKEN || 'jwtAuthToken';

  const [cookies, setCookie, removeCookie] = useCookie([tokenCookieKey]);

  const authState = useSelector((state: RootStore) => state.auth);
  const dispatch = useDispatch();

  const [deleteAccount, setDeleteAccount] = useState<boolean>();
  const [deleteingAccount, setDeleteingAccount] = useState<boolean>(false);

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      currentPasswordDeleteAccount: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      let audio;

      // loading to show that we are sending to api
      setDeleteingAccount(true);

      const deleteAccount = await axios.post<{
        errors?: any;
        message?: string;
        status?: statusMessage;
      }>(
        process.env.NEXT_PUBLIC_DELETE_ACCOUNT ||
          'http://localhost:3030/auth/deleteAccount',
        {
          authToken: authState.token,
          ...values,
        },
      );

      if (deleteAccount.data.status && deleteAccount.data.message) {
        if (deleteAccount.data.status == 'success') {
          setDeleteAccount(false);

          // remove the JWT cookie
          removeCookie(tokenCookieKey);
          dispatch({
            type: Auth_INIT,
          });

          formik.setValues({
            currentPasswordDeleteAccount: '',
          });
          formik.setErrors({
            currentPasswordDeleteAccount: '',
          });

          audio = new Audio(
            'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962730/sounds/01%20Hero%20Sounds/hero_simple-celebration-03_ai1ky3.wav',
          );
          audio.play();
        } else {
          // if deleting account failed
          audio = new Audio(
            'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962739/sounds/02%20Alerts%20and%20Notifications/alert_high-intensity_kag2c3.wav',
          );
        }
        toast({
          title: deleteAccount.data.message,
          position: 'top-right',
          isClosable: true,
          status: deleteAccount.data.status,
        });
        setDeleteingAccount(false);
      }

      // if there is input erros
      if (deleteAccount.data.errors.password) {
        setDeleteingAccount(false);
        formik.setErrors({
          currentPasswordDeleteAccount: deleteAccount.data.errors.password,
        });
      }

      if (audio) audio.play();

      setDeleteingAccount(false);
      // console.log(changingPassword);
    },
  });
  return (
    <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
      <chakra.form
        shadow='base'
        rounded={[null, 'md']}
        overflow={{ sm: 'hidden' }}
        onSubmit={formik.handleSubmit}
      >
        <Stack
          px={4}
          py={5}
          p={[null, 6]}
          className='bg-cool-gray-50 dark:bg-gray-700'
          spacing={6}
        >
          <SimpleGrid columns={6} spacing={6}>
            <FormControl as={GridItem} colSpan={[6, 4]}>
              <Heading
                fontSize='sm'
                fontWeight='md'
                className='text-cool-gray-700 dark:text-gray-300 text-xl'
              >
                DELETE ACCOUNT
              </Heading>
              {deleteAccount ? (
                <>
                  <FormLabel
                    fontSize='sm'
                    fontWeight='md'
                    className='text-cool-gray-700 dark:text-gray-300 '
                  >
                    By deleting account your blog post, arduino apps, sensors,
                    etc will be deleted
                  </FormLabel>
                  <FormLabel
                    mt={5}
                    for='email_address'
                    fontSize='sm'
                    fontWeight='md'
                    color={`${
                      formik.errors.currentPasswordDeleteAccount && 'red.400'
                    }`}
                    className={`${
                      !formik.errors.currentPasswordDeleteAccount &&
                      'dark:text-gray-300'
                    }`}
                  >
                    current password
                  </FormLabel>
                  <PasswordInput
                    isInvalid={Boolean(
                      formik.errors.currentPasswordDeleteAccount,
                    )}
                    errorBorderColor={`${
                      formik.errors.currentPasswordDeleteAccount && 'red.400'
                    }`}
                    name='currentPasswordDeleteAccount'
                    onchange={formik.handleChange}
                    value={formik.values.currentPasswordDeleteAccount}
                  />
                  <Text
                    mt='8px'
                    fontSize='13px'
                    color={`${
                      formik.errors.currentPasswordDeleteAccount && 'red.400'
                    }`}
                  >
                    {formik.errors.currentPasswordDeleteAccount}
                  </Text>
                  <ButtonGroup mt={4} spacing='3'>
                    <Button colorScheme='red' type='submit'>
                      Delete Account
                    </Button>
                    <Button
                      onClick={() => {
                        setDeleteAccount(false);
                      }}
                    >
                      Cancel
                    </Button>
                  </ButtonGroup>
                </>
              ) : (
                <FormLabel
                  for='email_address'
                  fontSize='sm'
                  fontWeight='md'
                  className='text-cool-gray-700 dark:text-gray-300 '
                >
                  Are you sure you want to delete this account?{' '}
                  <span
                    onClick={() => {
                      setDeleteAccount(true);
                    }}
                    className='underline cursor-pointer text-blue-500'
                  >
                    yes
                  </span>
                </FormLabel>
              )}
            </FormControl>
          </SimpleGrid>
        </Stack>
      </chakra.form>
    </GridItem>
  );
}

interface PasswordInputI {
  name: string;
  isInvalid: boolean;
  value: string;
  errorBorderColor: string;
  onchange: ChangeEventHandler<HTMLInputElement>;
}
function PasswordInput({
  value,
  isInvalid,
  errorBorderColor,
  onchange,
  name,
}: PasswordInputI) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size='md'>
      <Input
        errorBorderColor={errorBorderColor}
        name={name}
        isInvalid={isInvalid}
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        onChange={onchange}
        value={value}
        className='border-cool-gray-300 hover:border-cool-gray-400 focus:border-cool-gray-500 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-gray-300 text-cool-gray-500 dark:text-gray-300'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
