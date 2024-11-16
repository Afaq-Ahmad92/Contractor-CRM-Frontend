import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const TopBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 w-full">
      <h1 className="text-2xl font-semibold">All Partners</h1>
      <div className="flex space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-1">
          <AddIcon />
          <span>Add Partner</span>
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded flex items-center space-x-1">
          <PlaylistAddIcon />
          <span>Bulk Add</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
