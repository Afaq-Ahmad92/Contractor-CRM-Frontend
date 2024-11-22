import React from "react";
import Sidebar from "../sidebar";
import TopBar from "./TopBar";
import PartnerCard from "./PartnerCard";
import FilterBar from "./FilterBar";
import ContextProvider from "./partnersContext";
import { usePartnersContext } from "./partnersContext";
import Table from "../elements/Table";
import { FaRegCircleCheck } from "react-icons/fa6";

const MainLayout = () => {
  const { filters, setFilters, view } = usePartnersContext();
  const partners = [
    {
      name: "Aaliyah Costin",
      email: "acostin491@gmail.com",
      phone: "+13345595799",
      address: "4506 Leiper Street",
      rating: 4.7,
      image: "/path/to/image1.jpg",
      groups: "Partners",
      status: "Pending",
      availability: "next four week",
      partnertype: "Partners",
      tag: "Networking",
      skills: ["Networking", "Low Voltage Cabling", "It security"],
      company: "TechCorp",
    },
    {
      name: "Aaron Asencio",
      email: "techwork365@gmail.com",
      phone: "+1234567890",
      address: "5323 South Street",
      rating: 4.7,
      image: "/path/to/image2.jpg",
      groups: "Partners",
      status: "Full onboarded",
      availability: "next twelve week",
      partnertype: "Remote",
      tag: "Networking",
      skills: ["Networking", "Low Voltage Cabling", "It security"],
      company: "Global Dynamics",
    },
    {
      name: "Amelia Stone",
      email: "amelia.stone@example.com",
      phone: "+14445556677",
      address: "1023 Maple Ave",
      rating: 4.8,
      image: "/path/to/image3.jpg",
      groups: "VIP Partners",
      status: "Onboarding underway",
      availability: "next four week",
      partnertype: "Partners",
      tag: "Networking",
      skills: ["Networking"],
      company: "Zenith Enterprises",
    },
    {
      name: "Brandon Lee",
      email: "brandon.lee@example.com",
      phone: "+15553334455",
      address: "7849 Birch Lane",
      rating: 4.5,
      image: "/path/to/image4.jpg",
      groups: "Associates",
      status: "Full onboarded",
      availability: "next two week",
      partnertype: "Partners",
      tag: "Networking",
      skills: ["It security"],
      company: "Quantum Leap Inc.",
    },
    {
      name: "Catherine Cruz",
      email: "catherine.cruz@example.com",
      phone: "+16667778899",
      address: "120 Pine Street",
      rating: 4.9,
      image: "/path/to/image5.jpg",
      groups: "Partners",
      status: "Full onboarded",
      availability: "this week",
      partnertype: "Contractor",
      tag: "osp",
      skills: ["Networking", "Low Voltage Cabling", "It security"],
      company: "Synergy Solutions",
    },
    {
      name: "Daniel Young",
      email: "daniel.young@example.com",
      phone: "+17778889900",
      address: "312 Oak Avenue",
      rating: 4.6,
      image: "/path/to/image6.jpg",
      groups: "Partners",
      status: "Full onboarded",
      availability: "this week",
      partnertype: "Remote",
      tag: "security",
      skills: ["Low Voltage Cabling"],
      company: "CyberShield Security",
    },
    {
      name: "Emily Brooks",
      email: "emily.brooks@example.com",
      phone: "+18884445566",
      address: "908 Cedar Blvd",
      rating: 4.7,
      image: "/path/to/image7.jpg",
      groups: "New Partners",
      status: "Pending",
      availability: "this week",
      partnertype: "Partners",
      tag: "Nuse call",
      skills: ["Low Voltage Cabling", "It security"],
      company: "Pixel Perfect Designs",
    },
    {
      name: "Frank Gomez",
      email: "frank.gomez@example.com",
      phone: "+19992223344",
      address: "260 Sunset Blvd",
      rating: 4.5,
      image: "/path/to/image8.jpg",
      groups: "VIP Partners",
      status: "Full onboarded",
      availability: "next two week",
      partnertype: "Remote",
      tag: "hospitality",
      skills: ["It security"],
      company: "GreenTech Innovations",
    },
    {
      name: "Grace Scott",
      email: "grace.scott@example.com",
      phone: "+11112224455",
      address: "745 Sunrise Lane",
      rating: 4.8,
      image: "/path/to/image9.jpg",
      groups: "Associates",
      status: "Onboarding underway",
      availability: "next six week",
      partnertype: "Contractor",
      tag: "locksmith",
      skills: ["Networking"],
      company: "Evolve Consulting",
    },
    {
      name: "Henry Butler",
      email: "henry.butler@example.com",
      phone: "+12223334455",
      address: "432 Oakwood Road",
      rating: 4.6,
      image: "/path/to/image10.jpg",
      groups: "Partners",
      status: "Full onboarded",
      availability: "this week",
      partnertype: "Partners",
      tag: "Networking",
      skills: ["Networking", "It security"],
      company: "CloudNine Services",
    },
  ];
  const columns = [
    {
      headerName: "Partner",
      accessor: "name",
      headerClassName: "font-fold  min-w-[200px] text-left pl-4 py-2 bg-light ",
      cellClassName: "pl-4",
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-3 ">
            {" "}
            <div className="relative">
              <img
                src="/profile.avif"
                className="w-[40px] h-[40px] rounded-full object-cover"
                alt=""
              />
              <span
                className={`absolute bottom-0 right-0 ${params?.row?.rating > 4.6 ? "bg-green-500" : "bg-yellow-500"} text-white rounded-full`}
              >
                <FaRegCircleCheck size={16} />
              </span>
            </div>
            <span className="text-blue-800">{params?.value}</span>
          </div>
        );
      },
    },
    {
      headerName: "Type",
      accessor: "partnertype",
      headerClassName: "font-fold  min-w-[200px] text-left px-4 bg-light",
      cellClassName: "",
      renderCell: (params) => {
        return (
          <div className="px-4">
            <div className="p-2 bg-sky-100 text-sky-500 rounded-md">
              {params?.value}
            </div>
          </div>
        );
      },
    },
    {
      headerName: "Groups",
      accessor: "groups",
      headerClassName: "font-fold  min-w-[100px] text-left px-4 bg-light",
      cellClassName: "",
      renderCell: (params) => {
        return (
          <div className="">
            <div className=""></div>
          </div>
        );
      },
    },
    {
      headerName: "Location",
      accessor: "address",
      headerClassName: "font-fold  min-w-[200px] text-left bg-light",
      cellClassName: "",
      renderCell: (params) => {
        return (
          <div className="">
            <div className="">{params?.value}</div>
          </div>
        );
      },
    },
    {
      headerName: "Phone",
      accessor: "phone",
      headerClassName: "font-fold  min-w-[200px] text-left bg-light",
      cellClassName: "",
      renderCell: (params) => {
        return (
          <div className="">
            <div className="">{params?.value}</div>
          </div>
        );
      },
    },
    {
      headerName: "Email",
      accessor: "email",
      headerClassName: "font-fold  min-w-[200px] text-left bg-light",
      cellClassName: "",
      renderCell: (params) => {
        return (
          <div className="">
            <div className="">{params?.value}</div>
          </div>
        );
      },
    },
    {
      headerName: "Email",
      accessor: "email",
      headerClassName: "font-fold  min-w-[200px] text-left bg-light",
      cellClassName: "",
      renderCell: (params) => {
        return (
          <div className="">
            <div className="">{params?.value}</div>
          </div>
        );
      },
    },
    {
      headerName: "Email",
      accessor: "email",
      headerClassName: "font-fold  min-w-[200px] text-left bg-light",
      cellClassName: "",
      renderCell: (params) => {
        return (
          <div className="">
            <div className="">{params?.value}</div>
          </div>
        );
      },
    },
    {
      headerName: "Email",
      accessor: "email",
      headerClassName: "font-fold  min-w-[200px] text-left bg-light",
      cellClassName: "",
      renderCell: (params) => {
        return (
          <div className="">
            <div className="">{params?.value}</div>
          </div>
        );
      },
    },
    {
      headerName: "Email",
      accessor: "email",
      headerClassName: "font-fold  min-w-[200px] text-left bg-light",
      cellClassName: "",
      renderCell: (params) => {
        return (
          <div className="">
            <div className="">{params?.value}</div>
          </div>
        );
      },
    },
  ];
  const filterPartners = (partners, filters) => {
    return partners.filter((partner) => {
      return Object.entries(filters).every(([key, values]) => {
        if (!values || values.length === 0) return true;
        if (typeof values === "string") {
          return partner["name"]
            ?.toLowerCase()
            ?.includes(values?.toLowerCase());
        }
        values = values.map((value) => value?.toLowerCase());
        const partnerValue = partner[key?.toLowerCase()];
        if (Array.isArray(partnerValue)) {
          return partnerValue.some((element) =>
            values.includes(element?.toLowerCase())
          );
        } else {
          return values.includes(partnerValue?.toLowerCase());
        }
      });
    });
  };

  console.log(filters, "filters");

  // Filtered partners
  const filteredPartners = filterPartners(partners, filters);
  return (
    <div className="flex h-screen  sm:px-11 px-5 py-5 max-w-full overflow-scroll">
      <div className=" flex flex-col overflow-scroll">
        <TopBar />
        <FilterBar />
        <div className="p-4  overflow-auto">
          {filteredPartners?.length == 0 ? (
            <div className="text-center">No Record Found</div>
          ) : view === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredPartners.map((partner, index) => (
                <PartnerCard key={index} {...partner} />
              ))}
            </div>
          ) : (
            <div className=" max-w-full">
              <Table columns={columns} rows={filteredPartners} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
