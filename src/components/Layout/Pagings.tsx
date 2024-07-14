import { useContext, useEffect, useMemo, useRef, useState } from "react";
import SteperStrip from "../SteperStrip";
import SelectionText from "../SelectionText";
import SelectionImage from "../SelectionImage";
import SelectionLikert from "../SelectionLikert";
import SelectionDropdown from "../SelectionDropdown";
import SelectionRating from "../SelectionRating";
import Input from "../Input";
import SelectionCheckbox from "../SelectionCheckbox";
import SelectionPriority from "../SelectionPriority";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import StepWizard, { StepWizardChildProps } from "react-step-wizard";
import "animate.css";
import SelectionDate from "../SelectionDate";
import { CgChevronDoubleDown, CgChevronDoubleUp } from "react-icons/cg";
import { useSurvey } from "../../hooks/useSurvey";
import { useParams } from "react-router-dom";

const Paging = ({ items }: { items: any }) => {
  const surveyStore = useSurvey();
  const [showListDropdown, setShowListDropdown] = useState(false);
  const { step } = useParams();
  const wizardRef = useRef<StepWizardChildProps>(null);

  useEffect(() => {
    if (wizardRef.current) {
      wizardRef.current.goToStep(Number(step));
    }
  }, [step]);

  const handleNextStep = () => {
    if (wizardRef.current) {
      wizardRef.current.nextStep();
    }
  };

  const handlePreviousStep = () => {
    if (wizardRef.current) {
      wizardRef.current.previousStep();
    }
  };

  const RenderForm = (props: any) => {
    if (props.index === 0) {
      surveyStore?.setNextStepSurvey(() => props.nextStep);
      surveyStore?.setBackStepSurvey(() => props.previousStep);
    }

    const Stats = ({
      currentStep,
      firstStep,
      goToStep,
      lastStep,
      nextStep,
      previousStep,
      totalSteps,
      step,
    }: {
      currentStep: number;
      firstStep: () => void;
      goToStep: (step: any) => void;
      lastStep: () => void;
      nextStep: () => void;
      previousStep: () => void;
      totalSteps: number;
      step: number;
    }) => (
      <div>
        {step < totalSteps ? (
          <button
            className={`bg-indigo-500 rounded-md w-40 p-4 mt-10 ${showListDropdown ? 'hidden' : 'block'}`}
            onClick={() => {
              nextStep();
            }}
          >
            <p>Next</p>
          </button>
        ) : (
          <button
            className={`bg-indigo-500 rounded-md w-40 p-4 mt-10 ${showListDropdown ? 'hidden' : 'block'}`}
            onClick={nextStep}
          >
            Submit
          </button>
        )}
      </div>
    );

    const mappingQuestion = () => {
      switch (props?.answerStyle) {
        case "Sel-Selection": {
          switch (props?.answerStyleType) {
            case "Selection Text": {
              return (
                <>
                  <SelectionText options={surveyStore?.questionList?.find((el: any) => el?.shItem === surveyStore.activeStep)?.Option.OptionItems} />
                  <Stats
                    step={props.index}
                    currentStep={props.currentStep}
                    firstStep={props.firstStep}
                    goToStep={props.goToStep}
                    lastStep={props.lastStep}
                    nextStep={props.nextStep}
                    previousStep={props.previousStep}
                    totalSteps={props.totalSteps}
                  />
                </>
              );
            }
            case "Selection Likert": {
              return (
                <>
                  <SelectionLikert isRatingLikert={true} option={surveyStore?.questionList?.find((el: any) => el?.shItem === surveyStore.activeStep)?.Option.OptionItems} />
                  <Stats
                    step={props.index}
                    currentStep={props.currentStep}
                    firstStep={props.firstStep}
                    goToStep={props.goToStep}
                    lastStep={props.lastStep}
                    nextStep={props.nextStep}
                    previousStep={props.previousStep}
                    totalSteps={props.totalSteps}
                  />
                </>
              );
            }
            case "Selection Image": {
              return (
                <>
                  <SelectionImage text={false} options={surveyStore?.questionList?.find((el: any) => el?.shItem === surveyStore.activeStep)?.Option.OptionItems} optionItemImages={surveyStore.optionItemImages} />
                  <Stats
                    step={props.index}
                    currentStep={props.currentStep}
                    firstStep={props.firstStep}
                    goToStep={props.goToStep}
                    lastStep={props.lastStep}
                    nextStep={props.nextStep}
                    previousStep={props.previousStep}
                    totalSteps={props.totalSteps}
                  />
                </>
              );
            }
            case "Selection ImageText": {
              return (
                <>
                  <SelectionImage text={true} options={surveyStore?.questionList?.find((el: any) => el?.shItem === surveyStore.activeStep)?.Option.OptionItems} optionItemImages={surveyStore.optionItemImages} />
                  <Stats
                    step={props.index}
                    currentStep={props.currentStep}
                    firstStep={props.firstStep}
                    goToStep={props.goToStep}
                    lastStep={props.lastStep}
                    nextStep={props.nextStep}
                    previousStep={props.previousStep}
                    totalSteps={props.totalSteps}
                  />
                </>
              );
            }
            case "Selection Dropdown": {
              return (
                <>
                  <SelectionDropdown showListDropdown={showListDropdown} options={surveyStore.questionList?.find((el: any) => el?.shItem === surveyStore.activeStep)?.Option.OptionItems} setShowListDropdown={setShowListDropdown} />
                  <Stats
                    step={props.index}
                    currentStep={props.currentStep}
                    firstStep={props.firstStep}
                    goToStep={props.goToStep}
                    lastStep={props.lastStep}
                    nextStep={props.nextStep}
                    previousStep={props.previousStep}
                    totalSteps={props.totalSteps}
                  />
                </>
              );
            }
            default:
              return null;
          }
        }
        case "Rat-Rating": {
          switch (props.answerStyleType) {
            case "Rating Star":
            case "Rating Likert":
            case "Rating Speedo":
            default:
          }
        }
        case "Pri-Prioritas":
          return (
            <>
              <SelectionPriority />
              <Stats
                step={props.index}
                currentStep={props.currentStep}
                firstStep={props.firstStep}
                goToStep={props.goToStep}
                lastStep={props.lastStep}
                nextStep={props.nextStep}
                previousStep={props.previousStep}
                totalSteps={props.totalSteps}
              />
            </>
          );
        case "Mul-Multiple":
          return (
            <>
              <SelectionCheckbox />
              <Stats
                step={props.index}
                currentStep={props.currentStep}
                firstStep={props.firstStep}
                goToStep={props.goToStep}
                lastStep={props.lastStep}
                nextStep={props.nextStep}
                previousStep={props.previousStep}
                totalSteps={props.totalSteps}
              />
            </>
          );
        case "ratingStar":
          return (
            <>
              <SelectionRating />
              <Stats
                step={props.index}
                currentStep={props.currentStep}
                firstStep={props.firstStep}
                goToStep={props.goToStep}
                lastStep={props.lastStep}
                nextStep={props.nextStep}
                previousStep={props.previousStep}
                totalSteps={props.totalSteps}
              />
            </>
          );
        case "Txt-FreeText":
        case "Num-Number":
        case "Prc-Percetage":
        case "Nlc-NumberLogic":
          return (
            <>
              <Input isNumber={props.answerStyle === 'Txt-FreeText' ? false : true} isPercentage={props.answerStyle === 'Prc-Percetage' ? true : false} />
              <Stats
                step={props.index}
                currentStep={props.currentStep}
                firstStep={props.firstStep}
                goToStep={props.goToStep}
                lastStep={props.lastStep}
                nextStep={props.nextStep}
                previousStep={props.previousStep}
                totalSteps={props.totalSteps}
              />
            </>
          );
        case "likertRating":
          return (
            <>
              <SelectionLikert isRatingLikert={true} option={surveyStore?.optionItems} />
              <Stats
                step={props.index}
                currentStep={props.currentStep}
                firstStep={props.firstStep}
                goToStep={props.goToStep}
                lastStep={props.lastStep}
                nextStep={props.nextStep}
                previousStep={props.previousStep}
                totalSteps={props.totalSteps}
              />
            </>
          );
        case "dropdown":
          return (
            <>
              <SelectionDropdown />
              <Stats
                step={props.index}
                currentStep={props.currentStep}
                firstStep={props.firstStep}
                goToStep={props.goToStep}
                lastStep={props.lastStep}
                nextStep={props.nextStep}
                previousStep={props.previousStep}
                totalSteps={props.totalSteps}
              />
            </>
          );
        default:
          return (
            <>
              <SelectionLikert option={surveyStore?.optionItems} />
              <Stats
                step={props.index}
                currentStep={props.currentStep}
                firstStep={props.firstStep}
                goToStep={props.goToStep}
                lastStep={props.lastStep}
                nextStep={props.nextStep}
                previousStep={props.previousStep}
                totalSteps={props.totalSteps}
              />
            </>
          );
      }
    };

    return (
      <div className="max-w-4xl w-full flex flex-col justify-center items-center space-y-10 pb-20">
        <SteperStrip />
        <div className="max-w-4xl w-full flex flex-col space-y-8 items-start bg-white p-14 rounded-lg shadow-lg">
          <div className="w-full flex items-center justify-between bg-gray-200 p-6">
            <div>
              <h1 className="text-2xl font-semibold">
                {props?.title ?? "Pertanyaan"}
              </h1>
              <p className="text-lg">{props?.subTitle ?? "Sub title"}</p>
            </div>
            <button
              className="text-2xl text-gray-500"
              onClick={() => setShowListDropdown(!showListDropdown)}
            >
              {showListDropdown ? <CgChevronDoubleUp /> : <CgChevronDoubleDown />}
            </button>
          </div>
          {mappingQuestion()}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <StepWizard ref={wizardRef}
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
      >
        {items?.map((item: any, index: number) => (
          <RenderForm key={index} {...item} 
          answerStyle={item.szAnswerStyleId}
          answerStyleType={item?.Option?.szAnswerStyleTypeId}
          question={item.szQuestion}
          description={item.description || ""}
          index={index}
          // key={el.shItem}
          />
        ))}
      </StepWizard>
    </div>
  );
};

export default Paging;