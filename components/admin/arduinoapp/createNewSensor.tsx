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

interface CreateNewArduinoAppDrawerI {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  token?: string;
  arduinoAppId: string;
  asPath: string;
}

const validationSchema = yup.object({
  sensorName: yup
    .string()
    .trim()
    .min(4, 'Minimum name length is 4 characters')
    .matches(
      RegExp(/^[A-Za-z0-9_-]*$/),
      'Only letters, numbers, underscores, and dashes are allowed',
    )
    .required('Name field is required'),
});

interface createSensorResponseI extends APIResponse {
  errors?: Object;
  sensorId?: string;
}

export default function CreateNewArduinoAppDrawer({
  isOpen,
  onClose,
  token,
  asPath,
  arduinoAppId,
}: CreateNewArduinoAppDrawerI) {
  const toast = useToast();
  const [isCreating, setCreating] = useState<boolean>();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      sensorName: '',
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
    const createNewSensor = await axios.post<createSensorResponseI>(
      process.env.NEXT_PUBLIC_CREATE_SENSOR ||
        'http://localhost:3030/arduino/add/sensor',
      { authToken: token, ...values, arduinoAppId: arduinoAppId },
    );

    if (createNewSensor.data.status == 'success') {
      audio = new Audio(
        'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962730/sounds/01%20Hero%20Sounds/hero_simple-celebration-03_ai1ky3.wav',
      );
      router.push(`${asPath}/${createNewSensor.data.sensorId}`);
    } else {
      audio = new Audio(
        'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962764/sounds/04%20Secondary%20System%20Sounds/alert_error-02_h1zyjn.wav',
      );
      audio.volume = 2;
    }

    if (createNewSensor.data.errors) {
      formik.setErrors(createNewSensor.data.errors);
    }

    if (audio) {
      audio.play();
    }

    toast({
      title: createNewSensor.data.message,
      status: createNewSensor.data.status,
      duration: 3000,
      isClosable: true,
    });
    setCreating(false);
  }

  return (
    <Drawer
      isOpen={isOpen}
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
          <DrawerHeader borderBottomWidth='1px'>Create new Sensor</DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <Text
                  htmlFor='username'
                  mb={2}
                  color={`${formik.errors.sensorName && 'red.400'}`}
                >
                  Sensor Name
                </Text>
                <Input
                  isInvalid={Boolean(formik.errors.sensorName)}
                  type='text'
                  id='sensorName'
                  name='sensorName'
                  errorBorderColor={`${formik.errors.sensorName && 'red.400'}`}
                  value={formik.values.sensorName}
                  onChange={formik.handleChange}
                  placeholder='Sensor Name'
                  className=' dark:text-gray-800'
                />
                <Text
                  mt='8px'
                  fontSize='13px'
                  color={`${formik.errors.sensorName && 'red.400'}`}
                >
                  {formik.errors.sensorName}
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
