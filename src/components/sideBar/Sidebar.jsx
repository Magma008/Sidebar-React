import logo from "../../assets/whiteLogo.png";
import { MdHome, MdEditSquare, MdPermMedia } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { FaCommentDots, FaUsers } from "react-icons/fa";
import {
  IoApps,
  IoBagHandle,
  IoSettingsSharp,
  IoExit,
  // IoMoon,
} from "react-icons/io5";
import { IoMdSwitch } from "react-icons/io";
// import {  IoIosSunny } from "react-icons/io";
import { useState } from "react";
import Themeswitch from "../ThemeSwitch/Themeswitch";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 ${
        open ? "w-[240px]" : "w-[80px]"
      }  overflow-hidden bg-red-400 min-h-screen transition-all duration-200 border-r-2  border-gray-400`}
    >
      <div className="px-[5px] min-h-screen  flex flex-col bg-white dark:bg-slate-800  py-1 sm:py-3 ">
        <div className="flex items-center dark:text-white gap-3 mb-3 justify-start px-3">
          <div className="shrink-0">
            <button onClick={() => setOpen(!open)}>
              <img
                src={logo}
                className="w-[27px] sm:w-[auto] cursor-pointer"
                alt="logo"
              />
            </button>
          </div>
          {open ? (
            <a className="links text-[28px]" href="#">
              Cummo
            </a>
          ) : (
            <></>
          )}
        </div>
        <ul className="flex flex-col dark:text-white text-gray-700 gap-3 px-3 justify-[start]">
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <div>
              <MdHome className="text-[23px] sm:text-[30px]" />
            </div>
            {open ? <p className="links">Dashboard</p> : <></>}
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <div>
              <MdEditSquare className="text-[23px] sm:text-[30px]" />
            </div>
            {open ? <p className="links">Posts</p> : <></>}
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <div>
              <MdPermMedia className="text-[23px] sm:text-[30px]" />
            </div>
            {open ? <p className="links">Media</p> : <></>}
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <div>
              <GrDocumentText className="text-[23px] sm:text-[30px]" />
            </div>
            {open ? <p className="links">Pages</p> : <></>}
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <div>
              <FaCommentDots className="text-[23px] sm:text-[30px]" />
            </div>
            {open ? <p className="links">Comments</p> : <></>}
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <div>
              <IoApps className="text-[23px] sm:text-[30px]" />
            </div>
            {open ? <p className="links">Apperance</p> : <></>}
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <div>
              <IoBagHandle className="text-[23px] sm:text-[30px]" />
            </div>
            {open ? <p className="links">Plugins</p> : <></>}
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <div>
              <FaUsers className="text-[23px] sm:text-[30px]" />
            </div>
            {open ? <p className="links">Users</p> : <></>}
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <div>
              <IoSettingsSharp className="text-[23px] sm:text-[30px]" />
            </div>
            {open ? <p className="links">Settings</p> : <></>}
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <div>
              <IoMdSwitch className="text-[23px] sm:text-[30px]" />
            </div>
            {open ? <p className="links">Tools</p> : <></>}
          </li>
        </ul>
        <ul className="flex flex-col dark:text-white text-gray-700 gap-3 px-3 justify-center mt-[auto]">
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            {/* <IoIosSunny className="text-[23px] sm:text-[30px]" /> */}
            <div>
              {/* <IoMoon className="text-[23px] sm:text-[30px]" /> */}
              <Themeswitch />
            </div>
            {open ? <p className="">Light Mode</p> : <></>}
          </li>
          <li className={`flex pl-1 justify-${open ? "start" : "center"} items-center bg-gray-700 dark:bg-white text-white dark:text-gray-700  gap-3 cursor-pointer`}>
            <div>
              <IoExit className="text-[23px] sm:text-[30px]" />
            </div>
            {open ? <p className="">Logout</p> : <></>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
