import { uniqueId } from 'lodash';
import React from 'react';

import { PrimaryButton } from '../PrimaryButton';

export function Offer({ offer }) {
  return (
    <article className='shadow-lg py-5 px-7 md:shadow-none w-350px flex flex-col'>
      <h1 className='text-lg md:text-21px font-bold mb-4'>
        <span>{offer.title}</span>
        <span>{offer.bestseller && ' -'}</span>
        <span className='text-accent'>{offer.bestseller && ' Best seller'}</span>
      </h1>
      <div className='font-extrabold text-5xl md:font-bold'>
        <span className='crossed-price mr-4'>{offer.priceStd}</span>
        <span>
          <b className='text-accent'>{offer.priceDiscount}</b>
        </span>
        <div className='md:hidden text-xl'>web design</div>
      </div>
      <div className='mt-3 mb-9 line'>{offer.perMonth}</div>
      <div className='mb-3'>
        <h2 className='mb-5'>{offer.subtitle}</h2>
        <ul className='pl-3'>
          {offer.items.map((it) => (
            <li key={uniqueId()} className='dot-marker'>
              {it}
            </li>
          ))}
        </ul>
      </div>

      <div className='mt-auto pb-6'>
        <PrimaryButton text={offer.buttonText} hasShadow={false} bold={false} />
      </div>
    </article>
  );
}
