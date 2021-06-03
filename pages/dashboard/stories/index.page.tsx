import { useSelector } from 'react-redux';

import Link from 'next/link';
import styled from '@emotion/styled';

/* ======================= UI ======================= */
import {
  Button,
  Flex,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  useBreakpointValue,
} from '@chakra-ui/react';
import CallToActionWithIllustration from '@/components/CallToActionWithIllustration';

import LoadingPage from 'components/loadingpage';

import Box from '@material-ui/core/Box';

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
  const authState = useSelector((state: RootStore) => state.auth);

  if (authState.loading) {
    return <LoadingPage />;
  }

  if (authState.user && authState.user.isAccountVerified) {
    return (
      
    <BoxWrapper>
      <Flex flexWrap='wrap' justifyContent='space-between'>
        <Box p='2' className=' '>
          <Heading size='lg' className='dark:text-cool-gray-200 mb-3'>
            Your Stories
          </Heading>
        </Box>
        <Box>
          <Link href='/dashboard/stories/new'>
            <Button ml={4} colorScheme='purple'>
              New Stories
            </Button>
          </Link>
        </Box>
      </Flex>
      <Tabs mt={5}>
        <TabList className='border-cool-gray-300'>
          <Tab className='text-cool-gray-400 '>Drafts (2)</Tab>
          <Tab className='text-cool-gray-400 '>Published (5)</Tab>
          <Tab className='text-cool-gray-400 '>Response (10)</Tab>
        </TabList>

        <TabPanels className='dark:text-cool-gray-400'>
          <TabPanel>
            <p>Drafts Panel!</p>
          </TabPanel>
          <TabPanel>
            <p>Published Panel!</p>
          </TabPanel>
          <TabPanel>
            <p>Response Panel!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </BoxWrapper>
    );
  }

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
