import React from 'react';

const StatCard = ({ label, value, colorClass }) => {
  return (
    <div className={`p-6 rounded-2xl ${colorClass} flex flex-col justify-between h-40 shadow-lg transform transition-transform hover:scale-[1.02]`}>
      <div className="text-5xl font-bold text-gray-900">{value}</div>
      <div className="text-lg font-medium text-gray-800">{label}</div>
    </div>
  );
};

export default StatCard;
