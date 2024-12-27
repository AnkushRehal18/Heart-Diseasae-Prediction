function BloodSugarInput({ id, name, value, selectedValue, onChange, label }) {
  const isSelected = selectedValue === value; // Check if this button is selected

  return (
    <button
      id={id}
      name={name}
      value={value}
      type="button" // Prevent form submission
      onClick={() => onChange({ target: { name, value } })}
      className={`px-4 py-2 border rounded-lg transition-colors ${
        isSelected
          ? 'border-red-500 text-red-500'
          : 'border-gray-300 text-gray-700'
      } hover:border-red-500 hover:text-red-500`}
    >
      {label}
    </button>
  );
}

export default BloodSugarInput;
