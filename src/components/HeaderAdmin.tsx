// import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { LiaFilterSolid } from 'react-icons/lia';
// import { Tabs } from './Tabs';
export default function HeaderAdmin({onClickFilter}: {onClickFilter: Function}) {
  return (
    <div className='w-full'>
      <div className='w-full flex justify-between px-5 h-16 items-center mt-1'>
        <p className='text-xl font-semibold'></p>
        <div className='flex gap-4'>
          <label className='relative text-gray-400 focus-within:text-gray-600 block '>
            <CiSearch
              xmlns='http://www.w3.org/2000/svg'
              className='pointer-events-none w-7 h-7 absolute top-1/2 transform -translate-y-1/2 left-3'
              viewBox='0 0 20 20'
              fill='currentColor'
            />
            {/* <svg
            xmlns='http://www.w3.org/2000/svg'
            className='pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
            <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
          </svg> */}

            <input
              type='email'
              name='email'
              id='email'
              placeholder='email@kemuscorp.com'
              className='rounded-lg form-input border border-gray-900 py-3 px-4 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none'
            />
          </label>

          <button className='flex gap-2 items-center border-gray-200 border-[2px] rounded-lg px-3' onClick={() => onClickFilter()}>
            <LiaFilterSolid className='w-6 h-6' />
            <p>Filters</p>
          </button>
        </div>
      </div>
      {/* <Tabs></Tabs> */}
    </div>
  );
}