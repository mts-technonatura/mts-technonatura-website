import { Spinner } from '@chakra-ui/react';
interface loadingPageI {
  text?: string;
}
export default function loadingPage({ text }: loadingPageI) {
  return (
    <div className='dark:text-cool-gray-400 h-screen flex flex-row justify-center items-center'>
      <Spinner></Spinner>
      <h2 className='ml-5'>{text ? text : 'Logging In'}</h2>
    </div>
  );
}
