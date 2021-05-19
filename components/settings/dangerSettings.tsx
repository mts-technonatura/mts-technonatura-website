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
import { IoWarning } from 'react-icons/io5';
import DeleteAccount from './deleteAccount';
import ChangePassword from './changePassword';

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
              className=' text-red-600 dark:text-red-500'
              fontWeight='medium'
              lineHeight='6'
            >
              Danger Zone{' '}
              <IoWarning
                className='text-red-600 dark:text-red-500'
                style={{ display: 'inline-block' }}
              />
            </Heading>
            <Text
              mt={1}
              className=' text-red-500 dark:text-red-400'
              fontSize='sm'
            >
              Danger Zone, this may affect your account
            </Text>
          </Box>
        </GridItem>
        <ChangePassword />
        <GridItem colSpan={{ md: 1 }}>
          <Box px={[4, 0]}>
            <Heading
              fontSize='lg'
              className=' text-red-600 dark:text-red-500'
              fontWeight='medium'
              lineHeight='6'
            >
              DELETE ACCOUNT
              <IoWarning
                className='text-red-600 dark:text-red-500'
                style={{ display: 'inline-block' }}
              />
            </Heading>
            <Text
              mt={1}
              className=' text-red-500 dark:text-red-400'
              fontSize='sm'
            >
              Delete an account can be make big impact on mts-technonatura
              connections
            </Text>
          </Box>
        </GridItem>
        <DeleteAccount />
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
