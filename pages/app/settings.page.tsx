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
  useBreakpointValue,
} from '@chakra-ui/react';
import PersonalInformationSettings from 'components/settings/personalInformation';
import ProfileSettings from 'components/settings/profileSettings';
import SensitiveSettings from 'components/settings/dangerSettings';
import React from 'react';

// const SettingsContext = React.createContext('light');

export default function Settings() {
  return (
    <div>
      <Box p={useBreakpointValue({ base: '10px', lg: '20px', xl: '100px' })}>
        <ProfileSettings />
        <Box visibility={{ base: 'hidden', sm: 'visible' }} aria-hidden='true'>
          <Box py={5}>
            <Box
              borderTop='solid 1px'
              className='border-gray-200 dark:border-gray-500'
            ></Box>
          </Box>
        </Box>

        <PersonalInformationSettings />
        <Box visibility={{ base: 'hidden', sm: 'visible' }} aria-hidden='true'>
          <Box py={5}>
            <Box
              borderTop='solid 1px'
              borderTopColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
            ></Box>
          </Box>
        </Box>

        <SensitiveSettings />
      </Box>
    </div>
  );
}
