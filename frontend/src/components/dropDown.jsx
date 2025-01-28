import React from "react";

const SelectDropdown = ({ label, options = [], required }) => {
  return (
    <div>
      <label>{label}</label>
      <select required={required}>
        {
          options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))
        }
      </select>
    </div>
  );
};

export default SelectDropdown;