import React, { useState } from 'react'
import { CiStar } from "react-icons/ci";

const SelectionRating = () => {
    const temp = Array.from(Array(5).keys())
    const [selectRating, setSelectRating ] = useState<number>(0)
  return (
    <div className='container flex gap-2 cursor-pointer'>
        {temp.map(el => {
            return (
                <CiStar className={`text-[25px] ${el <= selectRating ? 'text-indigo-500' : ''}`} onClick={() => setSelectRating(el)} />
            )
        })}
    </div>
  )
}

export default SelectionRating