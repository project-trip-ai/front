'use client';

import React, { useState, useEffect } from 'react';

const DateRangePicker = ({ onDateChange }) => {
  const today = new Date().toISOString().split('T')[0];
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState('');
  const [maxEndDate, setMaxEndDate] = useState('');

  // Mettre à jour la date maximale autorisée pour l'input de la date de fin
  useEffect(() => {
    const calculateMaxEndDate = () => {
      const start = new Date(startDate);
      start.setDate(start.getDate() + 9); // Ajouter 10 jours
      const maxDate = start.toISOString().split('T')[0]; // Formater en YYYY-MM-DD
      setMaxEndDate(maxDate);
    };

    calculateMaxEndDate();
  }, [startDate]);

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
        max={maxEndDate} // Date de fin maximum est startDate + 9 jours
        value={endDate}
        onChange={handleEndDateChange}
        className="border border-gray-300 hover:border-gray-400 hover:bg-gray-100 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
        required
      />
    </div>
  );
};

export default DateRangePicker;
