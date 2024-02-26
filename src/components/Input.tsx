import React from "react";

const Input = ({
  isNumber,
  isPercentage,
}: {
  isNumber: boolean;
  isPercentage: boolean;
}) => {
  return (
    <div className="container ">
      <input
        className="border-b-2 border-b-[rgb(26, 145, 162)] w-[400px] h-[60px] focus:border-b-indigo-500 focus:outline-none text-[25px]"
        placeholder="Type your answer here"
        pattern={isNumber ? "^[1-9][0-9]{0,9}$" : ""}
        onChange={(e) => {
          console.info(e.target.validity, "<<<< apa dia");
        }}
      ></input>
      {isPercentage && (
        <div className="relative right-0 text-black text-[25px]">%</div>
      )}
    </div>
  );
};

export default Input;
