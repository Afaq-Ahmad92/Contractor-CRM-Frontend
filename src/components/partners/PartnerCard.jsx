// import React, { useState } from "react";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import StarIcon from "@mui/icons-material/Star";
// import { BsThreeDotsVertical } from "react-icons/bs";
// const PartnerCard = ({
//   name,
//   email,
//   phone,
//   address,
//   groups,
//   rating,
//   statusIcon,
// }) => {
//   const [menu, setMenu] = useState(false);
//   return (
//     <div className=" relative border-[1px]  p-4 rounded-lg hover:border-blue-500 focus:border-blue-500   flex flex-col items-center text-center  group">
//       <div className=" bg-[#c8f0f58c] flex text-blue-400 px-[7px] py-[2px] text-[11px] rounded-[3px] group absolute top-2 group-hover:hidden  right-2 font-sans  ">
//         partners
//       </div>
//       <BsThreeDotsVertical
//         className="group-hover:block hidden absolute top-3 right-3 text-[17px] text-gray-500 cursor-pointer"
//         onClick={() => setMenu(!menu)}
//       />
//       <input
//         type="checkbox"
//         className=" w-[15px] h-[15px] group-hover:block hidden absolute top-3 left-3"
//       />{" "}
//       <aside
//         className={` ${
//           menu ? "block" : "hidden"
//         }  bg-gray-800  absolute top-0 `}
//       ></aside>
//       <div className=" mt-[20px] flex flex-col gap-[4px] pt-[7px] w-[99%] items-center h-[230px] py-2 border-b-[0.5px]">
//         <img
//           src={"/profile.avif"}
//           alt={name}
//           className="w-24 h-24 rounded-[50%] object-cover "
//         />
//         <h2 className="text-lg text-blue-500 font-medium ">{name}</h2>
//         {rating && (
//           <div className="flex items-center space-x-1 text-yellow-500">
//             <StarIcon />
//             <span>{rating}</span>
//           </div>
//         )}
//       </div>
//       <div className="w-full flex flex-col gap-[6px] py-[23px]">
//         <div className="flex items-center text-gray-500 space-x-2 text-[14px] ">
//           <EmailIcon fontSize="small" />
//           <span className=" text-[13px] ">{email}</span>
//         </div>
//         <div className="flex items-center text-gray-500 space-x-2 ">
//           <PhoneIcon fontSize="small" />
//           <span className="text-[13px]">{phone}</span>
//         </div>
//         <div className="flex items-center text-gray-500 space-x-2 ">
//           <LocationOnIcon fontSize="small" />
//           <span className=" text-[13px] ">{address}</span>
//         </div>
//       </div>
//       {groups && <div className="text-sm text-blue-500 mt-2">{groups}</div>}
//       {statusIcon && <div className="mt-2">{statusIcon}</div>}
//     </div>
//   );
// };

// export default PartnerCard;

import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import { BsThreeDotsVertical } from "react-icons/bs";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupIcon from "@mui/icons-material/Group";
import ShieldIcon from "@mui/icons-material/Shield";
import ListIcon from "@mui/icons-material/List";
import ArchiveIcon from "@mui/icons-material/Archive";
import DescriptionIcon from "@mui/icons-material/Description";
import EditIcon from "@mui/icons-material/Edit";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ReplayIcon from "@mui/icons-material/Replay";
import PreviewIcon from "@mui/icons-material/Preview";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";

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

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div
      className="relative border-[1px] p-4 rounded-lg hover:border-blue-500 focus:border-blue-500 flex flex-col items-center text-center group"
      onMouseLeave={closeMenu} // Close menu when mouse leaves the card
    >
      {/* Partner Label */}
      <div className="bg-[#c8f0f58c] flex text-blue-400 px-[7px] py-[2px] text-[11px] rounded-[3px] absolute top-2 group-hover:translate-x-[-40px] right-2 font-sans transition-transform duration-300">
        partners
      </div>

      {/* Three Dots Icon */}
      <BsThreeDotsVertical
        className="group-hover:block hidden absolute top-3 right-3 text-[17px] text-gray-500 cursor-pointer"
        onClick={toggleMenu}
      />

      {/* Options Menu */}
      {menu && (
        <div
          className="absolute   bg-white border rounded-lg shadow-lg w-72 z-[9999]"
        >
          <ul className="py-2 text-sm text-gray-700">
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <StarIcon className="text-gray-500 mr-2" /> Add Review
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FavoriteIcon className="text-gray-500 mr-2" /> Add to Favorites
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <GroupIcon className="text-gray-500 mr-2" /> Add to Group
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <ShieldIcon className="text-gray-500 mr-2" /> Add to Insurance
              Request
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <ListIcon className="text-gray-500 mr-2" /> Add to List
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <ArchiveIcon className="text-gray-500 mr-2" /> Archive
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <DescriptionIcon className="text-gray-500 mr-2" /> Create Contract
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <EditIcon className="text-gray-500 mr-2" /> Edit Profile
              Information
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <SyncAltIcon className="text-gray-500 mr-2" /> Manage Workflows
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <DeleteIcon className="text-gray-500 mr-2" /> Remove
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FeedbackIcon className="text-gray-500 mr-2" /> Request Feedback
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <ReplayIcon className="text-gray-500 mr-2" /> Resend Invitations
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <PreviewIcon className="text-gray-500 mr-2" /> Review Onboarding
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <AddTaskIcon className="text-gray-500 mr-2" /> Send Agreement for
              Signing
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <DraftsIcon className="text-gray-500 mr-2" /> Send Email Login
              Link
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <SendIcon className="text-gray-500 mr-2" /> Send Message
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <ShareIcon className="text-gray-500 mr-2" /> Share Profile
            </li>
          </ul>
        </div>
      )}

      {/* Partner Details */}
      <div className="mt-[20px] flex flex-col gap-[4px] pt-[7px] w-[99%] items-center h-[230px] py-2 border-b-[0.5px]">
        <img
          src={"/profile.avif"}
          alt={name}
          className="w-24 h-24 rounded-[50%] object-cover"
        />
        <h2 className="text-lg text-blue-500 font-medium">{name}</h2>
        {rating && (
          <div className="flex items-center space-x-1 text-yellow-500">
            <StarIcon />
            <span>{rating}</span>
          </div>
        )}
      </div>

      {/* Contact Details */}
      <div className="w-full flex flex-col gap-[6px] py-[23px]">
        <div className="flex items-center text-gray-500 space-x-2 text-[14px]">
          <EmailIcon fontSize="small" />
          <span className="text-[13px]">{email}</span>
        </div>
        <div className="flex items-center text-gray-500 space-x-2">
          <PhoneIcon fontSize="small" />
          <span className="text-[13px]">{phone}</span>
        </div>
        <div className="flex items-center text-gray-500 space-x-2">
          <LocationOnIcon fontSize="small" />
          <span className="text-[13px]">{address}</span>
        </div>
      </div>
      {groups && <div className="text-sm text-blue-500 mt-2">{groups}</div>}
      {statusIcon && <div className="mt-2">{statusIcon}</div>}
    </div>
  );
};

export default PartnerCard;
