import { uniqueId } from 'lodash';
import React from 'react';
import { Sidebar } from '../components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/img/logo.svg';

const navigations = [
  {
    id: uniqueId('nav'),
    value: 'Community',
    href: '/community',
  },
  {
    id: uniqueId('nav'),
    value: 'User information',
    href: '/user',
  },
  {
    id: uniqueId('nav'),
    value: 'Account Settings',
    href: '/acount',
  },
  {
    id: uniqueId('nav'),
    value: 'Billing',
    href: '/billing',
  },
  {
    id: uniqueId('nav'),
    value: 'Invoices',
    href: '/invoices',
  },
  {
    id: uniqueId('nav'),
    value: 'Payment Processing',
    href: '/payment',
  },
  {
    id: uniqueId('nav'),
    value: 'CRM',
    href: '/crm',
  },
  {
    id: uniqueId('nav'),
    value: 'Team',
    href: '/team',
  },
  {
    id: uniqueId('nav'),
    value: 'Add ON',
    href: '/on',
  },
  {
    id: uniqueId('nav'),
    value: 'App Market',
    href: '/appmarket',
  },
  {
    id: uniqueId('nav'),
    value: 'Help',
    href: '/help',
  },
];

function Navigation() {
  return (
    <nav className='flex flex-col justify-between h-full  min-h-screen bg-nav pt-16 pb-5 px-10 font-semibold text-21px'>
      <div>
        <Link to='/' className='w-full'>
          <Logo className='object-contain mb-24' />
        </Link>
        <Sidebar items={navigations} />
      </div>
      <button type='button' className='text-danger mr-auto'>
        Sign Out
      </button>
    </nav>
  );
}

export default Navigation;
