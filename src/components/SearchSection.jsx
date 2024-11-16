import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

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

export default SearchSection;
