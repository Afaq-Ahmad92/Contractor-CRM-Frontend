import React from 'react';
import { Select, MenuItem, Button, IconButton } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import GridViewIcon from '@mui/icons-material/GridView';
import FilterListIcon from '@mui/icons-material/FilterList';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';
import SettingsIcon from '@mui/icons-material/Settings';

const FiltersSection = () => {
  return (
    <div className="flex flex-wrap items-center bg-gray-100 p-4 rounded-lg shadow-md">
      {/* Filter Dropdowns */}
      <div className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2">
        {[
          "Status", "Radius", "Availability", "Partner type", 
          "Tags", "Rank", "Skills", "Company Name"
        ].map((filter, index) => (
          <Select
            key={index}
            displayEmpty
            defaultValue=""
            variant="outlined"
            size="small"
            className="w-full md:w-auto bg-white"
          >
            <MenuItem value="">
              <em>{filter}</em>
            </MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
        ))}
      </div>

      {/* "More filters..." Button */}
      <Button
        startIcon={<TuneIcon />}
        variant="text"
        color="primary"
        size="small"
        className="text-blue-600 ml-2"
      >
        More filters...
      </Button>

      {/* Filter and Grid Icons */}
      <div className="flex space-x-2 items-center ml-auto">
        <IconButton>
          <FilterListIcon />
        </IconButton>
        <IconButton>
          <GridViewIcon />
        </IconButton>
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
          <Button
            variant="outlined"
            color="primary"
            startIcon={<SaveIcon />}
            className="text-blue-600"
          >
            Save search
          </Button>
  
          {/* Settings Icon Button */}
          <IconButton>
            <SettingsIcon />
          </IconButton>
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
