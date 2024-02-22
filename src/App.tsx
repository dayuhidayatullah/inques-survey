import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import SteperStrip from './components/SteperStrip'
import { FaArrowLeft } from "react-icons/fa6";
import SelectionText from './components/SelectionText'
import SelectionImage from './components/SelectionImage'
import SelectionLikert from './components/SelectionLikert'
import SelectionDropdown from './components/SelectionDropdown'
import SelectionRating from './components/SelectionRating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container m-auto'>
        <Header />
        <SteperStrip />
        <div className='container flex gap-[40px]'>
          <FaArrowLeft className='font-semibold text-[30px] mt-[18px]' />
          <div>

            <p className='font-bold text-[40px]'> What are your goals</p>
            <div className='description mb-[20px]'>
              <p className=''>Well help you crush them with our award-winnig tools</p>
            </div>
            <SelectionText />
            <SelectionImage text={true} />
            <SelectionLikert />
            <SelectionDropdown />
            <SelectionRating />
          </div>
        </div>
        </div>
    </>
  )
}

export default App
