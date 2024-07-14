import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { useSurvey } from '../hooks/useSurvey'
import { useNavigate, useParams } from 'react-router-dom'


const SurveyIntro = () => {
    // const appStore = useContext(AppContext)
    const surveyStore = useSurvey()
    let { id } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
       surveyStore?.getDataSurveyConfig(id)
        // fetch('/image')
        // .then(response => response.arrayBuffer())
        // .then(buffer => {
        //   const image = new Blob([buffer], { type: 'image/jpeg' });
        //   const imageUrl = URL.createObjectURL(image);
          
        //   // Set the data URL as the image source
        //   console.info(imageUrl, '<M<<<<< iamge')
        // //   document.getElementById('image').src = imageUrl;
        // })
        // .catch(error => console.error('Error fetching image:', error));
        // const imgBuffer = new Blob(appStore?.surveySelected?.config?.imgIcon)
    }, [])
    useEffect(() => {
        if(surveyStore?.configList?.length) {
            // console.info(
            //     surveyStore.configList.find((el: any) => el?.szQuestionId === id), "<<<< APA INI"
            // )
        }
    }, [surveyStore?.configList])
    // const getSurveyConfig = async () => {
    //     await surveyStore?.getDataSurveyConfig()
    // }
    const handlePressEnter = (e: any) => {
        navigate(`/survey/question/${id}/1`)
    }
  return (
    <form className='container flex flex-col items-center gap-6 mt-10' onSubmit={handlePressEnter} onKeyDown={(e: any) => { console.info(e, '<<<< eksksksk') }}>
        <div className='text-black font-semiBold text-[30px]'>{surveyStore?.configSurveySelected?.szTerritoryId}</div>
        <div className='text-black font-semiBold text-[25px]'>{surveyStore?.configSurveySelected?.szDescQuestion}</div>
        <div className='text-black font-regular text-[20px]' dangerouslySetInnerHTML={{__html: surveyStore?.configSurveySelected?.config.szInstruction}}></div>
        <div className='flex gap-3 items-center'>
            <button autoFocus type='submit' className='bg-blue-500 rounded-[10px] w-full font-semiBold px-4 py-3 min-w-[70px] text-white hover:bg-gray-300 hover:text-black'>Start</button>
            <div className='flex gap-1'>
                <p className='font-extraLight'>
                    press
                </p>
                <p className='font-bold w-24'>
                    Enter ↵
                </p>
            </div>
        </div>
    </form>
  )
}

export default SurveyIntro