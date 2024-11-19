import React from "react";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import SaveIcon from "@mui/icons-material/Save";
import SettingsIcon from "@mui/icons-material/Settings";
import DropdownMenu from "../elements/filter";
import { usePartnersContext } from "./partnersContext";
const FiltersSection = () => {
  const { setFilters } = usePartnersContext();
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
    { name: "Skills", options: ["Networking", "Low voltage cabling"] },
    { name: "Company Name", options: [] },
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
    </div>
  );
};
const SearchSection = () => {
  return (
    <div className="flex items-center justify-between mt-2 md:mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Search Bar with Search Icon */}
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search 1526 Partners"
        className="w-full md:w-64"
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
