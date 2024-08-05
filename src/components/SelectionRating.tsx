import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { HiOutlineStar } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import { useSurvey } from "../hooks/useSurvey";
import { IOptionItems } from "../types/surveys";

const SelectionRating = ({options}: {options?: IOptionItems[]}) => {
  const temp = Array.from(Array(5).keys());
  const surveyStore = useSurvey()
  const getAnswer = localStorage?.answer ? JSON.parse(localStorage?.answer) : ''
  const [selectRating, setSelectRating] = useState<number>(getAnswer?.[surveyStore?.activeStep] || -1);
  const handleClick = (el: any) => {
    setSelectRating(el.id)
    const updatedAnswer = {...getAnswer, [surveyStore?.activeStep]: getAnswer?.[surveyStore?.activeStep] === el.id ? '' : el.id}
    console.info(updatedAnswer, el.id, '<<< updateAnswer')
    localStorage.setItem('answer', JSON.stringify(updatedAnswer))
    setTimeout(() => {
      if(getAnswer && getAnswer?.[el.id] !== el.id){ 
        surveyStore.nextStepSurvey()
      }
    }, 400)
  }
  return (
    <div className="container flex gap-3 cursor-pointer">
      {options?.map((el, i) => {
        return (
          <>
            {el.id <= selectRating ? (
              <div className="flex flex-col items-center">
                <HiStar
                  size={50}
                  onClick={() => handleClick(el)}
                  className={`text-[45px] text-blue-600 ${selectRating === el.id ? 'animate__animated animate__flash animate__faster': ''}`}
                />
                <p className="text-[15px] text-black">{el.decOptionScore}</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <HiOutlineStar
                  className={`text-[45px]`}
                  size={50}
                  onClick={() => handleClick(el)}
                />
                <p className="text-[15px] text-black">{el.decOptionScore}</p>
              </div>
            )}
            {/* <CiStar className={`text-[25px] ${el <= selectRating ? 'text-indigo-500' : ''}`} onClick={() => setSelectRating(el)} /> */}
          </>
        );
      })}
    </div>
  );
};

export default SelectionRating;
