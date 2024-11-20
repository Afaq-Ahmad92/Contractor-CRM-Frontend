import React from "react";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import SaveIcon from "@mui/icons-material/Save";
import SettingsIcon from "@mui/icons-material/Settings";
import DropdownMenu from "../elements/filter";
import { usePartnersContext } from "./partnersContext";
import { Button, IconButton } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import FilterListIcon from '@mui/icons-material/FilterList';
import GridViewIcon from '@mui/icons-material/GridView';
import { useState } from "react";
const FiltersSection = () => {
  const { setFilters , setView, view} = usePartnersContext();
  
  const filters = [
    {
      name: "Status",
      value: "status",
      options: ["Onboarding underway", "Full onboarded", "Pending"],
    },
    {
      name: "Radius",
      value: "radius",
      options: [],
    },
    {
      name: "Availability",
      value: "availability",
      options: [
        "This week",
        "Next two week",
        "Next four week",
        "Next six week",
        "Next twelve week",
      ],
    },
    {
      name: "Partner type",
      value: "partnertype",
      options: ["Partners", "Remote", "Contractor"],
    },
    {
      name: "Tags",
      value: "tag",
      options: [
        "Hopitility",
        "Networking",
        "Security",
        "OSP",
        "Nuse Call",
        "Locksmith",
      ],
    },
    { name: "Rank", options: [] },
    {
      name: "Skills",
      value: "skills",
      options: [
        "Networking",
        "Low Voltage Cabling",
        "Network Engineering",
        "Wireless",
        "Technical Support",
        "Physical Installations",
        "IT Security",
      ],
    },
    {
      name: "Company Name",
      value: "company",
      options: [
        "TechCorp",
        "Innovate Solutions",
        "Global Dynamics",
        "Zenith Enterprises",
        "Quantum Leap Inc.",
        "Nexus Group",
        "Synergy Solutions",
        "CyberShield Security",
        "Pixel Perfect Designs",
        "GreenTech Innovations",
        "Evolve Consulting",
        "FutureX Labs",
        "CloudNine Services",
        "DataZen Analytics",
        "AI Frontier",
      ],
    },
  ];

  const updateFilters = (event, filter, value) => {
    // console.log(event, filter, value, "values");
    setFilters((prev) => {
      const currentValues = Array.isArray(prev[filter]) ? prev[filter] : [];
      if (event === "add") {
        return {
          ...prev,
          [filter]: [...currentValues, value], // Add the value
        };
      } else if (event === "remove") {
        return {
          ...prev,
          [filter]: currentValues.filter((item) => item !== value), // Remove the value
        };
      }
      return prev; // Fallback for unsupported events
    });
  };

  return (
    <div className="flex flex-wrap items-center p-4 rounded-lg ">
      {/* Filter Dropdowns */}
      <div className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2  max-w-fit  overflow-y-visible">
        {filters.map((filter, index) => (
          <>
            <DropdownMenu
              name={filter?.name}
              value={filter?.value}
              options={filter?.options}
              onChange={updateFilters}
            />
          </>
        ))}
      </div>
    <div className="flex space-x-2 items-center ml-auto">
      <Button startIcon={<TuneIcon />} variant="text" color="primary" size="small" className="text-blue-600">
      More filters...
    </Button>
      <IconButton onClick={() => {
        setView('list')
        console.log("This view is= ", view)
        }}
          style={{ marginRight: '10px' }}>
        <FilterListIcon />
      </IconButton>
      <IconButton onClick={() =>{ 
        setView('grid')
        console.log("This view is= ", view)
        }}>
        <GridViewIcon />
      </IconButton>
    </div>
    </div>
  );
};
const SearchSection = () => {
  const { setFilters } = usePartnersContext();
  return (
    <div className="flex items-center justify-between mt-2 md:mt-4 p-4  rounded-lg ">
      {/* Search Bar with Search Icon */}
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search 1526 Partners"
        className="w-full "
        onChange={(e) =>
          setFilters((pre) => ({ ...pre, name: e?.target?.value }))
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />

      <div className="flex items-center space-x-2 ml-4">
        {/* Save Search Button with Save Icon */}
      </div>
    </div>
  );
};

const FilterBar = () => {
  return (
    <div>
      <FiltersSection />
      <SearchSection />
    </div>
  );
};
export default FilterBar;
