import React from 'react';
import Link from 'next/link';
import { FiLogIn } from 'react-icons/fi';

function CTA() {
  return (
    <Link href='/login'>
      <a className='flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple'>
        <div className='flex items-center'>
          <FiLogIn className='font-bold	mr-3' />
          <span>Login or Signup to discover mts-technonatura social</span>
        </div>
        <span>
          Login{' '}
          <span dangerouslySetInnerHTML={{ __html: '&RightArrow;' }}></span>
        </span>
      </a>
    </Link>
  );
}

export default CTA;
