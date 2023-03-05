import React from 'react';
import { uniqueId } from 'lodash';
import { Container } from '../Container';
import Plan from './Plan';

const plans = [
  {
    id: uniqueId('plan'),
    title: 'Free upgrade\nto upper plan',
    description: [
      'Website builder',
      'Use Advanced for the price of Basic plan',
      'Use Unlimited for the price of Advanced plan',
      '*For the period of 90 days',
    ],
    buttonText: 'See the offer',
    href: '/offers',
  },
  {
    id: uniqueId('plan'),
    title: '50% discount on\nwebsite creation',
    description: [
      'We create an ecommerce website for you',
      'Design that fits your brand',
      'Choose a package according to the\n needs of your business,',
    ],
    buttonText: 'See the offer',
    href: '/offers',
  },
  {
    id: uniqueId('plan'),
    title: 'Online payment without processing fees',
    description: [
      'Only  0.30c per transaction',
      'Implementation in just 1 day',
      'Without going to the bank',
      'Available in 45+ countries and 135+ currencies',
    ],
    buttonText: 'Learn more',
    href: '/offers',
  },
];

export function Plans() {
  return (
    <section>
      <Container>
        <div className='md:bg-plan grid grid-cols-1 gap-16 pt-16 pb-36 md:flex md:gap-5 justify-center md:py-28 relative sm:-mx-4 lg:-mx-6 md:flex-wrap'>
          {plans.map((it) => (
            <Plan
              key={it.id}
              title={it.title}
              description={it.description}
              buttonText={it.buttonText}
              href={it.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
