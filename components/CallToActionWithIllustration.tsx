import { Flex, Stack, Container, Heading, Text } from '@chakra-ui/react';
interface CallToActionWithIllustrationI {
  title: string;
  desc: string;
  Buttons?: JSX.Element | JSX.Element[];
  Icon?: JSX.Element;
}
export default function CallToActionWithIllustration({
  Buttons,
  title,
  desc,
  Icon,
}: CallToActionWithIllustrationI) {
  return (
    <>
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Flex w={'full'} justifyContent='center'>
            {Icon}
          </Flex>
          <Heading
            className='dark:text-cool-gray-300'
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '4xl' }}
          >
            {title}
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            {desc}
          </Text>
          <Stack spacing={6} direction={'row'}>
            {Buttons}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
