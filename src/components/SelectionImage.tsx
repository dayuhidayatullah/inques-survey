import  { useEffect, useState } from "react";
import { useSurvey } from "../hooks/useSurvey";
// import { QuestionProps } from "../types/surveys";
import { FaCheck } from "react-icons/fa6";


interface OptionProps {
  bImageOption: number
  decOptionScore: string
  id: number
  shItem: number
  szOptionId: string
  szValueId: string
  szOption: string
}
interface OptionItemImages {
  id: number
  imgOption: string
  imgPath: string
  shItem: string
  szOptionId: string
}
const SelectionImage = ({ text, options, optionItemImages }: { text: Boolean, options?: OptionProps[], optionItemImages: OptionItemImages[] }) => {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  // const temp = Array.from(alphabet.slice(0, 9).values());
  const [selectQuestion, setSelectQuestion] = useState<Number | string | null>(
    null
  );
  const surveyStore = useSurvey()
  const getAnswer = localStorage?.answer ? JSON.parse(localStorage?.answer) : ''
  const handleOptionClick = (el: OptionProps) => {
    // console.info(el.id, document.getElementById(`itemLikert${i}`)?.classList, '<<< apa dia')
    // if (surveyStore.activeStep) {
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

        surveyStore.nextStepSurvey()
      }
      
    }, 400)
    // setTimeout(() => {
    //   if(answer !== el.id){

    //     surveyStore.nextStepSurvey()
    //   }
      
    // }, 500)
  };
  // const answer = useMemo(() => {
  //   if(surveyStore.activeStep){
  //     return surveyStore.questionList.find((el: any) => el.shItem === surveyStore.activeStep)?.answer
  //   }
  //   // console.info(surveyStore.activeStep, '<<<< apa dia coba')
  // }, [surveyStore.questionList, surveyStore.activeStep])
  // console.info(optionItemImages, '<<<< optionItemImage')
  useEffect(() => {
    if(getAnswer?.[surveyStore?.activeStep]){
      setSelectQuestion(getAnswer?.[surveyStore?.activeStep])
    }
  }, [])
  return (
    <div
    className="container grid grid-cols-2 max-[900px]:grid-cols-2 max-[650px]:grid-cols-1 gap-3"
  >
    {options?.map((el, i) => (
      <div
        key={i}
        className={`relative border-[2px] ${selectQuestion === el.id ? 'container-selection-image' : ''} ${
          selectQuestion === el.id ? "border-indigo-500" : "border-gray-500"
        } w-full min-h-[300px] h-[300px] p-2 cursor-pointer ${
          el.id === selectQuestion ? "bg-gray-300" : ""
        } rounded-lg hover:bg-gray-300 flex flex-col`}
        onClick={() => handleOptionClick(el)}
      >
        <img
          className="rounded-lg bg-contain bg-no-repeat object-contain w-full flex-grow max-h-[280px]"
          src={
            optionItemImages?.find(
              (image) => image.shItem === el.shItem?.toString()
            )?.imgOption
          }
        />
        {text && (
          <div className="flex justify-start items-center mt-2 gap-2">
            <div
              className={`flex items-center justify-center ${
                el.id === selectQuestion ? "bg-indigo-500 text-white" : ""
              } rounded-md border-[1.5px] border-gray-500 font-semibold text-[14px] h-[22px] w-[22px]`}
            >
              <p className="font-semibold text-[14px]">
                {alphabet[i].toUpperCase()}
              </p>
            </div>
            <p
              className={`font-normal text-[20px] ${
                el.id === selectQuestion ? "text-white" : ""
              }`}
            >
              {el.szOption}
            </p>
          </div>
        )}
        {selectQuestion === el.id  && (
          <div className="absolute w-[48px] h-[48px] rounded-se-[4px] overflow-hidden flex container-checklist-image" style={{insetInlineEnd: '0px', insetBlockStart: '0px', zIndex: '1px'}}>
            <div className="absolute" style={{insetInlineEnd: '6px', insetBlockStart: '7px'}}>
              <FaCheck className="text-white font-semiBold" />
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
  );
};

export default SelectionImage;
