import React, { useRef, useState, ChangeEvent } from 'react'
import { SlCloudUpload } from "react-icons/sl";
import { useSurvey } from '../hooks/useSurvey';

type Base64File = string
const UploadImage = () => {
  const refInput = useRef(null)
  const [valueImage, setValueImage] = useState<FileList | null>(null)
  const surveyStore = useSurvey()
  const getAnswer = localStorage?.answer ? JSON.parse(localStorage?.answer) : ''
  const [base64Files, setBase64Files] = useState<Base64File[]>(getAnswer?.[surveyStore?.activeStep] || []);

  // Update the event handler to use ChangeEvent and HTMLInputElement
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const base64Promises = Array.from(files).map(file => convertToBase64(file));
      const base64Files = await Promise.all(base64Promises);
      setBase64Files(base64Files);
      const updatedAnswer = {...getAnswer, [surveyStore?.activeStep]: base64Files }
      localStorage.setItem('answer', JSON.stringify(updatedAnswer))
      
    }
  };

  // Update the convertToBase64 function with explicit types
  const convertToBase64 = (file: File): Promise<Base64File> => {
    return new Promise<Base64File>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as Base64File);
      reader.onerror = error => reject(error);
    });
  };
  console.info(base64Files)
  return (
    <div className='container'>
            <div className='border-[2px] border-dashed border-[rgba(255, 255, 255, 0.8)] min-h-[300px] min-w-[720px] bg-gray-100 flex justify-center items-center cursor-pointer' onClick={() => refInput.current.click()}>
                <div className='flex flex-col items-center gap-[10px]'>
                    {/* <div className='w-[200px]'> */}
                    {base64Files.length ? 
                  <>
                    <img src={base64Files[0]} />

                  </>:
                  <>
                    <SlCloudUpload size={60}  />
                    <p>Choose File or drag here</p>
                    <p>Size limit: 10MB</p>
                  </>

                  }
                    {/* </div> */}
                </div>
                <input type="file" accept="images" className='hidden' ref={refInput} onChange={(e) => {
                  handleFileChange(e)
                }}/>
            </div>
    </div>
  )
}

export default UploadImage