import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSurvey } from "../hooks/useSurvey";
import { QuestionProps } from "../types/surveys";
import { debounce } from "lodash";

const Input = ({
  isNumber,
  isPercentage,
}: {
  isNumber: boolean;
  isPercentage: boolean;
}) => {
  const surveyStore = useSurvey()
  const getAnswer = localStorage?.answer ? JSON.parse(localStorage?.answer) : ''
  const [valueInput, setValueInput] = useState<string | number>(getAnswer?.[surveyStore?.activeStep]);
  const [invalidInput, setInvalidInput] = useState(false);
  const [messageInvalid, setMessageInvalid] = useState("");
  // const activeQuestion = 
  //  surveyStore.questionList.find((el: any) => el.shItem === surveyStore.activeStep)

  // useEffect(() => {
  //   // if (invalidInput) {
  //   //   setInvalidInput(true);
  //   // }
  //   // console.info(invalidInput, "<<<< invalid");
  // }, [invalidInput]);
  useEffect(() => {
  if(getAnswer?.[surveyStore?.activeStep]){
    setValueInput(getAnswer?.[surveyStore?.activeStep])
  }
  }, [])
  const [animatedClass, setAnimatedClass] = useState(
    "animate__animated animate__shakeX"
  );
  useEffect(() => {
    if (invalidInput) {
      // console.info();
      setTimeout(() => {
        setInvalidInput(false);
        setAnimatedClass("");
      }, 150);
    }
  }, [invalidInput]);
  const handleChangeInput = (e: any) => {
    const pattern = new RegExp("^[1-9][0-9]{0,9}$");
    // console.info(isNumber, e.target.value, '<<< isNumber')
    if(isNumber){ 
      if (pattern.test(e.target.value)) {
        setValueInput(Number(e.target.value).toString());
        setInvalidInput(false);
        setMessageInvalid("");
        // updateSurveyStore(Number(e.target.value).toString());
      } else {
        if (e.target.value === "") {
          setValueInput("");
          setInvalidInput(false);
          setMessageInvalid("");
        } else {
          setInvalidInput(true);
          setAnimatedClass(
            "animate__animated animate__shakeX animate__infinite	infinite"
          );
          setMessageInvalid("Number Only !");
        }
    }
    } else {
      // if(surveyStore.activeStep){
        // surveyStore.setQuestionList(
          //   surveyStore.questionList.map((value: QuestionProps): QuestionProps => {
            //     console.info(value, surveyStore)
        //     if (value.shItem === surveyStore.activeStep) {
          //       return {
            //         ...value,
            //         answer: valueInput
            //       }
            //     } 
        //     return value
        //   })
        // );
        // }
        setValueInput(e.target.value)
        console.info(valueInput, '<<<')
    //     const tempAnswerList = {...answerList}
    //   tempAnswerList[surveyStore?.activeStep] = valueInput
    // setAnswer(tempAnswerList)
        // updateSurveyStore(e.target.value)
    }
  }
  // const updateSurveyStore = useCallback(
  //   debounce((answer: string | number) => {
  //     surveyStore.setQuestionList(
  //       surveyStore.questionList.map((question: QuestionProps): QuestionProps => {
  //         if (question.shItem === surveyStore.activeStep) {
  //           return { ...question, answer };
  //         }
  //         return question;
  //       })
  //     );
  //   }, 300),
  //   [surveyStore]
  // );
  // useEffect(() => {
  //   console.info(surveyStore?.prevStep, surveyStore?.activeStep, '<<<< prevvvv')
  //   // surveyStore.setQuestionList(
  //   //     surveyStore.questionList.map((value: QuestionProps): QuestionProps => {
  //   //       // console.info(value, surveyStore)
  //   //       if (value.shItem === surveyStore.activeStep) {
  //   //         return {
  //   //           ...value,
  //   //           answer: valueInput
  //   //         }
  //   //       } 
  //   //       return value
  //   //     })
  //   //   );
  //   // console.info(valueInput, '<<<< valueInput')
  // },[surveyStore?.prevStep, surveyStore?.activeStep])
  // useEffect(() => {
  //   // console.info(valueInput, '><<<<< valueinput')
  //   return () => {
  //     const tempAnswerList = {...answer}
  //     tempAnswerList[surveyStore?.activeStep] = valueInput
  //     // console.info(tempAnswerList, valueInput)
  //     // This will run when the component unmounts
  //     // if(activeQuestion?.shItem === surveyStore.activeStep){
  //     //   surveyStore.setQuestionList(
  //     //     surveyStore.questionList.map((question: QuestionProps): QuestionProps => {
  //     //       if (question.shItem === surveyStore.activeStep) {
  //     //         return { ...question, answer: valueInput };
  //     //       }
  //     //       return question;
  //     //     })
  //     //   );
  //     // }
  //   };
  // }, []);
  // useEffect(() => {

  //   setValueInput(answer || '')
  //   return () => {
  //     // console.info('component will mount')
  //   }
  // },[answer])
  // const answer = useMemo(() => {
  //   if(surveyStore.activeStep){
  //     return surveyStore.questionList.find((el: any) => el.shItem === surveyStore.activeStep)?.answer
  //   }
  // }, [surveyStore.questionList, surveyStore.activeStep])
  // useEffect(() => {
  //   if (surveyStore.activeStep) {
  //     const currentAnswer = surveyStore.questionList.find(
  //       (el: QuestionProps) => el.shItem === surveyStore.activeStep
  //     )?.answer;
  //     setValueInput(currentAnswer || '');
  //   }
  // }, [surveyStore.activeStep, surveyStore.questionList]);
  const handleBlur = useCallback(() => {
    const answerLocal = JSON.parse(localStorage?.answer)
    
    const updatedAnswer = { ...answerLocal, [surveyStore?.activeStep]: valueInput };
    localStorage.setItem('answer', JSON.stringify(updatedAnswer))
    // setAnswer((prevAnswer: any) => {
    //   return updatedAnswer;
    // });
  }, [surveyStore?.activeStep, valueInput]);
  // const renderInput = useMemo(() => {
  // }, [messageInvalid, invalidInput, valueInput, animatedClass]);
  return (
    <div>
      <div
        className={`container relative max-w-[850px] ${
          invalidInput ? animatedClass : ""
        }`}
      >
        <input
          id={'inputAll'}
          className="border-b-2 border-b-[rgb(26, 145, 162)] w-full h-[60px] break-words text-wrap border-none outline-none rounded-none"
          placeholder="Type your answer here"
          autoComplete="false"
          // pattern={isNumber ? "^[1-9][0-9]{0,9}$" : ""}
          value={valueInput}
          // onInput={(e) => {
          //   console.info(e, "<<< onInput");
          // }}
          onBlur={handleBlur}
          onChange={(e) => handleChangeInput(e)}
          // onKeyDown={(e) => {
          //   console.info(e.key, "<<<< event key");
          // }}
        ></input>
        {isPercentage && (
          <div className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-2 text-black text-[25px]">
            %
          </div>
        )}
      </div>
      <div className="flex p-2">
        <p className="text-red-400">{messageInvalid}</p>
      </div>
    </div>
  );
  // return renderInput;
};

export default Input;
