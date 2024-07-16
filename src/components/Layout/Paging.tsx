import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useSurvey } from "../../hooks/useSurvey";
import StepWizard from "react-step-wizard";
import { FaArrowRight } from "react-icons/fa6";
import SelectionText from "../SelectionText";
import SelectionImage from "../SelectionImage";
import SelectionLikert from "../SelectionLikert";
import SelectionDropdown from "../SelectionDropdown";
import SelectionRating from "../SelectionRating";
import Input from "../Input";
import SelectionCheckbox from "../SelectionCheckbox";
import SelectionPriority from "../SelectionPriority";
import UploadImage from "../UploadImage";
import SelectionDate from "../SelectionDate";
import SelectionSpeedo from "../SelectionSpeedo";
import Instruction from "../Instruction";

const Paging = ({ items }: any) => {
  const surveyStore = useSurvey();
  const { step } = useParams();
  const wizardRef = useRef(null);
  const [showListDropdown, setShowListDropdown] = useState(false);
  const [inputDropdown, setInputDropdown] = useState('');
  const [scrollBottomCount, setScrollBottomCount] = useState(0);

  const getHeight = useMemo(() => `${window.innerHeight - 151}px`, []);

  useEffect(() => {
    const getContainerStepWizard = document.getElementsByClassName("rsw_2Y");
    if (getContainerStepWizard[0] && !getContainerStepWizard[0].className.includes("container")) {
      getContainerStepWizard[0].classList.add("pe-[80px]", "ps-[80px]", "h-full", "max-w-[1000px]");
    }
  }, []);

  useEffect(() => {
    const questionActived = surveyStore?.questionList?.find(el => el?.shItem === surveyStore.activeStep);
    if (questionActived?.Option.szAnswerStyleTypeId === 'Selection Image' || questionActived?.Option.szAnswerStyleTypeId === 'Selection ImageText') {
      surveyStore.getSurveyOptionItemImages(questionActived?.szOptionId);
    }
  }, [surveyStore.activeStep]);

  const handleScroll = (event: any) => {
    const { deltaY } = event;
    const scrollTop = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const offset = 1;

    if (scrollTop + windowHeight >= documentHeight - offset) {
      setScrollBottomCount(prevCount => prevCount + 1);
    }
  };

  const handleKeyPress = (event: any) => {
    if (!wizardRef.current) return;
    if (event.key === 'Enter') {
      wizardRef.current.nextStep();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const RenderForm = (props: any) => {
    console.info(props, '<<<< props')
    if (props.index === 0) {
      surveyStore.setNextStepSurvey(() => props.nextStep);
      surveyStore.setBackStepSurvey(() => props.previousStep);
    }

    const mappingQuestion = () => {
      switch (props.szAnswerStyleId) {
        case "Sel-Selection":
          switch (props.Option?.szAnswerStyleTypeId) {
            case "Selection Text":
              return <SelectionText options={surveyStore?.questionList?.find(el => el?.shItem === surveyStore.activeStep)?.Option.OptionItems} />;
            case "Selection Likert":
              return <SelectionLikert isRatingLikert={false} options={surveyStore?.questionList?.find(el => el?.shItem === surveyStore.activeStep)?.Option.OptionItems} />;
            case "Selection Image":
              return <SelectionImage text={false} options={surveyStore?.questionList?.find(el => el?.shItem === surveyStore.activeStep)?.Option.OptionItems} optionItemImages={surveyStore.optionItemImages} />;
            case "Selection ImageText":
              return <SelectionImage text={true} options={surveyStore?.questionList?.find(el => el?.shItem === surveyStore.activeStep)?.Option.OptionItems} optionItemImages={surveyStore.optionItemImages} />;
            case "Selection Dropdown":
              return <SelectionDropdown inputDropdownValue={inputDropdown} setInputDropdownValue={setInputDropdown} showListDropdown={showListDropdown} options={surveyStore.questionList?.find(el => el?.shItem === surveyStore.activeStep)?.Option.OptionItems} setShowListDropdown={setShowListDropdown} />;
            // case "Selection Likert": 
            // console.info('masuk likert')
            //   return <SelectionLikert isRatingLikert={false} options={surveyStore?.questionList?.find(el => el?.shItem === surveyStore.activeStep)?.Option.OptionItems} />
            default:
              return null;
          }
        case "Rat-Rating":
          switch(props?.Option?.szAnswerStyleTypeId){
            case 'Rating Star':
              return <SelectionRating />
            case 'Rating Likert':
              return <SelectionLikert isRatingLikert={true} options={surveyStore?.questionList?.find(el => el?.shItem === surveyStore.activeStep)?.Option.OptionItems} />
            case 'Rating Speedo': 
             return <SelectionSpeedo options={surveyStore?.questionList?.find(el => el?.shItem === surveyStore.activeStep)?.Option.OptionItems} />
            default: 
            return null
          }
      
        case "Pri-Prioritas":
          return <SelectionPriority options={surveyStore?.questionList?.find(el => el?.shItem === surveyStore?.activeStep)?.Option.OptionItems} />;
        case "Mul-Multiple":
          return <SelectionCheckbox />;
        case "ratingStar":
          return <SelectionRating />;
        case "Txt-FreeText":
        case "Num-Number":
        case "Prc-Percetage":
        case "Nlc-NumberLogic":
          return <Input isNumber={props.szAnswerStyleId !== 'Txt-FreeText'} isPercentage={props.szAnswerStyleId === 'Prc-Percetage'} />;
        case "Img-Image": {
          return <UploadImage />
        }
        case "likertRating":
          return <SelectionLikert isRatingLikert={true} option={surveyStore?.optionItems} />;
        case "Dat-Date":
        case "Day-DateYear":
          return <SelectionDate dateYear={props.szAnswerStyleId === 'Day-DateYear' ? true : false} />
        default:
          return null;
      }
    };

    return (
      <div className="h-full w-full mx-auto step">
        {props.szAnswerStyleId !== 'Ins-Instruction' ? 
        
        <div className="pe-0 ps-0">
          <div className="mx-auto text-start flex flex-col gap-5">
            <div className="max-w-[1000px] min-[1000px]:min-w-[800px]">
              <div className="flex gap-1 items-center mt-[3px] absolute mr-2" style={{ insetInlineEnd: '100%' }}>
                <p className="font-medium text-[15px]">{surveyStore.activeStep}</p>
                <FaArrowRight className="font-semibold text-[15px] text-center" />
              </div>
              <div className="description">
                <p className="">{props.description}</p>
              </div>
              <p className="font-semiBold text-[20px]" dangerouslySetInnerHTML={{__html: props.szQuestion}} ></p>
            </div>
          
            {mappingQuestion()}
            
            <div>
              {surveyStore.activeStep < items.length ? (
                <button className={`bg-indigo-500 rounded-md w-40 p-4 mt-10 ${showListDropdown ? 'hidden' : 'block'}`} onClick={surveyStore.nextStepSurvey}>
                  <p>Next</p>
                </button>
              ) : (
                <button className={`bg-indigo-500 rounded-md w-40 p-4 mt-10 ${showListDropdown ? 'hidden' : 'block'}`}>
                  Submit
                </button>
              )}
              <div style={{ fontSize: "21px", fontWeight: "200" }}></div>
            </div>
          </div>
        </div>:
        <div className="flex flex-col gap-10 items-center">
        <Instruction instruction={props.szQuestion} />
        <div>
              {surveyStore.activeStep < items.length ? (
                <button className={`bg-indigo-500 rounded-md w-40 p-4 mt-10 ${showListDropdown ? 'hidden' : 'block'}`} onClick={surveyStore.nextStepSurvey}>
                  <p>Next</p>
                </button>
              ) : (
                <button className={`bg-indigo-500 rounded-md w-40 p-4 mt-10 ${showListDropdown ? 'hidden' : 'block'}`}>
                  Submit
                </button>
              )}
              <div style={{ fontSize: "21px", fontWeight: "200" }}></div>
            </div>
        </div>
      }
      </div>
    );
  };

  return (
    <main className={`flex flex-col gap-[40px] my-auto pt-10 min-h-[${getHeight}] h-full vertical-stepper mb-[100px]`} style={{ minHeight: getHeight }}>
      <StepWizard
        className="mx-auto max-[650px]:px-[15px]"
        initialStep={surveyStore.activeStep}
        onStepChange={(e) => surveyStore.setActiveStep(e.activeStep)}
        transitions={{
          enterRight: "animate__animated animate__fadeInUpBig",
          enterLeft: "animate__animated animate__fadeInDownBig",
          exitRight: "animate__animated animate__fadeOutDownBig",
          exitLeft: "animate__animated animate__fadeOutUpBig",
          intro: "animate__animated animate__zoomInDown",
        }}
        ref={wizardRef}
        isHashEnabled
      >
        {items.map((item: any, index:number) => (
          <RenderForm key={index} index={index} {...item} />
        ))}
      </StepWizard>
    </main>
  );
};

export default Paging;
