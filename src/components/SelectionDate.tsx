import { useState } from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const SelectionDate = ({dateYear}: {dateYear: boolean}) => {
  const [selectedDate, setSelectedDate] = useState<any>(null)
  return (
    <div className='mt-6'>
        <DatePicker dateFormatCalendar={!dateYear ? 'MMMM': 'MMMM YYYY'} dateFormat={!dateYear ? 'MM-dd': 'MM-dd-yy'}  className={'date-input w-[350px] h-[40px] border-b-2 border-gray-400 focus:outline-none'} onChange={(e) => {
          setSelectedDate(e)}}
          selected={selectedDate} 
          locale={'id'}
          ></DatePicker>
    </div>
  )
}

export default SelectionDate