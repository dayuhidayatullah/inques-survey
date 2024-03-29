import React, { useState } from "react";

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

export default function App(props: any) {
  console.info(props, "<<< props");
  const [items, setItems] = useState(getMockItems);

  return (
    <div>
      <SortableList
        items={items}
        onChange={setItems}
        renderItem={(item) => (
          <SortableList.Item id={item.id}>
            {item.id}
            <SortableList.DragHandle />
          </SortableList.Item>
        )}
      />
    </div>
  );
}
