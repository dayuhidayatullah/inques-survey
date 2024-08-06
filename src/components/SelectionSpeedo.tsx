import  { useState } from 'react';
import '../style/selection-speedo.css';
import { useSurvey } from '../hooks/useSurvey';

interface OptionProps {
  bImageOption: number;
  decOptionScore: string;
  id: number;
  shItem: number;
  szOptionId: string;
  szValueId: string;
  szOption: string;
}

const SelectionSpeedo = ({ options }: { options?: OptionProps[] }) => {
  const surveyStore = useSurvey()
  const getAnswer = localStorage?.answer ? JSON.parse(localStorage?.answer) : ''
  const [value, setValue] = useState(getAnswer?.[surveyStore?.activeStep] || 0);
  // Calculate the rotation angle based on the value
  const calculateAngle = (value: number) => {
    return (value / (options?.length ?? 1)) * 180; // 180 degrees divided by the number of options
  };
  const handleChange = (value: number) => {
    const updatedAnswer = {...getAnswer, [surveyStore?.activeStep]: value}
    localStorage.setItem('answer', JSON.stringify(updatedAnswer))
    setValue(value)
  }
  return (
    <>
      <div className="wrapper">
        <div className="gauge">
          <div className="slice-colors">
            <div className="st slice-item"></div>
            <div className="st slice-item"></div>
            <div className="st slice-item"></div>
          </div>
          <div
            id="arrow"
            className="needle"
            style={{ transform: `rotate(${calculateAngle(value)}deg)` }}
          ></div>
          <div className="gauge-center">
            <div id="counter">{value}</div>
          </div>
        </div>
      </div>

      <div className="s-box">
        <input
          id="testParam"
          type="range"
          min="0"
          max={options?.length ? options.length : 0}
          value={value}
          onChange={(e) => {
            handleChange(+e.target.value)
            // const newValue = Number(e.target.value);
            // setValue(newValue);
          }}
        />
      </div>
    </>
  );
};

export default SelectionSpeedo;
