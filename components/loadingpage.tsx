import { Spinner } from '@chakra-ui/react';
export default function loadingPage() {
  return (
    <div className='h-screen flex flex-row justify-center items-center'>
      <Spinner></Spinner>
      <h2 className='ml-5'>Logging In</h2>
    </div>
  );
}
