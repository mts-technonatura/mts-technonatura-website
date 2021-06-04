import { useSelector } from 'react-redux';

import Link from 'next/link';
import { NextSeo } from 'next-seo';
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
import ManageStories from '@/components/story/index.component';

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
    return (
      <>
        <NextSeo
          title='Stories | MTs TechnoNatura Dashboard'
          description='Manage Stories, MTs TechnoNatura Indonesia Students Dashboard'
          canonical={process.env.PUBLIC_URL}
          openGraph={{
            url: process.env.PUBLIC_URL,
            title: 'Manage Stories | MTs TechnoNatura Students Dashboard',
            description:
              'Manage User Stories for MTs TechnoNatura Indonesia Students Dashboard',
          }}
        />
        <LoadingPage />
      </>
    );
  }

  if (
    !authState.user ||
    (authState.user && !authState.user.isAccountVerified)
  ) {
    return (
      <>
        <NextSeo
          title='Stories | MTs TechnoNatura Dashboard'
          description='Manage Stories, MTs TechnoNatura Indonesia Students Dashboard'
          canonical={process.env.PUBLIC_URL}
          openGraph={{
            url: process.env.PUBLIC_URL,
            title: 'Manage Stories | MTs TechnoNatura Students Dashboard',
            description:
              'Manage User Stories for MTs TechnoNatura Indonesia Students Dashboard',
          }}
        />
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
                      bg='blue.400'
                      color='gray.50'
                      _hover={{ bg: 'blue.500' }}
                      _active={{ bg: 'blue.600' }}
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
      </>
    );
  }

  return <ManageStories />;
}
