import React from "react";

const RadioButtons = ({ label, options = [] }) => {
  return (
    <div>
      <label>{label}</label>
      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name={label}
              value={option}
            />{" "}
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;