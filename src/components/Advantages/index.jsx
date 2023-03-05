import React from 'react';
import { uniqueId } from 'lodash';
import { Container } from '../Container';
import Card from './Card';
import pumpkin from '../../assets/img/pumpkins.png';
import singleBat from '../../assets/img/bat.png';
import bats from '../../assets/img/double-bats.png';

const advantages = [
  {
    id: uniqueId('adv'),
    title: 'Available in 45+\nworld languages',
    text: 'Be available to local clients and expand\n your business in new markets.',
  },
  {
    id: uniqueId('adv'),
    title: 'Online payments in\n 45+ countries and\n 135+ currencies',
    text: 'The fastest way for direct payments,\n no monthly fees and without going\n to the bank. ',
  },
  {
    id: uniqueId('adv'),
    title: 'Live support',
    text: 'If you need additional assistance,\n check the Help Center, or connect\n with us via Laganoo chat.',
  },
];

export function Advantages() {
  return (
    <section className='py-24'>
      <Container>
        <div className='w-full grid grid-cols-1 gap-16 md:flex md:gap-5 mx-auto max-w-max relative md:flex-wrap justify-center'>
          <img
            className='absolute z-10 -right-5 md:right-2 lg:left-0 -bottom-24'
            src={pumpkin}
            alt=''
          />
          <img className='absolute z-10 -top-20 -left-5 xl:-left-10' src={singleBat} alt='' />
          <img className='absolute z-10 -top-20  -right-5 xl:-right-10 ' src={bats} alt='' />
          {advantages.map((it) => (
            <Card key={it.id} title={it.title} text={it.text} />
          ))}
        </div>
      </Container>
    </section>
  );
}
