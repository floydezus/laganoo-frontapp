import { uniqueId } from 'lodash';
import React from 'react';
import { SecondaryButton, Select, Toaster } from '../components';

const teamMembers = [
  {
    id: uniqueId('team-member'),
    name: 'Full name',
    email: 'Email',
  },
  {
    id: uniqueId('team-member'),
    name: 'Full name',
    email: 'Email',
  },
  {
    id: uniqueId('team-member'),
    name: 'Full name',
    email: 'Email',
  },
];

const permissions = [
  'User information',
  'Account Settings',
  'Billing',
  'Invoices',
  'Payment processing',
  'Store management',
  'CRM',
  'Support',
  'Team',
  'Other services',
];

function TeamPage() {
  return (
    <div className='py-16 px-16 relative'>
      <Toaster message={'New team member successfully added'} type={'success'} shown={true} />
      <header className='flex justify-between items-baseline'>
        <h1 className='font-bold text-3xl'>
          <div>Hello</div>
          <div>Jovana Milovic!</div>
        </h1>
        <SecondaryButton text={'manage store'} />
      </header>
      <main className='mt-40 w-[776px]'>
        <section>
          <h2 className='text-21px font-semibold mb-9'>Current team members</h2>
          <ul>
            {teamMembers.map((it) => (
              <div key={it.id}>
                <label className='mb-2 text-[15px]'>Team member</label>
                <div className='rounded border border-solid border-border flex justify-between font-semibold text-[17px] py-3 px-5'>
                  <span>{it.name}</span>
                  <span>{it.email}</span>
                </div>
                <div className='mt-2 flex justify-end gap-6 font-semibold pr-5'>
                  <button className='text-danger' type='button'>
                    Suspend
                  </button>
                  <button className='text-info' type='button'>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </section>
        <section className='mt-[100px]'>
          <h2 className='text-21px font-semibold mb-9'>Add new team member</h2>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='fullname'>Team member full name</label>
              <input
                id={'fullname'}
                defaultValue={'Jovana Milovic'}
                placeholder={'Type your full name'}
                className='rounded border border-solid border-border py-3 px-5 w-350px font-semibold text-21px'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='fullname'>Team member email</label>
              <input
                id={'email'}
                defaultValue={'@example.com'}
                placeholder={'Type your e-mail'}
                className='rounded border border-solid border-border py-3 px-5 w-350px font-semibold text-21px'
              />
            </div>
          </div>
          <div className='mt-16 w-350px flex flex-col gap-2'>
            <label>Permissions</label>
            <Select options={permissions} placeholder={'Select permissions'} />
          </div>
          <div className='mt-[500px] flex flex-col items-end'>
            <div className='flex gap-5'>
              <SecondaryButton customStyles={'normal-case'} text={'Save changes'} />
              <SecondaryButton
                customStyles={'bg-white normal-case hover:bg-accent shadow'}
                text={'Cancel'}
              />
            </div>
            <small className='text-right max-w-[400px] mt-[18px] text-[13px] leading-4'>
              +By adding this team member, you consent to Laganoo’s terms and conditions. Added team
              member will receive an email invitation shortly.
            </small>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TeamPage;
