'use client';

import React, { useState } from 'react';

const DateRangePicker = ({ onDateChange }) => {
  const today = new Date().toISOString().split('T')[0];
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState('');

  // Quand la date de début change
  const handleStartDateChange = e => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);

    // Appeler la fonction parent pour transmettre les nouvelles dates
    onDateChange(newStartDate, endDate);
  };

  // Quand la date de fin change
  const handleEndDateChange = e => {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);

    // Appeler la fonction parent pour transmettre les nouvelles dates
    onDateChange(startDate, newEndDate);
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Input pour la date de début */}

      <input
        type="date"
        min={today}
        max={endDate}
        value={startDate}
        onChange={handleStartDateChange}
        className="border border-gray-300 hover:border-gray-400 hover:bg-gray-100 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
        required
      />
      <p>to</p>
      <input
        type="date"
        min={startDate}
        value={endDate}
        onChange={handleEndDateChange}
        className="border border-gray-300 hover:border-gray-400 hover:bg-gray-100 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
        min={startDate} // La date de fin ne peut pas être avant la date de début
        required
      />
    </div>
  );
};

export default DateRangePicker;
