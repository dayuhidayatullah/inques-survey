import React, { useState } from 'react'

const SelectionLikert = () => {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
    const temp = Array.from(alphabet.slice(0,9).values())
    const [selectQuestion, setSelectQuestion] = useState<Number | string | null>(null)
    const devideQuestionGrid = () => {
        if(temp.length % 2 === 0) return 2
        if(temp.length % 3  === 0) return 3
        else return 2
    }
  return (
    <div className='container flex gap-2 mt-3'>
        {temp.map(el => {
            return (
                <div className={`border-[2px] p-6 ${selectQuestion === el ? 'bg-indigo-500 text-white ': 'border-gray-500'}`} onClick={() => setSelectQuestion(el)}>
                    {el}
                </div>
            )
        })}
    </div>
  )
}

export default SelectionLikert