import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Avatar, Divider, Button } from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import StorefrontIcon from "@mui/icons-material/Storefront";
import WorkIcon from "@mui/icons-material/Work";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LayersIcon from "@mui/icons-material/Layers";
import InsightsIcon from "@mui/icons-material/Insights";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { useStateContext } from "../../context/store";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [contactsOpen, setContactsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const { deviceType } = useStateContext();
  const links = [
    { icon: <ContactsIcon />, label: "Contacts", link: "/" },
    {
      icon: <StorefrontIcon />,
      label: "Marketplace",
      link: "/marketplace",
    },
    {
      icon: <WorkIcon />,
      label: "Accounts & Work Orders",
      link: "/accounts",
    },
    {
      icon: <ReceiptIcon />,
      label: "Invoices",
      link: "/invoices",
    },
    {
      icon: <LayersIcon />,
      label: "Workflows",
      link: "/workflows",
    },
    {
      icon: <InsightsIcon />,
      label: "Insights",
      link: "/insights",
    },
    {
      icon: <NotificationsIcon />,
      label: "What's New?",
      link: "/whats-new",
    },
  ];
  return (
    <>
      {deviceType === "mobile" && (
        <div className="absolute">
          <div
            className="p-2 bg-light rounded-full cursor-pointer"
            onClick={() => setIsCollapsed(false)}
          >
            {!isCollapsed ? (
              <MdOutlineKeyboardArrowLeft size={16} color="black" />
            ) : (
              <MdOutlineKeyboardArrowRight size={16} color="black" />
            )}
          </div>
        </div>
      )}
      {
        <div
          className={`bg-orange-600 text-white h-screen p-4 flex flex-col justify-between  group transition duration-300 ease-in-out
                    ${!isCollapsed ? "w-64" : "w-fit"} ${deviceType === "mobile" && isCollapsed ? " hidden" : ""} absolute   md:relative z-50 `}
        >
          {/* Header */}
          <div
            className="p-2 bg-light rounded-full absolute -right-5 cursor-pointer group-hover:block hidden"
            onClick={() =>
              setIsCollapsed((pre) => {
                // if (isOpened) setIsOpened(false);
                return !pre;
              })
            }
          >
            {!isCollapsed ? (
              <MdOutlineKeyboardArrowLeft size={16} color="black" />
            ) : (
              <MdOutlineKeyboardArrowRight size={16} color="black" />
            )}
          </div>
          {
            <div>
              {!isCollapsed && (
                <div className="flex items-center justify-between w-full">
                  <div className="text-3xl font-bold hidden md:block">Logo</div>
                  <div className="flex space-x-2">
                    <IconButton className="text-white">
                      <NotificationsIcon />
                    </IconButton>
                    <IconButton className="text-white">
                      <SearchIcon />
                    </IconButton>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <nav className="flex flex-col space-y-4 mt-8">
                {/* Contacts Section with Dropdown 
        <div>
          <div
            className="flex items-center space-x-2 p-2 hover:bg-orange-700 rounded cursor-pointer"
            onClick={() => setContactsOpen(!contactsOpen)}
          >
            <ContactsIcon />
            <span className={`${isOpen ? "inline" : "hidden"} md:inline`}>
              Contacts
            </span>
            <ExpandMoreIcon
              className={`${contactsOpen ? "rotate-180" : ""} transition-transform`}
            />
          </div>
          {contactsOpen && (
            <div className="ml-8 mt-2 space-y-1 text-sm">
              {["All Partners", "Groups", "Lists", "Favorites", "Portfolios"].map(
                (item, index) => (
                  <div key={index} className="hover:text-gray-300 cursor-pointer">
                    • {item}
                  </div>
                )
              )}
            </div>
          )}
        </div>
*/}
                {/* Other Navigation Links */}
                {links.map((navItem, index) => (
                  <Link
                    key={index}
                    to={navItem.link}
                    className="flex items-center space-x-2 p-2 hover:bg-orange-700 rounded"
                  >
                    {navItem.icon}
                    {!isCollapsed && <span>{navItem.label}</span>}
                  </Link>
                ))}
              </nav>

              {/* Footer with Support Button */}
              {!isCollapsed && (
                <div className="mt-auto flex flex-col items-center space-y-4">
                  <Divider className="w-full border-t border-gray-400" />
                  <div className="flex w-full items-center space-x-2">
                    <Avatar className="bg-blue-500 w-full">MA</Avatar>
                    <IconButton className="text-white w-full">
                      <SettingsIcon />
                    </IconButton>
                  </div>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<SupportIcon />}
                    className="bg-yellow-500 hover:bg-yellow-600 w-full text-center rounded-lg"
                  >
                    Support
                  </Button>
                </div>
              )}
            </div>
          }
        </div>
      }
    </>
  );
};

export default Sidebar;
