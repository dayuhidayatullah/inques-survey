import {  useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import DropdownHeader from "./DropdownHeader";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClickHeaderUser = () => {
    setIsOpen(!isOpen)
  }
  // console.info(refDropdown, '<<<< apa dia')
  return (
    <header
      className="py-8 shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)] sticky top-0 z-10 "
      id="headerInques"
    >
      <div className="container flex justify-between items-center w-full mx-auto max-[640px]:px-[15px]">
        <img src="https://home.humanisgroup.co.id/InQues/images/Logo-small.png" />
        <div className="flex gap-2 items-center relative cursor-pointer" onClick={handleClickHeaderUser}>
          <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQX0QlkFaOqBu8cyvf8QFx7ipJBlSXqRT-Q&s" alt="Bordered avatar" />
          <div className="absolute bottom-0 right-[-6px] bg-gray-300 rounded-[50%] border-white border-2 ">
            {/* <FaChevronDown /> */}
            <FaChevronCircleDown />
          </div>
        </div>
          <DropdownHeader setIsOpen={setIsOpen} isOpen={isOpen} imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQX0QlkFaOqBu8cyvf8QFx7ipJBlSXqRT-Q&s" username="sandi" />
        {/* <p>Login</p> */}
      </div>
    </header>
  );
};

export default Header;
