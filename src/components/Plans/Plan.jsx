import { uniqueId } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../PrimaryButton';

function Plan({ title, description = [], buttonText, href }) {
  return (
    <div className='bg-white w-350px h-350px text-center shadow-card flex flex-col justify-self-center'>
      <h1 className='flex items-center justify-center pt-3 pb-2 mb-12 h-16 text-21px leading-5 text-center bg-accent font-bold'>
        <span className='inline-block'>{title}</span>
      </h1>
      {description.map((it) => (
        <dd key={uniqueId()} className='leading-4 text-sm mb-4 px-4'>
          {it}
        </dd>
      ))}

      <Link to={href} className='mt-auto pb-6'>
        <PrimaryButton text={buttonText} hasShadow={false} borderRadius='sm' />
      </Link>
    </div>
  );
}

export default Plan;
