import React from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center select-none  w-full">
      <h1 className="text-3xl font-medium tracking-wide">All Partners</h1>
      <div className="flex space-x-4 items-center">
        <button className="bg-blue-600 border-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-200 text-white px-4  py-[6px]  rounded-[25px] text-[14px] font-semibold font-sans border-[0.5px]  flex items-center   ">
          Add Partner
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-[6px] transition-all duration-200 border-[0.5px] border-blue-800  rounded-[25px] text-[14px] text-blue-700 gap-[5px] flex items-center space-x-1 ">
          Bulk Add
          <IoIosArrowDown />
        </button>
        <button className="p-3 hover:bg-gray-200 rounded-full">
          <BsThreeDotsVertical size={16} />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
