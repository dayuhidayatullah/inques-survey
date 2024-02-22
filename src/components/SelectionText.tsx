import React, { useState } from 'react'
import { RiCheckLine } from "react-icons/ri";

const SelectionText = () => {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
    const temp = Array.from(alphabet.slice(0,9).values())
    console.info(temp, '<<< apa dia')
    const [selectQuestion, setSelectQuestion] = useState<string|Number | null>(null)
    const devideQuestionGrid = () => {
        if(temp.length % 2 === 0) return 2
        if(temp.length % 3  === 0) return 3
        else return 2
    }
  return (
    <div className={`container grid grid-rows-${devideQuestionGrid()} grid-flow-col gap-3`}>
        {temp.map(el => {
            return (
              <div key={el} className={`border-[2px] ${selectQuestion === el ?'border-indigo-500': 'border-gray-500'} flex items-center justify-between gap-2 rounded-xl p-2 cursor-pointer `} onClick={() => setSelectQuestion(el)} >
                <div className='flex gap-2 items-center'>
                <p className={`${el === selectQuestion ? 'bg-indigo-500 text-white' : ''} px-2 rounded-md border-[2px] border-gray-500 font-semibold text-[25px]`}>{el}</p>
                <p className='font-normal text-[20px]'>
                  Up to $1,000
                </p>
                    </div>
                {/* <div style={{
                    borderTop: '25px solid transparent',
                    borderRight: '50px solid #555',
                    borderBottom: '25px solid transparent',
                    position: 'relative',
                    // right: 'absolute',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    float: 'right'

                }} >
                    
                </div> */}

                {
                    el === selectQuestion && (
                        
                        <RiCheckLine className='text-indigo-500'/>
                    )
                }
              </div>

            )
        })}
    </div>
  )
}

export default SelectionText