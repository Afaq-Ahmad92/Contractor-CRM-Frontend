import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

const PartnerCard = ({ name, email, phone, address, groups, rating, image, statusIcon }) => {
  return (
    <div className="bg-white border p-4 rounded-lg shadow-md flex flex-col items-center text-center w-full">
      <img src={image} alt={name} className="w-20 h-20 rounded-full mb-2" />
      <h2 className="text-lg font-semibold">{name}</h2>
      {rating && (
        <div className="flex items-center space-x-1 text-yellow-500">
          <StarIcon />
          <span>{rating}</span>
        </div>
      )}
      <div className="flex items-center text-gray-600 space-x-2 mt-2">
        <EmailIcon fontSize="small" />
        <span>{email}</span>
      </div>
      <div className="flex items-center text-gray-600 space-x-2">
        <PhoneIcon fontSize="small" />
        <span>{phone}</span>
      </div>
      <div className="flex items-center text-gray-600 space-x-2">
        <LocationOnIcon fontSize="small" />
        <span>{address}</span>
      </div>
      {groups && <div className="text-sm text-blue-500 mt-2">{groups}</div>}
      {statusIcon && <div className="mt-2">{statusIcon}</div>}
    </div>
  );
};

export default PartnerCard;
