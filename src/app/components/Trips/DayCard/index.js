'use client';

import { useState } from 'react';
import ActivityCard from '../ActivityCard';
import AngleRight from '../../../../../public/icons/angle-right.svg';
import Image from 'next/image';

const DayCard = ({ day, month, ordinal }) => {
  // State to manage whether the arrow is rotated and the ActivityCard is visible
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle toggle click
  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <div>
      {/* Clickable div to handle toggle */}
      <div className="flex items-center cursor-pointer" onClick={handleToggle}>
        {/* Rotate the arrow based on isOpen state using Tailwind */}
        <Image
          priority
          src={AngleRight}
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
          alt="Toggle Arrow"
        />
        <p className="text-2xl ml-2">
          {day}, {month} {ordinal}
        </p>
      </div>

      <div className="h-[1px] w-full bg-gray-300 my-8"></div>

      {/* Conditionally show the ActivityCard */}
      {isOpen && <ActivityCard />}
    </div>
  );
};

export default DayCard;
