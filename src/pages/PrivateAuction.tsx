import { useEffect, useState } from 'react'
// import axios from '../api/axios'
// import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { useSurvey } from '../hooks/useSurvey'
const PrivateAuction = () => {
    // const appStrore = useContext(AppContext)
    const survetStore = useSurvey()
    const navigate = useNavigate()
    // const [dataAuction, setDataAuction] = useState([])
    useEffect(() => {
      survetStore?.getDataSurveyConfig()
        // axios
        //   .get("/private/auction", {
        //     headers: { Authorization: appStrore?.userToken },
        //   })
        //   .then((data) => {
            
        //     setDataAuction(data.data)
        //     // console.info(data, '<<< data')
        //   }).catch(err => {
        //     // console.info(err)
        //   })
    }, [])
    const onClickAuction = (data: any) => {
      // appStrore?.setSurveySelected(data)
      // console.info(window.location, '<<< location')
      navigate(`${window.location.pathname}/survey/${data.config?.szQuestionId}`)
    }
  return (
    <div className='flex gap-5 mt-10 h-full'>
        {survetStore?.configList?.map((el: {szDescQuestion: string, config: any}) => {
            return (
                <div className='max-w-[350px] flex flex-col min-h-[350px] w-full h-full border-2 rounded-lg '>
                    <div className='bg-green-300 border-b-2 border-b-slate-400 py-4 px-3 text-center'>
                        <p className='font-semiBold text-[18px]'>{el.szDescQuestion}</p>
                    </div>
                    <div className='grow p-5 gap-2 h-full flex flex-col justify-between'>
                      <div className='text-left'>
                          <p className='font-regular text-[15px]'>
                            {el?.config.szIntroduction}
                          </p>
                      </div>
                      <div className='self-end relative bottom-0 gap-6'>
                          <button className='bg-blue-500 rounded-[10px] px-4 py-3 min-w-[100px] text-white hover:bg-gray-300 hover:text-black' onClick={(_)=> onClickAuction(el)}>
                            {el.config.bAllowUpdate === 1 ? "Start" : "Completed"}
                            </button>
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