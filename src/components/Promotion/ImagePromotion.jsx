import React from 'react';
import { CloseButton } from '../CloseButton';

export function ImagePromotion({ handlerClose }) {
  return (
    <div className='bg-modal-mobile md:bg-modal-desktop bg-cover bg-no-repeat w-60 h-big md:w-full md:h-600px relative bg-center-top flex flex-col items-center'>
      <CloseButton handlerClose={handlerClose} />
      <button
        type='button'
        className='hover:bg-secondary hover:text-primary  uppercase bg-primary text-accent text-xl font-bold shadow-stdblack md:px-20 md:py-3 max-w-xs absolute bottom-3 md:bottom-7  z-60 rounded opacity-0 md:opacity-100'>
        Sign up now
      </button>
    </div>
  );
}
