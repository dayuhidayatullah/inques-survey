import { useEffect, useState } from "react";
import SteperStrip from "../SteperStrip";
import SelectionText from "../SelectionText";
import SelectionImage from "../SelectionImage";
import SelectionLikert from "../SelectionLikert";
import SelectionDropdown from "../SelectionDropdown";
import SelectionRating from "../SelectionRating";
import Input from "../Input";
import SelectionCheckbox from "../SelectionCheckbox";
import SelectionPriority from "../SelectionPriority";
import { FaArrowLeft } from "react-icons/fa6";
import StepWizard from "react-step-wizard";
import "animate.css";
import SelectionDate from "../SelectionDate";
import { CgChevronDoubleDown, CgChevronDoubleUp } from "react-icons/cg";
const Paging = ({ items }: { items: any }) => {
  const [tempStep, setTempStep] = useState<number>(1);
  const [activeStep, setActiveStep] = useState<number>(1);
  const RenderForm = (props: any) => {
    console.info(props, "<<< props");
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
        {/* <hr /> */}
        {step < totalSteps ? (
          <button
            className="bg-indigo-500 rounded-md w-40 p-4 mt-10"
            onClick={nextStep}
          >
            <p>Next</p>
          </button>
        ) : (
          <button
            className="bg-indigo-500 rounded-md w-40 p-4 mt-10"
            onClick={nextStep}
          >
            {}
            Submit
          </button>
        )}
        {/* <hr /> */}
        <div style={{ fontSize: "21px", fontWeight: "200" }}>
          {/* <h4>Other Functions</h4>
                    <div>Current Step: {currentStep}</div>
                    <div>Total Steps: {totalSteps}</div> */}
          {/* <button className='btn btn-block btn-default' onClick={firstStep}>First Step</button>
                    <button className='btn btn-block btn-default' onClick={lastStep}>Last Step</button> */}

          {/* <button className='btn btn-block btn-default' onClick={() => goToStep(2)}>Go to Step 2</button> */}
        </div>
      </div>
    );
    const mappingQuestion = () => {
      switch (props.type) {
        case "priority":
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
        case "multiple":
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
        case "selectionText":
          return (
            <>
              <SelectionText />
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
              <SelectionLikert isRatingLikert={true} />
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
        case "input":
          return (
            <>
              <Input isNumber={true} isPercentage={true} />
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
        case "selectionImageText":
          return (
            <>
              <SelectionImage text={true} />
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
        case "selectionImage":
          return (
            <>
              <SelectionImage text={false} />
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
        case "likert":
          return (
            <>
              <SelectionLikert isRatingLikert={false} />
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
        case "date":
          return (
            <>
              <SelectionDate dateYear={false} />
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
      <div>
        <div className="flex items-center gap-10 ">
          {activeStep > 1 && (
            <FaArrowLeft
              onClick={() => props.previousStep()}
              className="font-semibold text-[30px] cursor-pointer"
            />
          )}

          <p className="font-bold text-[40px]"> {props.question}</p>
        </div>
        <div className={`${activeStep > 1 ? "ml-[70px]" : ""} mt-[32px]`}>
          <div className="description ">
            <p className="">{props.description}</p>
          </div>
          {mappingQuestion()}
        </div>
      </div>
    );
  };
  const getContainerStepWizard = document.getElementsByClassName("rsw_2Y");
  useEffect(() => {
    console.info(window.scrollY, "<<< apa dias");
    if (!getContainerStepWizard[0].className.includes("container")) {
      getContainerStepWizard[0].classList.add("container");
    }
    console.info(getContainerStepWizard[0].className, "<<< apa diasada");
  }, [window.scrollY, getContainerStepWizard]);
  const getHeight = screen.height - 105 + "px";
  return (
    <main
      className={`flex flex-col gap-[40px] overflow-x-hidden my-auto p-10 min-h-[${getHeight}]`}
    >
      {/* <div> */}
      {/* <SteperStrip activeStep={activeStep} totalQuestion={items?.length} /> */}
      {/* <FaArrowLeft className="font-semibold text-[30px] mt-12" /> */}
      {/* </div> */}
      <StepWizard
        className="flex justify-center items-center max-[650px]:px-[15px]"
        initialStep={tempStep}
        onStepChange={(e) => setActiveStep(e.activeStep)}
        transitions={{
          enterRight: "animate__animated animate__fadeInUpBig",
          enterLeft: "animate__animated animate__fadeInDownBig",
          exitRight: "animate__animated animate__fadeOutDownBig",
          exitLeft: "animate__animated animate__fadeOutUpBig",
          intro: "animate__animated animate__zoomInDown",
        }}
      >
        {items.map((el: any, i: number) => {
          // return <SelectionText />
          return (
            <RenderForm
              type={el.type}
              question={el.question}
              description={el.description || ""}
              index={i}
            />
          );
        })}
      </StepWizard>
      <div className="flex justify-end absolute bottom-0 right-0 top-0 z-10 flex-col h-[inherit]">
        <div className="border-[1px] border-gray-300">
          <CgChevronDoubleUp />
        </div>
        <div className="border-[1px] border-gray-300">
          <CgChevronDoubleDown />
        </div>
      </div>
    </main>
  );
};

export default Paging;
