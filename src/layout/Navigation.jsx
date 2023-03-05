import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/img/logo.svg';
import { ReactComponent as ArrowDown } from '../assets/icons/arrow-down.svg';
import { SecondaryButton } from '../components';

const navItems = [
  { id: 1, value: 'Sell', hasMenu: true, isButton: false },
  { id: 2, value: 'Price', hasMenu: true, isButton: false },
  { id: 3, value: 'Manage', hasMenu: true, isButton: false },
  { id: 4, value: 'Learn', hasMenu: true, isButton: false },
  { id: 5, value: 'We Build for You', hasMenu: true, isButton: false },
  { id: 6, value: 'Other Services', hasMenu: true, isButton: false },
  { id: 7, value: 'Login', hasMenu: false, isButton: true },
];

function renderNavigationItems(version = 'desktop') {
  return navItems.map((it, index) => (
    <li key={it.id}>
      {it.isButton && version === 'desktop' ? (
        <SecondaryButton text={it.value} />
      ) : (
        <button
          type='button'
          className={`hover:text-yellow-400 lg:text-sm xl:text-base rounded-md py-2 px-3 flex gap-6px items-center ${
            version === 'mobile' &&
            `w-full justify-between ${
              index !== navItems.length - 1 && 'border-b border-primary rounded-none'
            }`
          }`}>
          <span>{it.value}</span>
          {it.hasMenu && <ArrowDown />}
        </button>
      )}
    </li>
  ));
}

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-white  mx-auto'>
      <div className='bg-white w-full  shadow-stdblack h-16 flex items-center justify-between lg:h-20 fixed z-30 px-5 lg:px-7 2xl:px-14'>
        <Link to='/'>
          <Logo className='h-8 lg:h-10 object-contain' />
        </Link>
        <div className='flex items-baseline gap-5'>
          <ul className='hidden lg:flex md:space-x-4 items-baseline'>{renderNavigationItems()}</ul>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={toggleMenu}
            className='p-2 rounded-md hover:bg-accent focus:outline-none'>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile version */}
      {isMenuOpen && (
        <div className='lg:hidden fixed z-20 bg-white w-full shadow'>
          <ul className='pt-16 px-3 py-3 space-y-1 sm:px-3'>{renderNavigationItems('mobile')}</ul>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
