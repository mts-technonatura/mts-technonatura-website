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
  useRadioGroup,
  HStack,
  useRadio,
  useBreakpointValue,
} from '@chakra-ui/react';
import PersonalInformationSettings from 'components/settings/personalInformation';
import ProfileSettings from 'components/settings/profileSettings';
import SensitiveSettings from 'components/settings/dangerSettings';
import LoadingPage from 'components/loadingpage';

import { WindmillContext } from '@windmill/react-ui';

import React, { useEffect, useContext } from 'react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
import { RootStore } from '@/redux/index';

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as='label' style={{ width: '50%' }}>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        className='border-cool-gray-300 hover:border-cool-gray-400 focus:border-cool-gray-500 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-gray-300 text-cool-gray-500 dark:text-gray-300'
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
function SiteAppearance() {
  const options = ['dark', 'light'];
  const { mode, toggleMode } = useContext(WindmillContext);

  const { getRootProps, getRadioProps, setValue } = useRadioGroup({
    name: 'framework',
    defaultValue: mode,
    onChange: (e) => {
      // console.log('hey');
      // setValue(e)
    },
  });

  useEffect(() => {
    setValue(mode);
  }, [mode]);

  return (
    <>
      <Heading
        mb={3}
        className='text-cool-gray-700 dark:text-gray-300 text-3xl'
      >
        Site Appearance{' '}
      </Heading>
      <HStack spacing={2} style={{ width: '100%' }} mb={10}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          radio.onChange = (e) => {
            // @ts-ignore
            setValue(e.target.value);
            toggleMode();
          };
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </HStack>
    </>
  );
}

export default function Settings() {
  const authState = useSelector((state: RootStore) => state.auth);
  const router = useRouter();

  return (
    <>
      <NextSeo
        title='Settings | mts-technonatura-dashboard'
        description='Your mts-technonatura account setings'
      />
      <div>
        <SiteAppearance />
        {authState.loading ? (
          <>
            <LoadingPage></LoadingPage>
          </>
        ) : (
          authState.user && (
            <Box>
              {/* <ProfileSettings />
              <Box
                visibility={{ base: 'hidden', sm: 'visible' }}
                aria-hidden='true'
              >
                <Box py={5}>
                  <Box
                    borderTop='solid 1px'
                    className='border-gray-200 dark:border-gray-500'
                  ></Box>
                </Box>
              </Box> */}

              {/* <PersonalInformationSettings /> */}
              <Box
                visibility={{ base: 'hidden', sm: 'visible' }}
                aria-hidden='true'
              >
                <Box py={5}>
                  <Box
                    borderTop='solid 1px'
                    borderTopColor={useColorModeValue(
                      'gray.200',
                      'whiteAlpha.200',
                    )}
                  ></Box>
                </Box>
              </Box>

              <SensitiveSettings />
            </Box>
          )
        )}
      </div>
    </>
  );
}
