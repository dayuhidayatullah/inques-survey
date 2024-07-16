import React, { useRef } from 'react'
import { SlCloudUpload } from "react-icons/sl";

const UploadImage = () => {
  const refInput = useRef(null)
  return (
    <div className='container'>
            <div className='border-[2px] border-dashed border-[rgba(255, 255, 255, 0.8)] min-h-[300px] min-w-[720px] bg-gray-100 flex justify-center items-center cursor-pointer' onClick={() => refInput.current.click()}>
                <div className='flex flex-col items-center gap-[10px]'>
                    {/* <div className='w-[200px]'> */}

                    <SlCloudUpload size={60}  />
                    {/* </div> */}
                    <p>Choose File or drag here</p>
                    <p>Size limit: 10MB</p>
                </div>
                <input type="file" accept="images" className='hidden' ref={refInput}/>
            </div>
    </div>
  )
}

export default UploadImage