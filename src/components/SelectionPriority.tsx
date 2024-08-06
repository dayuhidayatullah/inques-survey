import  { useEffect, useState } from "react";

import { SortableList } from "./Draggable";
import { useSurvey } from "../hooks/useSurvey";
// function createRange<T>(
//   length: number,
//   initializer: (index: number) => T
// ): T[] {
//   return [...new Array(length)].map((_, index) => initializer(index));
// }
// function getMockItems() {
//   return createRange(10, (index) => ({ id: index + 1 }));
// }

interface OptionProps {
  bImageOption: number;
  decOptionScore: string;
  id: number;
  shItem: number;
  szOptionId: string;
  szValueId: string;
  szOption: string;
}
export default function SelectionPriorty({options}: {options?: OptionProps[]}) {
  // console.info(props, "<<< props");
  const surveyStore = useSurvey()
  const getAnswer = localStorage?.answer ? JSON.parse(localStorage?.answer) : ''
  const [items, setItems] = useState(getAnswer[surveyStore?.activeStep] || options);
  
  useEffect(() => {
    const updatedAnswer = {...getAnswer, [surveyStore?.activeStep]: items}
    localStorage.setItem('answer', JSON.stringify(updatedAnswer))
  },[items])
  useEffect(() => {
    
    console.info(surveyStore?.activeStep, '<<< be')
  },[surveyStore])
  return (
    <div>
      {
        Array.isArray(items) ? 
        <SortableList
          items={items}
          onChange={setItems}
          renderItem={(item) => (
            <SortableList.Item id={item.id}>
              {item.szOption}
              <SortableList.DragHandle />
            </SortableList.Item>
          )}
        />:<></>

      }
    </div>
  );
}
