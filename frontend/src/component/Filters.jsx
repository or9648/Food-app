import React from 'react';

function Filters({ onTypeChange }) {
  const options = ["All", "Breakfast", "Lunch", "Dinner"];

  const handleFilterClick = (type) => {
    onTypeChange(type === "All" ? "" : type.toLowerCase()); // Call onTypeChange with the selected type
  };

  return (
    <div className="flex justify-center items-center gap-4 h-20 bg-slate-600">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleFilterClick(option)}
          className="px-4 py-2 border-2 border-red-600 text-white bg-red-700 rounded-md hover:bg-red-800 transition duration-300"
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Filters;
