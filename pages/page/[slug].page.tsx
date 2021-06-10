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
          children={post.content}
        />
      </div>
      <Box
        mt={20}
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}
          >
            <Stack spacing={6}>
              <Flex
                backgroundSize={'cover'}
                backgroundImage={
                  'url(https://mts-technonatura.vercel.app/favicon.ico)'
                }
                height='100%'
                width='100px'
              ></Flex>
              <Text fontSize={'sm'}>
                © 2020 Chakra Templates. All rights reserved
              </Text>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Connections</ListHeader>
              <Link href='/'>Home</Link>
              <Link href='https://mts-technonatura.vercel.app/about'>
                About Us
              </Link>
              <Link href='https://mts-technonatura.vercel.app/contact'>
                Contact us
              </Link>
              <Link href='/app'>Dashboard</Link>
              <Link href='https://mts-technonatura-server.herokuapp.com'>
                API
              </Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Link href='/help'>Help Center</Link>
              <Link href='/page/terms-of-use'>Terms of Service</Link>
              <Link href='/page/legal'>Legal</Link>
              <Link href='/page/privacy-policy'>Privacy Policy</Link>
              <Link href='https://mts-technonatura.instatus.com/'>Satus</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label='Subscribe'
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
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

// const MarkdownImage = ({ alt, src }) => (
//   <Image
//     alt={alt}
//     src={require(`../../content/assets/${src}`)}
//     webpSrc={require(`../../content/assets/${src}?webp`)}
//     previewSrc={require(`../../content/assets/${src}?lqip`)}
//     className='w-full'
//   />
// );
