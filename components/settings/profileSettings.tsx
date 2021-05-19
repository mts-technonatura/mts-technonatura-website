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
import { FaUser } from 'react-icons/fa';

export default function ProfileSettings() {
  return (
    <Box>
      <SimpleGrid
        display={{ base: 'initial', md: 'grid' }}
        columns={{ md: 3 }}
        spacing={{ md: 6 }}
      >
        <GridItem colSpan={{ md: 1 }}>
          <Box px={[4, 0]}>
            <Heading
              className=' text-cool-gray-600 dark:text-gray-200'
              fontSize='lg'
              fontWeight='md'
              lineHeight='6'
            >
              Profile
            </Heading>
            <Text
              mt={1}
              fontSize='sm'
              className='text-cool-gray-600 dark:text-gray-400'
            >
              This information will be displayed publicly so be careful what you
              share.
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
              className='bg-cool-gray-50 dark:bg-gray-700'
              spacing={6}
              p={{ sm: 6 }}
            >
              <FormControl as={GridItem} colSpan={[6, 4]}>
                <FormLabel
                  fontSize='sm'
                  className='text-cool-gray-700 dark:text-gray-300'
                  fontWeight='md'
                >
                  Username
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
              <div>
                <FormControl id='email' mt={1}>
                  <FormLabel
                    fontSize='sm'
                    fontWeight='md'
                    className='text-cool-gray-700 dark:text-gray-300'
                  >
                    About
                  </FormLabel>
                  <Textarea
                    placeholder="Hey I'm John"
                    mt={1}
                    rows={3}
                    shadow='sm'
                    focusBorderColor='brand.400'
                    fontSize={{ sm: 'sm' }}
                    className='border-cool-gray-300 hover:border-cool-gray-400 focus:border-cool-gray-500 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-gray-300 text-cool-gray-500 dark:text-gray-300'
                  />
                  <FormHelperText>
                    Brief description for your profile. URLs are hyperlinked.
                  </FormHelperText>
                </FormControl>
              </div>

              <FormControl>
                <FormLabel
                  fontSize='sm'
                  fontWeight='md'
                  className='text-cool-gray-700 dark:text-gray-300'
                >
                  Avatar
                </FormLabel>
                <Flex alignItems='center' mt={1}>
                  <Avatar
                    boxSize={12}
                    bg={useColorModeValue('gray.100', 'gray.800')}
                    icon={
                      <Icon
                        as={FaUser}
                        boxSize={9}
                        mt={3}
                        rounded='full'
                        color={useColorModeValue('gray.300', 'gray.700')}
                      />
                    }
                  />
                  <Button
                    type='button'
                    ml={5}
                    variant='outline'
                    size='sm'
                    fontWeight='medium'
                    className='border-cool-gray-300 hover:border-cool-gray-400 focus:border-cool-gray-500 dark:border-gray-500 dark:hover:border-gray-400 dark:hover:bg-gray-600 text-cool-gray-500 dark:text-gray-300'
                    _focus={{ shadow: 'none' }}
                  >
                    Change
                  </Button>
                </Flex>
              </FormControl>

              <FormControl>
                <FormLabel
                  fontSize='sm'
                  fontWeight='md'
                  className='text-cool-gray-700 dark:text-gray-300'
                >
                  Banner Profile
                </FormLabel>
                <Flex
                  mt={1}
                  justify='center'
                  px={6}
                  pt={5}
                  pb={6}
                  borderWidth={2}
                  borderColor={useColorModeValue('gray.300', 'gray.500')}
                  borderStyle='dashed'
                  rounded='md'
                >
                  <Stack spacing={1} textAlign='center'>
                    <Icon
                      mx='auto'
                      boxSize={12}
                      color={useColorModeValue('gray.400', 'gray.500')}
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 48 48'
                      aria-hidden='true'
                    >
                      <path
                        d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </Icon>
                    <Flex
                      fontSize='sm'
                      color={useColorModeValue('gray.600', 'gray.400')}
                      alignItems='baseline'
                    >
                      <chakra.label
                        for='file-upload'
                        cursor='pointer'
                        rounded='md'
                        fontSize='md'
                        color={useColorModeValue('brand.600', 'brand.200')}
                        pos='relative'
                        _hover={{
                          color: useColorModeValue('brand.400', 'brand.300'),
                        }}
                      >
                        <span className='text-cool-gray-700 dark:text-gray-300'>
                          Upload a file
                        </span>
                        <VisuallyHidden>
                          <input
                            id='file-upload'
                            name='file-upload'
                            type='file'
                          />
                        </VisuallyHidden>
                      </chakra.label>
                      <Text
                        pl={1}
                        className='text-cool-gray-700 dark:text-gray-300'
                      >
                        or drag and drop
                      </Text>
                    </Flex>
                    <Text
                      fontSize='xs'
                      color={useColorModeValue('gray.500', 'gray.50')}
                    >
                      PNG, JPG, GIF up to 10MB
                    </Text>
                  </Stack>
                </Flex>
              </FormControl>
            </Stack>
            <Box
              className='bg-cool-gray-100 dark:bg-gray-800'
              px={{ base: 4, sm: 6 }}
              py={3}
              bg={useColorModeValue('gray.50', 'gray.900')}
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
