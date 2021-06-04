import { useState } from 'react';
import { useSelector } from 'react-redux';

import Link from 'next/link';
import { NextSeo } from 'next-seo';

import styled from '@emotion/styled';

/* ======================= UI ======================= */
import Box from '@material-ui/core/Box';
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
  const [tab, setTab] = useState<'Drafts' | 'Published'>('Drafts');
  const authState = useSelector((state: RootStore) => state.auth);

  return (
    <>
      <NextSeo
        title={`${tab} Stories | MTs TechnoNatura Dashboard`}
        description='Manage Stories, MTs TechnoNatura Indonesia Students Dashboard'
        canonical={process.env.PUBLIC_URL}
        openGraph={{
          url: process.env.PUBLIC_URL,
          title: 'Manage Stories | MTs TechnoNatura Students Dashboard',
          description:
            'Manage User Stories for MTs TechnoNatura Indonesia Students Dashboard',
        }}
      />
      <BoxWrapper>
        <Flex flexWrap='wrap' justifyContent='space-between'>
          <Box p='2' className=' '>
            <Heading size='lg' className='dark:text-cool-gray-200 mb-3'>
              Your Stories
            </Heading>
          </Box>
          <Box>
            <Link href='/dashboard/stories/new'>
              <Button
                ml={4}
                color='gray.50'
                _hover={{ bg: 'blue.500' }}
                _active={{ bg: 'blue.600' }}
                bg='blue.400'
              >
                New Stories
              </Button>
            </Link>
          </Box>
        </Flex>
        <Tabs mt={5}>
          <TabList className='border-cool-gray-300'>
            <Tab
              onClick={() => setTab('Drafts')}
              className='text-cool-gray-400 '
            >
              Drafts (2)
            </Tab>
            <Tab
              onClick={() => setTab('Published')}
              className='text-cool-gray-400 '
            >
              Published (5)
            </Tab>
            {/* Reponse | Comments on Blog */}
            {/* <Tab className='text-cool-gray-400 '>Response (10)</Tab> */}
            {/* Reponse | Comments on Blog */}
          </TabList>

          <TabPanels className='dark:text-cool-gray-400'>
            <TabPanel>
              <p>Drafts Panel!</p>
            </TabPanel>
            <TabPanel>
              <p>Published Panel!</p>
            </TabPanel>

            {/* Reponse | Comments on Blog */}
            {/* <TabPanel>
              <p>Response Panel!</p>
            </TabPanel> */}
            {/* Reponse | Comments on Blog */}
          </TabPanels>
        </Tabs>
      </BoxWrapper>
    </>
  );
}
