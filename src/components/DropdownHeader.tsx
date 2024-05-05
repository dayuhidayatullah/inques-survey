import React, { Dispatch, LegacyRef, MutableRefObject, Ref, RefObject, SetStateAction, useRef } from 'react'
import { TbLogout } from 'react-icons/tb'
import { useClickAway } from "@uidotdev/usehooks";
import { useNavigate } from 'react-router-dom'

const DropdownHeader = ({ isOpen, username, imageSrc, setIsOpen}:{isOpen: boolean, username: string, imageSrc: string, setIsOpen: Dispatch<SetStateAction<boolean>>}) => {
  const refDropdown = useClickAway<HTMLDivElement>(() => {
    console.info(refDropdown, '<<<< dropdown')
    setIsOpen(false);
  });
  const navigate = useNavigate()
  return isOpen && (
    <div className='absolute bg-white top-[80px] right-[80px] min-w-[300px] shadow-sm shadow-gray-400 pt-3 pl-4 pb-3 pr-4 rounded-md flex flex-col gap-3' ref={refDropdown}>
        <div className='flex gap-3 items-center'>
          <img className='w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500' src={imageSrc} />
          <p>{username}</p>
        </div>
        <hr className='border-1 height-[3px] w-full border-gray-300 '></hr>
        <div className='flex gap-2 items center'>
          <div className='bg-gray-400 rounded-[50%] p-1 text-center flex items-center justify-center cursor-pointer' onClick={() => {localStorage.removeItem('access_token')
          navigate('login')
        }}>
            <TbLogout className='text-[20px] text-black ' />
          </div>
          <p>Logout</p>
        </div>

    </div>
  )
}

export default DropdownHeader