import {
  Button,
  Stack,
  Text,
  Textarea,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Box,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useFormik } from 'formik';
import { APIResponse } from 'ts';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as yup from 'yup';

const validationSchema = yup.object({
  arduinoAppName: yup
    .string()
    .trim()
    .min(4, 'Minimum name length is 4 characters')
    .matches(
      RegExp(/^[A-Za-z0-9_-]*$/),
      'Only letters, numbers, underscores, and dashes are allowed',
    )
    .required('Name field is required'),
  desc: yup
    .string()
    .trim()
    .min(4, 'Minimum desc length is 4 characters')
    .max(20, 'Too long')
    .required('desc field is required'),
});

interface createArduinoAppResponseI extends APIResponse {
  errors?: Object;
  arduinoAppID?: string;
}

interface CreateNewArduinoAppDrawerI {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  token?: string;
}

export default function CreateNewArduinoAppDrawer({
  isOpen,
  onClose,
  token,
}: CreateNewArduinoAppDrawerI) {
  const toast = useToast();
  const [isCreating, setCreating] = useState<boolean>();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      arduinoAppName: '',
      desc: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      onSubmit(values);
    },
  });

  // function ketika tombol create ditekan
  async function onSubmit(values: Object) {
    let audio;

    setCreating(true);
    const createArduinoApp = await axios.post<createArduinoAppResponseI>(
      process.env.NEXT_PUBLIC_CREATE_ARDUINO_APP ||
        'http://localhost:3030/arduino/add',
      { authToken: token, ...values },
    );

    if (createArduinoApp.data.status == 'success') {
      router.push(
        `/dashboard/arduinoapps/${createArduinoApp.data.arduinoAppID}`,
      );
      audio = new Audio(
        'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962729/sounds/01%20Hero%20Sounds/hero_simple-celebration-01_vxw7af.wav',
      );
    } else if (createArduinoApp.data.status == 'error') {
      audio = new Audio(
        'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962762/sounds/04%20Secondary%20System%20Sounds/alert_error-03_qmoczq.wav',
      );
    } else {
      audio = new Audio(
        'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962755/sounds/03%20Primary%20System%20Sounds/navigation_forward-selection_emqw4n.wav',
      );
    }
    if (createArduinoApp.data.errors) {
      formik.setErrors(createArduinoApp.data.errors);
    }
    if (audio) {
      audio.play();
    }
    toast({
      title: createArduinoApp.data.message,
      status: createArduinoApp.data.status,
      duration: 3000,
      isClosable: true,
    });
    setCreating(false);
  }

  return (
    <Drawer
      isOpen={true}
      placement='right'
      onClose={() => {
        if (!isCreating) {
          onClose();
        }
      }}
    >
      <DrawerOverlay />
      <form noValidate onSubmit={formik.handleSubmit}>
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
            Create new Arduino App
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <Text
                  htmlFor='username'
                  mb={2}
                  color={`${formik.errors.arduinoAppName && 'red.400'}`}
                >
                  Name
                </Text>
                <Input
                  isInvalid={Boolean(formik.errors.arduinoAppName)}
                  type='text'
                  id='arduinoAppName'
                  name='arduinoAppName'
                  errorBorderColor={`${
                    formik.errors.arduinoAppName && 'red.400'
                  }`}
                  value={formik.values.arduinoAppName}
                  onChange={formik.handleChange}
                  placeholder='Arduino App Name'
                  className=' dark:text-gray-800'
                />
                <Text
                  mt='8px'
                  fontSize='13px'
                  color={`${formik.errors.arduinoAppName && 'red.400'}`}
                >
                  {formik.errors.arduinoAppName}
                </Text>
              </Box>
              <Box>
                <Text
                  htmlFor='username'
                  mb={2}
                  color={`${formik.errors.desc && 'red.400'}`}
                >
                  Description
                </Text>
                <Textarea
                  isInvalid={Boolean(formik.errors.desc)}
                  type='text'
                  id='desc'
                  name='desc'
                  errorBorderColor={`${formik.errors.desc && 'red.400'}`}
                  value={formik.values.desc}
                  onChange={formik.handleChange}
                  placeholder='Arduino App Description'
                  className=' dark:text-gray-800'
                />
                <Text
                  mt='8px'
                  fontSize='13px'
                  color={`${formik.errors.desc && 'red.400'}`}
                >
                  {formik.errors.desc}
                </Text>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button
              variant='outline'
              mr={3}
              onClick={() => {
                if (!isCreating) {
                  onClose();
                }
              }}
            >
              Cancel
            </Button>
            <Button isLoading={isCreating} type='submit' colorScheme='blue'>
              Create
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </form>
    </Drawer>
  );
}
