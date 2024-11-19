import React from "react";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import SaveIcon from "@mui/icons-material/Save";
import SettingsIcon from "@mui/icons-material/Settings";
import DropdownMenu from "./elements/filter";

const FiltersSection = () => {
  const filters = [
    {
      name: "Status",
      options: ["Onboarding underway", "Full onboarded", "Pending"],
    },
    { name: "Radius", options: [] },
    { name: "Availability", options: [] },
    { name: "Partner type", options: [] },
    { name: "Tags", options: [] },
    { name: "Rank", options: [] },
    { name: "Skills", options: [] },
    { name: "Company Name", options: [] },
  ];
  return (
    <div className="flex flex-wrap items-center p-4 rounded-lg ">
      {/* Filter Dropdowns */}
      <div className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2 bg-red-700 max-w-fit  overflow-y-visible">
        {filters.map((filter, index) => (
          <>
            <DropdownMenu name={filter?.name} options={filter?.options} />
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
