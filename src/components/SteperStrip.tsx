import React from 'react'

const SteperStrip = ({activeStep, totalQuestion}: {activeStep: number, totalQuestion: number}) => {
  return (
    <div className='container flex gap-7 mb-6'>
        {[...new Array(totalQuestion)].map(el => {
          return (
            <div className={`w-9 h-2 ${activeStep === el ? 'bg-indigo-500' : 'bg-slate-500 '} rounded-md`}></div>
          )
        })}
        {/* <div className='w-9 h-2 bg-slate-500 rounded-md'></div> */}
        {/* <div className='w-9 h-2 bg-slate-500 rounded-md'></div> */}
        {/* <div className='w-9 h-2 bg-slate-500 rounded-md'></div> */}
    </div>
  )
}

export default SteperStrip