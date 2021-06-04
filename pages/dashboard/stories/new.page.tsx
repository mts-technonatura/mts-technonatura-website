import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Link from 'next/link';
import { useRouter } from 'next/router';

import styled from '@emotion/styled';

/* ======================= UI ======================= */
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Button,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  useDisclosure,
  useToast,
  Input,
  Text,
  Tooltip,
  useClipboard,
  ModalFooter,
  Divider,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  Modal,
  useBreakpointValue,
} from '@chakra-ui/react';
import CreateNewSensorDrawer from '@/components/admin/arduinoapp/createNewSensor';
import CallToActionWithIllustration from '@/components/CallToActionWithIllustration';

import InfoCard from 'components/Cards/InfoCard';
import LoadingPage from 'components/loadingpage';
import Story from 'components/story/Story.component';

import Box from '@material-ui/core/Box';
import { IoIosTrash } from 'react-icons/io';
import { FaRegEdit } from 'react-icons/fa';
/* ======================= END UI ======================= */
import { RootStore } from '@/redux/index';
import { NoItemIcon, UnhappyGhost } from 'icons';

const BoxWrapper = styled(Box)`
  padding: 0px 15px;

  @media screen and (min-width: 800px) {
    padding: 0px 100px;
  }

  @media screen and (min-width: 1000px) {
    padding: 0px 150px;
  }
`;

export default function ManageBlog() {
  const router = useRouter();
  const authState = useSelector((state: RootStore) => state.auth);

  useEffect(() => {
    if (authState.user && !authState.user.isAccountVerified) {
      router.push('/dashboard/stories');
    }
  }, [authState.user]);

  if (authState.loading) {
    return <LoadingPage />;
  }

  if (authState.user && authState.user.isAccountVerified) {
    return <Story />;
  } else {
    return (
      <CallToActionWithIllustration
        Icon={<UnhappyGhost mt={{ base: 12, sm: 16 }} />}
        title="You Don't Have an Access To This Feature"
        desc='This Feature is only accessible for verified users'
        Buttons={
          <>
            {!authState.user ? (
              <>
                <Link href='/login'>
                  <Button
                    rounded={'full'}
                    px={6}
                    colorScheme={'purple'}
                    bg='purple.600'
                    _hover={{ bg: 'purple.700' }}
                  >
                    Login
                  </Button>
                </Link>
                <Link href='/create-account'>
                  <Button
                    className='dark:bg-cool-gray-300'
                    rounded={'full'}
                    px={6}
                  >
                    Create an Account
                  </Button>
                </Link>
              </>
            ) : (
              <Link href='https://t.me/aldhaneka'>
                <Button
                  rounded={'full'}
                  px={6}
                  colorScheme={'purple'}
                  bg='purple.600'
                  _hover={{ bg: 'purple.700' }}
                >
                  Request To Verify
                </Button>
              </Link>
            )}
          </>
        }
      />
    );
  }
  return <LoadingPage />;
}
