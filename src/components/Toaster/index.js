import React from 'react';
import { ReactComponent as IconSuccess } from '../../assets/icons/success.svg';

export function Toaster({ message, type, shown }) {
  let toasterProps = {
    icon: '',
    classNames: '',
  };
  switch (type) {
    case 'success': {
      toasterProps.icon = <IconSuccess />;
      toasterProps.classNames = 'bg-success decor-success';
      break;
    }
    default: {
      toasterProps.icon = <IconSuccess />;
      toasterProps.classNames = 'bg-success decor-success';
    }
  }

  if (!shown) {
    return null;
  }

  return (
    <div
      className={`flex justify-between w-[460px] rounded-md shadow py-3  absolute right-16 top-40 ${toasterProps.classNames}`}>
      <span className='absolute -translate-y-1/2 top-1/2 left-4'>{toasterProps.icon}</span>
      <span className='font-semibold px-16 text-right'>{message}</span>
    </div>
  );
}
