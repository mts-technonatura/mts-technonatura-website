import {
  Button,
  ButtonGroup,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  chakra,
  useColorModeValue,
  Box,
  Stack,
  Select,
  Input,
  InputRightElement,
  Textarea,
  FormHelperText,
  Flex,
  Radio,
  SimpleGrid,
  Heading,
  Text,
  RadioGroup,
  FormControl,
  InputLeftAddon,
  InputGroup,
  Checkbox,
  GridItem,
  VisuallyHidden,
  Icon,
  FormLabel,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function PersonalInformationSettings() {
  return (
    <Box mt={[10, 0]}>
      <SimpleGrid
        display={{ base: 'initial', md: 'grid' }}
        columns={{ md: 3 }}
        spacing={{ md: 6 }}
      >
        <GridItem colSpan={{ md: 1 }}>
          <Box px={[4, 0]}>
            <Heading
              fontSize='lg'
              className=' text-cool-gray-600 dark:text-gray-200'
              fontWeight='medium'
              lineHeight='6'
            >
              Personal Information
            </Heading>
            <Text
              mt={1}
              className='text-cool-gray-600 dark:text-gray-400'
              fontSize='sm'
            >
              Use a permanent address where you can receive mail.
            </Text>
          </Box>
        </GridItem>
        <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
          <chakra.form
            method='POST'
            shadow='base'
            rounded={[null, 'md']}
            overflow={{ sm: 'hidden' }}
          >
            <Stack
              px={4}
              py={5}
              p={[null, 6]}
              className='bg-cool-gray-50 dark:bg-gray-700'
              spacing={6}
            >
              <SimpleGrid columns={6} spacing={6}>
                <FormControl as={GridItem} colSpan={[6, 4]}>
                  <FormLabel
                    fontSize='sm'
                    className='text-cool-gray-700 dark:text-gray-300'
                    fontWeight='md'
                  >
                    Full Name
                  </FormLabel>
                  <Input
                    type='text'
                    name='first_name'
                    id='first_name'
                    autoComplete='given-name'
                    mt={1}
                    focusBorderColor='brand.400'
                    shadow='sm'
                    size='sm'
                    w='full'
                    rounded='md'
                    className='border-cool-gray-300 hover:border-cool-gray-400 focus:border-cool-gray-500 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-gray-300 text-cool-gray-500 dark:text-gray-300'
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 4]}>
                  <FormLabel
                    for='email_address'
                    fontSize='sm'
                    fontWeight='md'
                    className='text-cool-gray-700 dark:text-gray-300'
                  >
                    Email address
                  </FormLabel>
                  <Input
                    type='text'
                    name='email_address'
                    id='email_address'
                    autoComplete='email'
                    mt={1}
                    focusBorderColor='brand.400'
                    shadow='sm'
                    size='sm'
                    w='full'
                    rounded='md'
                    className='border-cool-gray-300 hover:border-cool-gray-400 focus:border-cool-gray-500 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-gray-300 text-cool-gray-700 dark:text-gray-300'
                  />
                </FormControl>
              </SimpleGrid>
            </Stack>
            <Box
              px={{ base: 4, sm: 6 }}
              py={3}
              className='bg-cool-gray-100 dark:bg-gray-800'
              textAlign='right'
            >
              <Button
                type='submit'
                colorScheme='brand'
                _focus={{ shadow: '' }}
                fontWeight='md'
                className='bg-cool-gray-400 dark:bg-gray-600'
              >
                Save
              </Button>
            </Box>
          </chakra.form>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

function PasswordInput() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        readOnly
        className='border-cool-gray-300 hover:border-cool-gray-400 focus:border-cool-gray-500 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-gray-300 text-cool-gray-500 dark:text-gray-300'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
