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
  useBreakpointValue,
} from '@chakra-ui/react';
import PersonalInformationSettings from 'components/settings/personalInformation';
import ProfileSettings from 'components/settings/profileSettings';
import SensitiveSettings from 'components/settings/dangerSettings';
import LoadingPage from 'components/loadingpage';

import React, { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
import { RootStore } from '@/redux/index';

// const SettingsContext = React.createContext('light');

export default function Settings() {
  const authState = useSelector((state: RootStore) => state.auth);
  const router = useRouter();

  useEffect(() => {
    // console.log('hey');
    if (
      (authState.fetched && !authState.user) ||
      (authState.user && !authState.user.isAccountVerified)
    ) {
      router.push('/dashboard');
    }
  }, [authState.message]);

  if (
    authState.loading ||
    (authState.fetched && !authState.user) ||
    (authState.user && !authState.user.isAccountVerified)
  ) {
    return (
      <>
        <NextSeo
          title='Settings | mts-technonatura-dashboard'
          description='Your mts-technonatura account setings'
        />
        <LoadingPage></LoadingPage>
      </>
    );
  }

  return (
    <>
      <NextSeo
        title='Settings | mts-technonatura-dashboard'
        description='Your mts-technonatura account setings'
      />
      <div>
        <Box>
          <ProfileSettings />
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
          </Box>

          <PersonalInformationSettings />
          <Box
            visibility={{ base: 'hidden', sm: 'visible' }}
            aria-hidden='true'
          >
            <Box py={5}>
              <Box
                borderTop='solid 1px'
                borderTopColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
              ></Box>
            </Box>
          </Box>

          <SensitiveSettings />
        </Box>
      </div>
    </>
  );
}
