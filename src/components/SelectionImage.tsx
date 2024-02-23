import React, { useState } from "react";

const SelectionImage = ({ text }: { text: Boolean }) => {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  const temp = Array.from(alphabet.slice(0, 9).values());
  const [selectQuestion, setSelectQuestion] = useState<Number | string | null>(
    null
  );
  const devideQuestionGrid = () => {
    if (temp.length % 2 === 0) return 2;
    if (temp.length % 3 === 0) return 3;
    else return 2;
  };
  return (
    <div className={`container grid grid-rows-3 grid-flow-col gap-3`}>
      {temp.map((el) => {
        return (
          <div
            key={el}
            className={`border-[2px] ${
              selectQuestion === el ? "border-indigo-500" : "border-gray-500"
            }  p-2 cursor-pointer`}
            onClick={() => setSelectQuestion(el)}
          >
            <img src="https://imgv3.fotor.com/images/share/wonderland-girl-generated-by-Fotor-ai-art-generator.jpg"></img>
            {text && (
              <div className="flex justify-center mt-2 gap-2">
                <p
                  className={`${
                    el === selectQuestion ? "bg-indigo-500 text-white" : ""
                  } px-2 rounded-md border-[2px] border-gray-500 font-semibold text-[25px]`}
                >
                  {el}
                </p>
                <p className="font-normal text-[20px] text-center mt-2">
                  {"Makanan"}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SelectionImage;
