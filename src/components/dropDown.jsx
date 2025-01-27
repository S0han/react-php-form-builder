import React from "react";

const SelectDropdown = ({ label, options = [], required, onChange }) => {
  return (
    <div className="form-group">
      <label>
        {label} {required && "*"}
      </label>
      <select required={required} onChange={onChange} className="form-control">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;