import React from 'react';
import { Card, CardBody } from '@windmill/react-ui';

function InfoCard({
  title,
  value,
  children: icon,
  type,
}: {
  title: string | JSX.Element;
  value?: number | string;
  children?: JSX.Element | JSX.Element[];
  type?: 0 | 1;
}) {
  return (
    <Card>
      <CardBody className='flex items-center'>
        {icon && icon}
        <div>
          <p
            className={`mb-2 ${
              type == 0
                ? 'text-sm text-gray-600 dark:text-gray-400'
                : 'text-lg text-gray-700 dark:text-gray-200'
            } font-medium text-gray-600 dark:text-gray-400`}
          >
            {title}
          </p>
          <p
            className={`${
              type == 0
                ? 'text-lg text-gray-700 dark:text-gray-200'
                : 'text-sm text-gray-600 dark:text-gray-400'
            } font-semibold `}
          >
            {value}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

export default InfoCard;
