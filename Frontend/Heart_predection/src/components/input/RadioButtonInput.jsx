import React from 'react';

function Radiobuttoninput({ name, value, selectedValue, onChange, label }) {
  const isSelected = selectedValue === value; // Check if the current option is selected

  return (
    <label
      htmlFor={value}
      className={`flex items-center border rounded-lg p-2 h-[50px] w-[700px] cursor-pointer transition-colors ${
        isSelected ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
      }`}
    >
      <input
        className="mr-2"
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={isSelected}
        onChange={onChange}
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
}

export default Radiobuttoninput;
