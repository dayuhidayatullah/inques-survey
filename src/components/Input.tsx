import React, { useEffect, useMemo, useState } from "react";

const Input = ({
  isNumber,
  isPercentage,
}: {
  isNumber: boolean;
  isPercentage: boolean;
}) => {
  const [valueInput, setValueInput] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  const [messageInvalid, setMessageInvalid] = useState("");
  const [onTyping, setOnTyping] = useState("");
  useEffect(() => {
    // if (invalidInput) {
    //   setInvalidInput(true);
    // }
    console.info(invalidInput, "<<<< invalid");
  }, [invalidInput]);
  const [animatedClass, setAnimatedClass] = useState(
    "animate__animated animate__shakeX"
  );
  useEffect(() => {
    if (invalidInput) {
      console.info();

      setTimeout(() => {
        setInvalidInput(false);
        setAnimatedClass("");
      }, 150);
    }
  }, [invalidInput]);
  const renderInput = useMemo(() => {
    return (
      <div>
        <div
          className={`container relative max-w-[400px] ${
            invalidInput ? animatedClass : ""
          }`}
        >
          <input
            className="border-b-2 border-b-[rgb(26, 145, 162)] w-[400px] h-[60px] focus:border-b-indigo-500 focus:outline-none text-[25px] break-words text-wrap pr-[50px]"
            placeholder="Type your answer here"
            // pattern={isNumber ? "^[1-9][0-9]{0,9}$" : ""}
            value={valueInput}
            onInput={(e) => {
              console.info(e, "<<< onInput");
            }}
            onChange={(e) => {
              const pattern = new RegExp("^[1-9][0-9]{0,9}$");
              if (pattern.test(e.target.value)) {
                setValueInput(Number(e.target.value).toString());
                setInvalidInput(false);
                setMessageInvalid("");
              } else {
                if (e.target.value === "") {
                  setValueInput("");
                  setInvalidInput(false);
                  setMessageInvalid("");
                } else {
                  setInvalidInput(true);
                  setAnimatedClass(
                    "animate__animated animate__shakeX animate__infinite	infinite"
                  );
                  setMessageInvalid("Number Only !");
                }
              }
            }}
            onKeyDown={(e) => {
              console.info(e.key, "<<<< event key");
            }}
          ></input>
          {isPercentage && (
            <div className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-2 text-black text-[25px]">
              %
            </div>
          )}
        </div>
        <div className="flex p-2">
          <p className="text-red-400">{messageInvalid}</p>
        </div>
      </div>
    );
  }, [messageInvalid, invalidInput, valueInput, animatedClass]);
  return renderInput;
};

export default Input;
