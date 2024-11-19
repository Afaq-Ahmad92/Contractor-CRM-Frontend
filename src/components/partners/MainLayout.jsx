import React from "react";
import Sidebar from "../sidebar";
import TopBar from "./TopBar";
import PartnerCard from "./PartnerCard";
import FilterBar from "./FilterBar";
import ContextProvider from "./partnersContext";
import { usePartnersContext } from "./partnersContext";
const MainLayout = () => {
  const { filters, setFilters } = usePartnersContext();
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
    },
  ];

  const filterPartners = (partners, filters) => {
    return partners.filter((partner) => {
      // Check if all filter keys match the partner properties
      return Object.entries(filters).every(([key, values]) => {
        // If no values for the key, skip the filter
        console.log(key, values, "keys");
        if (!values || values.length === 0) return true;
        // Check if the partner's property value matches any value in the filter array
        values = values?.map((value) => value?.toLowerCase());
        console.log(values, partner[key?.toLowerCase()], "items");
        return values.includes(partner[key?.toLowerCase()]?.toLowerCase());
      });
    });
  };

  console.log(filters, "filters");

  // Filtered partners
  const filteredPartners = filterPartners(partners, filters);
  return (
    <div className="flex h-screen overflow-hidden px-11 py-5">
      <div className="flex-1 flex flex-col">
        <TopBar />
        <FilterBar />
        <div className="p-4  overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPartners.map((partner, index) => (
              <PartnerCard key={index} {...partner} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
