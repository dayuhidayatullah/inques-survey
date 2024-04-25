import React, { useState } from "react";

const SelectionLikert = ({ isRatingLikert }: { isRatingLikert: Boolean }) => {
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
    <div className={`container flex ${isRatingLikert ? "" : "gap-1"}  mt-3`}>
      {temp.map((el, i) => {
        return (
          <div
            className={`${
              isRatingLikert
                ? i !== 0 || i === temp.length - 1
                  ? "border-r-2 border-y-2 "
                  : "border-y-2 border-r-2 "
                : ""
            } 
            ${!isRatingLikert ? "border-2 border-gray rounded-[6px] p-2" : ""}
            p-6 ${selectQuestion === el ? "bg-indigo-500 text-white " : ""}
            ${
              isRatingLikert
                ? i === temp.length - 1
                  ? "rounded-e-md"
                  : ""
                : ""
            }
            ${
              isRatingLikert ? (i === 0 ? "border-l-2 rounded-s-md" : "") : ""
            }`}
            onClick={() => setSelectQuestion(el)}
          >
            {el}
          </div>
        );
      })}
    </div>
  );
};

export default SelectionLikert;
