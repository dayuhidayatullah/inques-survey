import React, { useState } from 'react'

const SelectionCheckbox = () => {
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  const temp = Array.from(alphabet.slice(0, 9).values());
  const [selectQuestion, setSelectQuestion] = useState<Number | string | null>(
    null
  );
  const devideQuestionGrid = () => {
    if (temp.length % 2 === 0) return 2;
    if (temp.length % 3 === 0) return 3;
    else return 2;
  };
  return (
    <div className='container grid grid-flow-col grid-rows-4 gap-3'>
        {temp.map(el => {
        return (
        <div className='border-2 border-gray-500 rounded-md p-4 flex items-center ' key={el}>
            <input id={`inputCheckbox-${el}`} type="checkbox" className='border-blue-400 border-2 w-[20px] h-[20px]'/>
            <label htmlFor={`inputCheckbox-${el}`} className='text-center ml-2'>Tau Dah</label>
        </div>

        )
        })}
    </div>
  )
}

export default SelectionCheckbox