import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styled from '@emotion/styled';

import CreatableSelect from 'react-select';

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
import Tags from './tags';

import Box from '@material-ui/core/Box';
import { IoIosTrash } from 'react-icons/io';
import { FaRegEdit } from 'react-icons/fa';
/* ======================= END UI ======================= */

import { FormikErrors } from 'formik';

interface EditStoryI {
  values: {
    title: string;
    content: string;
  };
  errors: FormikErrors<{
    title: string;
    content: string;
  }>;
  handleChange: (e: React.ChangeEvent<any>) => void;
}

export default function EditStory({
  values,
  errors,
  handleChange,
}: EditStoryI) {
  return (
    <>
      <Text
        mt={10}
        mb={3}
        fontSize='13px'
        color={`${errors.title && 'red.400'}`}
      >
        {errors.title}
      </Text>
      <Input
        isInvalid={Boolean(errors.title)}
        errorBorderColor={`${errors.title && 'red.400'}`}
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
        value={values.title}
        onChange={handleChange}
        mb={5}
      />

      <Tags />

      <Text
        mt={10}
        mb={3}
        fontSize='13px'
        color={`${errors.content && 'red.400'}`}
      >
        {errors.content}
      </Text>
      <Textarea
        isInvalid={Boolean(errors.content)}
        errorBorderColor={`${errors.content && 'red.400'}`}
        pt={5}
        pl={5}
        fontSize={20}
        fontWeight={600}
        style={{ border: 'none' }}
        className='dark:bg-gray-800 bg-gray-200 border-cool-gray-300 hover:border-cool-gray-400 focus:border-cool-gray-500 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-gray-300 text-cool-gray-500 dark:text-gray-300'
        placeholder='Here is a sample placeholder'
        resize='vertical'
        id='content'
        name='content'
        value={values.content}
        onChange={handleChange}
        minHeight='500px'
      />
    </>
  );
}
