import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSurvey } from "../hooks/useSurvey";
import { IOptionItems, QuestionProps } from "../types/surveys";

interface OptionProps {
  bImageOption: number;
  decOptionScore: string;
  id: number;
  shItem: number;
  szOptionId: string;
  szValueId: string;
  szOption: string;
}

const SelectionDropdown = ({
  options,
  setShowListDropdown,
  showListDropdown,
  inputDropdownValue,
  setInputDropdownValue
}: {
  options?: IOptionItems[];
  setShowListDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  showListDropdown: boolean;
  inputDropdownValue: string;
  setInputDropdownValue: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(showListDropdown);
  const [filteredOptions, setFilteredOptions] = useState<IOptionItems[] | undefined>(options);
  const surveyStore = useSurvey();
  const refInput = useRef<HTMLInputElement>(null);
  const timeout = useRef<number | null>(null);  // Use number instead of NodeJS.Timeout
  const [searchValue, setSearchValue] = useState(inputDropdownValue);

  const handleOptionClick = (el: OptionProps, i: number) => {
    if (surveyStore.activeStep) {
      surveyStore.setQuestionList(
        surveyStore.questionList.map((value: QuestionProps): QuestionProps => {
          if (value.shItem === surveyStore.activeStep) {
            console.info('gamasuk if if else', value, value.answer === el.id, el.szOption)
            if (value.answer === el.id) {
              setInputDropdownValue('')
              setSearchValue('')
              return {
                ...value,
                answer: '',
              };
            }
            
            else {
              setInputDropdownValue(el.szOption)
              setSearchValue(el.szOption)
              return {
                ...value,
                answer: el.id,
              };
            }
          }
          return value;
        })
      );
    }
    // setShowDropdown(false)
    setShowListDropdown(false)
    console.info(el, )
    setTimeout(() => {
      if (answer !== el.id) {
        // surveyStore.nextStepSurvey();
      }
    }, 400);
  };

  const answer = useMemo(() => {
    if (surveyStore.activeStep) {
      return surveyStore.questionList.find(
        (el) => el.shItem === surveyStore.activeStep
      )?.answer;
    }
  }, [surveyStore.questionList, surveyStore.activeStep]);

  useEffect(() => {
    console.info(inputDropdownValue, '<<< inputDropdown value')
    if (options) {
      if (searchValue) {
        setFilteredOptions(options.filter((value) => value?.szOption?.toLowerCase()?.includes(searchValue?.toLowerCase())));
      } else {
        setFilteredOptions(options);
      }
    }
  }, [options, searchValue]);
  // useEffect(() => {
  //   setSearchValue(inputDropdownValue);
  // }, [inputDropdownValue]);

  return (
    <div className="container">
      <div className="relative">
        <div className="w-full relative">
          <input
            onFocus={() => {
              if (timeout.current) {
                clearTimeout(timeout.current);
              }
              setShowDropdown(true);
              setShowListDropdown(true);
            }}
            onBlur={() => {
              if (timeout.current) {
                clearTimeout(timeout.current);
              }
              timeout.current = window.setTimeout(() => {
                setShowDropdown(false);
                setShowListDropdown(false);
              }, 200);
            }}
            value={searchValue}
            ref={refInput}
            id="inputDropdown"
            className="block pe-[32px] ps-0 border-none outline-none rounded-none w-full"
            style={{ paddingBlockEnd: '8px' }}
            type="text"
            placeholder="Dropdown"
            onChange={(e) => {
              setSearchValue(e.target.value)
              // setInputDropdownValue(e.target.value )
            }}
          />
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              setShowDropdown((prev) => !prev);
              setShowListDropdown((prev) => !prev);
            }}
            className="absolute inset-y-0 right-0 flex items-center px-2"
          >
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            showDropdown ? 'block' : 'block opacity-0 invisible'
          }`}
        >
          <div
            id="dropdownHover"
            className={`z-30 absolute divide-y divide-gray-100 dark:bg-gray-700 w-full transition-[height] duration-[150ms] ease-out delay-0`}
          >
            <ul
              className={`py-2 text-sm text-gray-700 dark:text-gray-200 ${
                showDropdown ? 'max-h-full' : 'max-h-0'
              } overflow-auto`}
              style={{
                paddingInline: '0px',
                paddingBlockStart: '8px',
                paddingBlockEnd: '16px',
              }}
            >
              {filteredOptions?.map((el, i) => (
                <li
                  key={el.id}
                  onClick={() => handleOptionClick(el, i)}
                  className="relative flex items-center rounded-[20px] pb-1 mb-[4px] shadow-[rgba(93,152,219,0.6)] h-[inherit] max-w-full min-h-[40px] outline-0 pointer w-full opacity-[1] bg-[#f0efeb] hover:bg-[#f5ebe0] cursor-pointer"
                >
                  <div className="w-full min-w-[100px] flex items-center flex-1 text-start pl-[16px]">
                    <span className="max-w-full w-[inherit] font-light">
                      {el.szOption}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionDropdown;