import React from 'react';
import Navigation from './Navigation';

function Layout({ children }) {
  return (
    <div className='w-full grid grid-cols-[300px,1fr]'>
      <Navigation />
      <main className=''>{children}</main>
    </div>
  );
}

export default Layout;
