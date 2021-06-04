import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import dynamic from 'next/dynamic';
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

const StoryRenderer = dynamic(() => import('@/components/story/renderer'), {
  loading: () => <p>Loading Markdown Renderer</p>,
});
const EditStroyRenderer = dynamic(
  () => import('@/components/story/editStory'),
  {
    loading: () => <p>Loading Story Editor</p>,
  },
);
const validationSchema = yup.object({
  title: yup
    .string()
    .trim()
    .matches(RegExp(/^[a-zA-Z0-9]+$/), 'Only Letters and Numbers are allowed')
    .min(10, 'Minimum title should be 10 letters long')
    .max(40, 'Story title should be of maxinum 40 letters length')
    .required('Story title is required'),

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
  const [preview, setPreview] = useState<boolean>();
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
    <form noValidate onSubmit={formik.handleSubmit}>
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
            <Button mr={2}>Save To Draft</Button>

            <Button colorScheme='twitter' type='submit'>
              Publish
            </Button>
          </Box>
        </Flex>
        <Tabs mt={5}>
          <TabList
            className='dark:bg-gray-800 bg-gray-200 border-cool-gray-300'
            style={{ position: 'sticky', top: '80px', zIndex: 999 }}
          >
            <Tab
              className='text-cool-gray-400 '
              onClick={() => {
                if (preview) {
                  setPreview(false);
                }
              }}
            >
              Edit
            </Tab>
            <Tab
              className='text-cool-gray-400 '
              onClick={() => {
                if (!preview) {
                  setPreview(true);
                }
              }}
            >
              Preview
            </Tab>
          </TabList>

          <TabPanels className='dark:text-cool-gray-400'>
            <TabPanel>
              <EditStroyRenderer
                errors={formik.errors}
                values={formik.values}
                handleChange={formik.handleChange}
              />
            </TabPanel>
            <TabPanel>
              <Box mt={5} p={2}>
                {formik.values.title ? (
                  <Heading fontSize='5xl' mb={5}>
                    {formik.values.title}
                  </Heading>
                ) : (
                  <div>Title is empty</div>
                )}
                <hr />
                {formik.values.content ? (
                  <StoryRenderer value={formik.values.content} />
                ) : (
                  <div>Content is empty</div>
                )}
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </BoxWrapper>
    </form>
  );
}
