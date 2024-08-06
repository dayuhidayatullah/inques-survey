import  { useEffect } from 'react'
import Paging from '../components/Layout/Paging'
import { useSurvey } from '../hooks/useSurvey';
import { useParams } from 'react-router-dom';
// const tempData = [
//     {
//       type: "priority",
//       question: "Apakah Anda Ingin ?",
//     },
//     {
//       type: "date",
//       question: "Apakah Anda Ingin ?",
//       description: "Yang Bener Aja ",
//     },
//     {
//       type: "likert",
//       question: "Apakah Anda Ingin ?",
//       description: "Selection Likert ",
//     },
//     {
//       type: "likertRating",
//       question: "Apakah Anda Ingin ?",
//     },
//     {
//       type: "selectionImage",
//       question: "Apakah Anda Ingin ?",
//     },
//     {
//       type: "selectionImageText",
//       question: "Apakah Anda Ingin ?",
//     },
//     {
//       type: "input",
//       question: "Apakah Anda Ingin ?",
//     },
//     {
//       type: "dropdown",
//       question: "Apakah Anda Ingin ?",
//     },

//     {
//       type: "selectionText",
//       question: "Apakah Anda Ingin ?",
//     },
//     {
//       type: "ratingStar",
//       question: "Selection Likert ?",
//     },
//     {
//       type: "multiple",
//       question: "Apakah Anda Ingin ?",
//     },
//   ];
const HomeClient = () => {
  const surveyStore = useSurvey()
  const { id } = useParams()
  useEffect(() => {
    surveyStore.getDataQuestion(id)
  }, [])
  return (
    <Paging items={surveyStore?.questionList}/>
  )
}

export default HomeClient