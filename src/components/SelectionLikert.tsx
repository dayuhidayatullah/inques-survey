import React, { useEffect, useMemo, useState } from "react";
import { useSurvey } from "../hooks/useSurvey";
import { QuestionProps } from "../types/surveys";
import { useParams } from "react-router-dom";

interface OptionProps {
  bImageOption: number
  decOptionScore: string
  id: number
  shItem: number
  szOptionId: string
  szValueId: string
  szOption: string
}

const SelectionLikert = ({ isRatingLikert, options }: { isRatingLikert: Boolean, options?: OptionProps[]}) => {
  // const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  // const temp = Array.from(alphabet.slice(0, 9).values());
  // console.info(option, '<<<<< option selection likert')
  const [selectQuestion, setSelectQuestion] = useState<Number | null>(
    null
  );
  const surveyStore = useSurvey()
  // console.info(option,'<<< apasihhh pemai')
  // const devideQuestionGrid = () => {
  //   if (temp.length % 2 === 0) return 2;
  //   if (temp.length % 3 === 0) return 3;
  //   else return 2;
  // // };
  // const questionMapper = () => {
  //   return (value: QuestionProps): QuestionProps => QuestionPro[]
  // }
  const getAnswer = localStorage?.answer ? JSON.parse(localStorage?.answer) : ''
  const handleOptionClick = (el: OptionProps, i: number) => {
    console.info(el.id, document.getElementById(`itemLikert${i}`)?.classList, '<<< apa dia')

    // if (step) {
    //   surveyStore.setQuestionList(
    //     surveyStore.questionList.map((value: QuestionProps): QuestionProps => {
    //       if (value.shItem === surveyStore.activeStep) {
    //         if(value.answer === el.id){
    //           return {
    //             ...value,
    //             answer: ''
    //           }
    //         } else {
    //           return {
    //             ...value,
    //             answer: el.id
    //           }
    //         }
            
    //       } 
    //       return value
    //     })
    //   );
    
    // }
    const updatedAnswer = {...getAnswer, [surveyStore?.activeStep]: getAnswer?.[el.id] === el.id ? '' : el.id}
    setSelectQuestion(el.id)
    localStorage.setItem('answer', JSON.stringify(updatedAnswer))
    setTimeout(() => {
      if(getAnswer && getAnswer?.[el.id] !== el.id){
        surveyStore.nextStepSurvey()
      }
      
    }, 500)
    // setTimeout(() => {
    //   if(answer !== el.id){

    //     surveyStore.nextStepSurvey()
    //   }
      
    // }, 400)
  };
  useEffect(() => {
    if(getAnswer?.[surveyStore?.activeStep]){
      setSelectQuestion(getAnswer?.[surveyStore?.activeStep])
    }
  }, [])
  // const questionActive = useMemo(() => {
  //   // surveyStore.questionList.find((el: any) => )
  // }, [surveyStore.questionList])
  // const answer = useMemo(() => {
  //   if(surveyStore.activeStep){
  //     return surveyStore.questionList.find((el: any) => el.shItem === surveyStore.activeStep)?.answer
  //   }
  //   // console.info(surveyStore.activeStep, '<<<< apa dia coba')
  // }, [surveyStore.questionList, surveyStore.activeStep])
  return (
    <div className={`container flex ${isRatingLikert ? "" : "gap-1"}  mt-3`}>
      {options?.map((el: OptionProps, i:number) => {
        return (
          <div
            id={`itemLikert${i}`}
            className={`
            cursor-pointer
            ${selectQuestion === el.id ? 'animate__animated animate__flash animate__faster': ''
            }
            ${
              isRatingLikert
                ? i !== 0 || i === options.length - 1
                  ? "border-r-2 border-y-2 "
                  : "border-y-2 border-r-2 "
                : ""
            }
            ${!isRatingLikert ? "border-2 border-gray rounded-[6px] p-2" : ""}
            p-6 ${selectQuestion === el.id ? "bg-indigo-500 text-white " : ""}
            ${
              isRatingLikert
                ? i === options.length - 1
                  ? "rounded-e-md"
                  : ""
                : ""
            }
            ${
              isRatingLikert ? (i === 0 ? "border-l-2 rounded-s-md" : "") : ""
            }`}
            onClick={() => {
              handleOptionClick(el, i)
              document?.getElementById(`itemLikert${i}`)?.classList.add('animate__animated','animate__flash', 'animate__faster');
            }}
              
          >
            {/* {console.info(selectQuestion,el.id, '<<<< elid')} */}
            {el.szOption}
          </div>
        );
      })}
    </div>
  );
};

export default SelectionLikert;
