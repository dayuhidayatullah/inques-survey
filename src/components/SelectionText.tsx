import React, { useEffect, useMemo, useState } from "react";
import { RiCheckLine } from "react-icons/ri";
import { useSurvey } from "../hooks/useSurvey";
import { QuestionProps } from "../types/surveys";

interface OptionProps {
  bImageOption: number
  decOptionScore: string
  id: number
  shItem: number
  szOptionId: string
  szValueId: string
  szOption: string
}
const SelectionText = ({options}: {options?: OptionProps[]
}) => {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  // const temp = Array.from(alphabet.slice(0, 9).values());

  // console.info(temp, "<<< apa dia");
  const [selectQuestion, setSelectQuestion] = useState<string | Number | null>(
    null
  );

  const surveyStore = useSurvey()

  const getAnswer = useMemo(() => {
    return localStorage?.answer ? JSON.parse(localStorage?.answer) : ''
    
  },[localStorage.getItem('answer')]) 

  // console.info(options, '<<<< options')
  // const answer = useMemo(() => {
  //   if(surveyStore.activeStep){
  //     return surveyStore.questionList.find((el: any) => el.shItem === surveyStore.activeStep)?.answer
  //   }
  //   // console.info(surveyStore.activeStep, '<<<< apa dia coba')
  // }, [surveyStore.questionList, surveyStore.activeStep])
  const handleOptionClick = (el: OptionProps, i: number) => {
    // console.info(el.id, document.getElementById(`itemLikert${i}`)?.classList, '<<< apa dia')
    // const tempAnswerList = {...answerList}
    // if(tempAnswerList[surveyStore?.activeStep]){
      // tempAnswerList[surveyStore?.activeStep] = el.id
    // } else {
      
    // }
    // setAnswer(tempAnswerList)
    // if (surveyStore?.activeStep) {
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
    setSelectQuestion(el.id)
    const updatedAnswer = {...getAnswer, [surveyStore?.activeStep]: getAnswer?.[el.id] === el.id ? '' : el.id}
    localStorage.setItem('answer', JSON.stringify(updatedAnswer))
    setTimeout(() => {
      if(getAnswer && getAnswer?.[el.id] !== el.id){

        // surveyStore.nextStepSurvey()
      }
      
    }, 400)
  };
  useEffect(() => {
    if(getAnswer?.[surveyStore?.activeStep]){
      setSelectQuestion(getAnswer?.[surveyStore?.activeStep])
    }
  })
  // console.info(getAnswer, '<<< answer')
  return (
    <div
      className={`container flex flex-col   list-none  gap-3`}
    >
      {options?.map((el, i) => {
        return (
          <div
            key={i}
            className={`border-[2px] min-[785px]:w-[calc(33.3333% - 5.33333px)] ${
              selectQuestion === el.id ? "border-indigo-500" : "border-gray-500"
            } flex items-center justify-between gap-2 rounded-xl p-2 cursor-pointer `}
            onClick={() => handleOptionClick(el, i)}
          >
            <div className="flex gap-2 items-center">
              <p
                className={`${
                  el.id === selectQuestion ? "bg-indigo-500 text-white" : ""
                } px-2 rounded-md border-[2px] border-gray-500 font-semibold min-w-[40px] text-center uppercase text-[25px]`}
              >
                {alphabet[i]}
              </p>
              <p className="font-normal text-[20px]">{el.szOption}</p>
            </div>
            {/* <div style={{
                    borderTop: '25px solid transparent',
                    borderRight: '50px solid #555',
                    borderBottom: '25px solid transparent',
                    position: 'relative',
                    // right: 'absolute',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    float: 'right'

                }} >
                    
                </div> */}

            {el.id === getAnswer?.[el.id] && (
              <RiCheckLine className="text-indigo-500" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SelectionText;
