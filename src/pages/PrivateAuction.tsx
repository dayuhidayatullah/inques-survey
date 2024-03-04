import React from 'react'

const PrivateAuction = () => {
  return (
    <div className='flex'>
        <div className='max-w-[350px] border-2 rounded-lg ml-40'>
            <div className='bg-green-300 border-b-2 border-b-slate-400 py-4 px-3'>
                <p>Cultural Profile</p>
            </div>
            <div className='p-3 text-center'>
                <p className='font-medium'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
        </div>
        <div className='max-w-[350px] border-2 rounded-lg ml-40'>
            <div className='bg-green-300 border-b-2 border-b-slate-400 py-4 px-3'>
                <p>Impulsivitas</p>
            </div>
            <div className='p-3 text-center'>
                <p className='font-medium'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                </p>
            </div>
            <div className='flex justify-end items-end relative bottom-0'>
                <button className='bg-blue-500 rounded-md px-4 py-3 '>Complete</button>
            </div>
        </div>
    </div>
  )
}

export default PrivateAuction