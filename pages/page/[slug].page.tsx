import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import {
  Box,
  chakra,
  Container,
  Flex,
  Button,
  VStack,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';

import { getPostBySlug, getPostsSlugs } from '@utils/static_page';

import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

import MarkdownRenderer from '@/components/story/renderer';
const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Post({
  post,
  frontmatter,
}: {
  post: {
    content: string;
    excerpt: string | undefined;
  };
  frontmatter: {
    title: string;
    description: string;
  };
}) {
  return (
    <>
      {/* // <div>
    //   <article>
    //     <header className='mb-8'>
    //       <h1 className='mb-2 text-6xl font-black leading-none font-display'>
    //         {frontmatter.title}
    //       </h1>
    //       <p className='text-sm'>{frontmatter.description}</p>
    //     </header> */}
      <Flex
        w={'full'}
        h={'80vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
            >
              {frontmatter.title}
            </Text>
            <Text
              color='gray.300'
              fontWeight={400}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}
            >
              {frontmatter.description}
            </Text>
          </Stack>
        </VStack>
      </Flex>

      {/* <Container pt={10}> */}

      {/* </Container> */}
      <div className='px-16'>
        <MarkdownRenderer value={post.content} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getPostsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const postData = getPostBySlug(slug);

  return { props: postData };
}
