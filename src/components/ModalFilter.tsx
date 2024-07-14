// import React from 'react'
"use client";
import React, { useRef, Fragment, ButtonHTMLAttributes } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsEmojiKiss } from "react-icons/bs";
// import Image from "next/image";
// import Avatar from "@/assets/avatar.jpeg";
interface ValueFilter  {
  questionTypeValue: string;
  setQuestionTypeValue: React.Dispatch<React.SetStateAction<string>>;
  questionTypeIdValue: string; 
  setQuestionTypeIdValue: React.Dispatch<React.SetStateAction<string>>;
 
}
interface QuestionTypeId {
    bActive: string;
    bDuration: string;
    created_at: string;
    decDuration: string;
    decTargetVotes: string;
    dtmEnd: string
    dtmStart: string
    id: string
    szAuthor: string;
    szDescQuestion: string; 
    szNetworkId: string;
    szQuestionId: string;
    szTerritoryId: string;
    szTrnId: string;
    updated_at: string;
}
export default function ModalFilter({
  isOpen,
  setIsOpen,
  filterBySurvey,
  valueFilter,
  questionTypeIdList
}: {
  isOpen: boolean;
  setIsOpen: Function;
  filterBySurvey: boolean;
  valueFilter: ValueFilter;
  questionTypeIdList: QuestionTypeId[]
  }) {
  const completeButtonRef = useRef(null);
  function completeOrder() {
    // ...
  }
  const questionType = [{
    id: 1,
    name: 'SURVEY'
  },{
    id: 2,
    name: 'POLL'
  },{
    id: 3,
    name: 'QUIZ'
  }]
  return (
    /* Use `initialFocus` to force initial focus to a specific ref. */
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full justify-end text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-in duration-300"
                enterFrom="opacity-0 scale-95 -translate-x-full"
                enterTo="opacity-100 scale-100 translate-x-0"
                leave="ease-out duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-l-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Filter By
                  </Dialog.Title>
                  {filterBySurvey && (
                    <>
                    <div className="mt-2 flex justify-between items-center">
                      <p className="text-lg text-gray-500">Question Type</p>
                      <button className="rounded-xl text-gray-800 border-2 p-1">
                        <p>Clear filter</p>    
                      </button>
                    </div>
                    <div className="flex flex-col">
                    <ul>
                      {questionType.map(el => {
                        return (
                          <li>
                        <div className="flex items-center ps-2  rounded dark:border-gray-700">
                          <input
                            checked={valueFilter.questionTypeValue === el.name}
                            id={el.name}
                            type="radio"
                            value={valueFilter.questionTypeValue}
                            name={el.name}
                            onClick={(e) => {
                              // console.info(e.target.name, '<<<event ')
                              valueFilter.setQuestionTypeValue((e.target as HTMLTextAreaElement).name)
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:outline-none  dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor={el.name}
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {el.name}
                          </label>
                        </div>
                      </li>
                        )
                      })}
                    </ul>
                    {valueFilter.questionTypeValue && (
                      <>
                        <div className="mt-2 flex justify-between items-center">
                        <p className="text-lg text-gray-500">Question Id</p>
                        <button className="rounded-xl text-gray-800 border-2 p-1">
                          <p>Clear filter</p>    
                        </button>
                      </div>
                      <ul>
                      {questionTypeIdList?.map(el => {
                        return (
                          <li>
                        <div className="flex items-center ps-2  rounded dark:border-gray-700">
                          <input
                            checked={valueFilter.questionTypeIdValue === el.szQuestionId}
                            id={el.szQuestionId}
                            type="radio"
                            value={valueFilter.questionTypeIdValue}
                            name={el.szQuestionId}
                            onClick={(e) => {
                              // console.info(e.target.name, '<<<event ')
                              valueFilter.setQuestionTypeIdValue((e.target as HTMLTextAreaElement).name)
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:outline-none  dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor={el.szQuestionId}
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {el.szQuestionId}
                          </label>
                        </div>
                      </li>
                        )
                      })}
                    </ul>
                      </>
                      )}
                    </div>
                  </> 
                  )}
                  <div className="mt-2 flex justify-between items-center">
                    <p className="text-lg text-gray-500">Date Range</p>
                    <button className="rounded-xl text-gray-800 border-2 p-1">
                      <p>Clear filter</p>
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <ul>
                      <li>
                        <div className="flex items-center ps-2  rounded dark:border-gray-700">
                          <input
                            checked
                            id="bordered-radio-2"
                            type="radio"
                            value=""
                            name="bordered-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="bordered-radio-2"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Checked state
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center ps-2  rounded dark:border-gray-700">
                          <input
                            checked
                            id="bordered-radio-2"
                            type="radio"
                            value=""
                            name="bordered-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="bordered-radio-2"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Checked state
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center ps-2  rounded dark:border-gray-700">
                          <input
                            checked
                            id="bordered-radio-2"
                            type="radio"
                            value=""
                            name="bordered-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="bordered-radio-2"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Checked state
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center ps-2  rounded dark:border-gray-700">
                          <input
                            checked
                            id="bordered-radio-2"
                            type="radio"
                            value=""
                            name="bordered-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="bordered-radio-2"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Checked state
                          </label>
                        </div>
                        <div className="flex justify-end ">
                          <div className="relative max-w-sm">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                              <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                              </svg>
                            </div>
                            <input
                              type="date"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Select date"
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <div className="mt-2 flex justify-between items-center">
                      <p className="text-lg text-gray-500">Assigned to</p>
                      <button className="rounded-xl text-gray-800 border-2 p-1">
                        <p>Clear filter</p>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* <Image
                          className="w-[50px] h-[50px] rounded-2xl"
                          src={Avatar}
                          alt=""
                        /> */}
                        <p>Waluyo</p>
                      </div>
                      <input
                        checked
                        id="bordered-radio-2"
                        type="radio"
                        value=""
                        name="bordered-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* <Image
                          className="w-[50px] h-[50px] rounded-2xl"
                          src={Avatar}
                          alt=""
                        /> */}
                        <p>Waluyo</p>
                      </div>
                      <input
                        checked
                        id="bordered-radio-2"
                        type="radio"
                        value=""
                        name="bordered-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* <Image
                          className="w-[50px] h-[50px] rounded-2xl"
                          src={Avatar}
                          alt=""
                        /> */}
                        <p>Waluyo</p>
                      </div>
                      <input
                        checked
                        id="bordered-radio-2"
                        type="radio"
                        value=""
                        name="bordered-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
