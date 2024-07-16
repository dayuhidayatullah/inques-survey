import React from 'react'

const Instruction = ({instruction}: {instruction: string}) => {
  return (
    <div>
        <p className='font-semiBold text-[20px]'>{instruction}</p>
    </div>
  )
}

export default Instruction