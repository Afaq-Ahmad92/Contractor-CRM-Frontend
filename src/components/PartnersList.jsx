// src/components/PartnersList.jsx
import React from 'react';
import PartnerCard from './PartnerCard';

const partners = [
    { name: 'Aaliyah Costin', email: 'acostin491@gmail.com', phone: '+13345595799', address: '4506 Leiper Street', rating: 4.7, image: '/path/to/image1.jpg', groups: 'Partners' },
    { name: 'Aaron Asencio', email: 'techwork365@gmail.com', phone: '+1234567890', address: '5323 South Street', rating: 4.7, image: '/path/to/image2.jpg', groups: 'Partners' },
    { name: 'Amelia Stone', email: 'amelia.stone@example.com', phone: '+14445556677', address: '1023 Maple Ave', rating: 4.8, image: '/path/to/image3.jpg', groups: 'VIP Partners' },
    { name: 'Brandon Lee', email: 'brandon.lee@example.com', phone: '+15553334455', address: '7849 Birch Lane', rating: 4.5, image: '/path/to/image4.jpg', groups: 'Associates' },
    { name: 'Catherine Cruz', email: 'catherine.cruz@example.com', phone: '+16667778899', address: '120 Pine Street', rating: 4.9, image: '/path/to/image5.jpg', groups: 'Partners' },
    { name: 'Daniel Young', email: 'daniel.young@example.com', phone: '+17778889900', address: '312 Oak Avenue', rating: 4.6, image: '/path/to/image6.jpg', groups: 'Partners' },
    { name: 'Emily Brooks', email: 'emily.brooks@example.com', phone: '+18884445566', address: '908 Cedar Blvd', rating: 4.7, image: '/path/to/image7.jpg', groups: 'New Partners' },
    { name: 'Frank Gomez', email: 'frank.gomez@example.com', phone: '+19992223344', address: '260 Sunset Blvd', rating: 4.5, image: '/path/to/image8.jpg', groups: 'VIP Partners' },
    { name: 'Grace Scott', email: 'grace.scott@example.com', phone: '+11112224455', address: '745 Sunrise Lane', rating: 4.8, image: '/path/to/image9.jpg', groups: 'Associates' },
    { name: 'Henry Butler', email: 'henry.butler@example.com', phone: '+12223334455', address: '432 Oakwood Road', rating: 4.6, image: '/path/to/image10.jpg', groups: 'Partners' }
  ];
  

const PartnersList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {partners.map((partner, index) => (
        <PartnerCard 
        key={index} 
        name={partner.name}
        email={partner.email}
        phone={partner.phone}
        address={partner.address}
        rating={partner.rating}
        groups={partner.groups}
        image={partner.image}
         />
      ))}
    </div>
  );
};

export default PartnersList;