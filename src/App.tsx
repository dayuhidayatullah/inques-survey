import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SteperStrip from "./components/SteperStrip";
import { FaArrowLeft } from "react-icons/fa6";
import SelectionText from "./components/SelectionText";
import SelectionImage from "./components/SelectionImage";
import SelectionLikert from "./components/SelectionLikert";
import SelectionDropdown from "./components/SelectionDropdown";
import SelectionRating from "./components/SelectionRating";
import Input from "./components/Input";
import SelectionCheckbox from "./components/SelectionCheckbox";
import SelectionPriority from "./components/SelectionPriority";
import Stepper from "./components/Layout/Stepper";
import StepWizard from "react-step-wizard";

function App() {
  const tempData = [
    {
      type: 'likert',
      question: 'Apakah Anda Ingin ?'
    },
    {
      type: 'selectionImage',
      question: 'Apakah Anda Ingin ?'
    },
    {
      type: 'selectionImageText',
      question: 'Apakah Anda Ingin ?'
    },
    {
      type: 'input',
      question: 'Apakah Anda Ingin ?'
    },
    {
      type: 'dropdown',
      question: 'Apakah Anda Ingin ?'
    },
    {
      type: 'likertRating',
      question: 'Apakah Anda Ingin ?'
    },
    {
      type: 'selectionText',
      question: 'Apakah Anda Ingin ?'
    },
    {
      type: 'ratingStar',
      question: 'Apakah Anda Ingin ?'
    },
    {
      type: 'multiple',
      question: 'Apakah Anda Ingin ?'
    },
    {
      type: 'priority',
      question: 'Apakah Anda Ingin ?'
    }
  ]
  const mappingQuestion = (type: string) => {
    switch (type) {
      case 'priority':
      return <SelectionPriority />
      case 'multiple':
        return <SelectionCheckbox />
      case 'ratingStar' :
        return <SelectionRating />
      case 'selectionText':
        return <SelectionText />
      case 'likertRating':
        return <SelectionLikert isRatingLikert={true} />
      case 'dropdown':
        return <SelectionDropdown />
      case 'input': 
        return <Input />
      case 'selectionImageText': 
      return <SelectionImage text={true} />
      case 'selectionImage': 
      return <SelectionImage text={false} />
      case 'likert':
        return <SelectionLikert isRatingLikert={false} />
    }
  }
  const [tempStep, setTempStep] = useState<number>(3)
  return (
    <>
      <div className="container m-auto">
        <Header />
        <div className="container flex gap-[40px]">
          <FaArrowLeft className="font-semibold text-[30px] mt-12"/>
         <Stepper items={tempData}/>
          {/* <StepWizard initialStep={tempStep} onStepChange={(e) => console.info(e, '<<< apadia')}  >
              <SelectionText  />
              <SelectionImage text={true} />
              <SelectionLikert isRatingLikert={true} />
          </StepWizard> */}
          {/* {tempData.map(el => {
            return (
              <>
              <Stepper activeStep={0} question={el.question} items={tempData} description={'COBA'}  />
              </>
            )
          })} */}
          {/* <div>
            
            <div className="flex gap-[50px] flex-col mb-[50px]">
              <SelectionText />
              <SelectionImage text={true} />
              <SelectionLikert isRatingLikert={true} />
              <SelectionDropdown />
              <SelectionRating />
              <SelectionCheckbox />
              <SelectionPriority />
              <Input />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
