import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import image from "../public/WhatsApp Image 2024-09-01 at 10.23.27_2c08229d.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
const PartnerCard = ({
  name,
  email,
  phone,
  address,
  groups,
  rating,
  statusIcon,
}) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" relative border-[1px]  p-4 rounded-lg hover:border-blue-500 focus:border-blue-500   flex flex-col items-center text-center  group">
      <div className=" bg-[#c8f0f58c] flex text-blue-400 px-[7px] py-[2px] text-[11px] rounded-[3px] group absolute top-2 group-hover:hidden  right-2 font-sans  ">
        partners
      </div>
      <BsThreeDotsVertical
        className="group-hover:block hidden absolute top-3 right-3 text-[17px] text-gray-500 cursor-pointer"
        onClick={() => setMenu(!menu)}
      />
      <input
        type="checkbox"
        className=" w-[15px] h-[15px] group-hover:block hidden absolute top-3 left-3"
      />{" "}
      <aside
        className={` ${
          menu ? "block" : "hidden"
        }  bg-gray-800  absolute top-0 `}
      >
      </aside>
      <div className=" mt-[20px] flex flex-col gap-[4px] pt-[7px] w-[99%] items-center h-[230px] py-2 border-b-[0.5px]">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-[50%] object-cover "
        />
        <h2 className="text-lg text-blue-500 font-medium ">{name}</h2>
        {rating && (
          <div className="flex items-center space-x-1 text-yellow-500">
            <StarIcon />
            <span>{rating}</span>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col gap-[6px] py-[23px]">
        <div className="flex items-center text-gray-500 space-x-2 text-[14px] ">
          <EmailIcon fontSize="small" />
          <span className=" text-[13px] ">{email}</span>
        </div>
        <div className="flex items-center text-gray-500 space-x-2 ">
          <PhoneIcon fontSize="small" />
          <span className="text-[13px]">{phone}</span>
        </div>
        <div className="flex items-center text-gray-500 space-x-2 ">
          <LocationOnIcon fontSize="small" />
          <span className=" text-[13px] ">{address}</span>
        </div>
      </div>
      {groups && <div className="text-sm text-blue-500 mt-2">{groups}</div>}
      {statusIcon && <div className="mt-2">{statusIcon}</div>}
    </div>
  );
};

export default PartnerCard;
