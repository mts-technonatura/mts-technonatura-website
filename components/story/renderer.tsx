import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import Link from 'next/link';
import { useRouter } from 'next/router';

import gfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkFootnotes from 'remark-footnotes';

import rehypeKatex from 'rehype-katex';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import styled from '@emotion/styled';

/* ======================= UI ======================= */
import {
  chakra,
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

interface StoryRendererI {
  value: string;
}

export default function StoryRenderer({ value }: StoryRendererI) {
  return (
    <ReactMarkdown
      linkTarget='_blank'
      disallowedElements={['table']}
      rehypePlugins={[rehypeKatex]}
      remarkPlugins={[gfm, remarkMath, remarkFootnotes]}
      components={{
        a({ node, inline, className, children, ...props }) {
          return (
            <chakra.a
              className='text-blue-500'
              style={{ textDecoration: 'underline' }}
              {...props}
            >
              {children}
            </chakra.a>
          );
        },
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              style={duotoneDark}
              language={match[1]}
              PreTag='div'
              children={String(children).replace(/\n$/, '')}
              {...props}
            />
          ) : (
            <code className={className} {...props} />
          );
        },
        h1: ({ node, children }) => (
          <Text
            className='text-gray-800 dark:text-cool-gray-400'
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
            className='text-gray-800 dark:text-cool-gray-400'
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
            className='text-gray-800 dark:text-cool-gray-400'
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
            className='text-gray-800 dark:text-cool-gray-500'
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
      children={value}
    />
  );
}
