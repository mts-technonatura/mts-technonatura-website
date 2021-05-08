import {
  Button,
  Flex,
  Stack,
  SimpleGrid,
  useToast,
  Divider,
} from '@chakra-ui/react';
import { Card, CardBody } from '@windmill/react-ui';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import useSWR from 'swr';
import axios from 'axios';
import {
  UserInterface,
  DeletedUserResponseType,
  statusMessage,
} from 'ts/index';
import { useState, useEffect } from 'react';

const fetcher = (url: string) =>
  axios
    .get(url, {
      withCredentials: true,
    })
    .then((res) => res.data);

interface unverifiedUserI {
  message: string;
  status: statusMessage;
  unverified_users?: UserInterface[];
}

export default function DataTable({
  authToken,
  fetchAllData,
}: {
  authToken?: string;
  fetchAllData: () => Promise<void>;
}) {
  const [bdOpen, setBdOpen] = useState<boolean>(false);

  const UnverifiedUsersFetchAPIURL =
    process.env.NEXT_PUBLIC_UNVERIFIED_USERS ||
    'http://localhost:3030/auth/unverifiedusers';
  const toast = useToast();
  const [unverifiedUsers, setUnverifiedUserI] = useState<unverifiedUserI>();
  const { data: unverifiedUsersSWR } = useSWR(UnverifiedUsersFetchAPIURL);

  useEffect(() => {
    setUnverifiedUserI(unverifiedUsersSWR);
  }, [unverifiedUsersSWR]);

  const deleteUser = async (userID: string) => {
    setBdOpen(true);
    const deletedUser = (await axios.post)<DeletedUserResponseType>(
      process.env.NEXT_PUBLIC_DELETE_USER ||
        'http://localhost:3030/auth/deleteuser',
      { userID: userID, authToken },
    );
    toast({
      title: (await deletedUser).data.message,
      status: (await deletedUser).data.status,
      duration: 3000,
      isClosable: true,
    });
    setBdOpen(false);
    const unverifiedUsers = await fetcher(UnverifiedUsersFetchAPIURL);
    await fetchAllData();
    setUnverifiedUserI(unverifiedUsers);
  };

  const accUser = async (userID: string) => {
    setBdOpen(true);
    const deletedUser = (await axios.post)<DeletedUserResponseType>(
      process.env.NEXT_PUBLIC_DELETE_USER ||
        'http://localhost:3030/auth/acceptuserz',
      { userID: userID, authToken },
    );
    toast({
      title: (await deletedUser).data.message,
      status: (await deletedUser).data.status,
      duration: 3000,
      isClosable: true,
    });
    setBdOpen(false);
    const unverifiedUsers = await fetcher(UnverifiedUsersFetchAPIURL);
    await fetchAllData();
    setUnverifiedUserI(unverifiedUsers);
  };

  return (
    <>
      <Backdrop className='text-cool-gray-200' open={bdOpen}>
        <CircularProgress color='inherit' />
      </Backdrop>
      <Flex mt={3} w='full' alignItems='center' justifyContent='center'>
        <Stack direction={{ base: 'column' }} w='full' shadow='lg'>
          {Array.isArray(unverifiedUsers?.unverified_users) &&
            unverifiedUsers?.unverified_users.map((person, pid) => {
              return (
                <>
                  <Card>
                    <CardBody>
                      <p className='mb-1 font-semibold text-gray-600 dark:text-gray-300'>
                        {person.name}
                      </p>
                      <p className='text-gray-600 dark:text-gray-400 mb-4'>
                        {person.email}
                      </p>
                      <Button
                        variant='solid'
                        onClick={() => {
                          deleteUser(person._id);
                        }}
                        colorScheme='red'
                        size='sm'
                      >
                        Delete
                      </Button>
                      <Button
                        ml={2}
                        variant='solid'
                        colorScheme='green'
                        size='sm'
                        onClick={() => {
                          accUser(person._id);
                        }}
                      >
                        Accept
                      </Button>
                    </CardBody>
                  </Card>
                </>
              );
            })}
        </Stack>
      </Flex>
      {unverifiedUsers &&
        Array.isArray(unverifiedUsers?.unverified_users) &&
        unverifiedUsers.unverified_users.length > 0 && (
          <>
            <Divider mt={3} /> <div className='mt-10'></div>
          </>
        )}
    </>
  );
}
