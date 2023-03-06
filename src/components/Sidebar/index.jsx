import React from 'react';
import { NavLink } from 'react-router-dom';

export function Sidebar({ items }) {
  return (
    <div>
      <ul>
        {items.map((it) => (
          <NavLink activeClassName={'active'} to={it.href} key={it.id}>
            <div
              // className={`py-5 hover:text-accent ${
              //   it.isActive && 'bg-accent hover:text-white pl-10 -mx-10'
              // }`}>
              className='py-5 hover:text-accent'>
              {it.value}
            </div>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
