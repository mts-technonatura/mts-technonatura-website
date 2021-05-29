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
  useToast,
  FormLabel,
} from '@chakra-ui/react';
import LoadingPage from 'components/loadingpage';

import React, { useState, ChangeEventHandler } from 'react';
import { useCookie } from 'next-universal-cookie';

/* REACT - REDUXJS */
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@/redux/index';
import * as AuthMethods from '@/redux/actions/index';

/* REACT - REDUXJS */

import { useFormik } from 'formik';
import * as yup from 'yup';

import axios from 'axios';
import ms from 'ms';

import { statusMessage } from 'ts/index';

const validationSchema = yup.object({
  newPassword: yup
    .string()
    .trim()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  currentPassword: yup
    .string()
    .trim()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function changePassword() {
  const tokenCookieKey =
    process.env.NEXT_PUBLIC_JWT_AUTH_TOKEN || 'jwtAuthToken';
  const [cookies, setCookie, removeCookie] = useCookie([tokenCookieKey]);

  const authState = useSelector((state: RootStore) => state.auth);
  const dispatch = useDispatch();

  const [changePassword, setChangePassword] = useState<boolean>(false);
  const [changingPassword, setChangingPassword] = useState<boolean>(false);
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      currentPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      let audio;

      // loading to show that we are sending to api
      setChangingPassword(true);

      const changePassword = await axios.post<{
        errors?: any;
        message?: string;
        status?: statusMessage;
        token?: string;
      }>(
        process.env.NEXT_PUBLIC_CHANGE_PASSWORD_API ||
          'http://localhost:3030/auth/changePassword',
        {
          authToken: authState.token,
          ...values,
        },
      );

      if (changePassword.data.status && changePassword.data.message) {
        if (changePassword.data.status == 'success') {
          setChangePassword(false);
          if (changePassword.data.token) {
            // set new token to redux
            dispatch(AuthMethods.SetToken(changePassword.data.token));

            // remove the JWT cookie
            removeCookie(tokenCookieKey);

            // set new token to JWT cookie
            setCookie(tokenCookieKey, changePassword.data.token, {
              path: '/',
              maxAge: ms('1y'),
            });

            // set
            formik.setValues({ currentPassword: '', newPassword: '' });
            formik.setErrors({
              currentPassword: '',
              newPassword: '',
            });
          }

          audio = new Audio(
            'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962730/sounds/01%20Hero%20Sounds/hero_simple-celebration-03_ai1ky3.wav',
          );
          audio.play();
        } else {
          // if login fail
          audio = new Audio(
            'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962739/sounds/02%20Alerts%20and%20Notifications/alert_high-intensity_kag2c3.wav',
          );
        }
        toast({
          title: changePassword.data.message,
          position: 'top-right',
          isClosable: true,
          status: changePassword.data.status,
        });
        setChangingPassword(false);
      }

      // if there is input erros
      if (changePassword.data.errors.password) {
        setChangingPassword(false);
        formik.setErrors({
          currentPassword: changePassword.data.errors.password,
        });
      }

      if (audio) audio.play();

      setChangingPassword(false);
      // console.log(changingPassword);
    },
  });
  if (!authState.fetched && authState.loading && !authState.message) {
    return <LoadingPage />;
  }

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
                Change Password
              </Heading>
              {changePassword ? (
                <>
                  <FormLabel
                    mt={4}
                    for='email_address'
                    fontSize='sm'
                    fontWeight='md'
                    color={`${formik.errors.currentPassword && 'red.400'}`}
                    className={`${
                      !formik.errors.currentPassword && 'dark:text-gray-300'
                    }`}
                  >
                    current password
                  </FormLabel>
                  <PasswordInput
                    isInvalid={Boolean(formik.errors.currentPassword)}
                    errorBorderColor={`${
                      formik.errors.currentPassword && 'red.400'
                    }`}
                    name='currentPassword'
                    onchange={formik.handleChange}
                    value={formik.values.currentPassword}
                  />
                  <Text
                    mt='8px'
                    fontSize='13px'
                    color={`${formik.errors.currentPassword && 'red.400'}`}
                  >
                    {formik.errors.currentPassword}
                  </Text>
                  <FormLabel
                    mt={3}
                    for='email_address'
                    fontSize='sm'
                    fontWeight='md'
                    className={`${
                      !formik.errors.newPassword && 'dark:text-gray-300'
                    }`}
                    color={`${formik.errors.newPassword && 'red.400'}`}
                  >
                    new password
                  </FormLabel>

                  <PasswordInput
                    isInvalid={Boolean(formik.errors.newPassword)}
                    errorBorderColor={`${
                      formik.errors.newPassword && 'red.400'
                    }`}
                    name='newPassword'
                    onchange={formik.handleChange}
                    value={formik.values.newPassword}
                  />
                  <Text
                    mt='8px'
                    fontSize='13px'
                    color={`${formik.errors.newPassword && 'red.400'}`}
                  >
                    {formik.errors.newPassword}
                  </Text>
                  <ButtonGroup mt={4} spacing='3'>
                    <Button
                      isLoading={changingPassword}
                      colorScheme='red'
                      type='submit'
                    >
                      Change Password
                    </Button>
                    <Button
                      onClick={() => {
                        if (!changingPassword) setChangePassword(false);
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
                  Are you sure you want to change this account password?{' '}
                  <span
                    onClick={() => {
                      setChangePassword(true);
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
