import React, { useState } from 'react';

const Hover = ({icon: Icon, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-8 w-8 sm:h-10 sm:w-10 md:w-16 md:h-16 rounded-full bg-gray-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick} 
      style={{ backgroundColor: isHovered ? 'rgb(231, 147, 21)' : '' }}
    >
      <Icon
        size={24}
        className={`w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isHovered ? 'text-white' : ''}`}
      />
    </div>
  );
};

export default Hover;