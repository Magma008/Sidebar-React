import logo from "../../assets/whiteLogo.png";
import { MdHome, MdEditSquare, MdPermMedia } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { FaCommentDots, FaUsers } from "react-icons/fa";
import { IoApps, IoBagHandle, IoSettingsSharp, IoExit, IoMoon, } from "react-icons/io5";
import { IoMdSwitch } from "react-icons/io";
// import {  IoIosSunny } from "react-icons/io";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);


  return (
    <div className={`fixed top-0 left-0 ${open ? "w-[240px]" : "w-[80px]"}  overflow-hidden bg-red-400 min-h-screen transition-all duration-100 border-r-2  border-gray-400`}>
      <div  className="px-[5px] min-h-screen  flex flex-col bg-white py-1 sm:py-3 ">
        <div className="flex items-center gap-3 mb-3 justify-start px-3">
          <button onClick={() => setOpen(!open)}>
            <img  src={logo} className="w-[27px] sm:w-[auto] cursor-pointer" alt="logo" />
          </button>
          {
            open ? <a className="links" href="#">Cummo</a> : <></>
          }
        </div>
        <ul className="flex flex-col text-gray-700 gap-3 px-3 justify-[start]">
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <MdHome className="text-[23px] sm:text-[30px]" />
            {open ? <p className="links">Dashboard</p> : <></>}
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <MdEditSquare className="text-[23px] sm:text-[30px]" />
            {open ? <p className="links">Posts</p> : <></>}
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <MdPermMedia className="text-[23px] sm:text-[30px]" />
            {
              open ? <p className="links">Media</p> : <></>
            }
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <GrDocumentText className="text-[23px] sm:text-[30px]" />
            {
              open ? <p className="links">Pages</p> : <></>
            }
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <FaCommentDots className="text-[23px] sm:text-[30px]" />
            {
              open ? <p className="links">Comments</p> : <></>
            }
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <IoApps className="text-[23px] sm:text-[30px]" />
            {
              open ? <p className="links">Apperance</p> : <></>
            }
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <IoBagHandle className="text-[23px] sm:text-[30px]" />
            {
              open ? <p className="links">Plugins</p> : <></>
            }
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <FaUsers className="text-[23px] sm:text-[30px]" />
            {
              open ? <p className="links">Users</p> : <></>
            }
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <IoSettingsSharp className="text-[23px] sm:text-[30px]" />
            {
              open ? <p className="links">Settings</p> : <></>
            }
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer">
            <IoMdSwitch className="text-[23px] sm:text-[30px]" />
            {
              open ? <p className="links">Tools</p> : <></>
            }
          </li>
        </ul>
        <ul className="flex flex-col text-gray-700 gap-3 px-3 justify-center mt-[auto]">
          <li className="flex justify-start items-center gap-3">
            {/* <IoIosSunny className="text-[23px] sm:text-[30px]" /> */}
            <IoMoon className="text-[23px] sm:text-[30px]" />
            {
              open ? <p className="">Light Mode</p> : <></>
            }
          </li>
          <li className="flex justify-center items-center bg-gray-700 text-white  gap-3">
            <IoExit className="text-[23px]${} sm:text-[30px]" />
            {
              open ? <p className="">Logout</p> : <></>
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
