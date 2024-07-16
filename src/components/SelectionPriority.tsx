import React, { useEffect, useState } from "react";

import { SortableList } from "./Draggable";
function createRange<T>(
  length: number,
  initializer: (index: number) => T
): T[] {
  return [...new Array(length)].map((_, index) => initializer(index));
}
function getMockItems() {
  return createRange(10, (index) => ({ id: index + 1 }));
}

interface OptionProps {
  bImageOption: number;
  decOptionScore: string;
  id: number;
  shItem: number;
  szOptionId: string;
  szValueId: string;
  szOption: string;
}
export default function SelectionPriorty({options}: {options: OptionProps[]}) {
  // console.info(props, "<<< props");
  const [items, setItems] = useState(options);
  // useEffect(() => {
  //   setItems(options)
  // })
  return (
    <div>
      <SortableList
        items={items}
        onChange={setItems}
        renderItem={(item) => (
          <SortableList.Item id={item.id}>
            {item.szOption}
            <SortableList.DragHandle />
          </SortableList.Item>
        )}
      />
    </div>
  );
}
