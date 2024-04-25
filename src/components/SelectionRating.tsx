import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { HiOutlineStar } from "react-icons/hi";
import { HiStar } from "react-icons/hi";

const SelectionRating = () => {
  const temp = Array.from(Array(5).keys());
  const [selectRating, setSelectRating] = useState<number>(-1);
  return (
    <div className="container flex gap-2 cursor-pointer">
      {temp.map((el) => {
        return (
          <>
            {el <= selectRating ? (
              <HiStar
                onClick={() => setSelectRating(el)}
                className={`text-[45px] text-blue-600`}
              />
            ) : (
              <HiOutlineStar
                className={`text-[45px]`}
                onClick={() => setSelectRating(el)}
              />
            )}
            {/* <CiStar className={`text-[25px] ${el <= selectRating ? 'text-indigo-500' : ''}`} onClick={() => setSelectRating(el)} /> */}
          </>
        );
      })}
    </div>
  );
};

export default SelectionRating;
