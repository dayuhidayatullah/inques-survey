import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
const PrivateAuction = () => {
    const [dataAuction, setDataAuction] = useState([])
    useEffect(() => {
        axios
          .get("/auction/private", {
            headers: { access_token: localStorage.access_token },
          })
          .then((data) => {
            setDataAuction(data.data)
            // console.info(data, '<<< data')
          }).catch(err => {
            // console.info(err)
          })
    }, [])
    const onClickAuction = () => {
      // console.info()
    }
  return (
    <div className='flex p-10 my-auto'>
        {dataAuction.map((el: {szDescQuestion: string, szIntroduction: string}) => {
            return (
                <div className='max-w-[350px] border-2 rounded-lg '>
                    <div className='bg-green-300 border-b-2 border-b-slate-400 py-4 px-3 text-center'>
                        <p>{el.szDescQuestion}</p>
                    </div>
                    <div className='flex flex-col p-5 gap-6'>
                      <div className='text-left'>
                          <p className='font-medium'>
                          {el.szIntroduction}
                          </p>
                      </div>
                      <div className='flex justify-end items-end relative bottom-0'>
                          <button className='bg-blue-500 rounded-[10px] px-4 py-3 min-w-[100px] text-white hover:bg-gray-300 hover:text-black' onClick={(_)=> onClickAuction()}>Start</button>
                      </div>
                    </div>
                </div>
                
            )
        })}
        {/* <div className='max-w-[350px] border-2 rounded-lg ml-40'>
            <div className='bg-green-300 border-b-2 border-b-slate-400 py-4 px-3'>
            <p>Cultural Profile</p>
            </div>
            <div className='p-3 text-center'>
                <p className='font-medium'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
        </div> */}
    </div>
  )
}

export default PrivateAuction