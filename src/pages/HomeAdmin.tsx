import React, { useCallback, useEffect, useState } from 'react'
import ModalFilter from '../components/ModalFilter'
import { useOutletContext } from 'react-router-dom'
import axios from '../api/axios'


interface QuestionListProps {
  bActive: string;
  bDuration: string;
  created_at: string;
  decDuration: string;
  decTargetVotes: string;
  dtmEnd: string
  dtmStart: string
  id: string
  szAuthor: string;
  szDescQuestion: string; 
  szNetworkId: string;
  szQuestionId: string;
  szTerritoryId: string;
  szTrnId: string;
  updated_at: string;
}
const HomeAdmin = () => {

    const {isOpenModalFilter, setIsOpenModalFilter} = useOutletContext<{isOpenModalFilter: boolean; setIsOpenModalFilter: React.Dispatch<React.SetStateAction<boolean>>}>()
    const [questionTypeValue, setQuestionTypeValue] = useState<string>('SURVEY')
    const [questionTypeIdValue, setQuestionTypeIdValue] = useState<string>('')
    const [questionTypeIdList, setQuestionTypeIdList] = useState([])
    const [selectedQuestion, setSelectedQuestion] = useState<QuestionListProps | null>(null)
    const [sumScore, setSumScore] = useState([])
    const [scoreTotal, setScoreTotal] = useState(0)
    const [, setSumScoreByDate] = useState([])
    const [, setTotalVotes] = useState([])
    const getListQuestionType = useCallback(async () => {
      try {
        const result = await axios.get(`/admin/question/listQuestionByType/${questionTypeValue}`);
        if(result.status === 200){
          console.info(result.data, '<<<< result')
          setQuestionTypeIdList(result.data.questions)
        }
      } catch (error) {

      }
    }, [questionTypeValue])
    useEffect(() => {
      getListQuestionType()
    }, [getListQuestionType])
    // const getAllDataDashboard = () => {
    //   Promise.all([getScoreSumDashboard(), getTotalVotes(), getScoreSumByDate()]).then((data) =>{
    //     console.info(data, '<<< data')
    //   })
    // }
    const getScoreSumDashboard = async () => {
      try {
        const result = await axios.get(`/admin/question/scoreSum/${questionTypeIdValue}`);
        if(result.status === 200){
          console.info(result.data, '<<<< result')
          const sumAllScore = result.data.scores.reduce((acc: number, curr: {sumScore: string, szValueId: string}) => {
            return acc + +curr.sumScore
          }, 0)
          // console.info(sumAllScore, '<<< berapa dia')
          setScoreTotal(sumAllScore)
          setSumScore(result.data.scores)
          // setQuestionTypeIdList(result.data.questions)
        }
      } catch (error) {

      }
    }
    const getTotalVotes = async () => {
      try {
        const result = await axios.get(`/admin/question/totalVotes/${questionTypeIdValue}`);
        if(result.status === 200){
          console.info(result.data, '<<<< result')
          setTotalVotes(result.data.totalVotes)
          // setQuestionTypeIdList(result.data.questions)
        }
      } catch (error) {

      }
    }
    const getScoreSumByDate = async () => {
      try {
        const result = await axios.get(`/admin/question/scoreSumByDate/${questionTypeIdValue}`);
        if(result.status === 200){
          console.info(result.data, '<<<< result')
          setSumScoreByDate(result.data.scores)
          // setQuestionTypeIdList(result.data.questions)
        }
      } catch (error) {

      }
    }
    useEffect(() => {
      if(questionTypeIdValue && questionTypeValue){
        console.info('masuk', selectedQuestion)
        getScoreSumDashboard()
        getScoreSumByDate()
        getTotalVotes()
      }
    }, [questionTypeIdValue, questionTypeValue])
    useEffect(() => {
      
    }, [  ])
      return (
      <div className='w-full'>
        <div className='flex flex-wrap w-full'>
          <div className='flex-[0_0_30%] p-7 border-[1px] border-gray-400 bg-white rounded-md'>
              <div className='w-full mb-1'>
                <p>{selectedQuestion?.szQuestionId}</p>
              </div>
              <div className='w-full mb-4'>
                <p>{selectedQuestion?.szDescQuestion}</p>
              </div>
              <div className='flex-col flex gap-5'>
              {sumScore?.map((el: {szValueId: string, sumScore: string}) => {
                return (
                  <div className='flex flex-col'>
                    <div>
                      <p>{el?.szValueId}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <div className='flex justify-between'>
                        <p>
                          {Math.round(Math.round(Number(el.sumScore)*1000/scoreTotal)/10)}%
                        </p>
                        <p>
                          {+el.sumScore}/{scoreTotal}
                        </p>
                      </div>
                      <div className={`w-[${Math.round(Math.round(Number(el.sumScore)*1000/scoreTotal)/10)}] bg-gray-950 h-3 rounded-md`}></div>

                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='flex-[0_0_30%] p-7 border-[1px] border-gray-400 bg-white rounded-md'>
              <div className='w-full mb-4 text-center'>
                <p>{selectedQuestion?.szDescQuestion}</p>
              </div>
              <div>
                
              </div>
          </div>
          <div className=''></div>
        </div>

        <ModalFilter questionTypeIdList={questionTypeIdList} isOpen={isOpenModalFilter} setIsOpen={setIsOpenModalFilter} filterBySurvey={true} 
          valueFilter={{
          questionTypeValue,
          setQuestionTypeIdValue,
          setQuestionTypeValue,
          setSelectedQuestion,
          questionTypeIdValue,
        }}/> 
    </div>
  )
}

export default HomeAdmin