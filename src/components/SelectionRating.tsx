import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { HiOutlineStar } from "react-icons/hi";
import { HiStar } from "react-icons/hi";

const SelectionRating = () => {
  const temp = Array.from(Array(5).keys());
  const [selectRating, setSelectRating] = useState<number>(-1);
  return (
    <div className="container flex gap-2 cursor-pointer">
      {temp.map((el, i) => {
        return (
          <>
            {el <= selectRating ? (
              <div className="flex flex-col items-center">
                <HiStar
                  onClick={() => setSelectRating(el)}
                  className={`text-[45px] text-blue-600`}
                />
                <p className="text-[15px] text-black">{i + 1}</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <HiOutlineStar
                  className={`text-[45px]`}
                  onClick={() => setSelectRating(el)}
                />
                <p className="text-[15px] text-black">{i + 1}</p>
              </div>
            )}
            {/* <CiStar className={`text-[25px] ${el <= selectRating ? 'text-indigo-500' : ''}`} onClick={() => setSelectRating(el)} /> */}
          </>
        );
      })}
    </div>
  );
};

export default SelectionRating;
