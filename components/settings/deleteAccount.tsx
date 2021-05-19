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
  FormLabel,
} from '@chakra-ui/react';
import React, { useState, ChangeEventHandler } from 'react';
import { IoWarning } from 'react-icons/io5';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  currentPasswordDeleteAccount: yup
    .string()
    .trim()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function deleteAccount() {
  const [deleteAccount, setDeleteAccount] = useState<boolean>();
  const formik = useFormik({
    initialValues: {
      currentPasswordDeleteAccount: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
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
