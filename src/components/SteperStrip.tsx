import React from "react";

const SteperStrip = ({
  activeStep,
  totalQuestion,
}: {
  activeStep: number;
  totalQuestion: number;
}) => {
  console.info(activeStep, "<< activestep");
  const data = [...new Array(totalQuestion)].map((_, i) => i + 1);

  return (
    <div className="container mx-auto flex gap-7 mb-6">
      {data.map((el) => {
        return (
          <div
            className={`w-9 h-2 ${
              activeStep >= el ? "bg-indigo-500" : "bg-slate-500 "
            } rounded-md`}
          ></div>
        );
      })}
      {/* <div className='w-9 h-2 bg-slate-500 rounded-md'></div> */}
      {/* <div className='w-9 h-2 bg-slate-500 rounded-md'></div> */}
      {/* <div className='w-9 h-2 bg-slate-500 rounded-md'></div> */}
    </div>
  );
};

export default SteperStrip;
