import React, { useCallback, useContext, useEffect, useState } from 'react'
import ModalFilter from '../components/ModalFilter'
import { useOutletContext } from 'react-router-dom'
import axios from '../api/axios'

const HomeAdmin = () => {

    const {isOpenModalFilter, setIsOpenModalFilter} = useOutletContext<{isOpenModalFilter: boolean; setIsOpenModalFilter: React.Dispatch<React.SetStateAction<boolean>>}>()
    const [questionTypeValue, setQuestionTypeValue] = useState<string>('')
    const [questionTypeIdValue, setQuestionTypeIdValue] = useState<string>('')
    const [questionTypeIdList, setQuestionTypeIdList] = useState([])
    const getListQuestionType = useCallback(async () => {
      try {
        const result = await axios.get(`/admin/question/listQuestionByType/${questionTypeValue}`);
        if(result.status === 200){
          console.info(result.data, '<<<< result')
          setQuestionTypeIdList(result.data.questions)
        }
      } catch (error) {
        
      }
      ``
    }, [questionTypeValue])
    useEffect(() => {
      getListQuestionType()
    }, [getListQuestionType])
      return (
    <div>
        <div>
          <div className='container-'></div>
        </div>

        <ModalFilter questionTypeIdList={questionTypeIdList} isOpen={isOpenModalFilter} setIsOpen={setIsOpenModalFilter} filterBySurvey={true} valueFilter={{
          questionTypeValue,
          setQuestionTypeIdValue,
          setQuestionTypeValue,
          questionTypeIdValue,
        }}/> 
    </div>
  )
}

export default HomeAdmin