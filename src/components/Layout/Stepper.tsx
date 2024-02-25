import React, { useMemo, useState } from 'react'
import SteperStrip from '../SteperStrip'
// import SelectionText from "../SelectionText";
import SelectionImage from "../SelectionImage";
import SelectionLikert from "../SelectionLikert";
import SelectionDropdown from "../SelectionDropdown";
import SelectionRating from "../SelectionRating";
import Input from "../Input";
import SelectionCheckbox from "../SelectionCheckbox";
import SelectionPriority from "../SelectionPriority";
import StepWizard from 'react-step-wizard';
import { RiCheckLine } from 'react-icons/ri';
const Stepper = ({items}: { items: any}) => {
  const [tempStep, setTempStep] = useState<number>(1)
  const [activeStep, setActiveStep] = useState<number>(1)
const RenderForm =  (props: any) => {
    console.info(props)
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
        currentStep: number,
        firstStep: () =>void,
        goToStep: (step: any) => void,
        lastStep: () => void,
        nextStep: () => void,
        previousStep: () => void,
        totalSteps: number,
        step: number,
    }) => (
        <div>
            {/* <hr /> */}
            { step < totalSteps ?
                <button className='bg-indigo-500 rounded-md w-40 p-4 mt-10' onClick={nextStep}>
                    <p>Next</p>
                </button>
                :
                <button className='bg-indigo-500 rounded-md w-40 p-4' onClick={nextStep}>
                    Submit
                    </button>
            }
            {/* <hr /> */}
            <div style={{ fontSize: '21px', fontWeight: '200' }}>
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
          case 'priority':
          return (
            <>
              <SelectionPriority />
              <Stats step={props.index}
              currentStep={props.currentStep}
              firstStep={props.firstStep}
              goToStep={props.goToStep}
              lastStep={props.lastStep}
              nextStep={props.nextStep}
              previousStep={props.previousStep}
              totalSteps={props.totalSteps}
              />
            </>
          )
          case 'multiple':
            return (
                <>
            <SelectionCheckbox />
            <Stats step={props.index}
              currentStep={props.currentStep}
              firstStep={props.firstStep}
              goToStep={props.goToStep}
              lastStep={props.lastStep}
              nextStep={props.nextStep}
              previousStep={props.previousStep}
              totalSteps={props.totalSteps}
              />
                </>
            )
          case 'ratingStar' : 
            return (
                    <>
                <SelectionRating />
                <Stats step={props.index}
              currentStep={props.currentStep}
              firstStep={props.firstStep}
              goToStep={props.goToStep}
              lastStep={props.lastStep}
              nextStep={props.nextStep}
              previousStep={props.previousStep}
              totalSteps={props.totalSteps}
              />
            </>
            )
          case 'selectionText':
            return (
                <>
            <SelectionText />
            <Stats step={props.index}
              currentStep={props.currentStep}
              firstStep={props.firstStep}
              goToStep={props.goToStep}
              lastStep={props.lastStep}
              nextStep={props.nextStep}
              previousStep={props.previousStep}
              totalSteps={props.totalSteps}
              />
                </>)
          case 'likertRating':
            return (
                <>
                <SelectionLikert isRatingLikert={true} />
                <Stats step={props.index}
              currentStep={props.currentStep}
              firstStep={props.firstStep}
              goToStep={props.goToStep}
              lastStep={props.lastStep}
              nextStep={props.nextStep}
              previousStep={props.previousStep}
              totalSteps={props.totalSteps}
              />
                </>
            )  
          case 'dropdown':
            return (
                <>
            <SelectionDropdown />
            <Stats step={props.index}
              currentStep={props.currentStep}
              firstStep={props.firstStep}
              goToStep={props.goToStep}
              lastStep={props.lastStep}
              nextStep={props.nextStep}
              previousStep={props.previousStep}
              totalSteps={props.totalSteps}
              />
                </>
            )
          case 'input': 
            return (
            <>
            <Input />
            <Stats step={props.index}
              currentStep={props.currentStep}
              firstStep={props.firstStep}
              goToStep={props.goToStep}
              lastStep={props.lastStep}
              nextStep={props.nextStep}
              previousStep={props.previousStep}
              totalSteps={props.totalSteps}
              />
            </>
            )
          case 'selectionImageText': 
          return (
            <>
            <SelectionImage text={true} />
            <Stats step={props.index}
              currentStep={props.currentStep}
              firstStep={props.firstStep}
              goToStep={props.goToStep}
              lastStep={props.lastStep}
              nextStep={props.nextStep}
              previousStep={props.previousStep}
              totalSteps={props.totalSteps}
              />
            </>
          )
          case 'selectionImage': 
          return (
            <>
              <SelectionImage text={false} />
              <Stats step={props.index}
              currentStep={props.currentStep}
              firstStep={props.firstStep}
              goToStep={props.goToStep}
              lastStep={props.lastStep}
              nextStep={props.nextStep}
              previousStep={props.previousStep}
              totalSteps={props.totalSteps}
              />
            </>

          )
          case 'likert':
            return (
                <>
                <SelectionLikert isRatingLikert={false} />
                <Stats step={props.index}
              currentStep={props.currentStep}
              firstStep={props.firstStep}
              goToStep={props.goToStep}
              lastStep={props.lastStep}
              nextStep={props.nextStep}
              previousStep={props.previousStep}
              totalSteps={props.totalSteps}
              />
               </> 
            )
        }
      }
    return (
        <>
         <p className="font-bold text-[40px]"> {props.question}</p>
        <div className="description mb-[20px]">
            <p className="">
            {props.description}
            </p>
        </div>
        {mappingQuestion()}
        </>
    )
}
const SelectionText = (props: any) => {
    console.info(props, '<<<< props')
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
    const temp = Array.from(alphabet.slice(0,9).values())
    console.info(temp, '<<< apa dia')
    const [selectQuestion, setSelectQuestion] = useState<string|Number | null>(null)
    const devideQuestionGrid = () => {
        if(temp.length % 2 === 0) return 2
        if(temp.length % 3  === 0) return 3
        else return 2
    }
  return (
    <div className={`container grid grid-rows-${devideQuestionGrid()} grid-flow-col gap-3`}>
        {temp.map(el => {
            return (
              <div key={el} className={`border-[2px] ${selectQuestion === el ?'border-indigo-500': 'border-gray-500'} flex items-center justify-between gap-2 rounded-xl p-2 cursor-pointer `} onClick={() => setSelectQuestion(el)} >
                <div className='flex gap-2 items-center'>
                <p className={`${el === selectQuestion ? 'bg-indigo-500 text-white' : ''} px-2 rounded-md border-[2px] border-gray-500 font-semibold text-[25px]`}>{el}</p>
                <p className='font-normal text-[20px]'>
                  Up to $1,000
                </p>
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

                {
                    el === selectQuestion && (
                        
                        <RiCheckLine className='text-indigo-500'/>
                    )
                }
              </div>

            )
        })}
    </div>
  )
}

  return (
    <div>
        <SteperStrip  activeStep={activeStep} totalQuestion={items?.length} />
        <StepWizard initialStep={tempStep} onStepChange={(e) => setActiveStep(e.activeStep)}   >
            {items.map((el: any, i: number) => {
            // return <SelectionText />
                return <RenderForm type={el.type} question={el.question} description={el.description || ''} index={i} />
            })}
          </StepWizard>
    </div>
  )
}

export default Stepper