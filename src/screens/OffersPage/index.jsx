import React from 'react';
import { ReactComponent as Decoration } from '../../assets/img/trick-or-treat-light.svg';
import { Container, Offer } from '../../components';
import bat from '../../assets/img/double-bats.png';

const offers = [
  {
    id: 1,
    title: 'Basic',
    bestseller: false,
    priceStd: '$299',
    priceDiscount: '149.5',
    perMonth: '$29 per month',
    subtitle: 'Start your Online Business',
    items: [
      'Up to 3 pages',
      'Up to 250 products',
      'Choose from 3 templates',
      '3 licensed photos included',
      'Inventory tracking',
      'Low stock notification',
      'Sell on Facebook, Instagram and TikTok',
      'Multiple App Integration',
      'Limited support',
    ],
    buttonText: 'Apply now',
  },
  {
    id: 2,
    title: 'Advanced',
    bestseller: false,
    priceStd: '$499',
    priceDiscount: '249.5',
    perMonth: '$69 per month',
    subtitle: 'Everything in Basic, plus:',

    items: [
      'Up to 5 pages',
      'Up to 1500 products',
      'Choose from 5 templates',
      '5 licensed photos included',
      'Sell on Amazon & other market places',
      'Product Management Filters',
      'Automatic abandoned cart recovery',
      'Mobile store management app',
      'Live chat support',
    ],
    buttonText: 'Apply now',
  },
  {
    id: 3,
    title: 'Unlimited',
    bestseller: true,
    priceStd: '$999',
    priceDiscount: '499.5',
    perMonth: '$149 per month',
    subtitle: 'Everything in Advanced, plus:',

    items: [
      'Up to 10 pages',
      'Unlimited Products',
      'Choose from 10 templates',
      '10 licensed photos included',
      'Custom Branded Mobile App\nfor store (annual payment)',
      'Priority Support',
    ],
    buttonText: 'Apply now',
  },
];

function OffersPage() {
  return (
    <Container>
      <div className='pt-32 md:pt-60  pb-80 md:pb-432px relative'>
        <img src={bat} className='hidden md:block absolute top-10 left-10' alt='' />
        <img src={bat} className='absolute top-0 right-0 md:top-10 md:right-24' alt='' />
        <img
          src={bat}
          className='absolute scale-75 -left-10 bottom-48 md:scale-1 md:bottom-64 md:left-32'
          alt=''
        />
        <img src={bat} className='hidden md:block absolute bottom-72 right-10' alt='' />
        <Decoration className='absolute bottom-0 -left-4 md:bottom-14 md:-left-4 w-52 h-56' />
        <h1 className='text-center text-21px font-bold mb-14 md:mb-16'>
          50% discount on website creation
        </h1>
        <div className='grid grid-cols-1  gap-16 justify-items-center md:flex md:justify-around md:gap-0 md:flex-wrap xl:justify-between'>
          {offers.map((it) => (
            <Offer key={it.id} offer={it} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default OffersPage;
