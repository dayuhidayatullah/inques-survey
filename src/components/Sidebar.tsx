import {Link} from "react-router-dom";
// import React from "react";
// import { BsFillKanbanFill } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
// import Image from "next/image";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { GoTasklist } from "react-icons/go";
import { AiOutlineTeam } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { MdOutlineChat } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import InquesLogo from '../assets/Inques_logo0-removebg-preview.png'
// import { RxAvatar } from "react-icons/rx";
// import Avatar from "../assets/avatar.jpeg";
const Sidebar = () => {
  return (
    <div className="container relative max-w-64 h-[100vh] border-r-2 border-slate-100 pl-6 pt-4">
      <nav className="h-full flex-col flex justify-between">
        {/* <div className='flex justify-between'> */}
        <ul className="mb-4">
          <li className="flex gap-2 items-center pb-4">
            <img
              src={InquesLogo}
              alt="K"
              width={90}
              height={50}
            />
            {/* <h3 className="text-bold text">Kanva</h3> */}
          </li>
          <li>
            <Link to="Overview" className="flex gap-2 items-center pb-4">
              <RxDashboard />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="notifications" className="flex gap-2 items-center pb-4">
              <IoIosNotificationsOutline />
              <p>Dashboard Inventory</p>
            </Link>
          </li>
          <li>
            <Link to="projects" className="flex gap-2 items-center pb-4">
              <HiOutlineRectangleStack />
              <p>Activation</p>
            </Link>
          </li>
          <li>
            <Link to="tasks" className="flex gap-2 items-center pb-4">
              <GoTasklist />
              <p>Export</p>
            </Link>
          </li>
          <li className="border-b-[1px] border-slate-100 h-[1px]"></li>
          <li>
            <Link to="team-member" className="flex gap-2 items-center pb-4 mt-3">
              <AiOutlineTeam />
              <p>Survey & Questionnare</p>
            </Link>
          </li>
          <li>
            <Link to="calender" className="flex gap-2 items-center pb-4">
              <SlCalender />
              <p>Forms</p>
            </Link>
          </li>
          <li>
            <Link to="support" className="flex gap-2 items-center pb-4 ">
              <MdOutlineChat />
              <p>Quizzes</p>
            </Link>
          </li>

          <li>
            <Link to="setting" className="flex gap-2 items-center pb-4">
              <IoSettingsOutline />
              <p>Polls</p>
            </Link>
          </li>
          <li className="border-b-[1px] border-slate-100 h-[1px]"></li>
          <li>
            <Link to="setting" className="flex gap-2 items-center pb-4 mt-3">
              <IoSettingsOutline />
              <p>Inventory</p>
            </Link>
          </li>
          <li>
            <Link to="setting" className="flex gap-2 items-center pb-4">
              <IoSettingsOutline />
              <p>Setting</p>
            </Link>
          </li>
          <li>
            <Link to="setting" className="flex gap-2 items-center pb-4">
              <IoSettingsOutline />
              <p>Value</p>
            </Link>
          </li>
          <li>
            <Link to="setting" className="flex gap-2 items-center pb-4">
              <IoSettingsOutline />
              <p>Variable</p>
            </Link>
          </li>
          <li>
            <Link to="setting" className="flex gap-2 items-center pb-4">
              <IoSettingsOutline />
              <p>Import</p>
            </Link>
          </li>
        </ul>
        <ul className="border-t-2 border-slate-100 mb-5">
          <li>
            <Link to="support" className="flex gap-2 items-center pb-4 mt-3">
              <MdOutlineChat />
              <p>Quizzes</p>
            </Link>
          </li>
          <li>
            <Link to="setting" className="flex gap-2 items-center pb-4">
              <IoSettingsOutline />
              <p>Polls</p>
            </Link>
          </li>
          <li>
            <Link to="account" className="flex gap-2 items-center">
              {/* <img src={Avatar} alt="avatar" width="32" height={32}></img> */}
              <div>
                <p>Username</p>
                <p>Username@gmail.com</p>
              </div>
            </Link>
          </li>
        </ul>

        {/* </div> */}
      </nav>
    </div>
  );
};

export default Sidebar;
