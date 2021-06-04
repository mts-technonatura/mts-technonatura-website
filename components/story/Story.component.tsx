import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';

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
  Textarea,
  useBreakpointValue,
} from '@chakra-ui/react';
import CreateNewSensorDrawer from '@/components/admin/arduinoapp/createNewSensor';
import CallToActionWithIllustration from '@/components/CallToActionWithIllustration';

import InfoCard from 'components/Cards/InfoCard';
import LoadingPage from 'components/loadingpage';

import Box from '@material-ui/core/Box';
import { IoIosTrash } from 'react-icons/io';
import { FaRegEdit } from 'react-icons/fa';
/* ======================= END UI ======================= */
import { RootStore } from '@/redux/index';
import { NoItemIcon, UnhappyGhost } from 'icons';

import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  title: yup
    .string()
    .trim()
    .matches(RegExp(/^[a-zA-Z0-9]+$/), 'Only Letters and Numbers are allowed')
    .min(4, 'Minimum title length is 4 characters')
    .required('username is required'),

  content: yup
    .string()
    .trim()
    .min(30, 'Story content should be of minimum 30 letter length')
    .max(5000, 'Story content should be of maxinum 5000 letter length')
    .required('Story content is required'),
});

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
  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {},
  });

  const router = useRouter();

  return (
    <BoxWrapper>
      <Flex flexWrap='wrap' justifyContent='space-between'>
        <Box p='2' className=' '>
          <Heading size='lg' className='dark:text-cool-gray-200 mb-3'>
            Creating Story
          </Heading>
          <Text className='dark:text-cool-gray-400 mb-4' fontSize='md'>
            We are using Markdown Syntax on the story content
          </Text>
        </Box>
        <Box p='2' className=' '>
          <Button mr={2}>Save Draft</Button>

          <Button colorScheme='twitter'>Publish</Button>
        </Box>
      </Flex>
      <Tabs mt={5}>
        <TabList
          className='dark:bg-gray-800 bg-gray-200 border-cool-gray-300'
          style={{ position: 'sticky', top: '80px', zIndex: 999 }}
        >
          <Tab className='text-cool-gray-400 '>Edit</Tab>
          <Tab className='text-cool-gray-400 '>Preview</Tab>
        </TabList>

        <TabPanels className='dark:text-cool-gray-400'>
          <TabPanel>
            <Box mt={5} p='2' className=' '>
              <Heading size='md' className='dark:text-cool-gray-200 mb-3'>
                Story Title
              </Heading>

              <Input
                py={10}
                pl={5}
                fontSize={30}
                fontWeight={900}
                style={{ border: 'none' }}
                size='md'
                className='dark:bg-gray-800 bg-gray-200 border-cool-gray-300 hover:border-cool-gray-400 focus:border-cool-gray-500 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-gray-300 text-cool-gray-500 dark:text-gray-300'
                placeholder='Story Title Here...'
                id='title'
                name='title'
                value={formik.values.title}
                onChange={formik.handleChange}
              />
            </Box>
            <Box mt={5} p='2' className=' '>
              <Heading size='md' className='dark:text-cool-gray-200 mb-3'>
                Story Content
              </Heading>
              <Text className='dark:text-cool-gray-400 mb-4' fontSize='sm'>
                Content for your story.
              </Text>
              <Textarea
                pt={5}
                pl={5}
                fontSize={20}
                fontWeight={600}
                style={{ border: 'none' }}
                className='dark:bg-gray-800 bg-gray-200'
                placeholder='Here is a sample placeholder'
                resize='vertical'
                id='content'
                name='content'
                value={formik.values.content}
                onChange={formik.handleChange}
              />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box mt={5} p={2}>
              <Heading>{formik.values.title}</Heading>
              <ReactMarkdown
                components={{
                  h1: ({ node, children }) => (
                    <Text
                      color='black'
                      fontWeight={700}
                      lineHeight={1.2}
                      mb={5}
                      mt={5}
                      fontSize={useBreakpointValue({ base: '1xl', md: '4xl' })}
                    >
                      {children}
                    </Text>
                  ),
                  h2: ({ node, children }) => (
                    <Text
                      color='black'
                      fontWeight={700}
                      lineHeight={1.2}
                      mt={5}
                      mb={5}
                      fontSize={useBreakpointValue({ base: '1xl', md: '3xl' })}
                    >
                      {children}
                    </Text>
                  ),
                  h3: ({ node, children }) => (
                    <Text
                      color='black'
                      fontWeight={700}
                      lineHeight={1.2}
                      mt={4}
                      mb={4}
                      fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}
                    >
                      {children}
                    </Text>
                  ),
                  p: ({ node, children }) => (
                    <Text
                      color='blackAlpha.700'
                      fontWeight={400}
                      lineHeight={1.2}
                      mt={2}
                      mb={2}
                      fontSize={useBreakpointValue({ base: '1xl', md: '1xl' })}
                    >
                      {children}
                    </Text>
                  ),
                }}
                className='mb-4 prose lg:prose-lg dark:prose-dark'
                skipHtml={false}
                children={formik.values.content}
              />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </BoxWrapper>
  );
}
