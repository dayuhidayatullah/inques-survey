import { useState } from 'react';
import DatePicker, {DatePickerProps} from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { Portal } from "react-overlays";

// import "react-datepicker/dist/react-datepicker.css";

const SelectionDate = ({dateYear}: {dateYear: boolean}) => {
  const [selectedDate, setSelectedDate] = useState<any>(null)
  const CalendarContainer = ( children: DatePickerProps) => {
    const el = document.getElementById("calendar-portal");
  
    return <Portal container={el}>{children}</Portal>;
  };
  return (
    <div className='mt-6'>
        <DatePicker 
          format={!dateYear ? 'MMMM': 'MMMM YYYY'} 
          // dateFormat={!dateYear ? 'MM-dd': 'MM-dd-yy'}  
          className={'date-input w-[350px] h-[40px] border-b-2 border-gray-400 focus:outline-none' }
          onChange={(e) => {
            setSelectedDate(e)
          }}
          portalContainer={() => CalendarContainer()}
          value={selectedDate}
          // selected={selectedDate} 
          locale={'id'}
          ></DatePicker>
    </div>
  )
}

export default SelectionDate