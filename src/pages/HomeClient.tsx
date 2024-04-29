import React from 'react'
import Paging from '../components/Layout/Paging'
const tempData = [
    {
      type: "priority",
      question: "Apakah Anda Ingin ?",
    },
    {
      type: "date",
      question: "Apakah Anda Ingin ?",
      description: "Yang Bener Aja ",
    },
    {
      type: "likert",
      question: "Apakah Anda Ingin ?",
      description: "Selection Likert ",
    },
    {
      type: "likertRating",
      question: "Apakah Anda Ingin ?",
    },
    {
      type: "selectionImage",
      question: "Apakah Anda Ingin ?",
    },
    {
      type: "selectionImageText",
      question: "Apakah Anda Ingin ?",
    },
    {
      type: "input",
      question: "Apakah Anda Ingin ?",
    },
    {
      type: "dropdown",
      question: "Apakah Anda Ingin ?",
    },

    {
      type: "selectionText",
      question: "Apakah Anda Ingin ?",
    },
    {
      type: "ratingStar",
      question: "Selection Likert ?",
    },
    {
      type: "multiple",
      question: "Apakah Anda Ingin ?",
    },
  ];
const HomeClient = () => {
  return (
    <Paging items={tempData}/>
  )
}

export default HomeClient