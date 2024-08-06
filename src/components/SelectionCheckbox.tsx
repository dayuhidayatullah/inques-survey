import  { useState } from "react";
import { IOptionItems } from "../types/surveys";
import { useSurvey } from "../hooks/useSurvey";

const SelectionCheckbox = ({options}: {options?: IOptionItems[]}) => {
  // const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  // const temp = Array.from(alphabet.slice(0, 9).values());
  const surveyStore = useSurvey()
  const getAnswer = localStorage?.answer ? JSON.parse(localStorage?.answer) : ''
  const [selectQuestion, setSelectQuestion] = useState<string[]>(getAnswer?.[surveyStore?.activeStep] || []);
  const handleCheckboxChange = (id: string) => {
    setSelectQuestion((prevSelected) => {
      if (prevSelected.includes(id)) {
        // Remove the value if it's already selected
        const updatedAnswer = {...getAnswer, [surveyStore?.activeStep]: prevSelected.filter((value) => value !== id)}
        localStorage.setItem('answer', JSON.stringify(updatedAnswer))
        
        return prevSelected.filter((value) => value !== id);
      } else {
        // Add the value if it's not selected
        const updatedAnswer = {...getAnswer, [surveyStore?.activeStep]: [...prevSelected, id]}
        localStorage.setItem('answer', JSON.stringify(updatedAnswer))
        return [...prevSelected, id];
      }
    });
  };
  // const devideQuestionGrid = () => {
  //   if (temp.length % 2 === 0) return 2;
  //   if (temp.length % 3 === 0) return 3;
  //   else return 2;
  // };
  console.info(options, selectQuestion, '<<<< options')
  return (
    <div className="container grid grid-cols-3 max-[900px]:grid-cols-2 max-[650px]:grid-cols-1 gap-3" >
      {options?.map((el) => {
        return (
          <div
            className="border-2 border-gray-500 rounded-md p-4 flex items-center "
            key={el.id}
            onClick={() => handleCheckboxChange(el.id?.toString())}
          >
            <input
              id={`inputCheckbox-${el.id}`}
              type="checkbox"
              className="border-blue-400 border-2 w-[20px] h-[20px]"
              checked={ Array.isArray(selectQuestion) ? selectQuestion?.includes(el?.id?.toString()) : false}
              // onChange={() => handleCheckboxChange(el?.id?.toString())}
              onClick={() => handleCheckboxChange(el?.id?.toString())}
            />
            <label htmlFor={`inputCheckbox-${el.id}`} className="text-center ml-2">
              {el.szOption}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default SelectionCheckbox;
