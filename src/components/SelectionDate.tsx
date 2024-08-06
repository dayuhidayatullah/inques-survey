import {  useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
// import { Portal } from "react-overlays";
import { useSurvey } from "../hooks/useSurvey";

// import "react-datepicker/dist/react-datepicker.css";

// interface IProps {
//   chidren: JSX.Element;
// }
type ValuePiece = Date | null;
type Range<T> = [T, T];
 type Value = ValuePiece | Range<ValuePiece>;

const SelectionDate = ({ dateYear }: { dateYear: boolean }) => {
  const surveyStore = useSurvey()
  const getAnswer = localStorage?.answer ? JSON.parse(localStorage?.answer) : ''
  const [selectedDate, setSelectedDate] = useState<Value>(getAnswer[surveyStore?.activeStep] || null);
console.info(selectedDate, getAnswer, surveyStore?.activeStep, '<<<< date selected')
  // const CalendarContainer = ({ children }: any) => {
  //   const el = document.getElementById("container-root");
  //   // console.info(el, "<<<< element");

  //   return <Portal container={el}>{children}</Portal>;
  // };
  const handleDateChange = (value: Value) => {
    const updatedAnswer = {...getAnswer, [surveyStore?.activeStep]: value}
    localStorage.setItem('answer', JSON.stringify(updatedAnswer))
    setSelectedDate(value)
  }
  return (
    <div className="mt-6">
      {/* <input type={"date"} /> */}

      <DatePicker
        // format={!dateYear ? "MMMM" : "MMMM YYYY"}
        // dateFormat={!dateYear ? 'MM-dd': 'MM-dd-yy'}
        className={
          "date-input w-[350px] h-[40px] border-b-2 border-gray-400 focus:outline-none"
        }
        // view={'v'}
        autoFocus
        onChange={(e) => {
          handleDateChange(e);
        }}
        // portalContainer={CalendarContainer}
        value={selectedDate}
        // selected={selectedDate}
        locale={"id"}
        // showNeighboringMonth={false}
        format={!dateYear ? 'dd-MM' : 'dd-MM-yyyy'}
      ></DatePicker>
    </div>
  );
};

export default SelectionDate;
